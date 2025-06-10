'use client';

import Link from 'next/link';
import { useState } from 'react';

type Project = {
  category: string;
  title: string;
  description: string;
  year: string;
  client: string;
  color: string;
};

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('all');

  const projects = {
    all: [
      {
        category: "제품환경",
        title: "글로벌 전자제품 LCA 평가",
        description: "전과정평가를 통한 환경영향 최소화 및 녹색제품 인증 취득",
        year: "2023",
        client: "A전자",
        color: "blue"
      },
      {
        category: "환경정책",
        title: "도시 환경관리계획 수립",
        description: "지속가능한 도시 개발을 위한 종합 환경관리 전략 수립",
        year: "2023",
        client: "B시청",
        color: "green"
      },
      {
        category: "자원순환",
        title: "순환경제 전환 로드맵",
        description: "폐기물 제로를 위한 자원순환 시스템 구축 및 운영 계획",
        year: "2022",
        client: "C그룹",
        color: "purple"
      },
      {
        category: "기후변화대응",
        title: "탄소중립 달성 전략",
        description: "2050 탄소중립을 위한 단계별 감축 계획 및 실행 방안",
        year: "2023",
        client: "D기업",
        color: "red"
      }
    ],
    product: [
      {
        category: "제품환경",
        title: "글로벌 전자제품 LCA 평가",
        description: "전과정평가를 통한 환경영향 최소화 및 녹색제품 인증 취득",
        year: "2023",
        client: "A전자",
        color: "blue"
      },
      {
        category: "제품환경",
        title: "자동차 부품 탄소발자국 산정",
        description: "자동차 핵심 부품의 탄소발자국 산정 및 감축 방안 제시",
        year: "2022",
        client: "E자동차",
        color: "blue"
      }
    ],
    policy: [
      {
        category: "환경정책",
        title: "도시 환경관리계획 수립",
        description: "지속가능한 도시 개발을 위한 종합 환경관리 전략 수립",
        year: "2023",
        client: "B시청",
        color: "green"
      },
      {
        category: "환경정책",
        title: "환경영향평가 전략 수립",
        description: "대규모 개발사업의 환경영향 최소화를 위한 평가 및 저감방안",
        year: "2022",
        client: "F건설",
        color: "green"
      }
    ],
    circular: [
      {
        category: "자원순환",
        title: "순환경제 전환 로드맵",
        description: "폐기물 제로를 위한 자원순환 시스템 구축 및 운영 계획",
        year: "2022",
        client: "C그룹",
        color: "purple"
      },
      {
        category: "자원순환",
        title: "산업단지 폐기물 관리 시스템",
        description: "산업단지 내 효율적인 폐기물 관리 및 재활용 시스템 구축",
        year: "2023",
        client: "G산업단지",
        color: "purple"
      }
    ],
    climate: [
      {
        category: "기후변화대응",
        title: "탄소중립 달성 전략",
        description: "2050 탄소중립을 위한 단계별 감축 계획 및 실행 방안",
        year: "2023",
        client: "D기업",
        color: "red"
      },
      {
        category: "기후변화대응",
        title: "온실가스 인벤토리 구축",
        description: "기업 온실가스 배출량 산정 및 관리 시스템 구축",
        year: "2022",
        client: "H화학",
        color: "red"
      }
    ]
  };

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
              <Link href="/what-we-do" className="text-white text-base font-medium hover:bg-white/10 px-6 py-3 rounded-[999px] transition-all">
                What we do
              </Link>
              <Link href="/portfolio" className="text-white text-base font-medium bg-gradient-to-r from-[#1A3A6F] to-[#399084] px-6 py-3 rounded-[999px]">
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
            Portfolio
          </h1>
          <p className="text-white font-inter font-medium text-2xl tracking-wide">
            우리의 성공 사례와 프로젝트 경험
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="px-20 py-8 border-b border-gray-200">
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-3 rounded-3xl text-base font-bold transition-all ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-[#1A3A6F] to-[#399084] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            전체
          </button>
          <button
            onClick={() => setActiveTab('product')}
            className={`px-6 py-3 rounded-3xl text-base font-bold transition-all ${
              activeTab === 'product'
                ? 'bg-gradient-to-r from-[#1A3A6F] to-[#399084] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            제품환경
          </button>
          <button
            onClick={() => setActiveTab('policy')}
            className={`px-6 py-3 rounded-3xl text-base font-bold transition-all ${
              activeTab === 'policy'
                ? 'bg-gradient-to-r from-[#1A3A6F] to-[#399084] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            환경정책
          </button>
          <button
            onClick={() => setActiveTab('circular')}
            className={`px-6 py-3 rounded-3xl text-base font-bold transition-all ${
              activeTab === 'circular'
                ? 'bg-gradient-to-r from-[#1A3A6F] to-[#399084] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            자원순환
          </button>
          <button
            onClick={() => setActiveTab('climate')}
            className={`px-6 py-3 rounded-3xl text-base font-bold transition-all ${
              activeTab === 'climate'
                ? 'bg-gradient-to-r from-[#1A3A6F] to-[#399084] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            기후변화대응
          </button>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="px-20 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Portfolio Overview */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {activeTab === 'all' ? '전체 프로젝트' : 
               activeTab === 'product' ? '제품환경 프로젝트' :
               activeTab === 'policy' ? '환경정책 프로젝트' :
               activeTab === 'circular' ? '자원순환 프로젝트' :
               '기후변화대응 프로젝트'}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              {activeTab === 'all' 
                ? '에코에이블컨설팅이 수행한 다양한 환경 프로젝트들을 통해 우리의 전문성과 실무 경험을 확인해보세요.'
                : `${activeTab === 'product' ? '제품환경' : 
                     activeTab === 'policy' ? '환경정책' :
                     activeTab === 'circular' ? '자원순환' : '기후변화대응'} 분야의 전문 프로젝트 사례입니다.`
              }
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {projects[activeTab as keyof typeof projects].map((project: Project, index: number) => (
              <div key={index} className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-lg transition-all">
                <div className={`h-48 bg-${project.color}-100 flex items-center justify-center`}>
                  <div className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 bg-${project.color}-500 rounded-full flex items-center justify-center`}>
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        {project.color === 'blue' && <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />}
                        {project.color === 'green' && <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />}
                        {project.color === 'purple' && <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />}
                        {project.color === 'red' && <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />}
                      </svg>
                    </div>
                    <span className={`text-${project.color}-700 font-bold text-lg`}>{project.category}</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-${project.color}-100 text-${project.color}-700`}>
                      {project.year}년 완료
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500">클라이언트</span>
                      <div className="font-bold text-gray-900">{project.client}</div>
                    </div>
                    <button className={`text-${project.color}-600 font-medium hover:underline flex items-center gap-2`}>
                      자세히 보기
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Portfolio Stats */}
          <div className="bg-gradient-to-r from-[#1A3A6F] to-[#399084] rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold text-center mb-12">프로젝트 성과</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-lg opacity-90">완료 프로젝트</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-lg opacity-90">협력 고객사</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-lg opacity-90">고객 만족도</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-lg opacity-90">년간의 경험</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-gray-50 px-20 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            귀하의 프로젝트를 성공으로 이끌어드리겠습니다
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            다양한 분야의 프로젝트 경험을 바탕으로 최적의 솔루션을 제공합니다
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/contact" className="bg-gradient-to-r from-[#1A3A6F] to-[#399084] text-white px-8 py-4 rounded-3xl text-lg font-bold hover:shadow-lg transition-all">
              프로젝트 상담
            </Link>
            <button className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-3xl text-lg font-bold hover:border-gray-400 transition-all">
              포트폴리오 다운로드
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 