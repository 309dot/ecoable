'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function EcoablePage() {
  const [activeTab, setActiveTab] = useState('company');

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
              <Link href="/ecoable" className="text-white text-base font-medium bg-gradient-to-r from-[#1A3A6F] to-[#399084] px-6 py-3 rounded-[999px]">
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
              <Link href="/contact" className="text-white text-base font-medium hover:bg-white/10 px-6 py-3 rounded-[999px] transition-all">
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {/* Page Title */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full pt-8">
          <h1 className="text-white font-inter font-bold text-6xl leading-tight tracking-tight mb-4">
            에코에이블컨설팅(주)
          </h1>
          <p className="text-white font-inter font-medium text-2xl tracking-wide">
            환경과 경제의 조화, 새로운 내일을 설계합니다
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="px-20 py-8 border-b border-gray-200">
        <div className="flex justify-center space-x-8">
          <button
            onClick={() => setActiveTab('company')}
            className={`px-8 py-4 rounded-3xl text-lg font-bold transition-all ${
              activeTab === 'company'
                ? 'bg-gradient-to-r from-[#1A3A6F] to-[#399084] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            회사 소개
          </button>
          <button
            onClick={() => setActiveTab('organization')}
            className={`px-8 py-4 rounded-3xl text-lg font-bold transition-all ${
              activeTab === 'organization'
                ? 'bg-gradient-to-r from-[#1A3A6F] to-[#399084] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            조직도
          </button>
        </div>
      </section>

      {/* Tab Content */}
      {activeTab === 'company' && (
        <section className="px-20 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Company Overview */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                지속가능한 미래를 설계하는 전문 컨설팅 기업
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                에코에이블컨설팅(주)는 환경과 경제의 균형 있는 발전을 추구하며, 
                고객의 지속가능한 성장을 지원하는 전문 컨설팅 서비스를 제공합니다.
              </p>
            </div>

            {/* Mission, Vision, Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Mission */}
              <div className="bg-white border border-gray-200 rounded-3xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1A3A6F] to-[#399084] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  환경과 경제의 조화를 통해 지속가능한 미래를 설계하고, 
                  고객의 성공적인 변화를 지원합니다.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white border border-gray-200 rounded-3xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1A3A6F] to-[#399084] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  환경 분야 최고의 전문성을 바탕으로 
                  고객과 함께 성장하는 글로벌 컨설팅 기업이 되겠습니다.
                </p>
              </div>

              {/* Values */}
              <div className="bg-white border border-gray-200 rounded-3xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1A3A6F] to-[#399084] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Values</h3>
                <p className="text-gray-600 leading-relaxed">
                  전문성, 신뢰성, 혁신성을 바탕으로 
                  고객과 사회의 지속가능한 발전에 기여합니다.
                </p>
              </div>
            </div>

            {/* Company Strengths */}
            <div className="bg-gradient-to-r from-[#1A3A6F] to-[#399084] rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold text-center mb-12">우리의 강점</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">10+</div>
                  <div className="text-lg">년간의 전문 경험</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">100+</div>
                  <div className="text-lg">프로젝트 수행</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-lg">고객사 협력</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">4</div>
                  <div className="text-lg">전문 파트 운영</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'organization' && (
        <section className="px-20 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">조직 구조</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                전문성과 효율성을 바탕으로 한 체계적인 조직 운영
              </p>
            </div>

            {/* Organization Chart */}
            <div className="space-y-8">
              {/* CEO */}
              <div className="flex justify-center">
                <div className="bg-gradient-to-r from-[#1A3A6F] to-[#399084] text-white rounded-3xl px-8 py-6 text-center">
                  <div className="text-2xl font-bold">대표이사</div>
                  <div className="text-lg mt-2">CEO</div>
                </div>
              </div>

              {/* Departments */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white border border-gray-200 rounded-3xl p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">제품환경파트</h3>
                  <p className="text-gray-600 text-sm">LCA, 녹색제품 인증</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-3xl p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">환경정책파트</h3>
                  <p className="text-gray-600 text-sm">정책 컨설팅, 통합관리</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-3xl p-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">자원순환파트</h3>
                  <p className="text-gray-600 text-sm">순환경제, 폐기물 관리</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-3xl p-6 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">기후변화대응파트</h3>
                  <p className="text-gray-600 text-sm">온실가스, 탄소중립</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA Section */}
      <section className="bg-gray-50 px-20 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            지속가능한 미래를 함께 만들어가겠습니다
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            환경 과제 해결을 위한 전문 컨설팅이 필요하시다면 언제든 연락해 주세요
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/contact" className="bg-gradient-to-r from-[#1A3A6F] to-[#399084] text-white px-8 py-4 rounded-3xl text-lg font-bold hover:shadow-lg transition-all">
              문의하기
            </Link>
            <button className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-3xl text-lg font-bold hover:border-gray-400 transition-all">
              회사 소개서 다운로드
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 