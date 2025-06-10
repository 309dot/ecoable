'use client';

import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function ClientCompanyPage() {
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
                함께 성장하는{'\n'}
                파트너십을 만들어 갑니다.
              </h1>
              
              {/* Description Section - positioned to the right */}
              <div className="absolute right-[80px] top-[142px] w-[360px]">
                <p className="text-xl font-bold leading-7 tracking-[-0.2px] text-[#0f1324]/60 mb-6">
                  신뢰할 수 있는 파트너
                </p>
                <p className="text-base font-medium leading-6 tracking-[-0.2px] text-[#0f1324]/60">
                  에코에이블컨설팅(주)와 함께하는 고객사들을 소개합니다. 다양한 산업 분야의 기업들과 협력하여 지속가능한 미래를 만들어가고 있습니다. 우리의 전문성을 바탕으로 고객의 성공을 지원합니다.
                </p>
              </div>
            </div>

            {/* Main Client Image Section */}
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

            {/* Client Company Logos Section */}
            <div className="mb-[24px]">
              <h2 className="text-[30px] font-bold leading-9 tracking-[-0.5px] text-[#14151a]">
                주요 고객사
              </h2>
            </div>

            {/* Client Logos Grid - 6x8 = 48 logos grid */}
            <div className="grid grid-cols-6 gap-6 mb-[32px]">
              {Array.from({ length: 48 }, (_, i) => (
                <div key={i} className="w-[195px] h-[120px] bg-white border border-[#dee0e3] rounded-[16px] flex items-center justify-center p-4">
                  {/* Client logo placeholder */}
                  <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 text-xs">Logo {i + 1}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Partnership Statement Section */}
            <div className="bg-white border border-[#dee0e3] rounded-[24px] p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#14151a] mb-6">
                  에코에이블컨설팅과 함께하세요
                </h3>
                <p className="text-base text-[#0f1324]/60 leading-6 mb-8 max-w-2xl mx-auto">
                  환경과 경제의 조화를 통해 지속가능한 미래를 만들어가는 에코에이블컨설팅의 파트너가 되어주세요. 
                  전문적인 컨설팅 서비스를 통해 귀하의 비즈니스가 더욱 성장할 수 있도록 지원하겠습니다.
                </p>
                <button className="px-8 py-3 bg-gradient-to-r from-[#1a3a6f] to-[#399084] text-white font-medium rounded-xl hover:opacity-90 transition-opacity">
                  파트너십 문의하기
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