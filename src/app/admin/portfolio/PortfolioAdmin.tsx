'use client';

import { useMemo, useRef, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_CATEGORY_LABELS,
  type PortfolioCategory,
  type PortfolioProject,
} from '@/lib/types';
import { createProject, deleteProject, updateProject } from '../actions';

type Draft = Pick<PortfolioProject, 'year' | 'title' | 'client'>;

const inputClass =
  'w-full px-3 py-2 border border-[#DEE0E3] rounded-[8px] text-sm text-[#14151A] bg-white placeholder:text-[rgba(13,17,38,0.4)] focus:outline-none focus:border-[#399084]';

const toDraft = (p: PortfolioProject): Draft => ({
  year: p.year,
  title: p.title,
  client: p.client,
});

export default function PortfolioAdmin({
  projectsByCategory,
}: {
  projectsByCategory: Record<PortfolioCategory, PortfolioProject[]>;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('lca');
  const [drafts, setDrafts] = useState<Record<string, Draft>>({});
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const currentYear = new Date().getFullYear();
  const [newProject, setNewProject] = useState<Draft>({ year: currentYear, title: '', client: '' });

  const projects = projectsByCategory[activeCategory] ?? [];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return projects;
    return projects.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.client.toLowerCase().includes(q) ||
        String(p.year).includes(q)
    );
  }, [projects, query]);

  const valueOf = (project: PortfolioProject): Draft => drafts[project.id] ?? toDraft(project);
  const isDirty = (project: PortfolioProject) => project.id in drafts;

  const setField = (project: PortfolioProject, field: keyof Draft, value: string) => {
    setDrafts((prev) => ({
      ...prev,
      [project.id]: {
        ...(prev[project.id] ?? toDraft(project)),
        [field]: field === 'year' ? Number(value) : value,
      },
    }));
  };

  const clearDraft = (id: string) =>
    setDrafts((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });

  // disabled prop은 리렌더 이후에야 적용되므로, 연속 클릭으로 같은 요청이
  // 두 번 나가는 것을 ref로 즉시 차단합니다.
  const inFlight = useRef(false);

  const run = (
    fn: () => Promise<{ ok: boolean; error?: string }>,
    successText: string,
    onOk?: () => void
  ) => {
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

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-[#14151A] font-bold text-2xl mb-1">수행실적 관리</h1>
        <p className="text-[rgba(15,19,36,0.6)] text-sm">
          Portfolio 페이지에 분야별로 표시되며, 홈페이지에서는 연도 내림차순으로 묶여 노출됩니다.
        </p>
      </div>

      {/* 분야 탭 */}
      <div className="flex justify-start mb-6 overflow-x-auto">
        <div className="bg-[rgba(10,15,41,0.08)] rounded-full p-0.5 flex gap-1 flex-shrink-0">
          {PORTFOLIO_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
                activeCategory === category
                  ? 'bg-white border border-[#DEE0E3] text-[#14151A]'
                  : 'text-[rgba(15,19,36,0.6)]'
              }`}
            >
              {PORTFOLIO_CATEGORY_LABELS[category]} ({projectsByCategory[category]?.length ?? 0})
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

      {/* 새 실적 추가 */}
      <div className="bg-white border border-[#DEE0E3] rounded-[24px] p-6 mb-6">
        <h2 className="text-[#14151A] font-bold text-base mb-4">
          새 실적 추가 — {PORTFOLIO_CATEGORY_LABELS[activeCategory]}
        </h2>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="md:w-[110px]">
            <label className="block text-xs font-medium text-[rgba(15,19,36,0.6)] mb-1">연도</label>
            <input
              type="number"
              className={inputClass}
              value={newProject.year}
              onChange={(e) => setNewProject((p) => ({ ...p, year: Number(e.target.value) }))}
            />
          </div>
          <div className="flex-1">
            <label className="block text-xs font-medium text-[rgba(15,19,36,0.6)] mb-1">사업명</label>
            <input
              className={inputClass}
              value={newProject.title}
              onChange={(e) => setNewProject((p) => ({ ...p, title: e.target.value }))}
              placeholder="예) OCI 제품 전과정평가 수행 및 Tool 개발"
            />
          </div>
          <div className="md:w-[260px]">
            <label className="block text-xs font-medium text-[rgba(15,19,36,0.6)] mb-1">발주처</label>
            <input
              className={inputClass}
              value={newProject.client}
              onChange={(e) => setNewProject((p) => ({ ...p, client: e.target.value }))}
              placeholder="예) OCI 주식회사"
            />
          </div>
          <div className="flex items-end">
            <button
              type="button"
              disabled={isPending || !newProject.title.trim()}
              onClick={() =>
                run(() => createProject(activeCategory, newProject), '실적을 추가했습니다.', () =>
                  setNewProject({ year: currentYear, title: '', client: '' })
                )
              }
              className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-opacity ${
                isPending || !newProject.title.trim()
                  ? 'bg-[#E9EAEC] text-[rgba(15,19,36,0.4)] cursor-not-allowed'
                  : 'bg-gradient-to-r from-[#1B376F] to-[#3A9284] text-white hover:opacity-90'
              }`}
            >
              추가
            </button>
          </div>
        </div>
      </div>

      {/* 검색 */}
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <input
          className={`${inputClass} max-w-[360px]`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="사업명 · 발주처 · 연도로 검색"
        />
        <span className="text-sm text-[rgba(15,19,36,0.6)]">
          {query ? `${filtered.length} / ${projects.length}건` : `총 ${projects.length}건`}
        </span>
      </div>

      {/* 실적 목록 */}
      <div className="bg-white border border-[#DEE0E3] rounded-[24px] overflow-hidden">
        <div className="hidden md:flex gap-3 px-6 py-3 bg-[#F7F8F9] border-b border-[#DEE0E3] text-xs font-medium text-[rgba(15,19,36,0.6)]">
          <div className="w-[100px]">연도</div>
          <div className="flex-1">사업명</div>
          <div className="w-[240px]">발주처</div>
          <div className="w-[150px]" />
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-[rgba(15,19,36,0.6)] text-sm py-16">
            {query ? '검색 결과가 없습니다.' : '등록된 실적이 없습니다.'}
          </p>
        ) : (
          filtered.map((project) => {
            const draft = valueOf(project);
            const dirty = isDirty(project);

            return (
              <div
                key={project.id}
                className="flex flex-col md:flex-row md:items-center gap-3 px-6 py-3 border-b border-[#EFF0F2] last:border-b-0"
              >
                <div className="md:w-[100px]">
                  <input
                    type="number"
                    className={inputClass}
                    value={draft.year}
                    onChange={(e) => setField(project, 'year', e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <input
                    className={inputClass}
                    value={draft.title}
                    onChange={(e) => setField(project, 'title', e.target.value)}
                  />
                </div>
                <div className="md:w-[240px]">
                  <input
                    className={inputClass}
                    value={draft.client}
                    onChange={(e) => setField(project, 'client', e.target.value)}
                  />
                </div>
                <div className="md:w-[150px] flex items-center gap-2 justify-end">
                  <button
                    type="button"
                    disabled={!dirty || isPending}
                    onClick={() =>
                      run(() => updateProject(project.id, draft), '저장했습니다.', () =>
                        clearDraft(project.id)
                      )
                    }
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-opacity ${
                      dirty && !isPending
                        ? 'bg-gradient-to-r from-[#1B376F] to-[#3A9284] text-white hover:opacity-90'
                        : 'bg-[#E9EAEC] text-[rgba(15,19,36,0.4)] cursor-not-allowed'
                    }`}
                  >
                    저장
                  </button>
                  <button
                    type="button"
                    disabled={isPending}
                    onClick={() => {
                      if (!confirm(`'${project.title}' 실적을 삭제할까요? 되돌릴 수 없습니다.`)) return;
                      run(() => deleteProject(project.id), '삭제했습니다.', () =>
                        clearDraft(project.id)
                      );
                    }}
                    className="px-3 py-2 rounded-full border border-red-200 text-sm text-red-600 hover:bg-red-50 disabled:opacity-40"
                  >
                    삭제
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
