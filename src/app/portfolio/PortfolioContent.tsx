'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TabMenu from '@/components/TabMenu';
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_CATEGORY_LABELS,
  type PortfolioCategory,
  type PortfolioProject,
} from '@/lib/types';

interface PortfolioContentProps {
  // 수행실적은 Supabase(public.portfolio_projects)에서 내려받습니다.
  // 관리자 페이지(/admin/portfolio)에서 수정합니다.
  portfolioData: Record<PortfolioCategory, PortfolioProject[]>;
}

// useSearchParams를 사용하므로 상위 page.tsx에서 Suspense로 감싸 렌더링합니다.
export default function PortfolioContent({ portfolioData }: PortfolioContentProps) {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<PortfolioCategory>('lca');

  const portfolioTabs = PORTFOLIO_CATEGORIES.map((key) => ({
    key,
    label: PORTFOLIO_CATEGORY_LABELS[key],
  }));

  // Footer의 /portfolio?tab=epd 형태 링크 지원
  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && (PORTFOLIO_CATEGORIES as string[]).includes(tab)) {
      setActiveTab(tab as PortfolioCategory);
    }
  }, [searchParams]);

  const activeProjects = portfolioData[activeTab] ?? [];

  // 연도별로 프로젝트 그룹화
  const groupedProjects = activeProjects.reduce((groups: { [key: string]: PortfolioProject[] }, project) => {
    const year = String(project.year);
    if (!groups[year]) {
      groups[year] = [];
    }
    groups[year].push(project);
    return groups;
  }, {});

  // 연도를 내림차순으로 정렬
  const sortedYears = Object.keys(groupedProjects).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <div className="min-h-screen" style={{
      maxWidth: '1440px',
      margin: '0 auto',
      wordBreak: 'keep-all',
      overflowWrap: 'break-word'
    }}>
      {/* Navigation Section */}
      <Navigation theme="light" />

      <div className="nav-spacing">
        {/* Tab Menu Section - 왼쪽 정렬 */}
        <div className="w-full py-8">
          <div className="w-full container-1440 mx-auto">
            <TabMenu
              tabs={portfolioTabs}
              activeTab={activeTab}
              onChange={(key) => setActiveTab(key as PortfolioCategory)}
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full">
          <div className="w-full container-1440 mx-auto py-6">
            <div className="flex flex-col xl:flex-row gap-6 mb-6 py-6">
              
              {/* Title Section */}
              <div className="w-full xl:w-[360px]">
                <h1 className="text-[#14151A] font-bold text-[30px] leading-[1.2] mb-2">
                  수행 실적 소개
                </h1>
              </div>

              {/* Projects List */}
              <div className="flex-1">
                {sortedYears.length > 0 ? (
                  sortedYears.map((year) => (
                    <div key={year} className="mb-8">
                      {/* Year Header */}
                      <div className="flex items-stretch mb-4">
                        <div className="flex items-stretch flex-1 gap-2.5 p-4">
                          <h2 className="text-xl font-bold leading-[1.4] text-black flex-1">
                            {year}
                          </h2>
                        </div>
                      </div>

                      {/* Projects for this year */}
                      <div className="flex flex-col">
                        {groupedProjects[year].map((project) => (
                          <div key={project.id} className="flex items-stretch border-t border-gray-200">
                            <div className="flex items-stretch flex-1 gap-2.5 p-4">
                              <div className="flex-1 text-base md:text-sm leading-[1.44] text-black">
                                {project.title}
                              </div>
                            </div>
                            <div className="flex items-stretch">
                              <div className="flex items-stretch flex-1 gap-2.5 p-4">
                                <div className="flex-1 text-base md:text-sm leading-[1.44] text-black">
                                  {project.client}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex items-center justify-center py-16 text-gray-500">
                    해당 분야의 프로젝트가 준비 중입니다.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
} 