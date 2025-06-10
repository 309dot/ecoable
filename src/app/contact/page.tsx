'use client';

import { useState } from 'react';
import Navigation from "@/components/Navigation";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    phone: '',
    email: '',
    inquiry: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 문의하기 로직 구현
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white font-pretendard" style={{ width: '1440px', height: '2894px' }}>
      {/* Navigation - positioned at y:16 as per Figma */}
      <div className="relative z-10 pt-4">
        <Navigation />
      </div>

      {/* Main Content Container - positioned exactly as in Figma */}
      <main className="relative" style={{ top: '110px', left: '80px', width: '1280px', height: '2364px' }}>
        
        {/* Title Section - positioned at y:142 as per Figma */}
        <div className="absolute" style={{ top: '32px', width: '1280px', height: '168px' }}>
          <h1 
            className="text-[#14151a] font-bold leading-[72px] tracking-[-1.7px]"
            style={{ 
              fontSize: '64px',
              width: '896px',
              height: '144px'
            }}
          >
            ecoable스러운 사람들이 직접 {'\n'}만들어가는 ecoable스러운공간
          </h1>
          
          {/* Description section - positioned at x:960, y:142 */}
          <div className="absolute" style={{ top: '0px', left: '960px', width: '320px', height: '168px' }}>
            <h2 
              className="text-[#0f1324]/60 font-bold text-xl leading-[28px] tracking-[-0.2px] mb-4"
            >
              안녕하세요. ecoable입니다! 
            </h2>
            <p 
              className="text-[#0f1324]/60 font-medium leading-[24px] tracking-[-0.2px]"
              style={{ fontSize: '16px' }}
            >
              Ecoable스러운 사람들이 함께 모여, 스스로 만들어가는 Ecoable스러운 공간. 서로의 다름을 존중하고, 새로움을 두려워하지 않으며, 오늘보다 더 나은 내일을 위해 함께 성장하는 우리의 특별한 터전입니다.
            </p>
          </div>
        </div>

        {/* Main Image Section - positioned at y:142 as per Figma */}
        <div 
          className="absolute bg-gray-200 rounded-3xl overflow-hidden"
          style={{ 
            top: '142px', 
            width: '1280px', 
            height: '480px',
            backgroundImage: 'url("/Desktop_main_01.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-10 left-8">
            <h3 className="text-white font-bold text-3xl leading-[36px] tracking-[-0.5px] mb-4">
              LCA(전과정평가)
            </h3>
            <div className="absolute top-10 right-8 max-w-lg">
              <p className="text-white font-medium text-base leading-[24px] tracking-[-0.2px]">
                녹색제품, 친환경제품 생산은 우리 사회의 가치를 한 단계 높이는 기업과 소비자 간의 보이지 않는 약속입니다. 지속가능한 생산과 소비의 연결을 통해 제품을 통한 사회의 지속가능발전이 현실화 될 수 있습니다. 에코에이블컨설팅(주)는 전과정평가, 탄소발자국, 물발자국, Eco-efficiency 등의 평가 기법을 통해 제품의 지속가능성에 대한 진단을 하고 에코디자인을 통한 녹색제품 및 친환경인증 획득을 지원하고 있습니다. 또한 기업의 자발적인 전과정평가 수행을 지원하고 각 기업별로 특화된 결과물 활용을 돕기 위해 LCA TOOL LCABLE&apos;을 지속적으로 개발 • 보급 중에 있습니다.
              </p>
            </div>
          </div>
        </div>

        {/* Office Introduction Section - positioned at y:658 as per Figma */}
        <div className="absolute" style={{ top: '658px', width: '1280px', height: '84px' }}>
          <h2 className="text-[#14151a] font-bold text-3xl leading-[36px] tracking-[-0.5px]">
            ecoable 사무실 소개
          </h2>
        </div>

        {/* Image Gallery Section - positioned at y:766 as per Figma */}
        <div className="absolute" style={{ top: '766px', width: '1280px', height: '1184px' }}>
          {/* Row 1 - 4 equal images */}
          <div className="flex gap-8 mb-8">
            <div className="w-[302px] h-[278px] bg-gray-200 rounded-3xl"></div>
            <div className="w-[302px] h-[278px] bg-gray-200 rounded-3xl"></div>
            <div className="w-[302px] h-[278px] bg-gray-200 rounded-3xl"></div>
            <div className="w-[302px] h-[278px] bg-gray-200 rounded-3xl"></div>
          </div>
          
          {/* Row 2 - 2 wide images */}
          <div className="flex gap-8 mb-8">
            <div className="w-[628px] h-[278px] bg-gray-200 rounded-3xl"></div>
            <div className="w-[628px] h-[278px] bg-gray-200 rounded-3xl"></div>
          </div>
          
          {/* Row 3 - 2 wide images */}
          <div className="flex gap-8 mb-8">
            <div className="w-[628px] h-[278px] bg-gray-200 rounded-3xl"></div>
            <div className="w-[628px] h-[278px] bg-gray-200 rounded-3xl"></div>
          </div>
          
          {/* Row 4 - 4 equal images */}
          <div className="flex gap-8">
            <div className="w-[302px] h-[278px] bg-gray-200 rounded-3xl"></div>
            <div className="w-[302px] h-[278px] bg-gray-200 rounded-3xl"></div>
            <div className="w-[302px] h-[278px] bg-gray-200 rounded-3xl"></div>
            <div className="w-[302px] h-[278px] bg-gray-200 rounded-3xl"></div>
          </div>
        </div>

        {/* Location Section - positioned at y:1974 as per Figma */}
        <div className="absolute bg-white" style={{ top: '1974px', width: '1280px', height: '408px' }}>
          <h2 className="text-[#14151a] font-bold text-3xl leading-[36px] tracking-[-0.5px] mb-6">
            찾아오시는 길
          </h2>
          
          <div className="flex gap-8">
            <div className="w-[628px]">
              <p className="text-[#14151a] font-normal text-base leading-[24px] tracking-[-0.2px]">
                녹색제품, 친환경제품 생산은 우리 사회의 가치를 한 단계 높이는 기업과 소비자 간의 보이지 않는 약속입니다. 지속가능한 생산과 소비의 연결을 통해 제품을 통한 사회의 지속가능발전이 현실화 될 수 있습니다. 에코에이블컨설팅(주)는 전과정평가, 탄소발자국, 물발자국, Eco-efficiency 등의 평가 기법을 통해 제품의 지속가능성에 대한 진단을 하고 에코디자인을 통한 녹색제품 및 친환경인증 획득을 지원하고 있습니다.
              </p>
            </div>
            
            {/* Map placeholder */}
            <div className="w-[896px] h-[360px] bg-[#e9eaec] rounded-3xl flex items-center justify-center">
              <span className="text-[#14151a]/60 text-lg">지도 영역</span>
            </div>
          </div>
        </div>

        {/* Contact Form Section - positioned at y:2406 as per Figma */}
        <div className="absolute bg-white" style={{ top: '2406px', width: '1280px', height: '360px' }}>
          <h2 className="text-[#14151a] font-bold text-3xl leading-[36px] tracking-[-0.5px] mb-6">
            문의하기
          </h2>
          
          <div className="flex gap-8">
            <div className="w-[628px]">
              <p className="text-[#14151a] font-normal text-base leading-[24px] tracking-[-0.2px]">
                녹색제품, 친환경제품 생산은 우리 사회의 가치를 한 단계 높이는 기업과 소비자 간의 보이지 않는 약속입니다. 지속가능한 생산과 소비의 연결을 통해 제품을 통한 사회의 지속가능발전이 현실화 될 수 있습니다. 에코에이블컨설팅(주)는 전과정평가, 탄소발자국, 물발자국, Eco-efficiency 등의 평가 기법을 통해 제품의 지속가능성에 대한 진단을 하고 에코디자인을 통한 녹색제품 및 친환경인증 획득을 지원하고 있습니다.
              </p>
            </div>
            
            {/* Contact Form - positioned at x:704 as per Figma */}
            <div className="w-[896px]">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Row: Name and Position */}
                <div className="flex gap-4">
                  <div className="w-[440px]">
                    <label className="block text-[#14151a] font-medium text-sm leading-5 tracking-[-0.1px] mb-2">
                      성함 <span className="text-[#e6483d]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="성함을 입력해주세요"
                      className="w-full h-12 px-4 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                  <div className="w-[440px]">
                    <label className="block text-[#14151a] font-medium text-sm leading-5 tracking-[-0.1px] mb-2">
                      소속 및 직책 <span className="text-[#e6483d]">*</span>
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      placeholder="소속 및 직책을 입력해주세요"
                      className="w-full h-12 px-4 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                </div>

                {/* Second Row: Phone and Email */}
                <div className="flex gap-4">
                  <div className="w-[440px]">
                    <label className="block text-[#14151a] font-medium text-sm leading-5 tracking-[-0.1px] mb-2">
                      연락처 <span className="text-[#e6483d]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="연락처를 입력해주세요"
                      className="w-full h-12 px-4 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                  <div className="w-[440px]">
                    <label className="block text-[#14151a] font-medium text-sm leading-5 tracking-[-0.1px] mb-2">
                      이메일 <span className="text-[#e6483d]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="이메일을 입력해주세요"
                      className="w-full h-12 px-4 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                </div>

                {/* Third Row: Inquiry */}
                <div>
                  <label className="block text-[#14151a] font-medium text-sm leading-5 tracking-[-0.1px] mb-2">
                    문의 사항 <span className="text-[#e6483d]">*</span>
                  </label>
                  <textarea
                    name="inquiry"
                    value={formData.inquiry}
                    onChange={handleInputChange}
                    placeholder="문의내용을 입력해주세요"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#1a3a6f] to-[#399084] text-white px-6 py-3 rounded-xl font-medium text-base leading-[24px] tracking-[-0.2px] hover:opacity-90 transition-opacity"
                  style={{ width: '99px', height: '48px' }}
                >
                  문의하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section - positioned at y:2506 as per Figma */}
      <footer className="absolute" style={{ top: '2506px', width: '1440px', height: '388px' }}>
        {/* Newsletter Section */}
        <div className="bg-[#f7f7f8]" style={{ height: '168px' }}>
          <div className="flex items-center justify-between px-20 py-10" style={{ height: '88px', marginTop: '40px' }}>
            <div>
              <h3 className="text-[#14151a] font-medium text-xl leading-[28px] tracking-[-0.2px] mb-2">
                Subscribe to our newsletter
              </h3>
              <p className="text-[#0f1324]/60 text-base leading-[24px] tracking-[-0.2px]">
                Get a summary of what we've shipped during the last month, behind the scenes updates, and team picks.
              </p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-60 h-10 px-3 py-2 border border-[#dee0e3] rounded-xl text-sm placeholder:text-[#0d1126]/40 focus:outline-none focus:border-[#14151a]"
              />
              <button className="bg-[#14151a] text-white px-6 py-2 rounded-xl text-sm font-medium">
                Get early access
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Section */}
        <div className="bg-white" style={{ height: '240px' }}>
          <div className="flex justify-between px-20 py-10">
            <div>
              <div className="w-40 h-10 mb-6">
                <span className="text-[#14151a] text-xl font-semibold">에코에이블컨설팅(주)</span>
              </div>
            </div>
            
            <div className="flex gap-24">
              {/* Ecoable Column */}
              <div>
                <h4 className="text-[#0f1324]/60 font-medium text-sm mb-3">Ecoable</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-[#14151a] hover:opacity-60">ecoable 소개</a></li>
                  <li><a href="#" className="text-[#14151a] hover:opacity-60">ecoable스러움</a></li>
                  <li><a href="#" className="text-[#14151a] hover:opacity-60">찾아오시는 길</a></li>
                </ul>
              </div>

              {/* What we do Column */}
              <div>
                <h4 className="text-[#0f1324]/60 font-medium text-sm mb-3">What we do</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-[#14151a] hover:opacity-60">제품환경파트</a></li>
                  <li><a href="#" className="text-[#14151a] hover:opacity-60">환경정책파트</a></li>
                  <li><a href="#" className="text-[#14151a] hover:opacity-60">자원순환파트</a></li>
                  <li><a href="#" className="text-[#14151a] hover:opacity-60">기후변화대응파트</a></li>
                </ul>
              </div>

              {/* Portfolio Column */}
              <div>
                <h4 className="text-[#0f1324]/60 font-medium text-sm mb-3">Portfolio</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-[#14151a] hover:opacity-60">LCA(전과정평가)</a></li>
                  <li><a href="#" className="text-[#14151a] hover:opacity-60">EPD 인증대응</a></li>
                  <li><a href="#" className="text-[#14151a] hover:opacity-60">기후변화대응</a></li>
                  <li><a href="#" className="text-[#14151a] hover:opacity-60">환경정책 및 보건환경</a></li>
                  <li><a href="#" className="text-[#14151a] hover:opacity-60">고객사</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="bg-white border-t border-[#dee0e3]/20" style={{ height: '148px' }}>
          <div className="flex items-center justify-between px-20 py-6">
            <div className="text-sm text-gray-600 space-y-1">
              <p>에코에이블컨설팅㈜</p>
              <p>대표이사: 김성준</p>
              <p>사업자등록번호: 123-45-67890</p>
              <p>주소: 서울특별시 강남구 테헤란로 123, 4층</p>
              <p>이메일: info@ecoable.co.kr</p>
              <p>전화: 02-1234-5678</p>
            </div>
            
            <div className="flex gap-2">
              <div className="w-6 h-6 bg-gray-200 rounded"></div>
              <div className="w-6 h-6 bg-gray-200 rounded"></div>
              <div className="w-6 h-6 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>

        <div className="bg-white border-t border-[#dee0e3]/20" style={{ height: '148px' }}>
          <div className="flex items-center justify-between px-20 py-6">
            <div className="text-sm text-gray-600 space-y-1">
              <p>© 2024 에코에이블컨설팅㈜. All rights reserved.</p>
            </div>
            
            <div className="flex gap-2">
              <div className="w-6 h-6 bg-gray-200 rounded"></div>
              <div className="w-6 h-6 bg-gray-200 rounded"></div>
              <div className="w-6 h-6 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 