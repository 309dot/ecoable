import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Main Section - 1440x1024px fixed size as per Figma */}
      <main className="w-[1440px] h-[1024px] mx-auto relative overflow-hidden bg-white figma-layout">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/image_photo_01.jpg"
            alt="Main Background"
            fill
            className="object-cover"
            priority
          />
          {/* Background Overlay - exactly as in Figma */}
          <div className="absolute inset-0 bg-black/25"></div>
        </div>

        {/* Container - x:80, y:110, w:1280, h:882 */}
        <div className="absolute left-[80px] top-[110px] w-[1280px] h-[882px]">
          {/* Title Section - y:190 relative to main, so 80px from container top */}
          <div className="absolute top-[80px] w-[1280px] h-[192px]">
            {/* Main title - exact Figma text */}
            <h1 className="text-white text-[48px] font-medium leading-[56px] tracking-[-1px] mb-[8px]">
              환경과 경제의 조화, 새로운 내일을 설계합니다.<br />
              지속가능한 미래를 위한 컨설팅,
            </h1>
            {/* Company name */}
            <h2 className="text-white text-[64px] font-bold leading-[72px] tracking-[-1.7px]">
              에코에이블컨설팅(주)
            </h2>
          </div>

          {/* Service Cards Section - y:722 relative to main, so 612px from container top */}
          <div className="absolute top-[612px] w-[1280px] h-[126px]">
            {/* Cards positioned exactly as in Figma */}
            
            {/* Card 1 - x:352 relative to main, so 272px from container left */}
            <div className="absolute left-[272px] w-[240px] h-[126px] bg-white border border-[#dee0e3] rounded-[24px]">
              <div className="px-6 py-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[#14151a] text-[18px] font-bold leading-[26px] tracking-[-0.2px]">
                    제품환경파트
                  </h3>
                  <div className="w-6 h-6 bg-gray-200 rounded"></div>
                </div>
                <p className="text-[#0f1324]/60 text-[14px] leading-[20px] tracking-[-0.1px]">
                  LCA 기반 진단부터 녹색제품 인증까지 전 과정을 지원
                </p>
              </div>
            </div>

            {/* Card 2 - x:608 */}
            <div className="absolute left-[528px] w-[240px] h-[126px] bg-white border border-[#dee0e3] rounded-[24px]">
              <div className="px-6 py-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[#14151a] text-[18px] font-bold leading-[26px] tracking-[-0.2px]">
                    환경정책파트
                  </h3>
                  <div className="w-6 h-6 bg-gray-200 rounded"></div>
                </div>
                <p className="text-[#0f1324]/60 text-[14px] leading-[20px] tracking-[-0.1px]">
                  컨설팅과 통합관리 솔루션을 통해 지속가능한 사회 구현을 지원
                </p>
              </div>
            </div>

            {/* Card 3 - x:864 */}
            <div className="absolute left-[784px] w-[240px] h-[126px] bg-white border border-[#dee0e3] rounded-[24px]">
              <div className="px-6 py-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[#14151a] text-[18px] font-bold leading-[26px] tracking-[-0.2px]">
                    자원순환파트
                  </h3>
                  <div className="w-6 h-6 bg-gray-200 rounded"></div>
                </div>
                <p className="text-[#0f1324]/60 text-[14px] leading-[20px] tracking-[-0.1px]">
                  자원을 다시 보는 시선, 자원순환의 지속가능한 흐름을 설계
                </p>
              </div>
            </div>

            {/* Card 4 - x:1120 */}
            <div className="absolute left-[1040px] w-[240px] h-[126px] bg-white border border-[#dee0e3] rounded-[24px]">
              <div className="px-6 py-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[#14151a] text-[18px] font-bold leading-[26px] tracking-[-0.2px]">
                    기후변화대응파트
                  </h3>
                  <div className="w-6 h-6 bg-gray-200 rounded"></div>
                </div>
                <p className="text-[#0f1324]/60 text-[14px] leading-[20px] tracking-[-0.1px]">
                  제도 수립부터 온실가스 산정 컨설팅까지 전략적 대응을 지원
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Container - y:864 relative to main, so 754px from container top */}
          <div className="absolute top-[754px] w-[1280px] h-[96px] bg-white rounded-[24px]">
            <div className="flex items-center px-8 py-6 h-full">
              {/* Left caption */}
              <div className="flex-1">
                <p className="text-[#0f1324]/60 text-[16px] leading-[24px] tracking-[-0.2px]">
                  고객에게는 믿음을, 구성원에게는 의미 있는 일상을.<br />
                  모두가 함께 성장할 수 있는 지속가능한 조직을 만들어갑니다.
                </p>
              </div>
              
              {/* Right buttons */}
              <div className="flex gap-2">
                <button className="flex items-center gap-3 px-4 py-3 bg-[#0a0f29]/[0.04] rounded-full">
                  <div className="w-5 h-5 bg-gray-200 rounded"></div>
                  <span className="text-[#14151a] text-[16px] font-medium leading-[24px] tracking-[-0.2px]">
                    에코에이블 소개자료
                  </span>
                  <div className="w-5 h-5 bg-gray-200 rounded"></div>
                </button>
                
                <button className="flex items-center gap-3 px-4 py-3 bg-[#0a0f29]/[0.04] rounded-full">
                  <div className="w-5 h-5 bg-gray-200 rounded"></div>
                  <span className="text-[#14151a] text-[16px] font-medium leading-[24px] tracking-[-0.2px]">
                    찾아오시는 길
                  </span>
                  <div className="w-5 h-5 bg-gray-200 rounded"></div>
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
