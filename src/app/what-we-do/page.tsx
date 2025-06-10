import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function WhatWeDoPage() {
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
                환경과 경제의 조화,{'\n'}
                새로운 내일을 설계합니다.
              </h1>
              
              {/* Description Section - positioned to the right */}
              <div className="absolute right-[80px] top-[142px] w-[360px]">
                <p className="text-xl font-bold leading-7 tracking-[-0.2px] text-[#0f1324]/60 mb-6">
                  지속가능한 미래를 위한 컨설팅
                </p>
                <p className="text-base font-medium leading-6 tracking-[-0.2px] text-[#0f1324]/60">
                  에코에이블컨설팅(주)는 환경과 경제의 균형을 맞추며, 기업의 지속가능한 성장을 위한 전문적인 컨설팅 서비스를 제공합니다. 우리는 환경 친화적인 솔루션을 통해 고객의 경쟁력을 높이고, 사회적 가치를 창출하는 데 기여합니다.
                </p>
              </div>
            </div>

            {/* Main Image Section with Text Overlay */}
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

            {/* Service Areas Section */}
            <div className="mb-[24px]">
              <h2 className="text-[30px] font-bold leading-9 tracking-[-0.5px] text-[#14151a]">
                4개 전문 파트
              </h2>
            </div>

            {/* Service Cards Grid - 2x2 layout */}
            <div className="grid grid-cols-2 gap-8 mb-[32px]">
              {/* 제품환경파트 */}
              <div className="bg-white border border-[#dee0e3] rounded-[24px] p-8">
                <div className="mb-6">
                  {/* Icon placeholder */}
                  <div className="w-12 h-12 bg-gray-200 rounded-lg mb-4"></div>
                  <h3 className="text-2xl font-bold text-[#14151a] mb-4">제품환경파트</h3>
                  <p className="text-base text-[#0f1324]/60 leading-6">
                    LCA(전과정평가), 탄소발자국, 물발자국 등을 통한 제품의 환경영향 평가 및 친환경 제품 개발 지원
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-[#0f1324]">• LCA(전과정평가)</div>
                  <div className="text-sm text-[#0f1324]">• 탄소발자국 평가</div>
                  <div className="text-sm text-[#0f1324]">• 물발자국 평가</div>
                  <div className="text-sm text-[#0f1324]">• 친환경 제품 인증</div>
                </div>
              </div>

              {/* 환경정책파트 */}
              <div className="bg-white border border-[#dee0e3] rounded-[24px] p-8">
                <div className="mb-6">
                  {/* Icon placeholder */}
                  <div className="w-12 h-12 bg-gray-200 rounded-lg mb-4"></div>
                  <h3 className="text-2xl font-bold text-[#14151a] mb-4">환경정책파트</h3>
                  <p className="text-base text-[#0f1324]/60 leading-6">
                    환경법규 대응, 환경경영시스템 구축, 환경정책 수립 등 기업의 환경경영 전반을 지원
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-[#0f1324]">• 환경법규 대응</div>
                  <div className="text-sm text-[#0f1324]">• 환경경영시스템</div>
                  <div className="text-sm text-[#0f1324]">• 환경정책 수립</div>
                  <div className="text-sm text-[#0f1324]">• 환경영향평가</div>
                </div>
              </div>

              {/* 자원순환파트 */}
              <div className="bg-white border border-[#dee0e3] rounded-[24px] p-8">
                <div className="mb-6">
                  {/* Icon placeholder */}
                  <div className="w-12 h-12 bg-gray-200 rounded-lg mb-4"></div>
                  <h3 className="text-2xl font-bold text-[#14151a] mb-4">자원순환파트</h3>
                  <p className="text-base text-[#0f1324]/60 leading-6">
                    폐기물 관리, 자원순환 시스템 구축, 재활용 기술 개발 등 순환경제 실현을 지원
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-[#0f1324]">• 폐기물 관리</div>
                  <div className="text-sm text-[#0f1324]">• 자원순환 시스템</div>
                  <div className="text-sm text-[#0f1324]">• 재활용 기술</div>
                  <div className="text-sm text-[#0f1324]">• 순환경제 모델</div>
                </div>
              </div>

              {/* 기후변화대응파트 */}
              <div className="bg-white border border-[#dee0e3] rounded-[24px] p-8">
                <div className="mb-6">
                  {/* Icon placeholder */}
                  <div className="w-12 h-12 bg-gray-200 rounded-lg mb-4"></div>
                  <h3 className="text-2xl font-bold text-[#14151a] mb-4">기후변화대응파트</h3>
                  <p className="text-base text-[#0f1324]/60 leading-6">
                    온실가스 관리, 탄소중립 전략 수립, 기후리스크 평가 등 기후변화 대응 전략을 지원
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-[#0f1324]">• 온실가스 인벤토리</div>
                  <div className="text-sm text-[#0f1324]">• 탄소중립 전략</div>
                  <div className="text-sm text-[#0f1324]">• 기후리스크 평가</div>
                  <div className="text-sm text-[#0f1324]">• RE100 대응</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 