import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

/** 서버 컴포넌트 / 서버 액션용 Supabase 클라이언트 (쿠키 기반 세션) */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // 서버 컴포넌트에서 호출된 경우 쿠키를 쓸 수 없습니다.
            // 세션 갱신은 middleware가 담당하므로 무시해도 안전합니다.
          }
        },
      },
    }
  );
}
