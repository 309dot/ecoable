'use client'

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Toast from '@/components/Toast';
import Footer from '@/components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { memberImageSrc, type Member } from '@/lib/types';


// 구성원 데이터는 Supabase(public.members)에서 내려받아 props로 전달됩니다.
// 관리자 페이지(/admin/members)에서 수정합니다.
type Profile = Member;

// 과제 수행 분야 데이터
const policyTaskAreas = [
  "제품 전과정평가 (LCA ; Life Cycle Assessment) 수행 (고객사 요구 대응, 규제 대응, 제품 환경성 진단)",
  "제품 PCF (Product Carbon Foot Print) 산정 수행",
  "LCA 및 PCF 수행 산정 Tool 개발 (LCA Tool \"LCABLE\" 개발)",
  "기업 LCA 내재화 컨설팅 (내부 인력 양성, S/W 구매 및 사용법 교육, 이론 및 실습 교육 등)",
  "LCA IT System 개발 컨설팅",
  "LCA 수행 결과를 통한 주요이슈 규명 및 친환경 제품 개발을 위한 방안 마련",
  "ESPR, 에코디자인 대응",
  "제품 전과정 비용평가 (LCC ; Life Cycle Costing) 수행",
  "환경부 환경성적표지인증 컨설팅",
  "국외 EPD 인증 컨설팅 (영국 Carbon Trust, International EPD, 노르웨이 EPD, UL EPD등 인증 대응)",
  "ISCC EU, ISCC PLUS 등의 인증 대응 컨설팅",
  "제품 물발자국 산정 수행",
  "GLEC 인증 대응 컨설팅",
  "환경관련 정책/제도/사업 운영 지원 사업 및 발전방안 연구",
  "Scope3 온실가스 배출량 산정 및 SBTi 대응 컨설팅",
  "온실가스 인벤토리 구축 컨설팅",
  "기업 CDP 대응 컨설팅",
  "제품 환경경제효율성 (Eco-Efficiency) 평가"
];

// 전과정순환본부 과제 수행 분야 데이터
const circulationTaskAreas = [
  "국내 다양한 폐기물 재활용 활성화를 위한 정책 방안 도출 연구",
  "폐기물 배출 특성 및 유통 메커니즘 연구",
  "폐기물 배출량 예측 및 관련 통계기법 개발 연구",
  "순환경제 관련 대응 연구",
  "재활용성 향상, 폐기물 재활용에 대한 환경성평가 등 재활용 관련 다양한 분야의 연구",
  "생산자책임재활용제도 분담금, 지원금 산정 및 기타 폐기물 재활용 관련 경제성평가 수행",
  "폐전기폐전자제품 재활용 목표관리제 정책 입안 및 개선 관련 연구",
  "폐전기폐전자제품 재활용 관련, 해외 주요국 방문 및 관련 기관 미팅, 정보 교류",
  "폐기물 재활용에 따른 사회적 회피효과를 고려한 전과정평가(LCA) 수행 연구, S/W 구매 및 사용법 교육, 이론 및 실습 교육 등)"
];

interface WhatWeDoContentProps {
  policyProfiles: Profile[];
  circulationProfiles: Profile[];
}

// useSearchParams를 사용하므로 상위 page.tsx에서 Suspense로 감싸 렌더링합니다.
export default function WhatWeDoContent({
  policyProfiles,
  circulationProfiles,
}: WhatWeDoContentProps) {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<'policy' | 'circulation'>('policy');
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({
    message: '',
    type: 'success' as 'success' | 'error',
    isVisible: false
  });

  // 크롬 자동완성 스타일 방지용 공통 스타일
  const inputStyle = {
    backgroundColor: 'white',
    color: '#14151A',
    WebkitTextFillColor: '#14151A',
    WebkitBoxShadow: '0 0 0px 1000px white inset',
    transition: 'background-color 5000s ease-in-out 0s'
  };

  // URL 파라미터에서 탭 설정
  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'policy' || tab === 'circulation') {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        if (result.useMailto && result.mailtoLink) {
          // mailto 링크를 사용하는 경우
          window.location.href = result.mailtoLink;
          setToast({
            message: '이메일 클라이언트가 열립니다. 문의를 전송해주세요.',
            type: 'success',
            isVisible: true
          });
        } else {
          // 정상적으로 서버에서 전송된 경우
          setToast({
            message: '문의내용이 성공적으로 전송되었습니다.',
            type: 'success',
            isVisible: true
          });
        }
        
        // 폼 리셋
        setFormData({
          name: '',
          position: '',
          phone: '',
          email: '',
          message: ''
        });
      } else {
        setToast({
          message: result.error || '전송 중 오류가 발생했습니다.',
          type: 'error',
          isVisible: true
        });
      }
    } catch (error) {
      console.error('Submit error:', error);
      setToast({
        message: '전송 중 네트워크 오류가 발생했습니다.',
        type: 'error',
        isVisible: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  const whatWeDoTabs = [
    { key: 'policy', label: '전과정정책본부' },
    { key: 'circulation', label: '전과정순환본부' }
  ];

  // 각 탭별 데이터
  const policyData = {
    title: '전과정정책본부',
    subtitle: 'Life Cycle Policy Division',
    heroImage: '/images/img_bg_whatwedo1.jpg',
    description: (
      <>
        환경은 우리 세대의 과오로 인해 후대가 누릴 수 있는 권리를 빼앗을 수 있는 매우 중요한 문제입니다. 우리와 우리의 후대가 함께 누릴 수 있는 깨끗한  환경을 만들기 위해 전세계는 지속가능한발전을 위한 다양한 정책을 펼치고 있습니다. 우리나라 역시 기후변화, 자원순환, 제품환경, 대기/수계 오염, 환경보건 등 다양한 분야에 대한 정책 및 제도를 만들어 운영하고 있고, 이를 통해 국민들이 보다 나은 환경에서 살아 갈 수 있도록 하고 있습니다.<br/><br/>
        저희 에코에이블컨설팅㈜은 환경부에서 추진하는 다양한 환경관련 정책/제도/사업에 대한 컨설팅을 통해 이들의 타당성, 효율성을 평가하고 효과적인 사업이 이루어질 수 있도록 지원하며, 관련 기업 대응 컨설팅을 수행하고 있습니다. 또한 각 분야의 통합관리 TOOL 지원을 통하여 기업의 자발적 대응 솔루션을 제공하고 있습니다.
      </>
    ),
    taskAreas: policyTaskAreas,
    profiles: policyProfiles
  };

  const circulationData = {
    title: '전과정순환본부',
    subtitle: 'Life Cycle Circularity Division',
    heroImage: '/images/img_bg_whatwedo2.jpg',
    description: (
      <>
        수명이 있는 모든 것은 폐기 단계의 환경문제를 내포하고 있습니다. 이는 폐기물의 발생에 그치는 것이 아니라 자원의 재활용, 인간과 생태계에 미치는 영향, 나아가 전 지구적인 환경 이슈인 자원고갈, 지구온난화 등과도 밀접하게 연계되어 있습니다. 폐기물을 단순한 쓰레기가 아니라 또 다른 자원으로 인식하여 이를 순환활용 하는 것이 바로 자원순환의 첫걸음입니다. 또한 환경적, 경제적으로 적절한 자원순환이 이루어져야 합니다.<br/><br/>
        저희 에코에이블컨설팅㈜은 국가 자원순환 정책, 기업 및 기관의 자원순환 활동 등에 대해 다양한 연구 경험을 보유하고 있으며, 지속적인 모니터링을 운영 중에 있습니다. 또한 정부, 산업계, 학계, 시민단체 및 관련 전문가들과의 긴밀한 협조를 통해 자원순환에 대한 다양한 측면의 이해관계자 의견을 수렴하고 있습니다.<br/><br/>
        에코에이블컨설팅㈜은 자원순환형 사회, 지속가능한 사회의 구축을 위해 항상 힘쓰겠습니다.
      </>
    ),
    taskAreas: circulationTaskAreas,
    profiles: circulationProfiles
  };

  const activeData = activeTab === 'policy' ? policyData : circulationData;

  return (
    <div className="min-h-screen container-1440">
      {/* Navigation Section */}
      <Navigation theme="light" />

      <div className="nav-spacing">
        {/* Tab Menu Section - 왼쪽 정렬 */}
        <div className="w-full spacing-tab-bottom">
          <div className="w-full container-1440 mx-auto">
            <div className="flex justify-start overflow-x-auto scrollbar-none">
              <div className="bg-[rgba(10,15,41,0.08)] rounded-full p-0.5 flex flex-shrink-0 gap-1">
                {whatWeDoTabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key as 'policy' | 'circulation')}
                    className={`px-4 md:px-5 lg:px-6 py-2 md:py-2.5 rounded-full font-medium text-sm md:text-base whitespace-nowrap min-w-[80px] text-center transition-all duration-200 ${
                      activeTab === tab.key
                        ? 'bg-white border border-[#DEE0E3] text-[#14151A]'
                        : 'text-[rgba(15,19,36,0.6)]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="w-full hidden sm:block">
          <div className="w-full container-1440 mx-auto spacing-section">
            <div className="relative w-full h-96 rounded-[24px] overflow-hidden mb-6">
              <Image
                src={activeData.heroImage}
                alt={activeData.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute inset-0 flex flex-col xl:flex-row px-8">
                <div className="w-full xl:w-[360px] xl:mr-8 flex flex-col justify-start pt-8">
                  <div className="box-border content-stretch flex flex-col gap-1 items-start justify-center leading-[0] not-italic p-0 relative text-[#ffffff] text-left">
                    <div className="font-bold relative shrink-0 text-[30px] tracking-[-0.5px] w-[360px]">
                      <p className="block leading-[36px]">
                        {activeData.title}
                      </p>
                    </div>
                    <div className="font-normal relative shrink-0 text-[24px] tracking-[-0.3px] w-[360px]">
                      <p className="block leading-[32px]">
                        {activeData.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-end pb-8">
                  <p className="text-white font-medium text-sm leading-[1.5]">
                    {activeData.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Task Areas Section - Hero Section 바깥에 위치! */}
        <div className="flex flex-col xl:flex-row gap-6 mb-6 spacing-section">
          <div className="w-full xl:w-[360px]">
            <h2 className="text-[#14151A] text-title mb-2">
              과제 수행 분야
            </h2>
          </div>
          <div className="flex-1">
            <div className="space-y-0">
              {activeData.taskAreas.map((task, index) => (
                <div key={index} className="border-t border-[#DEE0E3] first:border-t-0 py-4">
                  <p className="text-[#000000] text-base md:text-sm">
                    {task}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Profiles Section */}
        <div className="flex flex-col xl:flex-row gap-6 mb-6 spacing-section">
          <div className="w-full xl:w-[360px]">
            <h2 className="text-[#14151A] text-title mb-2">
              구성원
            </h2>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-3 gap-3">
              {activeData.profiles.map((profile) => (
                <div
                  key={profile.id}
                  className="bg-white border border-[#DEE0E3] rounded-[24px] p-6 transition-all duration-300 hover:shadow-lg hover:shadow-gray-400/25 hover:-translate-y-1"
                >
                  <div
                    className="w-full mb-4 rounded-[12px] overflow-hidden mb-4"
                    style={{ aspectRatio: '1 / 1', width: '80%', margin: '0 auto 1rem auto' }}
                  >
                    {memberImageSrc(profile) ? (
                      <Image
                        src={memberImageSrc(profile)!}
                        alt={profile.name}
                        width={240}
                        height={240}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#F2F3F5]" />
                    )}
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-[#14151A] font-bold text-lg leading-[1.4] mb-1">
                        {profile.name}
                      </h3>
                      <p className="text-[#14151A] text-base leading-[1.5] mb-1">
                        {profile.position}
                      </p>
                      <p className="text-[rgba(15,19,36,0.6)] text-sm leading-[1.4] overflow-hidden" style={{ height: '96px' }}>
                        {profile.qualifications}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[rgba(15,19,36,0.6)] text-sm leading-[1.4]">
                        {profile.email}
                      </p>
                      <p className="text-[rgba(15,19,36,0.6)] text-sm leading-[1.4]">
                        {profile.phone}
                      </p>
                    </div>
                    <div className="border-t border-[#DEE0E3] pt-3">
                      <p className="text-[#14151A] text-base leading-[1.5] h-12 overflow-hidden">
                        {profile.motto}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="flex flex-col xl:flex-row gap-6 spacing-section">
          <div className="w-full xl:w-[360px]">
            <h2 className="text-[#14151A] text-title mb-2">
              문의하기
            </h2>
          </div>
          <div className="flex-1">
            <div className="rounded-[24px]">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block text-[#14151A] font-medium text-sm mb-2">
                      성함
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[rgba(13,17,38,0.4)]">
                        <Image
                          src="/images/common/lead-icon-6.svg"
                          alt="Person Icon"
                          width={20}
                          height={20}
                        />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="이름을 입력해주세요"
                        className="w-full pl-11 pr-3 py-3 border border-[#DEE0E3] rounded-[12px] text-sm text-[#14151A] placeholder:text-[rgba(13,17,38,0.4)]"
                        style={inputStyle}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <label className="block text-[#14151A] font-medium text-sm mb-2">
                      소속 및 직책
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[rgba(13,17,38,0.4)]">
                        <Image
                          src="/images/common/lead-icon-7.svg"
                          alt="Organization Icon"
                          width={20}
                          height={20}
                        />
                      </div>
                      <input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        placeholder="소속 및 직책을 입력해주세요"
                        className="w-full pl-11 pr-3 py-3 border border-[#DEE0E3] rounded-[12px] text-sm text-[#14151A] placeholder:text-[rgba(13,17,38,0.4)]"
                        style={inputStyle}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block text-[#14151A] font-medium text-sm mb-2">
                      연락처
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[rgba(13,17,38,0.4)]">
                        <Image
                          src="/images/common/lead-icon-8.svg"
                          alt="Phone Icon"
                          width={20}
                          height={20}
                        />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="연락처를 입력해주세요"
                        className="w-full pl-11 pr-3 py-3 border border-[#DEE0E3] rounded-[12px] text-sm text-[#14151A] placeholder:text-[rgba(13,17,38,0.4)]"
                        style={inputStyle}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <label className="block text-[#14151A] font-medium text-sm mb-2">
                      이메일
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[rgba(13,17,38,0.4)]">
                        <Image
                          src="/images/common/lead-icon-9.svg"
                          alt="Email Icon"
                          width={20}
                          height={20}
                        />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="이메일을 입력해주세요"
                        className="w-full pl-11 pr-3 py-3 border border-[#DEE0E3] rounded-[12px] text-sm text-[#14151A] placeholder:text-[rgba(13,17,38,0.4)]"
                        style={inputStyle}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-[#14151A] font-medium text-sm mb-2">
                    문의사항
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-3 w-5 h-5 text-[rgba(13,17,38,0.4)]">
                      <Image
                        src="/images/common/lead-icon-10.svg"
                        alt="Message Icon"
                        width={20}
                        height={20}
                      />
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="문의사항을 입력해주세요"
                      rows={6}
                      className="w-full pl-11 pr-3 py-3 border border-[#DEE0E3] rounded-[12px] text-sm text-[#14151A] placeholder:text-[rgba(13,17,38,0.4)] resize-none"
                      style={inputStyle}
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#1B376F] to-[#3A9284] text-white font-medium py-3 rounded-[12px] hover:opacity-90 transition-opacity"
                >
                  문의 보내기
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}