import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import { DIVISION_LABELS, PORTFOLIO_CATEGORY_LABELS } from '@/lib/types';

export const dynamic = 'force-dynamic';

export default async function AdminDashboardPage() {
  const supabase = await createClient();

  const [{ count: memberCount }, { count: projectCount }] = await Promise.all([
    supabase.from('members').select('*', { count: 'exact', head: true }),
    supabase.from('portfolio_projects').select('*', { count: 'exact', head: true }),
  ]);

  const cards = [
    {
      href: '/admin/members',
      title: '구성원 관리',
      count: `${memberCount ?? 0}명`,
      description: `What we do 페이지의 ${Object.values(DIVISION_LABELS).join(' · ')} 구성원을 추가·수정·삭제하고 순서를 바꿉니다. 프로필 사진도 교체할 수 있습니다.`,
    },
    {
      href: '/admin/portfolio',
      title: '수행실적 관리',
      count: `${projectCount ?? 0}건`,
      description: `Portfolio 페이지의 ${Object.keys(PORTFOLIO_CATEGORY_LABELS).length}개 분야별 수행실적을 추가·수정·삭제합니다.`,
    },
  ];

  return (
    <div>
      <h1 className="text-[#14151A] font-bold text-2xl mb-1">관리자 홈</h1>
      <p className="text-[rgba(15,19,36,0.6)] text-sm mb-8">
        수정한 내용은 저장 즉시 홈페이지에 반영됩니다.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="bg-white border border-[#DEE0E3] rounded-[24px] p-6 transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            <div className="flex items-baseline justify-between mb-3">
              <h2 className="text-[#14151A] font-bold text-lg">{card.title}</h2>
              <span className="text-sm font-medium bg-clip-text bg-gradient-to-r from-[#1a3a6f] to-[#399084] text-transparent">
                {card.count}
              </span>
            </div>
            <p className="text-[rgba(15,19,36,0.6)] text-sm leading-[1.5]">{card.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
