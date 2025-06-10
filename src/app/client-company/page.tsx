import Link from 'next/link';

export default function ClientCompanyPage() {
  const clientLogos = [
    { name: 'A전자', logo: 'A전자' },
    { name: 'B화학', logo: 'B화학' },
    { name: 'C자동차', logo: 'C자동차' },
    { name: 'D건설', logo: 'D건설' },
    { name: 'E시청', logo: 'E시청' },
    { name: 'F그룹', logo: 'F그룹' },
    { name: 'G산업', logo: 'G산업' },
    { name: 'H기업', logo: 'H기업' },
  ];

  const successStories = [
    {
      title: "A전자 ESG 경영체계 구축",
      category: "ESG 컨설팅",
      description: "글로벌 전자기업의 ESG 경영체계 구축 및 지속가능경영 보고서 작성 지원으로 ESG 평가 등급 대폭 상승",
      results: ["ESG 평가 등급 B+ → A-", "탄소배출량 20% 감축", "녹색제품 인증 5개 취득"],
      period: "2023년 6월 - 12월",
      color: "blue"
    },
    {
      title: "B화학 순환경제 전환",
      category: "자원순환",
      description: "석유화학 제조업체의 순환경제 전환을 위한 폐기물 관리 시스템 구축 및 재활용 프로세스 최적화",
      results: ["폐기물 재활용률 85% 달성", "운영비용 30% 절감", "친환경 제품라인 확대"],
      period: "2022년 3월 - 2023년 2월",
      color: "green"
    },
    {
      title: "C자동차 탄소중립 로드맵",
      category: "기후변화대응",
      description: "자동차 제조업체의 2050 탄소중립 목표 달성을 위한 단계별 실행 계획 수립 및 실행 지원",
      results: ["2030년 중간목표 수립", "RE100 가입 완료", "전동화 로드맵 구축"],
      period: "2023년 1월 - 8월",
      color: "red"
    }
  ];

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
              <Link href="/portfolio" className="text-white text-base font-medium hover:bg-white/10 px-6 py-3 rounded-[999px] transition-all">
                Portfolio
              </Link>
              <Link href="/client-company" className="text-white text-base font-medium bg-gradient-to-r from-[#1A3A6F] to-[#399084] px-6 py-3 rounded-[999px]">
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
            Client Company
          </h1>
          <p className="text-white font-inter font-medium text-2xl tracking-wide">
            신뢰받는 파트너, 함께 성장하는 기업들
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="px-20 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            다양한 산업 분야의 고객사와 함께합니다
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-16">
            대기업부터 중견기업, 공공기관까지 다양한 고객사의 환경 과제를 성공적으로 해결하며 
            지속가능한 미래를 함께 만들어가고 있습니다.
          </p>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {clientLogos.map((client, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-md transition-all">
                <div className="w-full h-20 flex items-center justify-center">
                  <div className="text-2xl font-bold text-gray-700">{client.logo}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Partnership Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-xl text-gray-600">협력 고객사</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-xl text-gray-600">재계약률</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-xl text-gray-600">년간의 신뢰</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-gray-50 px-20 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">고객 성공 사례</h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              에코에이블컨설팅과 함께한 고객사들의 성공 스토리를 확인해보세요
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 hover:shadow-lg transition-all">
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-${story.color}-100 text-${story.color}-700`}>
                    {story.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{story.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{story.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">주요 성과</h4>
                  <ul className="space-y-2">
                    {story.results.map((result, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
                        <div className={`w-2 h-2 bg-${story.color}-500 rounded-full`}></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-sm text-gray-500">
                  <span className="font-medium">프로젝트 기간: </span>
                  {story.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              에코에이블컨설팅과의 파트너십 혜택
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              전문성과 경험을 바탕으로 고객사의 성공을 지원합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">검증된 전문성</h3>
              <p className="text-gray-600">4개 전문 분야의 깊이 있는 지식과 풍부한 경험</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">맞춤형 솔루션</h3>
              <p className="text-gray-600">고객사의 특성과 요구사항에 최적화된 솔루션 제공</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">지속적 지원</h3>
              <p className="text-gray-600">프로젝트 완료 후에도 지속적인 관리 및 지원</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">빠른 대응</h3>
              <p className="text-gray-600">신속한 의사결정과 효율적인 프로젝트 진행</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-gradient-to-r from-[#1A3A6F] to-[#399084] px-20 py-16">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-3xl font-bold mb-6">
            지속가능한 성장을 위한 파트너가 되어드리겠습니다
          </h3>
          <p className="text-xl mb-8 opacity-90">
            에코에이블컨설팅과 함께 환경 경영의 새로운 가능성을 발견하세요
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/contact" className="bg-white text-[#1A3A6F] px-8 py-4 rounded-3xl text-lg font-bold hover:bg-gray-100 transition-all">
              파트너십 문의
            </Link>
            <button className="bg-white/10 backdrop-blur-md border-2 border-white text-white px-8 py-4 rounded-3xl text-lg font-bold hover:bg-white/20 transition-all">
              성공 사례집 다운로드
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 