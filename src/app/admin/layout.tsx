import Link from 'next/link';
import Image from 'next/image';
import { createClient } from '@/lib/supabase/server';
import { signOut } from './actions';
import { emailToAdminId } from '@/lib/admin-id';
import AdminNavLink from './AdminNavLink';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: '관리자 | 에코에이블컨설팅',
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // 로그인 페이지는 셸 없이 그대로 렌더링합니다.
  if (!user) {
    return <div className="min-h-screen bg-[#F7F8F9]">{children}</div>;
  }

  return (
    <div className="admin-shell min-h-screen bg-[#F7F8F9]">
      <header className="bg-white border-b border-[#DEE0E3] sticky top-0 z-40">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-wrap items-center gap-4">
          <Link href="/admin" className="flex items-center h-10 shrink-0">
            <Image
              src="/images/logo_bk.png"
              alt="ecoable 관리자"
              width={143}
              height={28}
              className="object-contain"
              priority
            />
          </Link>

          <nav className="flex gap-2">
            <AdminNavLink href="/admin/members">구성원 관리</AdminNavLink>
            <AdminNavLink href="/admin/portfolio">수행실적 관리</AdminNavLink>
          </nav>

          <div className="ml-auto flex items-center gap-3">
            <span className="hidden sm:block text-sm text-[rgba(15,19,36,0.6)]">
              {emailToAdminId(user.email)}
            </span>
            <Link
              href="/"
              target="_blank"
              className="text-sm px-4 py-2 rounded-full border border-[#DEE0E3] text-[#14151A] hover:bg-[#F7F8F9] transition-colors"
            >
              사이트 보기
            </Link>
            <form action={signOut}>
              <button
                type="submit"
                className="text-sm px-4 py-2 rounded-full border border-[#DEE0E3] text-[rgba(15,19,36,0.6)] hover:bg-[#F7F8F9] transition-colors"
              >
                로그아웃
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 py-8">{children}</main>
    </div>
  );
}
