// What we do / Portfolio 공용 도메인 타입
// DB 스키마(public.members, public.portfolio_projects)와 1:1로 맞춰져 있습니다.

export type Division = 'policy' | 'circulation';

export type PortfolioCategory = 'lca' | 'epd' | 'circulation' | 'climate' | 'policy';

export interface Member {
  id: string;
  division: Division;
  name: string;
  position: string;
  qualifications: string;
  email: string;
  phone: string;
  motto: string;
  image_url: string | null;
  sort_order: number;
}

export interface PortfolioProject {
  id: string;
  category: PortfolioCategory;
  year: number;
  title: string;
  client: string;
  sort_order: number;
}

export const DIVISION_LABELS: Record<Division, string> = {
  policy: '전과정정책본부',
  circulation: '전과정순환본부',
};

export const PORTFOLIO_CATEGORY_LABELS: Record<PortfolioCategory, string> = {
  lca: 'LCA(전과정평가)',
  epd: 'EPD 인증대응',
  circulation: '자원순환',
  climate: '기후변화대응',
  policy: '환경정책 및 보건환경',
};

export const DIVISIONS = Object.keys(DIVISION_LABELS) as Division[];

export const PORTFOLIO_CATEGORIES = Object.keys(
  PORTFOLIO_CATEGORY_LABELS
) as PortfolioCategory[];

/** 구성원 프로필 이미지 경로. 미등록이면 null (호출부에서 플레이스홀더 처리) */
export function memberImageSrc(member: Pick<Member, 'image_url'>): string | null {
  return member.image_url?.trim() || null;
}
