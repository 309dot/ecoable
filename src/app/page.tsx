import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A3A6F] to-[#399084]" />
        
        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between px-20 py-6">
          <div className="flex items-center backdrop-blur-md bg-white/10 rounded-[999px] px-8 py-4 w-full justify-between">
            {/* Logo */}
            <div className="text-white text-xl font-semibold">
              에코에이블컨설팅(주)
            </div>
            
            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-white text-base font-medium bg-white/20 px-6 py-3 rounded-[999px]">
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

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] text-center px-20">
          <h1 className="text-white font-bold text-[64px] leading-[72px] tracking-[-2.656%] mb-6">
            지속가능한 미래를<br />
            함께 만들어갑니다
          </h1>
          <p className="text-white font-medium text-2xl leading-8 tracking-[-1.5%] mb-12 max-w-3xl">
            환경 전문 컨설팅을 통해 기업의 지속가능성을 실현하고<br />
            녹색 경영의 새로운 가치를 창출합니다
          </p>
          
          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/contact" className="bg-white text-[#1A3A6F] px-8 py-4 rounded-[999px] font-bold text-lg hover:bg-gray-100 transition-all">
              상담 신청하기
            </Link>
            <Link href="/what-we-do" className="border-2 border-white text-white px-8 py-4 rounded-[999px] font-bold text-lg hover:bg-white/10 transition-all">
              서비스 알아보기
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#14151A] font-bold text-5xl leading-[56px] tracking-[-2.083%] mb-6">
              전문 서비스 영역
            </h2>
            <p className="text-[#0F1324]/70 font-normal text-lg leading-8 tracking-[-1.111%] max-w-3xl mx-auto">
              4개의 전문 분야를 통해 기업의 환경 경영 전략을 체계적으로 지원하며,<br />
              지속가능한 성장과 혁신을 실현합니다
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: 제품환경 */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-all group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-all">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-[#14151A] font-bold text-2xl leading-8 tracking-[-1.667%] mb-4">
                제품환경
              </h3>
              <p className="text-[#0F1324]/70 font-normal text-base leading-6 tracking-[-1.25%] mb-6">
                전과정평가(LCA)와 탄소발자국 산정을 통해 제품의 환경영향을 정량화하고 개선방안을 제시합니다.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-gray-600">• LCA 전과정평가</div>
                <div className="text-sm text-gray-600">• 탄소발자국 산정</div>
                <div className="text-sm text-gray-600">• 녹색제품 인증</div>
              </div>
            </div>

            {/* Card 2: 환경정책 */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-all group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-200 transition-all">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-[#14151A] font-bold text-2xl leading-8 tracking-[-1.667%] mb-4">
                환경정책
              </h3>
              <p className="text-[#0F1324]/70 font-normal text-base leading-6 tracking-[-1.25%] mb-6">
                환경 법규 대응과 정책 수립을 통해 기업의 환경 리스크를 관리하고 컴플라이언스를 보장합니다.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-gray-600">• 환경영향평가</div>
                <div className="text-sm text-gray-600">• ISO 14001 인증</div>
                <div className="text-sm text-gray-600">• 환경법규 대응</div>
              </div>
            </div>

            {/* Card 3: 자원순환 */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-all group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-all">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-[#14151A] font-bold text-2xl leading-8 tracking-[-1.667%] mb-4">
                자원순환
              </h3>
              <p className="text-[#0F1324]/70 font-normal text-base leading-6 tracking-[-1.25%] mb-6">
                순환경제 모델 구축과 폐기물 관리 시스템을 통해 자원의 효율적 활용을 극대화합니다.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-gray-600">• 순환경제 전략</div>
                <div className="text-sm text-gray-600">• 폐기물 관리</div>
                <div className="text-sm text-gray-600">• 재활용 시스템</div>
              </div>
            </div>

            {/* Card 4: 기후변화대응 */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-all group">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-200 transition-all">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-[#14151A] font-bold text-2xl leading-8 tracking-[-1.667%] mb-4">
                기후변화대응
              </h3>
              <p className="text-[#0F1324]/70 font-normal text-base leading-6 tracking-[-1.25%] mb-6">
                탄소중립 달성과 ESG 경영 전략을 통해 기업의 기후변화 대응 역량을 강화합니다.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-gray-600">• 탄소중립 전략</div>
                <div className="text-sm text-gray-600">• ESG 경영</div>
                <div className="text-sm text-gray-600">• 온실가스 관리</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#1A3A6F] mb-4">100+</div>
              <div className="text-lg text-gray-600 font-medium">완료 프로젝트</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#399084] mb-4">50+</div>
              <div className="text-lg text-gray-600 font-medium">협력 기업</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#1A3A6F] mb-4">15+</div>
              <div className="text-lg text-gray-600 font-medium">년간 경험</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#399084] mb-4">95%</div>
              <div className="text-lg text-gray-600 font-medium">고객 만족도</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-20 bg-gradient-to-r from-[#1A3A6F] to-[#399084]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-bold text-4xl leading-[48px] tracking-[-2.083%] mb-6">
            지속가능한 미래를 함께 만들어보세요
          </h2>
          <p className="font-medium text-xl leading-8 tracking-[-1.25%] mb-8 opacity-90">
            환경 전문가와의 상담을 통해 귀하의 비즈니스에 최적화된<br />
            지속가능성 전략을 수립하세요
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/contact" className="bg-white text-[#1A3A6F] px-8 py-4 rounded-[999px] font-bold text-lg hover:bg-gray-100 transition-all">
              무료 상담 신청
            </Link>
            <Link href="/portfolio" className="border-2 border-white text-white px-8 py-4 rounded-[999px] font-bold text-lg hover:bg-white/10 transition-all">
              성공 사례 보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
