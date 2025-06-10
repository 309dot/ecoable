'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function EcoablePage() {
  const [activeTab, setActiveTab] = useState('company');

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Header Section with Navigation */}
      <section className="relative w-full h-[400px] overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A3A6F] to-[#399084]" />

        {/* Navigation */}
        <nav className="relative z-10 px-20 py-6">
          <div className="flex items-center justify-between bg-white/10 backdrop-blur-md rounded-[999px] px-8 py-4">
            <div className="text-white text-xl font-semibold">
              에코에이블컨설팅(주)
            </div>
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-white text-base font-medium hover:bg-white/10 px-6 py-3 rounded-[999px] transition-all">
                Home
              </Link>
              <Link href="/ecoable" className="text-white text-base font-medium bg-white/20 px-6 py-3 rounded-[999px]">
                Ecoable
              </Link>
              <Link href="/what-we-do" className="text-white text-base font-medium hover:bg-white/10 px-6 py-3 rounded-[999px] transition-all">
                What we do
              </Link>
              <Link href="/portfolio" className="text-white text-base font-medium hover:bg-white/10 px-6 py-3 rounded-[999px] transition-all">
                Portfolio
              </Link>
              <Link href="/client-company" className="text-white text-base font-medium hover:bg-white/10 px-6 py-3 rounded-[999px] transition-all">
                Client Company
              </Link>
              <Link href="/team" className="text-white text-base font-medium hover:bg-white/10 px-6 py-3 rounded-[999px] transition-all">
                Team
              </Link>
              <Link href="/contact" className="text-white text-base font-medium hover:bg-white/10 px-6 py-3 rounded-[999px] transition-all">
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {/* Page Title */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full pt-8">
          <h1 className="text-white font-bold text-[64px] leading-[72px] tracking-[-2.656%] mb-4">
            Ecoable
          </h1>
          <p className="text-white font-medium text-2xl leading-8 tracking-[-1.5%]">
            지속가능한 미래를 만드는 환경 전문 컨설팅
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="px-20 py-8 border-b border-gray-200">
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setActiveTab('company')}
            className={`px-8 py-3 rounded-[999px] text-base font-bold transition-all ${
              activeTab === 'company'
                ? 'bg-gradient-to-r from-[#1A3A6F] to-[#399084] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            회사 소개
          </button>
          <button
            onClick={() => setActiveTab('vision')}
            className={`px-8 py-3 rounded-[999px] text-base font-bold transition-all ${
              activeTab === 'vision'
                ? 'bg-gradient-to-r from-[#1A3A6F] to-[#399084] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            비전 & 미션
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`px-8 py-3 rounded-[999px] text-base font-bold transition-all ${
              activeTab === 'history'
                ? 'bg-gradient-to-r from-[#1A3A6F] to-[#399084] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            연혁
          </button>
        </div>
      </section>

      {/* Tab Content */}
      <section className="px-20 py-16">
        <div className="max-w-7xl mx-auto">
          {activeTab === 'company' && (
            <div className="space-y-16">
              {/* Company Introduction */}
              <div className="text-center">
                <h2 className="text-[#14151A] font-bold text-5xl leading-[56px] tracking-[-2.083%] mb-6">
                  에코에이블컨설팅(주)
                </h2>
                <p className="text-[#0F1324]/70 font-normal text-xl leading-8 tracking-[-1.25%] max-w-4xl mx-auto mb-12">
                  환경과 경제의 조화를 통해 지속가능한 미래를 설계하는<br />
                  대한민국 대표 환경 전문 컨설팅 기업입니다
                </p>
              </div>

              {/* Company Values */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-8 bg-gray-50 rounded-3xl">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-[#14151A] font-bold text-2xl mb-4">전문성</h3>
                  <p className="text-[#0F1324]/70 text-base leading-6">
                    4개 전문 분야의 깊이 있는<br />
                    전문 지식과 풍부한 경험
                  </p>
                </div>

                <div className="text-center p-8 bg-gray-50 rounded-3xl">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-[#14151A] font-bold text-2xl mb-4">지속가능성</h3>
                  <p className="text-[#0F1324]/70 text-base leading-6">
                    환경과 경제의 균형을 통한<br />
                    지속가능한 성장 추구
                  </p>
                </div>

                <div className="text-center p-8 bg-gray-50 rounded-3xl">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-[#14151A] font-bold text-2xl mb-4">혁신</h3>
                  <p className="text-[#0F1324]/70 text-base leading-6">
                    창의적이고 혁신적인<br />
                    솔루션 개발과 제공
                  </p>
                </div>
              </div>

              {/* Company Overview */}
              <div className="bg-gradient-to-r from-[#1A3A6F] to-[#399084] rounded-3xl p-12 text-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="font-bold text-3xl mb-6">
                      환경 전문성으로 미래를 그립니다
                    </h3>
                    <p className="text-xl leading-8 opacity-90 mb-8">
                      에코에이블컨설팅은 제품환경, 환경정책, 자원순환, 기후변화대응 4개 전문 분야를 통해 
                      기업과 기관의 지속가능한 발전을 지원합니다.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-lg">전문 컨설턴트와 체계적인 프로세스</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-lg">맞춤형 솔루션과 지속적인 사후관리</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-lg">법규 준수와 인증 획득 지원</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">15+</div>
                      <div className="text-lg opacity-90">년간 경험</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">100+</div>
                      <div className="text-lg opacity-90">프로젝트</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">50+</div>
                      <div className="text-lg opacity-90">파트너사</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">4</div>
                      <div className="text-lg opacity-90">전문 분야</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'vision' && (
            <div className="space-y-16">
              {/* Vision Section */}
              <div className="text-center">
                <h2 className="text-[#14151A] font-bold text-5xl leading-[56px] tracking-[-2.083%] mb-6">
                  비전 & 미션
                </h2>
                <p className="text-[#0F1324]/70 font-normal text-xl leading-8 tracking-[-1.25%] max-w-4xl mx-auto">
                  지속가능한 미래를 위한 환경 솔루션으로<br />
                  더 나은 세상을 만들어갑니다
                </p>
              </div>

              {/* Vision & Mission Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-gradient-to-br from-[#1A3A6F] to-[#2B4C8C] rounded-3xl p-12 text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-8">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-3xl mb-6">Vision</h3>
                  <p className="text-xl leading-8 opacity-95">
                    환경과 경제가 조화롭게 발전하는 지속가능한 사회를 실현하여, 
                    미래 세대가 더 나은 환경에서 살아갈 수 있는 세상을 만든다.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#399084] to-[#4BA896] rounded-3xl p-12 text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-8">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-3xl mb-6">Mission</h3>
                  <p className="text-xl leading-8 opacity-95">
                    전문적인 환경 컨설팅 서비스를 통해 기업과 기관의 환경 경영을 지원하고, 
                    혁신적인 환경 솔루션으로 지속가능한 발전에 기여한다.
                  </p>
                </div>
              </div>

              {/* Core Values */}
              <div>
                <h3 className="text-[#14151A] font-bold text-4xl text-center mb-12">핵심 가치</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center p-8 bg-white border border-gray-200 rounded-3xl hover:shadow-lg transition-all">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-xl mb-4">신뢰성</h4>
                    <p className="text-gray-600">정확하고 투명한 정보 제공</p>
                  </div>
                  <div className="text-center p-8 bg-white border border-gray-200 rounded-3xl hover:shadow-lg transition-all">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-xl mb-4">지속가능성</h4>
                    <p className="text-gray-600">환경과 경제의 균형 추구</p>
                  </div>
                  <div className="text-center p-8 bg-white border border-gray-200 rounded-3xl hover:shadow-lg transition-all">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-xl mb-4">혁신성</h4>
                    <p className="text-gray-600">창의적 솔루션 개발</p>
                  </div>
                  <div className="text-center p-8 bg-white border border-gray-200 rounded-3xl hover:shadow-lg transition-all">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V6a1 1 0 012 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-xl mb-4">협력</h4>
                    <p className="text-gray-600">파트너십 기반 성장</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="space-y-16">
              {/* History Section */}
              <div className="text-center">
                <h2 className="text-[#14151A] font-bold text-5xl leading-[56px] tracking-[-2.083%] mb-6">
                  연혁
                </h2>
                <p className="text-[#0F1324]/70 font-normal text-xl leading-8 tracking-[-1.25%] max-w-4xl mx-auto">
                  지속적인 성장과 혁신을 통해 환경 컨설팅<br />
                  분야의 선두주자로 발전해온 발자취입니다
                </p>
              </div>

              {/* Timeline */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#1A3A6F] to-[#399084]"></div>
                
                <div className="space-y-12">
                  <div className="flex items-center">
                    <div className="flex-1 text-right pr-8">
                      <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
                        <h3 className="font-bold text-2xl text-[#1A3A6F] mb-4">2024</h3>
                        <h4 className="font-bold text-xl mb-3">사업 확장 및 전문성 강화</h4>
                        <p className="text-gray-600">ESG 컨설팅 서비스 확대 및 탄소중립 전문 팀 신설</p>
                      </div>
                    </div>
                    <div className="w-6 h-6 bg-[#1A3A6F] rounded-full border-4 border-white z-10 relative"></div>
                    <div className="flex-1 pl-8"></div>
                  </div>

                  <div className="flex items-center">
                    <div className="flex-1 pr-8"></div>
                    <div className="w-6 h-6 bg-[#2B4C8C] rounded-full border-4 border-white z-10 relative"></div>
                    <div className="flex-1 text-left pl-8">
                      <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
                        <h3 className="font-bold text-2xl text-[#2B4C8C] mb-4">2022</h3>
                        <h4 className="font-bold text-xl mb-3">환경부 지정 전문기관 등록</h4>
                        <p className="text-gray-600">환경영향평가 및 LCA 평가 전문기관으로 공식 지정</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="flex-1 text-right pr-8">
                      <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
                        <h3 className="font-bold text-2xl text-[#3D6EA3] mb-4">2020</h3>
                        <h4 className="font-bold text-xl mb-3">4개 전문 부서 체계 구축</h4>
                        <p className="text-gray-600">제품환경, 환경정책, 자원순환, 기후변화대응 부서 설립</p>
                      </div>
                    </div>
                    <div className="w-6 h-6 bg-[#3D6EA3] rounded-full border-4 border-white z-10 relative"></div>
                    <div className="flex-1 pl-8"></div>
                  </div>

                  <div className="flex items-center">
                    <div className="flex-1 pr-8"></div>
                    <div className="w-6 h-6 bg-[#4F8FBA] rounded-full border-4 border-white z-10 relative"></div>
                    <div className="flex-1 text-left pl-8">
                      <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
                        <h3 className="font-bold text-2xl text-[#4F8FBA] mb-4">2018</h3>
                        <h4 className="font-bold text-xl mb-3">ISO 14001 인증 컨설팅 사업 시작</h4>
                        <p className="text-gray-600">환경경영시스템 구축 및 인증 지원 서비스 개시</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="flex-1 text-right pr-8">
                      <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
                        <h3 className="font-bold text-2xl text-[#399084] mb-4">2015</h3>
                        <h4 className="font-bold text-xl mb-3">에코에이블컨설팅(주) 설립</h4>
                        <p className="text-gray-600">환경 전문 컨설팅을 목표로 회사 설립 및 사업 개시</p>
                      </div>
                    </div>
                    <div className="w-6 h-6 bg-[#399084] rounded-full border-4 border-white z-10 relative"></div>
                    <div className="flex-1 pl-8"></div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-gray-50 rounded-3xl p-12">
                <h3 className="text-[#14151A] font-bold text-3xl text-center mb-12">주요 성과</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#1A3A6F] mb-4">100+</div>
                    <div className="text-lg text-gray-600 font-medium">완료 프로젝트</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#399084] mb-4">50+</div>
                    <div className="text-lg text-gray-600 font-medium">협력 기업</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#1A3A6F] mb-4">15+</div>
                    <div className="text-lg text-gray-600 font-medium">전문 인력</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#399084] mb-4">95%</div>
                    <div className="text-lg text-gray-600 font-medium">고객 만족도</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#1A3A6F] to-[#399084] px-20 py-16">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="font-bold text-3xl mb-6">
            에코에이블컨설팅과 함께하세요
          </h3>
          <p className="text-xl leading-8 mb-8 opacity-90">
            전문적인 환경 컨설팅으로 귀하의 지속가능한 성장을 지원합니다
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/contact" className="bg-white text-[#1A3A6F] px-8 py-4 rounded-[999px] font-bold text-lg hover:bg-gray-100 transition-all">
              상담 신청
            </Link>
            <Link href="/what-we-do" className="border-2 border-white text-white px-8 py-4 rounded-[999px] font-bold text-lg hover:bg-white/10 transition-all">
              서비스 보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 