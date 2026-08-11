'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { MEMBER_PHOTO_BUCKET, memberPhotoPathFromUrl } from '@/lib/storage';
import type { Division, Member, PortfolioCategory, PortfolioProject } from '@/lib/types';

export interface ActionResult {
  ok: boolean;
  error?: string;
}

/** 로그인 여부 확인. RLS로도 막히지만 오류 메시지를 명확히 하기 위해 먼저 검사합니다. */
async function requireUser() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect('/admin/login');
  return supabase;
}

/** 수정 내용이 공개 페이지에 바로 보이도록 캐시를 무효화합니다. */
function revalidatePublicPages() {
  revalidatePath('/what-we-do');
  revalidatePath('/portfolio');
  revalidatePath('/admin/members');
  revalidatePath('/admin/portfolio');
}

// ─────────────────────────────── 구성원 ───────────────────────────────

export async function createMember(division: Division): Promise<ActionResult> {
  const supabase = await requireUser();

  const { data: last } = await supabase
    .from('members')
    .select('sort_order')
    .eq('division', division)
    .order('sort_order', { ascending: false })
    .limit(1)
    .maybeSingle();

  const { error } = await supabase.from('members').insert({
    division,
    name: '새 구성원',
    position: '',
    qualifications: '-',
    email: '',
    phone: '',
    motto: '',
    image_url: null,
    sort_order: (last?.sort_order ?? 0) + 1,
  });

  if (error) return { ok: false, error: error.message };
  revalidatePublicPages();
  return { ok: true };
}

export async function updateMember(
  id: string,
  values: Pick<
    Member,
    'name' | 'position' | 'qualifications' | 'email' | 'phone' | 'motto' | 'image_url'
  >
): Promise<ActionResult> {
  const supabase = await requireUser();

  if (!values.name.trim()) return { ok: false, error: '이름은 비워둘 수 없습니다.' };

  const nextImageUrl = values.image_url?.trim() || null;

  // 교체 전 사진을 알아두었다가 저장 성공 후 정리합니다.
  const { data: before } = await supabase
    .from('members')
    .select('image_url')
    .eq('id', id)
    .maybeSingle();

  const { error } = await supabase
    .from('members')
    .update({
      name: values.name.trim(),
      position: values.position.trim(),
      qualifications: values.qualifications.trim() || '-',
      email: values.email.trim(),
      phone: values.phone.trim(),
      motto: values.motto.trim(),
      image_url: nextImageUrl,
    })
    .eq('id', id);

  if (error) return { ok: false, error: error.message };

  if (before?.image_url && before.image_url !== nextImageUrl) {
    await removeMemberPhotoByUrl(before.image_url);
  }

  revalidatePublicPages();
  return { ok: true };
}

export async function deleteMember(id: string): Promise<ActionResult> {
  const supabase = await requireUser();

  const { error } = await supabase.from('members').delete().eq('id', id);
  if (error) return { ok: false, error: error.message };

  // 해당 구성원 폴더에 쌓인 사진을 통째로 정리합니다.
  const { data: files } = await supabase.storage.from(MEMBER_PHOTO_BUCKET).list(id);
  if (files?.length) {
    await supabase.storage
      .from(MEMBER_PHOTO_BUCKET)
      .remove(files.map((file) => `${id}/${file.name}`));
  }

  revalidatePublicPages();
  return { ok: true };
}

/**
 * 저장하지 않고 버려진 업로드 파일을 지웁니다.
 * (사진을 올린 뒤 "되돌리기"를 누르거나, 저장 전에 다시 올린 경우)
 */
export async function discardUploadedPhoto(url: string): Promise<ActionResult> {
  await requireUser();
  return removeMemberPhotoByUrl(url);
}

async function removeMemberPhotoByUrl(url: string): Promise<ActionResult> {
  const path = memberPhotoPathFromUrl(url);
  // 시드 데이터의 로컬 경로(/images/...)나 외부 URL은 건드리지 않습니다.
  if (!path) return { ok: true };

  const supabase = await createClient();
  const { error } = await supabase.storage.from(MEMBER_PHOTO_BUCKET).remove([path]);
  if (error) return { ok: false, error: error.message };
  return { ok: true };
}

/** 위/아래 구성원과 sort_order를 맞바꿔 순서를 옮깁니다. */
export async function moveMember(id: string, direction: 'up' | 'down'): Promise<ActionResult> {
  const supabase = await requireUser();

  const { data: current, error: currentError } = await supabase
    .from('members')
    .select('id, division, sort_order')
    .eq('id', id)
    .single();
  if (currentError || !current) return { ok: false, error: currentError?.message ?? '구성원을 찾을 수 없습니다.' };

  const { data: neighbor } = await supabase
    .from('members')
    .select('id, sort_order')
    .eq('division', current.division)
    [direction === 'up' ? 'lt' : 'gt']('sort_order', current.sort_order)
    .order('sort_order', { ascending: direction !== 'up' })
    .limit(1)
    .maybeSingle();

  if (!neighbor) return { ok: true }; // 이미 처음/마지막

  const results = await Promise.all([
    supabase.from('members').update({ sort_order: neighbor.sort_order }).eq('id', current.id),
    supabase.from('members').update({ sort_order: current.sort_order }).eq('id', neighbor.id),
  ]);
  const failed = results.find((r) => r.error);
  if (failed?.error) return { ok: false, error: failed.error.message };

  revalidatePublicPages();
  return { ok: true };
}

// ─────────────────────────────── 수행실적 ───────────────────────────────

export async function createProject(
  category: PortfolioCategory,
  values: Pick<PortfolioProject, 'year' | 'title' | 'client'>
): Promise<ActionResult> {
  const supabase = await requireUser();

  if (!values.title.trim()) return { ok: false, error: '사업명을 입력해주세요.' };
  if (!Number.isInteger(values.year) || values.year < 1990 || values.year > 2100) {
    return { ok: false, error: '연도는 1990~2100 사이의 숫자여야 합니다.' };
  }

  const { data: last } = await supabase
    .from('portfolio_projects')
    .select('sort_order')
    .eq('category', category)
    .order('sort_order', { ascending: false })
    .limit(1)
    .maybeSingle();

  const { error } = await supabase.from('portfolio_projects').insert({
    category,
    year: values.year,
    title: values.title.trim(),
    client: values.client.trim(),
    sort_order: (last?.sort_order ?? 0) + 1,
  });

  if (error) return { ok: false, error: error.message };
  revalidatePublicPages();
  return { ok: true };
}

export async function updateProject(
  id: string,
  values: Pick<PortfolioProject, 'year' | 'title' | 'client'>
): Promise<ActionResult> {
  const supabase = await requireUser();

  if (!values.title.trim()) return { ok: false, error: '사업명을 입력해주세요.' };
  if (!Number.isInteger(values.year) || values.year < 1990 || values.year > 2100) {
    return { ok: false, error: '연도는 1990~2100 사이의 숫자여야 합니다.' };
  }

  const { error } = await supabase
    .from('portfolio_projects')
    .update({ year: values.year, title: values.title.trim(), client: values.client.trim() })
    .eq('id', id);

  if (error) return { ok: false, error: error.message };
  revalidatePublicPages();
  return { ok: true };
}

export async function deleteProject(id: string): Promise<ActionResult> {
  const supabase = await requireUser();
  const { error } = await supabase.from('portfolio_projects').delete().eq('id', id);
  if (error) return { ok: false, error: error.message };
  revalidatePublicPages();
  return { ok: true };
}

// ─────────────────────────────── 인증 ───────────────────────────────

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect('/admin/login');
}
