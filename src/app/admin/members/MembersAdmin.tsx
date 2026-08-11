'use client';

import { useRef, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import {
  DIVISIONS,
  DIVISION_LABELS,
  type Division,
  type Member,
} from '@/lib/types';
import {
  createMember,
  deleteMember,
  discardUploadedPhoto,
  moveMember,
  updateMember,
} from '../actions';

type Draft = Pick<
  Member,
  'name' | 'position' | 'qualifications' | 'email' | 'phone' | 'motto' | 'image_url'
>;

const inputClass =
  'w-full px-3 py-2 border border-[#DEE0E3] rounded-[8px] text-sm text-[#14151A] bg-white placeholder:text-[rgba(13,17,38,0.4)] focus:outline-none focus:border-[#399084]';

const toDraft = (m: Member): Draft => ({
  name: m.name,
  position: m.position,
  qualifications: m.qualifications,
  email: m.email,
  phone: m.phone,
  motto: m.motto,
  image_url: m.image_url,
});

export default function MembersAdmin({
  membersByDivision,
}: {
  membersByDivision: Record<Division, Member[]>;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [activeDivision, setActiveDivision] = useState<Division>('policy');
  const [drafts, setDrafts] = useState<Record<string, Draft>>({});
  const [uploadingId, setUploadingId] = useState<string | null>(null);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const members = membersByDivision[activeDivision] ?? [];

  const valueOf = (member: Member): Draft => drafts[member.id] ?? toDraft(member);
  const isDirty = (member: Member) => member.id in drafts;

  const setField = (member: Member, field: keyof Draft, value: string | null) => {
    setDrafts((prev) => ({
      ...prev,
      [member.id]: { ...(prev[member.id] ?? toDraft(member)), [field]: value },
    }));
  };

  const clearDraft = (id: string) =>
    setDrafts((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });

  /**
   * 올렸지만 저장하지 않은 사진을 스토리지에서 정리합니다.
   * 이미 저장된 사진(member.image_url)과 같으면 그대로 둡니다.
   */
  const discardIfUnsaved = (member: Member, url: string | null | undefined) => {
    if (!url || url === member.image_url) return;
    void discardUploadedPhoto(url);
  };

  // disabled prop은 리렌더 이후에야 적용되므로, 연속 클릭으로 같은 요청이
  // 두 번 나가는 것을 ref로 즉시 차단합니다.
  const inFlight = useRef(false);

  const run = (fn: () => Promise<{ ok: boolean; error?: string }>, successText: string, onOk?: () => void) => {
    if (inFlight.current) return;
    inFlight.current = true;
    setMessage(null);
    startTransition(async () => {
      try {
        const result = await fn();
        if (result.ok) {
          onOk?.();
          setMessage({ type: 'success', text: successText });
          router.refresh();
        } else {
          setMessage({ type: 'error', text: result.error ?? '처리 중 오류가 발생했습니다.' });
        }
      } finally {
        inFlight.current = false;
      }
    });
  };

  const handleUpload = async (member: Member, file: File) => {
    setMessage(null);
    setUploadingId(member.id);
    // 저장 전에 다시 올리는 경우, 직전에 올렸던 파일은 버려집니다.
    const previousUrl = valueOf(member).image_url;
    try {
      const supabase = createClient();
      const extension = file.name.split('.').pop()?.toLowerCase() || 'jpg';
      const path = `${member.id}/${Date.now()}.${extension}`;

      const { error: uploadError } = await supabase.storage
        .from('member-photos')
        .upload(path, file, { cacheControl: '3600', upsert: false });

      if (uploadError) throw new Error(uploadError.message);

      const {
        data: { publicUrl },
      } = supabase.storage.from('member-photos').getPublicUrl(path);

      setField(member, 'image_url', publicUrl);
      discardIfUnsaved(member, previousUrl);
      setMessage({
        type: 'success',
        text: '사진을 올렸습니다. 아래 "저장" 버튼을 눌러야 홈페이지에 반영됩니다.',
      });
    } catch (error) {
      setMessage({
        type: 'error',
        text: `사진 업로드 실패: ${error instanceof Error ? error.message : '알 수 없는 오류'}`,
      });
    } finally {
      setUploadingId(null);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-[#14151A] font-bold text-2xl mb-1">구성원 관리</h1>
          <p className="text-[rgba(15,19,36,0.6)] text-sm">
            What we do 페이지에 표시되는 본부별 구성원입니다. 카드 순서가 홈페이지 노출 순서입니다.
          </p>
        </div>
        <button
          type="button"
          disabled={isPending}
          onClick={() =>
            run(() => createMember(activeDivision), '구성원을 추가했습니다. 내용을 입력해주세요.')
          }
          className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#1B376F] to-[#3A9284] text-white text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
        >
          + 구성원 추가
        </button>
      </div>

      {/* 본부 탭 */}
      <div className="flex justify-start mb-6">
        <div className="bg-[rgba(10,15,41,0.08)] rounded-full p-0.5 flex gap-1">
          {DIVISIONS.map((division) => (
            <button
              key={division}
              type="button"
              onClick={() => setActiveDivision(division)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
                activeDivision === division
                  ? 'bg-white border border-[#DEE0E3] text-[#14151A]'
                  : 'text-[rgba(15,19,36,0.6)]'
              }`}
            >
              {DIVISION_LABELS[division]} ({membersByDivision[division]?.length ?? 0})
            </button>
          ))}
        </div>
      </div>

      {message && (
        <p
          className={`mb-6 text-sm rounded-[12px] px-4 py-3 border ${
            message.type === 'success'
              ? 'text-green-800 bg-green-50 border-green-200'
              : 'text-red-700 bg-red-50 border-red-200'
          }`}
        >
          {message.text}
        </p>
      )}

      <div className="space-y-4">
        {members.length === 0 && (
          <p className="text-center text-[rgba(15,19,36,0.6)] text-sm py-16 bg-white border border-[#DEE0E3] rounded-[24px]">
            등록된 구성원이 없습니다. 우측 상단 &quot;구성원 추가&quot;를 눌러주세요.
          </p>
        )}

        {members.map((member, index) => {
          const draft = valueOf(member);
          const dirty = isDirty(member);

          return (
            <div
              key={member.id}
              className="bg-white border border-[#DEE0E3] rounded-[24px] p-6 flex flex-col lg:flex-row gap-6"
            >
              {/* 사진 */}
              <div className="w-full lg:w-[160px] flex-shrink-0">
                <div className="w-[160px] h-[160px] mx-auto lg:mx-0 rounded-[12px] overflow-hidden bg-[#F2F3F5] border border-[#DEE0E3]">
                  {draft.image_url ? (
                    // 로컬(/images/...)과 Supabase Storage URL을 모두 다루므로 일반 img를 사용합니다.
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={draft.image_url}
                      alt={draft.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xs text-[rgba(15,19,36,0.4)]">
                      사진 없음
                    </div>
                  )}
                </div>

                <label className="mt-2 block text-center">
                  <span
                    className={`inline-block w-full text-xs px-3 py-2 rounded-full border border-[#DEE0E3] cursor-pointer transition-colors ${
                      uploadingId === member.id
                        ? 'text-[rgba(15,19,36,0.4)]'
                        : 'text-[#14151A] hover:bg-[#F7F8F9]'
                    }`}
                  >
                    {uploadingId === member.id ? '업로드 중...' : '사진 변경'}
                  </span>
                  <input
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    className="hidden"
                    disabled={uploadingId === member.id}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleUpload(member, file);
                      e.target.value = '';
                    }}
                  />
                </label>
                <p className="mt-1 text-[11px] text-center text-[rgba(15,19,36,0.4)]">
                  정사각형 · 5MB 이하
                </p>
              </div>

              {/* 입력 필드 */}
              <div className="flex-1 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-[rgba(15,19,36,0.6)] mb-1">
                      이름
                    </label>
                    <input
                      className={inputClass}
                      value={draft.name}
                      onChange={(e) => setField(member, 'name', e.target.value)}
                      placeholder="예) 홍 길 동"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[rgba(15,19,36,0.6)] mb-1">
                      직급
                    </label>
                    <input
                      className={inputClass}
                      value={draft.position}
                      onChange={(e) => setField(member, 'position', e.target.value)}
                      placeholder="예) 선임연구원"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[rgba(15,19,36,0.6)] mb-1">
                    자격 / 이력 (없으면 - 입력)
                  </label>
                  <textarea
                    className={`${inputClass} resize-none`}
                    rows={2}
                    value={draft.qualifications}
                    onChange={(e) => setField(member, 'qualifications', e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-[rgba(15,19,36,0.6)] mb-1">
                      이메일
                    </label>
                    <input
                      className={inputClass}
                      value={draft.email}
                      onChange={(e) => setField(member, 'email', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[rgba(15,19,36,0.6)] mb-1">
                      연락처
                    </label>
                    <input
                      className={inputClass}
                      value={draft.phone}
                      onChange={(e) => setField(member, 'phone', e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[rgba(15,19,36,0.6)] mb-1">
                    좌우명
                  </label>
                  <input
                    className={inputClass}
                    value={draft.motto}
                    onChange={(e) => setField(member, 'motto', e.target.value)}
                  />
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <button
                    type="button"
                    disabled={!dirty || isPending}
                    onClick={() =>
                      run(() => updateMember(member.id, draft), `${draft.name} 저장 완료`, () =>
                        clearDraft(member.id)
                      )
                    }
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-opacity ${
                      dirty && !isPending
                        ? 'bg-gradient-to-r from-[#1B376F] to-[#3A9284] text-white hover:opacity-90'
                        : 'bg-[#E9EAEC] text-[rgba(15,19,36,0.4)] cursor-not-allowed'
                    }`}
                  >
                    {dirty ? '저장' : '저장됨'}
                  </button>

                  {dirty && (
                    <button
                      type="button"
                      onClick={() => {
                        discardIfUnsaved(member, draft.image_url);
                        clearDraft(member.id);
                      }}
                      className="px-4 py-2 rounded-full border border-[#DEE0E3] text-sm text-[rgba(15,19,36,0.6)] hover:bg-[#F7F8F9]"
                    >
                      되돌리기
                    </button>
                  )}

                  <div className="ml-auto flex items-center gap-2">
                    <button
                      type="button"
                      disabled={index === 0 || isPending}
                      onClick={() => run(() => moveMember(member.id, 'up'), '순서를 변경했습니다.')}
                      className="w-9 h-9 rounded-full border border-[#DEE0E3] text-[#14151A] hover:bg-[#F7F8F9] disabled:opacity-30 disabled:hover:bg-white"
                      aria-label="위로 이동"
                    >
                      ↑
                    </button>
                    <button
                      type="button"
                      disabled={index === members.length - 1 || isPending}
                      onClick={() => run(() => moveMember(member.id, 'down'), '순서를 변경했습니다.')}
                      className="w-9 h-9 rounded-full border border-[#DEE0E3] text-[#14151A] hover:bg-[#F7F8F9] disabled:opacity-30 disabled:hover:bg-white"
                      aria-label="아래로 이동"
                    >
                      ↓
                    </button>
                    <button
                      type="button"
                      disabled={isPending}
                      onClick={() => {
                        if (!confirm(`'${member.name}' 구성원을 삭제할까요? 되돌릴 수 없습니다.`)) return;
                        run(() => deleteMember(member.id), '삭제했습니다.', () => clearDraft(member.id));
                      }}
                      className="px-4 py-2 rounded-full border border-red-200 text-sm text-red-600 hover:bg-red-50 disabled:opacity-40"
                    >
                      삭제
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
