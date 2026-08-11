import { createClient } from '@/lib/supabase/server';
import {
  DIVISIONS,
  PORTFOLIO_CATEGORIES,
  type Division,
  type Member,
  type PortfolioCategory,
  type PortfolioProject,
} from '@/lib/types';

/** 본부별 구성원 목록 (관리자에서 지정한 순서대로) */
export async function getMembersByDivision(): Promise<Record<Division, Member[]>> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('members')
    .select('*')
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: true });

  if (error) throw new Error(`구성원을 불러오지 못했습니다: ${error.message}`);

  const grouped = Object.fromEntries(DIVISIONS.map((d) => [d, [] as Member[]])) as Record<
    Division,
    Member[]
  >;
  for (const member of (data ?? []) as Member[]) {
    grouped[member.division]?.push(member);
  }
  return grouped;
}

/** 분야별 수행실적 목록 (연도 내림차순 → 등록 순서) */
export async function getPortfolioByCategory(): Promise<
  Record<PortfolioCategory, PortfolioProject[]>
> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('portfolio_projects')
    .select('*')
    .order('year', { ascending: false })
    .order('sort_order', { ascending: true });

  if (error) throw new Error(`수행실적을 불러오지 못했습니다: ${error.message}`);

  const grouped = Object.fromEntries(
    PORTFOLIO_CATEGORIES.map((c) => [c, [] as PortfolioProject[]])
  ) as Record<PortfolioCategory, PortfolioProject[]>;
  for (const project of (data ?? []) as PortfolioProject[]) {
    grouped[project.category]?.push(project);
  }
  return grouped;
}
