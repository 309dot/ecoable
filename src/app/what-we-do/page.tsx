'use client';

import Navigation from '@/components/Navigation';

export default function WhatWeDoPage() {
  return (
    <div className="bg-white font-pretendard" style={{ width: '1440px', height: '3276px' }}>
      {/* Navigation - positioned at y:16 as per Figma */}
      <div className="relative z-10 pt-4">
        <Navigation />
      </div>

      {/* Main Content Container - positioned exactly as in Figma */}
      <main className="relative">
        {/* Tab Menu Section - positioned at y:142 as per Figma */}
        <div className="absolute" style={{ top: '142px', left: '80px', width: '1280px', height: '80px' }}>
          <div className="flex items-center" style={{ top: '16px', position: 'relative' }}>
            {/* Tab Menu Container - x:80, y:158, width:292px, height:48px */}
            <div 
              className="bg-black/8 rounded-xl flex"
              style={{ width: '292px', height: '48px' }}
            >
              {/* 01 - 전과정정책본부 (Active) */}
              <button 
                className="bg-white border border-[#dee0e3] rounded-full flex items-center justify-center px-6"
                style={{ width: '142px', height: '48px' }}
              >
                <span className="text-[#14151a] font-medium text-base leading-6 tracking-[-0.2px]">
                  전과정정책본부
                </span>
              </button>
              
              {/* 02 - 전과정순환본부 */}
              <button 
                className="flex items-center justify-center px-6 rounded-xl"
                style={{ width: '142px', height: '48px' }}
              >
                <span className="text-[#0f1324]/60 font-medium text-base leading-6 tracking-[-0.2px]">
                  전과정순환본부
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Image Section - positioned at y:246 as per Figma */}
        <div className="absolute" style={{ top: '246px', left: '80px', width: '1280px', height: '480px' }}>
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
                style={{ fontSize: '30px', width: '360px' }}
              >
                전과정정책본부
              </h1>
              
              {/* Description - positioned at x:392, y:40 from container */}
              <div className="absolute top-8" style={{ left: '392px', width: '856px' }}>
                <div className="text-[#0f1324]/60 font-medium text-sm leading-[20px] tracking-[-0.2px]">
                  녹색제품, 친환경제품 생산은 우리 사회의 가치를 한 단계 높이는 기업과 소비자 간의 보이지 않는 약속입니다. 지속가능한 생산과 소비의 연결을 통해 제품을 통한 사회의 지속가능발전이 현실화 될 수 있습니다. 에코에이블컨설팅(주)는 전과정평가, 탄소발자국, 물발자국, Eco-efficiency 등의 평가 기법을 통해 제품의 지속가능성에 대한 진단을 하고 에코디자인을 통한 녹색제품 및 친환경인증 획득을 지원하고 있습니다. 또한 기업의 자발적인 전과정평가 수행을 지원하고 각 기업별로 특화된 결과물 활용을 돕기 위해 LCA TOOL LCABLE&apos;을 지속적으로 개발 • 보급 중에 있습니다.
                  <br /><br />
                  환경영향평가는 개발사업의 계획단계에서 당해 사업의 시행이 환경에 미치는 영향을 미리 조사·예측·평가하여 해로운 환경영향을 피하거나 제거 또는 감소시킬 수 있는 방안을 마련하도록 하는 제도입니다.
                  <br /><br />
                  주요 업무 영역:<br />
                  • 도시개발사업, 산업단지조성사업 등 각종 개발사업의 환경영향평가<br />
                  • 환경영향평가서 작성 및 협의<br />
                  • 사후환경영향조사<br />
                  • 소규모환경영향평가<br />
                  • 전략환경영향평가
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Task Areas Section - positioned at y:750 as per Figma */}
        <div className="absolute" style={{ top: '750px', left: '80px', width: '1280px', height: '568px' }}>
          {/* Title - positioned at y:24 from container */}
          <div style={{ top: '24px', position: 'relative' }}>
            <h2 
              className="text-[#14151a] font-bold leading-9 tracking-[-0.5px] mb-11"
              style={{ fontSize: '30px', width: '360px' }}
            >
              과제 수행 분야
            </h2>
            
            {/* Description */}
            <p className="text-[#14151a] font-normal text-base leading-6 tracking-[-0.2px] mb-12" style={{ width: '628px' }}>
              녹색제품, 친환경제품 생산은 우리 사회의 가치를 한 단계 높이는 기업과 소비자 간의 보이지 않는 약속입니다. 지속가능한 생산과 소비의 연결을 통해 제품을 통한 사회의 지속가능발전이 현실화 될 수 있습니다. 에코에이블컨설팅(주)는 전과정평가, 탄소발자국, 물발자국, Eco-efficiency 등의 평가 기법을 통해 제품의 지속가능성에 대한 진단을 하고 에코디자인을 통한 녹색제품 및 친환경인증 획득을 지원하고 있습니다. 또한 기업의 자발적인 전과정평가 수행을 지원하고 각 기업별로 특화된 결과물 활용을 돕기 위해 LCA TOOL LCABLE'을 지속적으로 개발 • 보급 중에 있습니다.
            </p>
          </div>

          {/* Task List - positioned at x:384 from container start */}
          <div className="absolute top-0" style={{ left: '384px', width: '896px' }}>
            {/* Task Items - each 58px height with 8px gap */}
            {[
              '제품 환경전과정평가(LCA)를 통한 환경성 진단 컨설팅',
              '제품 환경전과정평가를 위한 LCA TOOL LCABLE&apos; 개발 및 기업 보급', 
              '국가 LCI 데이터베이스 구축',
              '제품 탄소발자국(Carbon footprint), 물발자국(Water footprint) 평가',
              '제품 환경경제효율성(Eco-efficiency) 평가',
              '제품 에코디자인, 친환경설계 컨설팅',
              '국내 제품 탄소성적표지, 환경성적표지 인증 컨설팅',
              '국외 제품 환경성 인증 컨설팅 (영국 Carbon footprint 인증 및 북미 Carbon free, UL 인증, International EPD 5)'
            ].map((task, index) => (
              <div 
                key={index}
                className="border-b border-[#dee0e3] flex items-center"
                style={{ height: '58px', width: '896px', top: `${index * 66}px`, position: 'absolute' }}
              >
                <span className="text-black font-normal text-lg leading-[26px] tracking-[-0.2px]">
                  {task}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members Section - positioned at y:1342 as per Figma */}
        <div className="absolute" style={{ top: '1342px', left: '80px', width: '1280px', height: '1062px' }}>
          {/* Title */}
          <div style={{ top: '24px', position: 'relative' }}>
            <h2 
              className="text-[#14151a] font-bold leading-9 tracking-[-0.5px] mb-11"
              style={{ fontSize: '30px', width: '360px' }}
            >
              파트 구성원
            </h2>
            
            {/* Description */}
            <p className="text-[#14151a] font-normal text-base leading-6 tracking-[-0.2px] mb-12" style={{ width: '628px' }}>
              녹색제품, 친환경제품 생산은 우리 사회의 가치를 한 단계 높이는 기업과 소비자 간의 보이지 않는 약속입니다. 지속가능한 생산과 소비의 연결을 통해 제품을 통한 사회의 지속가능발전이 현실화 될 수 있습니다. 에코에이블컨설팅(주)는 전과정평가, 탄소발자국, 물발자국, Eco-efficiency 등의 평가 기법을 통해 제품의 지속가능성에 대한 진단을 하고 에코디자인을 통한 녹색제품 및 친환경인증 획득을 지원하고 있습니다. 또한 기업의 자발적인 전과정평가 수행을 지원하고 각 기업별로 특화된 결과물 활용을 돕기 위해 LCA TOOL LCABLE'을 지속적으로 개발 • 보급 중에 있습니다.
            </p>
          </div>

          {/* Profile Cards - positioned at x:384 from container start */}
          <div className="absolute top-0" style={{ left: '384px', width: '896px' }}>
            {/* First Row - y:0 */}
            <div className="absolute top-0 flex gap-8">
              {[1, 2, 3].map((index) => (
                <div 
                  key={index}
                  className="bg-white border border-[#dee0e3] rounded-3xl overflow-hidden"
                  style={{ width: '288px', height: '499px' }}
                >
                  {/* Image */}
                  <div className="p-6">
                    <div 
                      className="bg-gray-200 rounded-2xl mb-6"
                      style={{ width: '240px', height: '221px' }}
                    >
                      {/* Profile image placeholder */}
                    </div>
                    
                    {/* Text Content */}
                    <div className="space-y-3">
                      {/* Name */}
                      <h3 className="text-[#14151a] font-bold text-lg leading-[26px] tracking-[-0.2px]">
                        장 은 실
                      </h3>
                      
                      {/* Position */}
                      <p className="text-[#14151a] font-normal text-base leading-6 tracking-[-0.2px]">
                        책임연구원 / 환경성적표지인증 선임심사원
                      </p>
                      
                      {/* Contact Info */}
                      <div className="space-y-1 pt-3">
                        <p className="text-[#0f1324]/60 font-normal text-sm leading-5 tracking-[-0.1px]">
                          ejang1105@ecoable.co.kr
                        </p>
                        <p className="text-[#0f1324]/60 font-normal text-sm leading-5 tracking-[-0.1px]">
                          02-6959-9775
                        </p>
                      </div>
                      
                      {/* Comment */}
                      <div className="border-t border-[#dee0e3] pt-3">
                        <p className="text-[#14151a] font-normal text-base leading-6 tracking-[-0.2px]">
                          "무엇이든 잡으려하면 달아나고 꽉 쥐고 있는다고 내 것은 아니다."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Second Row - y:515 */}
            <div className="absolute flex gap-8" style={{ top: '515px' }}>
              {[4, 5, 6].map((index) => (
                <div 
                  key={index}
                  className="bg-white border border-[#dee0e3] rounded-3xl overflow-hidden"
                  style={{ width: '288px', height: '499px' }}
                >
                  {/* Same structure as above */}
                  <div className="p-6">
                    <div 
                      className="bg-gray-200 rounded-2xl mb-6"
                      style={{ width: '240px', height: '221px' }}
                    >
                      {/* Profile image placeholder */}
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-[#14151a] font-bold text-lg leading-[26px] tracking-[-0.2px]">
                        장 은 실
                      </h3>
                      
                      <p className="text-[#14151a] font-normal text-base leading-6 tracking-[-0.2px]">
                        책임연구원 / 환경성적표지인증 선임심사원
                      </p>
                      
                      <div className="space-y-1 pt-3">
                        <p className="text-[#0f1324]/60 font-normal text-sm leading-5 tracking-[-0.1px]">
                          ejang1105@ecoable.co.kr
                        </p>
                        <p className="text-[#0f1324]/60 font-normal text-sm leading-5 tracking-[-0.1px]">
                          02-6959-9775
                        </p>
                      </div>
                      
                      <div className="border-t border-[#dee0e3] pt-3">
                        <p className="text-[#14151a] font-normal text-base leading-6 tracking-[-0.2px]">
                          "무엇이든 잡으려하면 달아나고 꽉 쥐고 있는다고 내 것은 아니다."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form Section - positioned at y:2428 as per Figma */}
        <div className="absolute" style={{ top: '2428px', left: '80px', width: '1280px', height: '360px' }}>
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

      {/* Footer - positioned at y:2888 as per Figma */}
      <footer className="absolute" style={{ top: '2888px', left: '0px', width: '1440px', height: '388px' }}>
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
        <div className="bg-white" style={{ height: '220px' }}>
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
                  <li><a href="#" className="text-[#14151a] font-medium text-sm leading-5 tracking-[-0.1px]">ecoable 소개</a></li>
                  <li><a href="#" className="text-[#14151a] font-medium text-sm leading-5 tracking-[-0.1px]">ecoable스러움</a></li>
                  <li><a href="#" className="text-[#14151a] font-medium text-sm leading-5 tracking-[-0.1px]">찾아오시는 길</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-[#0f1324]/60 font-medium text-sm leading-5 tracking-[-0.1px] mb-4">What we do</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-[#14151a] font-medium text-sm leading-5 tracking-[-0.1px]">제품환경파트</a></li>
                  <li><a href="#" className="text-[#14151a] font-medium text-sm leading-5 tracking-[-0.1px]">환경정책파트</a></li>
                  <li><a href="#" className="text-[#14151a] font-medium text-sm leading-5 tracking-[-0.1px]">자원순환파트</a></li>
                  <li><a href="#" className="text-[#14151a] font-medium text-sm leading-5 tracking-[-0.1px]">기후변화대응파트</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-[#0f1324]/60 font-medium text-sm leading-5 tracking-[-0.1px] mb-4">Portfolio</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-[#14151a] font-medium text-sm leading-5 tracking-[-0.1px]">LCA(전과정평가)</a></li>
                  <li><a href="#" className="text-[#14151a] font-medium text-sm leading-5 tracking-[-0.1px]">EPD 인증대응</a></li>
                  <li><a href="#" className="text-[#14151a] font-medium text-sm leading-5 tracking-[-0.1px]">기후변화대응</a></li>
                  <li><a href="#" className="text-[#14151a] font-medium text-sm leading-5 tracking-[-0.1px]">환경정책 및 보건환경</a></li>
                  <li><a href="#" className="text-[#14151a] font-medium text-sm leading-5 tracking-[-0.1px]">고객사</a></li>
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