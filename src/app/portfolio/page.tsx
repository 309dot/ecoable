'use client';

import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useState } from 'react';
import Navigation from '@/components/Navigation';

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('LCA(전과정평가)');

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Main Content - 1440x2506px as per Figma */}
      <main className="w-[1440px] mx-auto relative figma-layout">
        {/* Container - x:80, y:110, w:1280, h:2364 */}
        <div className="px-[80px] pt-[110px] pb-[32px]">
          <div className="w-[1280px]">
            
            {/* Title Section */}
            <div className="mb-[32px]">
              <h1 className="text-[64px] font-bold leading-[72px] tracking-[-1.7px] text-[#14151a] w-[896px]">
                지속가능한 가치 창출,{'\n'}
                우리의 성과를 소개합니다.
              </h1>
              
              {/* Description Section - positioned to the right */}
              <div className="absolute right-[80px] top-[142px] w-[360px]">
                <p className="text-xl font-bold leading-7 tracking-[-0.2px] text-[#0f1324]/60 mb-6">
                  검증된 전문성과 경험
                </p>
                <p className="text-base font-medium leading-6 tracking-[-0.2px] text-[#0f1324]/60">
                  에코에이블컨설팅(주)의 다양한 프로젝트 경험과 성과를 통해 고객의 지속가능경영을 위한 최적의 솔루션을 제공해드립니다. 각 분야별 전문성을 바탕으로 한 실질적인 성과를 확인해보세요.
                </p>
              </div>
            </div>

            {/* Main Portfolio Image Section */}
            <div className="mb-[32px]">
              <div className="w-[1280px] h-[480px] relative rounded-[24px] overflow-hidden">
                {/* Placeholder for main image - will use actual image later */}
                <div className="w-full h-full bg-gray-200"></div>
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Text overlay */}
                <div className="absolute inset-0 px-8 py-10 flex">
                  <div className="w-[604px]">
                    <h2 className="text-[30px] font-bold leading-9 tracking-[-0.5px] text-white mb-6">
                      LCA(전과정평가)
                    </h2>
                  </div>
                  <div className="w-[604px] ml-auto">
                    <p className="text-base font-medium leading-6 tracking-[-0.2px] text-white">
                      녹색제품, 친환경제품 생산은 우리 사회의 가치를 한 단계 높이는 기업과 소비자 간의 보이지 않는 약속입니다. 지속가능한 생산과 소비의 연결을 통해 제품을 통한 사회의 지속가능발전이 현실화 될 수 있습니다. 에코에이블컨설팅(주)는 전과정평가, 탄소발자국, 물발자국, Eco-efficiency 등의 평가 기법을 통해 제품의 지속가능성에 대한 진단을 하고 에코디자인을 통한 녹색제품 및 친환경인증 획득을 지원하고 있습니다. 또한 기업의 자발적인 전과정평가 수행을 지원하고 각 기업별로 특화된 결과물 활용을 돕기 위해 LCA TOOL LCABLE'을 지속적으로 개발 • 보급 중에 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio Categories Section */}
            <div className="mb-[24px]">
              <h2 className="text-[30px] font-bold leading-9 tracking-[-0.5px] text-[#14151a]">
                Portfolio Categories
              </h2>
            </div>

            {/* Portfolio Cards Grid - 2x2 layout */}
            <div className="grid grid-cols-2 gap-8 mb-[32px]">
              {/* LCA(전과정평가) */}
              <div className="bg-white border border-[#dee0e3] rounded-[24px] p-8">
                <div className="mb-6">
                  {/* Icon placeholder */}
                  <div className="w-12 h-12 bg-gray-200 rounded-lg mb-4"></div>
                  <h3 className="text-2xl font-bold text-[#14151a] mb-4">LCA(전과정평가)</h3>
                  <p className="text-base text-[#0f1324]/60 leading-6">
                    제품의 전 생애주기에 걸친 환경영향 평가 및 개선방안 제시
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="text-sm text-[#0f1324]">• 건축자재 LCA 평가</div>
                  <div className="text-sm text-[#0f1324]">• 전자제품 LCA 평가</div>
                  <div className="text-sm text-[#0f1324]">• 포장재 LCA 평가</div>
                  <div className="text-sm text-[#0f1324]">• 화학제품 LCA 평가</div>
                </div>
              </div>

              {/* EPD 인증대응 */}
              <div className="bg-white border border-[#dee0e3] rounded-[24px] p-8">
                <div className="mb-6">
                  {/* Icon placeholder */}
                  <div className="w-12 h-12 bg-gray-200 rounded-lg mb-4"></div>
                  <h3 className="text-2xl font-bold text-[#14151a] mb-4">EPD 인증대응</h3>
                  <p className="text-base text-[#0f1324]/60 leading-6">
                    환경성과선언 인증 획득을 위한 전문 컨설팅 서비스
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="text-sm text-[#0f1324]">• 건축자재 EPD 인증</div>
                  <div className="text-sm text-[#0f1324]">• 가전제품 EPD 인증</div>
                  <div className="text-sm text-[#0f1324]">• PCR 개발 지원</div>
                  <div className="text-sm text-[#0f1324]">• 검증 및 인증 지원</div>
                </div>
              </div>

              {/* 기후변화대응 */}
              <div className="bg-white border border-[#dee0e3] rounded-[24px] p-8">
                <div className="mb-6">
                  {/* Icon placeholder */}
                  <div className="w-12 h-12 bg-gray-200 rounded-lg mb-4"></div>
                  <h3 className="text-2xl font-bold text-[#14151a] mb-4">기후변화대응</h3>
                  <p className="text-base text-[#0f1324]/60 leading-6">
                    온실가스 관리 및 탄소중립 전략 수립 지원
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="text-sm text-[#0f1324]">• 온실가스 인벤토리 구축</div>
                  <div className="text-sm text-[#0f1324]">• 탄소중립 로드맵 수립</div>
                  <div className="text-sm text-[#0f1324]">• RE100 이행 지원</div>
                  <div className="text-sm text-[#0f1324]">• 기후리스크 평가</div>
                </div>
              </div>

              {/* 환경정책 및 보건환경 */}
              <div className="bg-white border border-[#dee0e3] rounded-[24px] p-8">
                <div className="mb-6">
                  {/* Icon placeholder */}
                  <div className="w-12 h-12 bg-gray-200 rounded-lg mb-4"></div>
                  <h3 className="text-2xl font-bold text-[#14151a] mb-4">환경정책 및 보건환경</h3>
                  <p className="text-base text-[#0f1324]/60 leading-6">
                    환경정책 수립 및 보건환경 관리 시스템 구축
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="text-sm text-[#0f1324]">• 환경경영시스템 구축</div>
                  <div className="text-sm text-[#0f1324]">• 환경법규 대응</div>
                  <div className="text-sm text-[#0f1324]">• 환경영향평가</div>
                  <div className="text-sm text-[#0f1324]">• 보건환경 관리</div>
                </div>
              </div>
            </div>

            {/* Client Company Link Section */}
            <div className="bg-white border border-[#dee0e3] rounded-[24px] p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#14151a] mb-4">고객사</h3>
                  <p className="text-base text-[#0f1324]/60 leading-6">
                    에코에이블컨설팅과 함께하는 다양한 기업들을 만나보세요
                  </p>
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-[#1a3a6f] to-[#399084] text-white font-medium rounded-xl hover:opacity-90 transition-opacity">
                  고객사 보기
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 