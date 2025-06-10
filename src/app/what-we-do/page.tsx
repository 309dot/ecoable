'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function WhatWeDoPage() {
  const [activeTab, setActiveTab] = useState('services');

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section with Navigation */}
      <section className="relative w-full h-[400px] overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A3A6F] to-[#399084]"></div>

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
              <Link href="/ecoable" className="text-white text-base font-medium hover:bg-white/10 px-6 py-3 rounded-[999px] transition-all">
                Ecoable
              </Link>
              <Link href="/what-we-do" className="text-white text-base font-medium bg-gradient-to-r from-[#1A3A6F] to-[#399084] px-6 py-3 rounded-[999px]">
                What we do
              </Link>
              <Link href="/portfolio" className="text-white text-base font-medium hover:bg-white/10 px-6 py-3 rounded-[999px] transition-all">
                Portfolio
              </Link>
              <Link href="/client-company" className="text-white text-base font-medium hover:bg-white/10 px-6 py-3 rounded-[999px] transition-all">
                Client Company
              </Link>
              <Link href="/contact" className="text-white text-base font-medium hover:bg-white/10 px-6 py-3 rounded-[999px] transition-all">
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {/* Page Title */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full pt-8">
          <h1 className="text-white font-inter font-bold text-6xl leading-tight tracking-tight mb-4">
            What we do
          </h1>
          <p className="text-white font-inter font-medium text-2xl tracking-wide">
            4개 전문 파트의 통합 솔루션
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="px-20 py-8 border-b border-gray-200">
        <div className="flex justify-center space-x-8">
          <button
            onClick={() => setActiveTab('services')}
            className={`px-8 py-4 rounded-3xl text-lg font-bold transition-all ${
              activeTab === 'services'
                ? 'bg-gradient-to-r from-[#1A3A6F] to-[#399084] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            서비스 소개
          </button>
          <button
            onClick={() => setActiveTab('process')}
            className={`px-8 py-4 rounded-3xl text-lg font-bold transition-all ${
              activeTab === 'process'
                ? 'bg-gradient-to-r from-[#1A3A6F] to-[#399084] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            업무 프로세스
          </button>
        </div>
      </section>

      {/* Tab Content */}
      {activeTab === 'services' && (
        <section className="px-20 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Services Overview */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                4개 전문 부문의 통합 환경 솔루션
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                제품환경, 환경정책, 자원순환, 기후변화대응 등 4개 전문 파트를 통해 
                고객의 다양한 환경 과제를 체계적으로 해결합니다.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              
              {/* 제품환경파트 */}
              <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-all">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">제품환경파트</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      LCA 기반 진단부터 녹색제품 인증까지 전 과정을 지원
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        전과정평가(LCA) 및 탄소발자국 산정
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        녹색제품 인증 및 환경성적표지 취득
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        친환경 제품 개발 컨설팅
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 환경정책파트 */}
              <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-all">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">환경정책파트</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      컨설팅과 통합관리 솔루션을 통해 지속가능한 사회 구현을 지원
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        환경영향평가 및 사전환경성검토
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        환경관리시스템(ISO 14001) 구축
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        환경규제 대응 및 정책 컨설팅
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 자원순환파트 */}
              <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-all">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">자원순환파트</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      자원을 다시 보는 시선, 자원순환의 지속가능한 흐름을 설계
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-gray-600">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        순환경제 전환 전략 수립
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        폐기물 관리 및 재활용 시스템 구축
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        자원효율성 향상 컨설팅
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 기후변화대응파트 */}
              <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-all">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">기후변화대응파트</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      제도 수립부터 온실가스 산정 컨설팅까지 전략적 대응을 지원
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-gray-600">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        온실가스 인벤토리 구축 및 검증
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        탄소중립 로드맵 수립
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        ESG 경영 지원 및 보고서 작성
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Integration Benefits */}
            <div className="bg-gradient-to-r from-[#1A3A6F] to-[#399084] rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">통합 솔루션의 장점</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2">통합 관리</h4>
                  <p className="text-sm opacity-90">4개 부문의 전문성을 하나의 프로젝트로 통합 관리</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2">전문성</h4>
                  <p className="text-sm opacity-90">각 분야별 전문가의 깊이 있는 지식과 경험</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2">효율성</h4>
                  <p className="text-sm opacity-90">시너지 효과를 통한 최적의 솔루션 제공</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'process' && (
        <section className="px-20 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">체계적인 업무 프로세스</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                단계별 체계적 접근을 통해 최적의 결과를 도출합니다
              </p>
            </div>

            {/* Process Steps */}
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "프로젝트 분석",
                  description: "고객의 요구사항과 현황을 정확히 파악하고 프로젝트 범위를 설정합니다.",
                  details: ["현황 조사 및 분석", "목표 설정", "프로젝트 계획 수립"],
                  color: "blue"
                },
                {
                  step: "02", 
                  title: "전문팀 구성",
                  description: "프로젝트 특성에 맞는 4개 부문 전문가로 최적의 팀을 구성합니다.",
                  details: ["전문가 선정", "역할 분담", "협업 체계 구축"],
                  color: "green"
                },
                {
                  step: "03",
                  title: "솔루션 개발",
                  description: "각 부문의 전문성을 바탕으로 통합적인 환경 솔루션을 개발합니다.",
                  details: ["기술적 검토", "솔루션 설계", "타당성 검증"],
                  color: "purple"
                },
                {
                  step: "04",
                  title: "실행 및 관리",
                  description: "개발된 솔루션을 체계적으로 실행하고 지속적으로 관리합니다.",
                  details: ["단계별 실행", "성과 모니터링", "지속적 개선"],
                  color: "red"
                }
              ].map((process, index) => (
                <div key={index} className="flex items-start gap-8">
                  <div className={`w-20 h-20 bg-${process.color}-100 rounded-full flex items-center justify-center flex-shrink-0`}>
                    <span className={`text-2xl font-bold text-${process.color}-600`}>{process.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{process.title}</h3>
                    <p className="text-gray-600 text-lg mb-4 leading-relaxed">{process.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {process.details.map((detail, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-2xl p-4">
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 bg-${process.color}-500 rounded-full`}></div>
                            <span className="text-gray-700 font-medium">{detail}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Process Benefits */}
            <div className="mt-16 bg-gray-50 rounded-3xl p-12">
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">프로세스의 특장점</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-600">맞춤형 솔루션</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">4개</div>
                  <div className="text-gray-600">전문 부문 협업</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
                  <div className="text-gray-600">지속적 관리</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">∞</div>
                  <div className="text-gray-600">장기적 파트너십</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA Section */}
      <section className="bg-gradient-to-r from-[#1A3A6F] to-[#399084] px-20 py-16">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-3xl font-bold mb-6">
            환경 과제 해결의 파트너가 되겠습니다
          </h3>
          <p className="text-xl mb-8 opacity-90">
            4개 전문 부문의 통합 솔루션으로 고객의 성공을 지원합니다
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/contact" className="bg-white text-[#1A3A6F] px-8 py-4 rounded-3xl text-lg font-bold hover:bg-gray-100 transition-all">
              프로젝트 문의
            </Link>
            <button className="bg-white/10 backdrop-blur-md border-2 border-white text-white px-8 py-4 rounded-3xl text-lg font-bold hover:bg-white/20 transition-all">
              서비스 소개서 다운로드
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 