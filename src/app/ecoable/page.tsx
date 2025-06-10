'use client';

import Link from 'next/link';
import Image from "next/image";
import Navigation from "@/components/Navigation";

export default function EcoablePage() {
  return (
    <div className="bg-white font-pretendard" style={{ width: '1440px', height: '2224px' }}>
      {/* Navigation - positioned at y:16 as per Figma */}
      <div className="relative z-10 pt-4">
        <Navigation />
      </div>

      {/* Main Content Container - positioned exactly as in Figma */}
      <main className="relative">
        {/* Title Section - positioned at y:158 as per Figma */}
        <div className="absolute" style={{ top: '158px', left: '80px', width: '1280px' }}>
          {/* Main Title - x:80, y:158, width:896px, height:144px */}
          <h1 
            className="text-[#14151a] font-bold leading-[72px] tracking-[-1.7px]"
            style={{
              fontSize: '64px',
              width: '896px',
              height: '144px'
            }}
          >
            ecoable스러운 사람들이 직접{'\n'}만들어가는 ecoable스러운 공간
          </h1>

          {/* Description - x:1000, y:158, width:360px, height:96px */}
          <div className="absolute" style={{ top: '0px', left: '920px', width: '360px', height: '96px' }}>
            <h2 className="text-[#0f1324]/60 font-bold text-xl leading-[28px] tracking-[-0.2px] mb-4">
              안녕하세요. ecoable입니다!
            </h2>
            <p className="text-[#0f1324]/60 font-medium text-base leading-[24px] tracking-[-0.2px]">
              Ecoable스러운 사람들이 함께 모여, 스스로 만들어가는 Ecoable스러운 공간. 서로의 다름을 존중하고, 새로움을 두려워하지 않으며, 오늘보다 더 나은 내일을 위해 함께 성장하는 우리의 특별한 터전입니다.
            </p>
          </div>
        </div>

        {/* Main Image - positioned at y:598 as per Figma */}
        <div 
          className="absolute bg-gray-100 border border-[#dee0e3] rounded-3xl overflow-hidden"
          style={{ 
            top: '598px', 
            left: '80px', 
            width: '1280px', 
            height: '452px' 
          }}
        >
          <Image
            src="/image_photo_26.jpg"
            alt="Ecoable 회사 이미지"
            width={1280}
            height={452}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Solutions Section - positioned at y:1148 as per Figma */}
        <div className="absolute" style={{ top: '1148px', left: '80px', width: '1280px' }}>
          {/* Section Title */}
          <h2 
            className="text-[#14151a] font-bold leading-14 tracking-[-1px] mb-16"
            style={{ 
              fontSize: '48px',
              lineHeight: '56px',
              width: '1280px',
              height: '112px'
            }}
          >
            ecoable이 만들어가는 친환경적이면서 경제적인 솔루션!<br />
            가능합니다!
          </h2>

          {/* Vision and Goal Section - positioned at y:1300 relative to section start */}
          <div className="flex" style={{ marginTop: '152px' }}>
            {/* Left side - Title */}
            <div style={{ width: '360px', height: '48px' }}>
              <h3 
                className="text-[#14151a] font-bold tracking-[-0.3px] mb-4"
                style={{ 
                  fontSize: '24px',
                  lineHeight: '32px'
                }}
              >
                ecoable의 비전과 목표
              </h3>
              <div 
                className="bg-[#d9d9d9]"
                style={{ width: '360px', height: '1px', marginTop: '8px' }}
              ></div>
            </div>

            {/* Right side - Description */}
            <div style={{ marginLeft: '644px', width: '896px' }}>
              <h4 
                className="text-[#0f1324] font-bold tracking-[-0.2px] mb-4"
                style={{ 
                  opacity: 0.6,
                  fontSize: '20px',
                  lineHeight: '28px'
                }}
              >
                안녕하세요. ecoable입니다!
              </h4>
              <p 
                className="text-[#0f1324] font-medium leading-6 tracking-[-0.2px]"
                style={{ 
                  opacity: 0.6,
                  fontSize: '16px',
                  lineHeight: '24px'
                }}
              >
                에코에이블컨설팅㈜은 'Life Cycle Linker'로서, 고객과 구성원의 가치가 모여 회사의 가치를 이루고, 모두의 내일을 위해 오늘의 일을 실천하는 지속가능한 컨설팅 회사입니다.
              </p>
            </div>
          </div>

          {/* Core Values Section - positioned at y:1388 relative to section start */}
          <div className="flex" style={{ marginTop: '240px' }}>
            {/* Left side - Title */}
            <div style={{ width: '360px', height: '376px' }}>
              <h3 
                className="text-[#14151a] font-bold tracking-[-0.3px] mb-4"
                style={{ 
                  fontSize: '24px',
                  lineHeight: '32px'
                }}
              >
                ecoable의 3대 핵심가치
              </h3>
              <div 
                className="bg-[#d9d9d9]"
                style={{ width: '360px', height: '1px', marginTop: '8px' }}
              ></div>
            </div>

            {/* Right side - Value Cards */}
            <div className="flex gap-6" style={{ marginLeft: '24px' }}>
              {/* Card 1 - 가치있는 컨설팅 */}
              <div 
                className="border border-[#dee0e3] rounded-3xl"
                style={{ width: '282.67px', height: '376px' }}
              >
                {/* Image */}
                <div 
                  className="bg-gray-100 mx-6 mt-8 overflow-hidden"
                  style={{ width: '180px', height: '180px' }}
                >
                  <Image
                    src="/image_photo_25.jpg"
                    alt="가치있는 컨설팅"
                    width={180}
                    height={180}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Text */}
                <div className="px-6 mt-6 text-center">
                  <h4 
                    className="text-[#14151a] font-bold tracking-[-0.2px] mb-4"
                    style={{ 
                      fontSize: '20px',
                      lineHeight: '28px'
                    }}
                  >
                    가치있는 컨설팅
                  </h4>
                  <p 
                    className="text-[#0f1324] leading-6 tracking-[-0.2px]"
                    style={{ 
                      opacity: 0.6,
                      fontSize: '16px',
                      lineHeight: '24px'
                    }}
                  >
                    쓸모있는 결과물을 도출하여 고객사가 결과물을 가치있게 활용할 수 있도록 한다.
                  </p>
                </div>
              </div>

              {/* Card 2 - 지속가능성 */}
              <div 
                className="border border-[#dee0e3] rounded-3xl"
                style={{ width: '282.67px', height: '376px' }}
              >
                {/* Image */}
                <div 
                  className="bg-gray-100 mx-6 mt-8 overflow-hidden"
                  style={{ width: '180px', height: '180px' }}
                >
                  <Image
                    src="/image_photo_24.jpg"
                    alt="지속가능성"
                    width={180}
                    height={180}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Text */}
                <div className="px-6 mt-6 text-center">
                  <h4 
                    className="text-[#14151a] font-bold tracking-[-0.2px] mb-4"
                    style={{ 
                      fontSize: '20px',
                      lineHeight: '28px'
                    }}
                  >
                    지속가능성
                  </h4>
                  <p 
                    className="text-[#0f1324] leading-6 tracking-[-0.2px]"
                    style={{ 
                      opacity: 0.6,
                      fontSize: '16px',
                      lineHeight: '24px'
                    }}
                  >
                    고객의 지속가능성 증진과 함께 ecoable의 지속가능성을 고민한다.
                  </p>
                </div>
              </div>

              {/* Card 3 - 모두의 조직 */}
              <div 
                className="border border-[#dee0e3] rounded-3xl"
                style={{ width: '282.67px', height: '376px' }}
              >
                {/* Image */}
                <div 
                  className="bg-gray-100 mx-6 mt-8 overflow-hidden"
                  style={{ width: '180px', height: '180px' }}
                >
                  <Image
                    src="/image_photo_23.jpg"
                    alt="모두의 조직"
                    width={180}
                    height={180}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Text */}
                <div className="px-6 mt-6 text-center">
                  <h4 
                    className="text-[#14151a] font-bold tracking-[-0.2px] mb-4"
                    style={{ 
                      fontSize: '20px',
                      lineHeight: '28px'
                    }}
                  >
                    모두의 조직
                  </h4>
                  <p 
                    className="text-[#0f1324] leading-6 tracking-[-0.2px]"
                    style={{ 
                      opacity: 0.6,
                      fontSize: '16px',
                      lineHeight: '24px'
                    }}
                  >
                    구성원 모두가 주인으로 같은 방향을 동등한 눈높이로 바라보는 조직을 추구한다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 - positioned at y:326 as per Figma */}
        <div className="absolute" style={{ top: '326px', width: '1280px', height: '852px' }}>
          <div className="bg-[#f7f7f8] rounded-3xl p-8" style={{ width: '1280px', height: '852px' }}>
            <h2 className="text-[#14151a] font-bold text-3xl leading-[36px] tracking-[-0.5px] mb-6">
              에코에이블컨설팅㈜과 함께하는 &apos;에코에이블스러운&apos; 여정
            </h2>
            <p className="text-[#14151a] font-normal text-base leading-[24px] tracking-[-0.2px] mb-8">
              에코에이블컨설팅㈜과 함께하는 여정에서 경험할 수 있는 &apos;에코에이블스러운&apos; 순간들을 소개합니다. 지속가능한 미래를 위해 환경과 경제의 조화를 추구하며, 고객사와 함께 성장하는 우리의 이야기를 확인해보세요.
            </p>
            
            {/* Grid of experience cards */}
            <div className="grid grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">전문성 기반의 신뢰</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  4개 전문 분야의 깊이 있는 지식과 풍부한 경험을 바탕으로 고객에게 최고의 품질을 제공합니다.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">혁신적인 솔루션</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  새로운 기술과 창의적 접근으로 기존의 한계를 뛰어넘는 혁신적인 환경 솔루션을 제공합니다.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">파트너십 중심</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  고객과의 진정한 파트너십을 통해 지속가능한 성장과 상생의 가치를 함께 만들어갑니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - positioned at y:1836 as per Figma */}
      <footer className="absolute" style={{ top: '1836px', left: '0px', width: '1440px', height: '388px' }}>
        {/* Newsletter Section */}
        <div className="bg-[#f7f7f8]" style={{ height: '168px' }}>
          <div className="flex items-center justify-between px-32 py-10">
            <div style={{ width: '450px' }}>
              <h3 
                className="text-[#14151a] font-medium tracking-[-0.2px] mb-3"
                style={{ fontSize: '20px', lineHeight: '28px' }}
              >
                Subscribe to our newsletter
              </h3>
              <p 
                className="text-[#0f1324] tracking-[-0.2px]"
                style={{ 
                  opacity: 0.6,
                  fontSize: '16px',
                  lineHeight: '24px'
                }}
              >
                Get a summary of what we've shipped during the last month, behind the scenes updates, and team picks.
              </p>
            </div>
            <div className="flex gap-2" style={{ width: '390px' }}>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white border border-[#dee0e3] rounded-xl px-4 py-2 text-sm placeholder:text-[#0d1126]/40"
                style={{ width: '240px', height: '40px' }}
              />
              <button 
                className="bg-[#14151a] text-white rounded-xl font-medium text-sm"
                style={{ width: '142px', height: '40px' }}
              >
                Get early access
              </button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="bg-white" style={{ height: '220px' }}>
          <div className="flex justify-between px-20 py-10">
            {/* Left side - Logo */}
            <div style={{ width: '692px' }}>
              <div className="w-40 h-10 bg-black rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">Logo</span>
              </div>
            </div>

            {/* Right side - Links */}
            <div className="flex gap-12" style={{ width: '588px' }}>
              {/* Ecoable Column */}
              <div style={{ width: '180px' }}>
                <h4 
                  className="text-[#0f1324] font-medium mb-6 tracking-[-0.1px]"
                  style={{ 
                    opacity: 0.6,
                    fontSize: '14px',
                    lineHeight: '20px'
                  }}
                >
                  Ecoable
                </h4>
                <div className="space-y-2">
                  <Link href="/ecoable" className="block text-[#14151a] font-medium text-sm tracking-[-0.1px] leading-5">
                    ecoable 소개
                  </Link>
                  <Link href="/ecoable/culture" className="block text-[#14151a] font-medium text-sm tracking-[-0.1px] leading-5">
                    ecoable스러움
                  </Link>
                  <Link href="/contact" className="block text-[#14151a] font-medium text-sm tracking-[-0.1px] leading-5">
                    찾아오시는 길
                  </Link>
                </div>
              </div>

              {/* What we do Column */}
              <div style={{ width: '180px' }}>
                <h4 
                  className="text-[#0f1324] font-medium mb-6 tracking-[-0.1px]"
                  style={{ 
                    opacity: 0.6,
                    fontSize: '14px',
                    lineHeight: '20px'
                  }}
                >
                  What we do
                </h4>
                <div className="space-y-2">
                  <Link href="/what-we-do" className="block text-[#14151a] font-medium text-sm tracking-[-0.1px] leading-5">
                    제품환경파트
                  </Link>
                  <Link href="/what-we-do" className="block text-[#14151a] font-medium text-sm tracking-[-0.1px] leading-5">
                    환경정책파트
                  </Link>
                  <Link href="/what-we-do" className="block text-[#14151a] font-medium text-sm tracking-[-0.1px] leading-5">
                    자원순환파트
                  </Link>
                  <Link href="/what-we-do" className="block text-[#14151a] font-medium text-sm tracking-[-0.1px] leading-5">
                    기후변화대응파트
                  </Link>
                </div>
              </div>

              {/* Portfolio Column */}
              <div style={{ width: '180px' }}>
                <h4 
                  className="text-[#0f1324] font-medium mb-6 tracking-[-0.1px]"
                  style={{ 
                    opacity: 0.6,
                    fontSize: '14px',
                    lineHeight: '20px'
                  }}
                >
                  Portfolio
                </h4>
                <div className="space-y-2">
                  <Link href="/portfolio" className="block text-[#14151a] font-medium text-sm tracking-[-0.1px] leading-5">
                    LCA(전과정평가)
                  </Link>
                  <Link href="/portfolio" className="block text-[#14151a] font-medium text-sm tracking-[-0.1px] leading-5">
                    EPD 인증대응
                  </Link>
                  <Link href="/portfolio" className="block text-[#14151a] font-medium text-sm tracking-[-0.1px] leading-5">
                    기후변화대응
                  </Link>
                  <Link href="/portfolio" className="block text-[#14151a] font-medium text-sm tracking-[-0.1px] leading-5">
                    환경정책 및 보건환경
                  </Link>
                  <Link href="/client-company" className="block text-[#14151a] font-medium text-sm tracking-[-0.1px] leading-5">
                    고객사
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="bg-white border-t border-gray-200" style={{ height: '148px' }}>
          <div className="flex justify-between items-end px-20 py-6">
            {/* Contact Info */}
            <div style={{ width: '304px' }}>
              <div className="space-y-1 text-[#0d1126]/40 font-medium text-sm tracking-[-0.1px] leading-5">
                <p>04976 서울특별시 광진구 자양로 216 파인캐슬, 201호</p>
                <p>대표전화 | 02-6959-8885</p>
                <p>팩스 | 070-4327-7279</p>
                <p>이메일 | info@ppm.co.kr</p>
                <p>© ecoable CO. 2016</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2" style={{ width: '104px' }}>
              <div className="w-6 h-6 bg-gray-400 rounded"></div>
              <div className="w-6 h-6 bg-gray-400 rounded"></div>
              <div className="w-6 h-6 bg-gray-400 rounded"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 