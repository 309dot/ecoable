'use client';

import Navigation from '@/components/Navigation';
import { useState } from 'react';

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('LCA(전과정평가)');

  return (
    <div className="bg-white font-pretendard" style={{ width: '1440px', height: '2366px' }}>
      {/* Background overlay similar to main page */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage: "url('/Desktop_main_01.png')",
          filter: "brightness(1.16) contrast(0.91) saturate(1.49)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b376f] to-[#3a9284] opacity-0"></div>
      </div>

      {/* Navigation - positioned at y:16 as per Figma */}
      <div className="relative z-10 pt-4">
        <Navigation />
      </div>

      {/* Main Content Container - positioned exactly as in Figma */}
      <main className="relative z-10">
        {/* Tab Menu Section - positioned at y:142 as per Figma */}
        <div className="absolute" style={{ top: '142px', left: '80px', width: '1280px', height: '80px' }}>
          <div className="flex items-center" style={{ top: '16px', position: 'relative' }}>
            {/* Tab Menu Container - x:80, y:158, width:728px, height:48px */}
            <div 
              className="bg-black/8 rounded-xl flex gap-2 p-1"
              style={{ width: '728px', height: '48px' }}
            >
              {/* 01 - LCA(전과정평가) (Active) */}
              <button 
                className={`rounded-full flex items-center justify-center px-6 ${
                  activeTab === 'LCA(전과정평가)' 
                    ? 'bg-white border border-[#dee0e3]' 
                    : 'bg-transparent'
                }`}
                style={{ width: '148px', height: '44px' }}
                onClick={() => setActiveTab('LCA(전과정평가)')}
              >
                <span className={`font-medium text-base leading-6 tracking-[-0.2px] ${
                  activeTab === 'LCA(전과정평가)' 
                    ? 'text-[#14151a]' 
                    : 'text-[#0f1324]/60'
                }`}>
                  LCA(전과정평가)
                </span>
              </button>
              
              {/* 02 - EPD 인증대응 */}
              <button 
                className={`rounded-xl flex items-center justify-center px-6 ${
                  activeTab === 'EPD 인증대응' 
                    ? 'bg-white border border-[#dee0e3]' 
                    : 'bg-transparent'
                }`}
                style={{ width: '134px', height: '44px' }}
                onClick={() => setActiveTab('EPD 인증대응')}
              >
                <span className={`font-medium text-base leading-6 tracking-[-0.2px] ${
                  activeTab === 'EPD 인증대응' 
                    ? 'text-[#14151a]' 
                    : 'text-[#0f1324]/60'
                }`}>
                  EPD 인증대응
                </span>
              </button>

              {/* 03 - 자원순환 */}
              <button 
                className={`rounded-xl flex items-center justify-center px-6 ${
                  activeTab === '자원순환' 
                    ? 'bg-white border border-[#dee0e3]' 
                    : 'bg-transparent'
                }`}
                style={{ width: '99px', height: '44px' }}
                onClick={() => setActiveTab('자원순환')}
              >
                <span className={`font-medium text-base leading-6 tracking-[-0.2px] ${
                  activeTab === '자원순환' 
                    ? 'text-[#14151a]' 
                    : 'text-[#0f1324]/60'
                }`}>
                  자원순환
                </span>
              </button>

              {/* 04 - 기후변화대응 */}
              <button 
                className={`rounded-xl flex items-center justify-center px-6 ${
                  activeTab === '기후변화대응' 
                    ? 'bg-white border border-[#dee0e3]' 
                    : 'bg-transparent'
                }`}
                style={{ width: '128px', height: '44px' }}
                onClick={() => setActiveTab('기후변화대응')}
              >
                <span className={`font-medium text-base leading-6 tracking-[-0.2px] ${
                  activeTab === '기후변화대응' 
                    ? 'text-[#14151a]' 
                    : 'text-[#0f1324]/60'
                }`}>
                  기후변화대응
                </span>
              </button>

              {/* 05 - 환경정책 및 보건환경 */}
              <button 
                className={`rounded-xl flex items-center justify-center px-6 ${
                  activeTab === '환경정책 및 보건환경' 
                    ? 'bg-white border border-[#dee0e3]' 
                    : 'bg-transparent'
                }`}
                style={{ width: '179px', height: '44px' }}
                onClick={() => setActiveTab('환경정책 및 보건환경')}
              >
                <span className={`font-medium text-base leading-6 tracking-[-0.2px] ${
                  activeTab === '환경정책 및 보건환경' 
                    ? 'text-[#14151a]' 
                    : 'text-[#0f1324]/60'
                }`}>
                  환경정책 및 보건환경
                </span>
              </button>

              {/* 06 - 고객사 */}
              <button 
                className={`rounded-xl flex items-center justify-center px-6 ${
                  activeTab === '고객사' 
                    ? 'bg-white border border-[#dee0e3]' 
                    : 'bg-transparent'
                }`}
                style={{ width: '81px', height: '44px' }}
                onClick={() => setActiveTab('고객사')}
              >
                <span className={`font-medium text-base leading-6 tracking-[-0.2px] ${
                  activeTab === '고객사' 
                    ? 'text-[#14151a]' 
                    : 'text-[#0f1324]/60'
                }`}>
                  고객사
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Image Section - positioned at y:142 as per Figma */}
        <div className="absolute" style={{ top: '142px', left: '80px', width: '1280px', height: '480px' }}>
          <div 
            className="relative w-full h-full rounded-3xl overflow-hidden"
            style={{
              backgroundImage: "url('/image_photo_02.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>
            
            {/* Content */}
            <div className="relative p-8">
              {/* Title - positioned at x:32, y:40 from container */}
              <h1 
                className="text-white font-bold leading-9 tracking-[-0.5px] mb-8"
                style={{ fontSize: '30px', width: '604px' }}
              >
                LCA(전과정평가)
              </h1>
              
              {/* Description - positioned at x:612, y:40 from container */}
              <div className="absolute top-8" style={{ left: '612px', width: '604px' }}>
                <p className="text-white font-medium text-base leading-6 tracking-[-0.2px]">
                  녹색제품, 친환경제품 생산은 우리 사회의 가치를 한 단계 높이는 기업과 소비자 간의 보이지 않는 약속입니다. 지속가능한 생산과 소비의 연결을 통해 제품을 통한 사회의 지속가능발전이 현실화 될 수 있습니다. 에코에이블컨설팅(주)는 전과정평가, 탄소발자국, 물발자국, Eco-efficiency 등의 평가 기법을 통해 제품의 지속가능성에 대한 진단을 하고 에코디자인을 통한 녹색제품 및 친환경인증 획득을 지원하고 있습니다. 또한 기업의 자발적인 전과정평가 수행을 지원하고 각 기업별로 특화된 결과물 활용을 돕기 위해 LCA TOOL LCABLE'을 지속적으로 개발 • 보급 중에 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Records Section - positioned at y:270 as per Figma */}
        <div className="absolute" style={{ top: '270px', left: '80px', width: '1280px', height: '1668px' }}>
          {/* Title Section */}
          <div style={{ top: '24px', position: 'relative' }}>
            <h2 
              className="text-[#14151a] font-bold leading-9 tracking-[-0.5px] mb-11"
              style={{ fontSize: '30px', width: '360px' }}
            >
              수행 실적 소개
            </h2>
            
            {/* Description */}
            <p className="text-[#0f1324]/60 font-medium text-base leading-[24px] tracking-[-0.2px] max-w-2xl">
              에코에이블컨설팅㈜가 수행한 다양한 프로젝트들을 소개합니다. &apos;환경영향평가&apos;, &apos;토양환경정화&apos;, &apos;온실가스&apos;, &apos;자연환경&apos; 각 분야별 대표 사례들을 통해 우리의 전문성과 경험을 확인하실 수 있습니다.
            </p>
          </div>

          {/* Performance List - positioned at x:384 from container start */}
          <div className="absolute top-0" style={{ left: '384px', width: '896px' }}>
            {/* 2022 Section */}
            <div className="mb-8">
              <h3 className="text-black font-bold text-xl leading-7 tracking-[-0.2px] mb-4 px-4">2022</h3>
              
              {/* Project List */}
              <div className="space-y-0">
                {[
                  { project: 'DL케미칼 PE제품에 대한 Carbon footprint 산정', client: 'DL케미칼', height: '58px' },
                  { project: 'SK온 Battery 제품의 환경전과정평가 수행 및 교육', client: 'SK온', height: '58px' },
                  { project: 'NB-Latex에 대한 환경성평가', client: '금호석유화학', height: '58px' },
                  { project: '나이스LMS 폐어망 활용 PA6 생산에 대한 환경성 평가', client: '나이스엘엠에스', height: '58px' },
                  { project: '삼성엔지니어링 CO2 포집 기술에 대한 환경성평가', client: '삼성엔지니어링', height: '58px' },
                  { project: '현대쉘베이스오일 윤활기유에 대한 전과정평가 수행', client: '현대쉘베이스오일', height: '58px' },
                  { 
                    project: 'LG화학 Scope 3 Upstream 협력회사 탄소발자국 (Product Carbon Footprint, PCF) 관리', 
                    client: '한국연구재단-고등기술연구원', 
                    height: '84px' 
                  }
                ].map((item, index) => (
                  <div key={index} className="flex border-b border-[#dee0e3]" style={{ height: item.height }}>
                    <div className="flex items-center px-4" style={{ width: '576px' }}>
                      <span className="text-black font-normal text-lg leading-6 tracking-[-0.2px]">
                        {item.project}
                      </span>
                    </div>
                    <div className="flex items-center px-4" style={{ width: '320px' }}>
                      <span className="text-black font-normal text-lg leading-6 tracking-[-0.2px]">
                        {item.client}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional sections can be added here for other years */}
          </div>
        </div>

        {/* Contact Form Section - positioned at y:1978 as per Figma */}
        <div className="absolute" style={{ top: '1978px', left: '80px', width: '1280px', height: '360px' }}>
          {/* Title */}
          <div style={{ top: '24px', position: 'relative' }}>
            <h2 
              className="text-[#14151a] font-bold leading-9 tracking-[-0.5px] mb-11"
              style={{ fontSize: '30px', width: '360px' }}
            >
              문의하기
            </h2>
            
            {/* Description */}
            <p className="text-[#14151a] font-normal text-base leading-6 tracking-[-0.2px] mb-12" style={{ width: '628px' }}>
              녹색제품, 친환경제품 생산은 우리 사회의 가치를 한 단계 높이는 기업과 소비자 간의 보이지 않는 약속입니다. 지속가능한 생산과 소비의 연결을 통해 제품을 통한 사회의 지속가능발전이 현실화 될 수 있습니다. 에코에이블컨설팅(주)는 전과정평가, 탄소발자국, 물발자국, Eco-efficiency 등의 평가 기법을 통해 제품의 지속가능성에 대한 진단을 하고 에코디자인을 통한 녹색제품 및 친환경인증 획득을 지원하고 있습니다. 또한 기업의 자발적인 전과정평가 수행을 지원하고 각 기업별로 특화된 결과물 활용을 돕기 위해 LCA TOOL LCABLE'을 지속적으로 개발 • 보급 중에 있습니다.
            </p>
          </div>

          {/* Contact Form - positioned at x:384 from container start */}
          <div className="absolute top-0" style={{ left: '384px', width: '896px' }}>
            <form className="space-y-6">
              {/* First Row */}
              <div className="flex gap-6">
                <div className="flex-1">
                  <label className="block text-[#14151a] font-medium text-sm leading-5 tracking-[-0.1px] mb-2">
                    성함 <span className="text-[#e6483d]">*</span>
                  </label>
                  <input 
                    type="text"
                    placeholder="이름을 입력해주세요"
                    className="w-full px-3 py-2 border border-[#dee0e3] rounded-xl text-sm placeholder:text-[#0d1126]/40"
                    style={{ height: '40px' }}
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-[#14151a] font-medium text-sm leading-5 tracking-[-0.1px] mb-2">
                    소속 및 직책 <span className="text-[#e6483d]">*</span>
                  </label>
                  <input 
                    type="text"
                    placeholder="소속 및 직책을 입력해주세요"
                    className="w-full px-3 py-2 border border-[#dee0e3] rounded-xl text-sm placeholder:text-[#0d1126]/40"
                    style={{ height: '40px' }}
                  />
                </div>
              </div>

              {/* Second Row */}
              <div className="flex gap-6">
                <div className="flex-1">
                  <label className="block text-[#14151a] font-medium text-sm leading-5 tracking-[-0.1px] mb-2">
                    연락처 <span className="text-[#e6483d]">*</span>
                  </label>
                  <input 
                    type="tel"
                    placeholder="연락처를 입력해주세요"
                    className="w-full px-3 py-2 border border-[#dee0e3] rounded-xl text-sm placeholder:text-[#0d1126]/40"
                    style={{ height: '40px' }}
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-[#14151a] font-medium text-sm leading-5 tracking-[-0.1px] mb-2">
                    이메일 <span className="text-[#e6483d]">*</span>
                  </label>
                  <input 
                    type="email"
                    placeholder="이메일을 입력해주세요"
                    className="w-full px-3 py-2 border border-[#dee0e3] rounded-xl text-sm placeholder:text-[#0d1126]/40"
                    style={{ height: '40px' }}
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-[#14151a] font-medium text-sm leading-5 tracking-[-0.1px] mb-2">
                  문의 사항 <span className="text-[#e6483d]">*</span>
                </label>
                <input 
                  type="text"
                  placeholder="문의 내용을 작성해주세요"
                  className="w-full px-3 py-2 border border-[#dee0e3] rounded-xl text-sm placeholder:text-[#0d1126]/40"
                  style={{ height: '40px' }}
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="bg-gradient-to-r from-[#1a3a6f] to-[#399084] text-white font-medium text-base leading-6 tracking-[-0.2px] rounded-xl"
                style={{ width: '99px', height: '48px' }}
              >
                문의하기
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer - positioned at y:1978 as per Figma */}
      <footer className="absolute" style={{ top: '1978px', left: '0px', width: '1440px', height: '388px' }}>
        {/* Newsletter Section */}
        <div className="bg-[#f7f7f8]" style={{ height: '168px' }}>
          <div className="flex items-center justify-between px-20 py-10">
            <div>
              <h3 className="text-[#14151a] font-medium text-xl leading-7 tracking-[-0.2px] mb-2">
                Subscribe to our newsletter
              </h3>
              <p className="text-[#0f1324]/60 font-normal text-base leading-6 tracking-[-0.2px]">
                Get a summary of what we've shipped during the last month, behind the scenes updates, and team picks.
              </p>
            </div>
            <div className="flex gap-2">
              <input 
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-[#dee0e3] rounded-xl text-sm placeholder:text-[#0d1126]/40"
                style={{ width: '240px', height: '40px' }}
              />
              <button className="bg-[#14151a] text-white px-6 py-2 rounded-xl text-sm font-medium" style={{ height: '40px' }}>
                Get early access
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="bg-white" style={{ height: '240px' }}>
          <div className="flex justify-between px-20 py-10">
            {/* Logo */}
            <div className="flex items-center">
              <div style={{ width: '160px', height: '40px' }}>
                <img src="/logo.png" alt="Ecoable" className="h-full" />
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex gap-24">
              <div>
                <h4 className="text-[#0f1324]/60 font-medium text-sm leading-5 tracking-[-0.1px] mb-4">Ecoable</h4>
                <ul className="space-y-2">
                  <li><a href="/ecoable" className="text-[#14151a] font-medium text-sm leading-5 tracking-[-0.1px]">ecoable 소개</a></li>
                  <li><a href="/ecoable/culture" className="text-[#14151a] font-medium text-sm leading-5 tracking-[-0.1px]">ecoable스러움</a></li>
                  <li><a href="/contact" className="text-[#14151a] font-medium text-sm leading-5 tracking-[-0.1px]">찾아오시는 길</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-[#0f1324]/60 font-medium text-sm leading-5 tracking-[-0.1px] mb-4">What we do</h4>
                <ul className="space-y-2">
                  <li><a href="/what-we-do" className="text-[#14151a] font-medium text-sm leading-5 tracking-[-0.1px]">제품환경파트</a></li>
                  <li><a href="/what-we-do" className="text-[#14151a] font-medium text-sm leading-5 tracking-[-0.1px]">환경정책파트</a></li>
                  <li><a href="/what-we-do" className="text-[#14151a] font-medium text-sm leading-5 tracking-[-0.1px]">자원순환파트</a></li>
                  <li><a href="/what-we-do" className="text-[#14151a] font-medium text-sm leading-5 tracking-[-0.1px]">기후변화대응파트</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-[#0f1324]/60 font-medium text-sm leading-5 tracking-[-0.1px] mb-4">Portfolio</h4>
                <ul className="space-y-2">
                  <li><a href="/portfolio" className="text-[#14151a] font-medium text-sm leading-5 tracking-[-0.1px]">LCA(전과정평가)</a></li>
                  <li><a href="/portfolio" className="text-[#14151a] font-medium text-sm leading-5 tracking-[-0.1px]">EPD 인증대응</a></li>
                  <li><a href="/portfolio" className="text-[#14151a] font-medium text-sm leading-5 tracking-[-0.1px]">기후변화대응</a></li>
                  <li><a href="/portfolio" className="text-[#14151a] font-medium text-sm leading-5 tracking-[-0.1px]">환경정책 및 보건환경</a></li>
                  <li><a href="/client-company" className="text-[#14151a] font-medium text-sm leading-5 tracking-[-0.1px]">고객사</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="bg-white border-t border-gray-200" style={{ height: '148px' }}>
          <div className="flex justify-between items-end px-20 py-8">
            <div className="space-y-1">
              <p className="text-[#0d1126]/40 font-medium text-sm leading-5 tracking-[-0.1px]">
                04976 서울특별시 광진구 자양로 216 파인캐슬, 201호
              </p>
              <p className="text-[#0d1126]/40 font-medium text-sm leading-5 tracking-[-0.1px]">
                대표전화 | 02-6959-8885
              </p>
              <p className="text-[#0d1126]/40 font-medium text-sm leading-5 tracking-[-0.1px]">
                팩스 | 070-4327-7279
              </p>
              <p className="text-[#0d1126]/40 font-medium text-sm leading-5 tracking-[-0.1px]">
                이메일 | info@ppm.co.kr
              </p>
              <p className="text-[#0d1126]/40 font-medium text-sm leading-5 tracking-[-0.1px]">
                © ecoable CO. 2016
              </p>
            </div>
            
            <div className="flex gap-2">
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 