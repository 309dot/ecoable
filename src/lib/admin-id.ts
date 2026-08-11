/**
 * Supabase Auth는 식별자로 이메일 또는 전화번호만 지원합니다.
 * 고객이 "admin" 같은 아이디로 로그인할 수 있도록, 내부 전용 도메인을 붙여
 * 이메일 형태로 변환해서 인증합니다. (실제로 메일이 발송되지는 않습니다)
 *
 * Supabase 대시보드에서 계정을 만들 때도 이 도메인을 붙인 주소로 만들어야 합니다.
 *   예) 아이디 admin  ->  admin@ecoable.local
 */
export const ADMIN_ID_DOMAIN = 'ecoable.local';

/** 로그인 입력값(아이디 또는 이메일)을 Supabase 인증용 이메일로 변환 */
export function adminIdToEmail(input: string): string {
  const trimmed = input.trim().toLowerCase();
  return trimmed.includes('@') ? trimmed : `${trimmed}@${ADMIN_ID_DOMAIN}`;
}

/** 화면 표시용: 내부 도메인은 숨기고 아이디만 보여줍니다. */
export function emailToAdminId(email?: string | null): string {
  if (!email) return '';
  const suffix = `@${ADMIN_ID_DOMAIN}`;
  return email.endsWith(suffix) ? email.slice(0, -suffix.length) : email;
}
