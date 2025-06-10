import Link from 'next/link';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative w-full h-[400px] overflow-hidden">
        {/* Background with Gradient */}
        <div className="absolute inset-0" 
          style={{
            background: 'linear-gradient(135deg, #1A3A6F 0%, #399084 100%)'
          }}>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 px-20 py-4">
          <div className="flex items-center backdrop-blur-md rounded-[999px] px-6 py-3">
            {/* Logo */}
            <div className="flex items-center">
              <div className="relative w-[142.27px] h-7">
                <div className="absolute -left-[5px] -top-[2px] w-[152px] h-[33px] bg-white rounded-sm" />
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat z-10"
                  style={{
                    backgroundImage: `url('/logo.png')`,
                  }}
                />
              </div>
            </div>

            {/* Menu Links */}
            <div className="flex-1 flex justify-center items-center gap-4 ml-8">
              <Link href="/" className="flex justify-center items-center gap-2.5 px-6 py-2.5 rounded-[999px]" 
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                <span className="text-white font-inter font-medium text-base leading-6">Home</span>
              </Link>

              <Link href="/ecoable" className="flex justify-center items-center gap-2.5 px-6 py-2.5 rounded-[999px]" 
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                <span className="text-white font-inter font-medium text-base leading-6">Ecoable</span>
              </Link>

              <Link href="/what-we-do" className="flex justify-center items-center gap-2.5 px-6 py-2.5 rounded-[999px]" 
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                <span className="text-white font-inter font-medium text-base leading-6">What we do</span>
              </Link>

              <Link href="/portfolio" className="flex justify-center items-center gap-2.5 px-6 py-2.5 rounded-[999px]" 
                style={{
                  background: 'linear-gradient(90deg, #1A3A6F 0%, #399084 100%)',
                }}>
                <span className="text-white font-inter font-semibold text-base leading-6">Portfolio</span>
              </Link>

              <Link href="/client-company" className="flex justify-center items-center gap-2.5 px-6 py-2.5 rounded-[999px]" 
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                <span className="text-white font-inter font-medium text-base leading-6">Client Company</span>
              </Link>

              <Link href="/team" className="flex justify-center items-center gap-2.5 px-6 py-2.5 rounded-[999px]" 
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                <span className="text-white font-inter font-medium text-base leading-6">Team</span>
              </Link>

              <Link href="/contact" className="flex justify-center items-center gap-2.5 px-6 py-2.5 rounded-[999px]" 
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                <span className="text-white font-inter font-medium text-base leading-6">Contact</span>
              </Link>
            </div>

            {/* Right Buttons */}
            <div className="flex items-center gap-2">
              <button className="flex justify-center items-center gap-1 p-2.5 bg-white border border-[#DEE0E3] rounded-[999px]">
                <div className="w-5 h-5">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M2.5 1.67H15L12.02 12.02L15 16.67H2.5V1.67Z" fill="rgba(15,19,36,0.6)"/>
                  </svg>
                </div>
              </button>
              <button className="flex justify-center items-center gap-1 p-2.5 bg-white border border-[#DEE0E3] rounded-[999px]">
                <div className="w-5 h-5">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M1.67 2.5H16.67L15 15H1.67V2.5Z" fill="rgba(15,19,36,0.6)"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </nav>

        {/* Page Title */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full pt-20">
          <h1 className="text-white font-inter font-bold text-center leading-[72px]" 
            style={{ 
              fontSize: '64px',
              letterSpacing: '-2.656%',
              lineHeight: '1.125em'
            }}>
            Portfolio
          </h1>
          <p className="text-white font-inter font-medium text-center mt-4 leading-[32px]" 
            style={{ 
              fontSize: '24px',
              letterSpacing: '-1.5%',
              lineHeight: '1.333em'
            }}>
            우리의 성공 사례와 프로젝트 경험
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-20 py-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Portfolio Overview */}
          <div className="text-center mb-16">
            <h2 className="text-[#14151A] font-inter font-bold mb-6" 
              style={{ 
                fontSize: '48px',
                letterSpacing: '-2.083%',
                lineHeight: '1.167em'
              }}>
              주요 프로젝트
            </h2>
            <p className="font-inter font-normal leading-8 max-w-3xl mx-auto" 
              style={{
                fontSize: '18px',
                letterSpacing: '-1.111%',
                lineHeight: '1.556em',
                color: 'rgba(15,19,36,0.7)'
              }}>
              에코에이블컨설팅이 수행한 다양한 환경 프로젝트들을 통해 
              우리의 전문성과 실무 경험을 확인해보세요.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            
            {/* Project 1 */}
            <div className="bg-white border border-[#DEE0E3] rounded-3xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-[#1A3A6F] to-[#399084] flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-white/20 rounded-2xl flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M16 4L20 8V12L16 16L12 12V8L16 4Z M8 20L12 16L16 20V28L8 20Z M24 20L28 16L32 20L28 28L24 20Z" fill="white"/>
                    </svg>
                  </div>
                  <span className="font-inter font-semibold text-lg">제품환경</span>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium" 
                    style={{ 
                      backgroundColor: 'rgba(57, 144, 132, 0.1)',
                      color: '#399084'
                    }}>
                    LCA 평가
                  </span>
                </div>
                <h3 className="text-[#14151A] font-inter font-bold mb-3" 
                  style={{ 
                    fontSize: '20px',
                    letterSpacing: '-1.25%',
                    lineHeight: '1.4em'
                  }}>
                  전자제품 LCA 평가 및 인증
                </h3>
                <p className="font-inter font-normal leading-6 mb-4" 
                  style={{
                    fontSize: '14px',
                    letterSpacing: '-0.714%',
                    lineHeight: '1.429em',
                    color: 'rgba(15,19,36,0.6)'
                  }}>
                  글로벌 전자제품 제조업체를 위한 전과정평가(LCA) 수행 및 
                  환경성적표지 인증 취득 지원
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-inter font-medium text-sm" 
                    style={{ color: 'rgba(15,19,36,0.7)' }}>
                    2023년 완료
                  </span>
                  <button className="text-[#399084] font-inter font-medium text-sm hover:underline">
                    자세히 보기 →
                  </button>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white border border-[#DEE0E3] rounded-3xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-[#1A3A6F] to-[#399084] flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-white/20 rounded-2xl flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M4 8H28V24H4V8Z M8 12H24V20H8V12Z M6 6H26V26H6V6Z" fill="white"/>
                    </svg>
                  </div>
                  <span className="font-inter font-semibold text-lg">환경정책</span>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium" 
                    style={{ 
                      backgroundColor: 'rgba(57, 144, 132, 0.1)',
                      color: '#399084'
                    }}>
                    환경영향평가
                  </span>
                </div>
                <h3 className="text-[#14151A] font-inter font-bold mb-3" 
                  style={{ 
                    fontSize: '20px',
                    letterSpacing: '-1.25%',
                    lineHeight: '1.4em'
                  }}>
                  대규모 개발사업 환경영향평가
                </h3>
                <p className="font-inter font-normal leading-6 mb-4" 
                  style={{
                    fontSize: '14px',
                    letterSpacing: '-0.714%',
                    lineHeight: '1.429em',
                    color: 'rgba(15,19,36,0.6)'
                  }}>
                  산업단지 조성사업의 환경영향평가 수행 및 
                  환경관리계획 수립 지원
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-inter font-medium text-sm" 
                    style={{ color: 'rgba(15,19,36,0.7)' }}>
                    2023년 완료
                  </span>
                  <button className="text-[#399084] font-inter font-medium text-sm hover:underline">
                    자세히 보기 →
                  </button>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white border border-[#DEE0E3] rounded-3xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-[#1A3A6F] to-[#399084] flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-white/20 rounded-2xl flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M16 4C20 6 24 10 24 16C24 22 20 26 16 28C12 26 8 22 8 16C8 10 12 6 16 4Z" fill="white"/>
                    </svg>
                  </div>
                  <span className="font-inter font-semibold text-lg">자원순환</span>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium" 
                    style={{ 
                      backgroundColor: 'rgba(57, 144, 132, 0.1)',
                      color: '#399084'
                    }}>
                    순환경제
                  </span>
                </div>
                <h3 className="text-[#14151A] font-inter font-bold mb-3" 
                  style={{ 
                    fontSize: '20px',
                    letterSpacing: '-1.25%',
                    lineHeight: '1.4em'
                  }}>
                  지자체 순환경제 전환 전략
                </h3>
                <p className="font-inter font-normal leading-6 mb-4" 
                  style={{
                    fontSize: '14px',
                    letterSpacing: '-0.714%',
                    lineHeight: '1.429em',
                    color: 'rgba(15,19,36,0.6)'
                  }}>
                  지방자치단체의 순환경제 전환을 위한 
                  마스터플랜 수립 및 실행 전략 개발
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-inter font-medium text-sm" 
                    style={{ color: 'rgba(15,19,36,0.7)' }}>
                    2024년 진행 중
                  </span>
                  <button className="text-[#399084] font-inter font-medium text-sm hover:underline">
                    자세히 보기 →
                  </button>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white border border-[#DEE0E3] rounded-3xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-[#1A3A6F] to-[#399084] flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-white/20 rounded-2xl flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M16 4C10 4 6 8 6 14C6 20 10 24 16 24C22 24 26 20 26 14C26 8 22 4 16 4Z M16 8C20 8 22 10 22 14C22 18 20 20 16 20C12 20 10 18 10 14C10 10 12 8 16 8Z" fill="white"/>
                    </svg>
                  </div>
                  <span className="font-inter font-semibold text-lg">기후변화대응</span>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium" 
                    style={{ 
                      backgroundColor: 'rgba(57, 144, 132, 0.1)',
                      color: '#399084'
                    }}>
                    탄소중립
                  </span>
                </div>
                <h3 className="text-[#14151A] font-inter font-bold mb-3" 
                  style={{ 
                    fontSize: '20px',
                    letterSpacing: '-1.25%',
                    lineHeight: '1.4em'
                  }}>
                  기업 탄소중립 로드맵 수립
                </h3>
                <p className="font-inter font-normal leading-6 mb-4" 
                  style={{
                    fontSize: '14px',
                    letterSpacing: '-0.714%',
                    lineHeight: '1.429em',
                    color: 'rgba(15,19,36,0.6)'
                  }}>
                  대기업 그룹의 2050 탄소중립 목표 달성을 위한 
                  단계별 실행 계획 수립
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-inter font-medium text-sm" 
                    style={{ color: 'rgba(15,19,36,0.7)' }}>
                    2023년 완료
                  </span>
                  <button className="text-[#399084] font-inter font-medium text-sm hover:underline">
                    자세히 보기 →
                  </button>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-white border border-[#DEE0E3] rounded-3xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-[#1A3A6F] to-[#399084] flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-white/20 rounded-2xl flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M16 4L20 8V12L16 16L12 12V8L16 4Z M8 20L12 16L16 20V28L8 20Z M24 20L28 16L32 20L28 28L24 20Z" fill="white"/>
                    </svg>
                  </div>
                  <span className="font-inter font-semibold text-lg">통합 솔루션</span>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium" 
                    style={{ 
                      backgroundColor: 'rgba(57, 144, 132, 0.1)',
                      color: '#399084'
                    }}>
                    ESG 경영
                  </span>
                </div>
                <h3 className="text-[#14151A] font-inter font-bold mb-3" 
                  style={{ 
                    fontSize: '20px',
                    letterSpacing: '-1.25%',
                    lineHeight: '1.4em'
                  }}>
                  ESG 경영체계 구축 컨설팅
                </h3>
                <p className="font-inter font-normal leading-6 mb-4" 
                  style={{
                    fontSize: '14px',
                    letterSpacing: '-0.714%',
                    lineHeight: '1.429em',
                    color: 'rgba(15,19,36,0.6)'
                  }}>
                  중견기업의 ESG 경영체계 구축 및 
                  지속가능경영 보고서 작성 지원
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-inter font-medium text-sm" 
                    style={{ color: 'rgba(15,19,36,0.7)' }}>
                    2024년 진행 중
                  </span>
                  <button className="text-[#399084] font-inter font-medium text-sm hover:underline">
                    자세히 보기 →
                  </button>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="bg-white border border-[#DEE0E3] rounded-3xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-[#1A3A6F] to-[#399084] flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-white/20 rounded-2xl flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M4 8H28V24H4V8Z M8 12H24V20H8V12Z M6 6H26V26H6V6Z" fill="white"/>
                    </svg>
                  </div>
                  <span className="font-inter font-semibold text-lg">정책 연구</span>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium" 
                    style={{ 
                      backgroundColor: 'rgba(57, 144, 132, 0.1)',
                      color: '#399084'
                    }}>
                    정책 개발
                  </span>
                </div>
                <h3 className="text-[#14151A] font-inter font-bold mb-3" 
                  style={{ 
                    fontSize: '20px',
                    letterSpacing: '-1.25%',
                    lineHeight: '1.4em'
                  }}>
                  국가 환경정책 제도 개선 연구
                </h3>
                <p className="font-inter font-normal leading-6 mb-4" 
                  style={{
                    fontSize: '14px',
                    letterSpacing: '-0.714%',
                    lineHeight: '1.429em',
                    color: 'rgba(15,19,36,0.6)'
                  }}>
                  환경부 정책연구사업으로 진행된 
                  환경 관련 제도 개선방안 연구
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-inter font-medium text-sm" 
                    style={{ color: 'rgba(15,19,36,0.7)' }}>
                    2022년 완료
                  </span>
                  <button className="text-[#399084] font-inter font-medium text-sm hover:underline">
                    자세히 보기 →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-br from-[#1A3A6F] to-[#399084] rounded-3xl p-12 text-white mb-16">
            <div className="text-center mb-12">
              <h2 className="font-inter font-bold mb-6" 
                style={{ 
                  fontSize: '36px',
                  letterSpacing: '-2.083%',
                  lineHeight: '1.167em'
                }}>
                프로젝트 성과
              </h2>
              <p className="font-inter font-normal leading-8 max-w-2xl mx-auto" 
                style={{
                  fontSize: '18px',
                  letterSpacing: '-1.111%',
                  lineHeight: '1.556em',
                  opacity: 0.9
                }}>
                숫자로 보는 에코에이블컨설팅의 전문성과 경험
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Stat 1 */}
              <div className="text-center">
                <div className="font-inter font-bold mb-2" 
                  style={{ 
                    fontSize: '48px',
                    letterSpacing: '-2.083%',
                    lineHeight: '1.167em'
                  }}>
                  150+
                </div>
                <h3 className="font-inter font-semibold mb-2" 
                  style={{ 
                    fontSize: '18px',
                    letterSpacing: '-1.111%',
                    lineHeight: '1.444em'
                  }}>
                  완료 프로젝트
                </h3>
                <p className="font-inter font-normal leading-6" 
                  style={{
                    fontSize: '14px',
                    letterSpacing: '-0.714%',
                    lineHeight: '1.429em',
                    opacity: 0.8
                  }}>
                  다양한 분야의 
                  환경 프로젝트 경험
                </p>
              </div>

              {/* Stat 2 */}
              <div className="text-center">
                <div className="font-inter font-bold mb-2" 
                  style={{ 
                    fontSize: '48px',
                    letterSpacing: '-2.083%',
                    lineHeight: '1.167em'
                  }}>
                  50+
                </div>
                <h3 className="font-inter font-semibold mb-2" 
                  style={{ 
                    fontSize: '18px',
                    letterSpacing: '-1.111%',
                    lineHeight: '1.444em'
                  }}>
                  협력 기업
                </h3>
                <p className="font-inter font-normal leading-6" 
                  style={{
                    fontSize: '14px',
                    letterSpacing: '-0.714%',
                    lineHeight: '1.429em',
                    opacity: 0.8
                  }}>
                  대기업부터 중소기업까지 
                  다양한 고객사
                </p>
              </div>

              {/* Stat 3 */}
              <div className="text-center">
                <div className="font-inter font-bold mb-2" 
                  style={{ 
                    fontSize: '48px',
                    letterSpacing: '-2.083%',
                    lineHeight: '1.167em'
                  }}>
                  95%
                </div>
                <h3 className="font-inter font-semibold mb-2" 
                  style={{ 
                    fontSize: '18px',
                    letterSpacing: '-1.111%',
                    lineHeight: '1.444em'
                  }}>
                  고객 만족도
                </h3>
                <p className="font-inter font-normal leading-6" 
                  style={{
                    fontSize: '14px',
                    letterSpacing: '-0.714%',
                    lineHeight: '1.429em',
                    opacity: 0.8
                  }}>
                  전문성과 신뢰를 바탕으로 한 
                  높은 고객 만족
                </p>
              </div>

              {/* Stat 4 */}
              <div className="text-center">
                <div className="font-inter font-bold mb-2" 
                  style={{ 
                    fontSize: '48px',
                    letterSpacing: '-2.083%',
                    lineHeight: '1.167em'
                  }}>
                  10+
                </div>
                <h3 className="font-inter font-semibold mb-2" 
                  style={{ 
                    fontSize: '18px',
                    letterSpacing: '-1.111%',
                    lineHeight: '1.444em'
                  }}>
                  사업 연수
                </h3>
                <p className="font-inter font-normal leading-6" 
                  style={{
                    fontSize: '14px',
                    letterSpacing: '-0.714%',
                    lineHeight: '1.429em',
                    opacity: 0.8
                  }}>
                  축적된 경험과 노하우를 
                  바탕으로 한 전문성
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-[#14151A] font-inter font-bold mb-6" 
              style={{ 
                fontSize: '36px',
                letterSpacing: '-2.083%',
                lineHeight: '1.167em'
              }}>
              우리와 함께 새로운 프로젝트를 시작하세요
            </h2>
            <p className="font-inter font-normal leading-8 mb-8 max-w-2xl mx-auto" 
              style={{
                fontSize: '18px',
                letterSpacing: '-1.111%',
                lineHeight: '1.556em',
                color: 'rgba(15,19,36,0.7)'
              }}>
              에코에이블컨설팅의 전문성과 경험으로 고객의 환경 과제를 해결해드립니다. 
              성공적인 프로젝트 경험을 함께 만들어가세요.
            </p>
            <div className="flex justify-center gap-4">
              <button className="flex items-center gap-2 px-8 py-4 rounded-[999px]" 
                style={{ 
                  background: 'linear-gradient(90deg, #1A3A6F 0%, #399084 100%)'
                }}>
                <span className="text-white font-inter font-semibold text-lg">프로젝트 문의</span>
                <div className="w-5 h-5">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3.33 3.52L13.33 12.96L16.67 3.52L3.33 3.52Z" fill="white"/>
                  </svg>
                </div>
              </button>
              <button className="flex items-center gap-2 px-8 py-4 rounded-[999px] border border-[#DEE0E3]">
                <span className="text-[#14151A] font-inter font-medium text-lg">포트폴리오 다운로드</span>
                <div className="w-5 h-5">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M2.5 1.67H15L12.02 12.02L15 16.67H2.5V1.67Z" fill="rgba(15,19,36,0.6)"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
} 