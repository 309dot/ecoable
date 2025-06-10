import Link from 'next/link';

export default function ClientCompanyPage() {
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
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                <span className="text-white font-inter font-medium text-base leading-6">Portfolio</span>
              </Link>

              <Link href="/client-company" className="flex justify-center items-center gap-2.5 px-6 py-2.5 rounded-[999px]" 
                style={{
                  background: 'linear-gradient(90deg, #1A3A6F 0%, #399084 100%)',
                }}>
                <span className="text-white font-inter font-semibold text-base leading-6">Client Company</span>
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
            Client Company
          </h1>
          <p className="text-white font-inter font-medium text-center mt-4 leading-[32px]" 
            style={{ 
              fontSize: '24px',
              letterSpacing: '-1.5%',
              lineHeight: '1.333em'
            }}>
            함께 성장하는 파트너십
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-20 py-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Client Overview */}
          <div className="text-center mb-16">
            <h2 className="text-[#14151A] font-inter font-bold mb-6" 
              style={{ 
                fontSize: '48px',
                letterSpacing: '-2.083%',
                lineHeight: '1.167em'
              }}>
              주요 고객사
            </h2>
            <p className="font-inter font-normal leading-8 max-w-3xl mx-auto" 
              style={{
                fontSize: '18px',
                letterSpacing: '-1.111%',
                lineHeight: '1.556em',
                color: 'rgba(15,19,36,0.7)'
              }}>
              대기업부터 중소기업까지, 다양한 업종의 고객사와 함께 
              지속가능한 환경 솔루션을 만들어가고 있습니다.
            </p>
          </div>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
            {/* 대기업 로고들 */}
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="bg-white border border-[#DEE0E3] rounded-2xl p-6 flex items-center justify-center h-24 hover:shadow-lg transition-shadow">
                <div className="w-full h-12 bg-gray-200 rounded flex items-center justify-center">
                  <span className="font-inter font-medium text-sm text-gray-500">
                    Client {index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Success Stories */}
          <div className="mb-16">
            <h2 className="text-[#14151A] font-inter font-bold mb-8 text-center" 
              style={{ 
                fontSize: '36px',
                letterSpacing: '-2.083%',
                lineHeight: '1.167em'
              }}>
              성공 사례
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Case Study 1 */}
              <div className="bg-white border border-[#DEE0E3] rounded-3xl p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1A3A6F] to-[#399084] rounded-2xl flex items-center justify-center mb-4">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M16 4L20 8V12L16 16L12 12V8L16 4Z" fill="white"/>
                    </svg>
                  </div>
                  <h3 className="text-[#14151A] font-inter font-bold mb-4" 
                    style={{ 
                      fontSize: '24px',
                      letterSpacing: '-1.5%',
                      lineHeight: '1.333em'
                    }}>
                    A전자 ESG 경영체계 구축
                  </h3>
                </div>
                <p className="font-inter font-normal leading-7 mb-4" 
                  style={{
                    fontSize: '16px',
                    letterSpacing: '-1.25%',
                    lineHeight: '1.5em',
                    color: 'rgba(15,19,36,0.7)'
                  }}>
                  글로벌 전자제품 제조업체의 ESG 경영체계 구축 및 
                  지속가능경영 보고서 작성을 통한 투명성 강화
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-inter font-medium text-sm text-[#399084]">
                    탄소배출량 30% 감축
                  </span>
                  <span className="font-inter font-medium text-sm" 
                    style={{ color: 'rgba(15,19,36,0.7)' }}>
                    2023년
                  </span>
                </div>
              </div>

              {/* Case Study 2 */}
              <div className="bg-white border border-[#DEE0E3] rounded-3xl p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1A3A6F] to-[#399084] rounded-2xl flex items-center justify-center mb-4">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M4 8H28V24H4V8Z" fill="white"/>
                    </svg>
                  </div>
                  <h3 className="text-[#14151A] font-inter font-bold mb-4" 
                    style={{ 
                      fontSize: '24px',
                      letterSpacing: '-1.5%',
                      lineHeight: '1.333em'
                    }}>
                    B화학 순환경제 전환
                  </h3>
                </div>
                <p className="font-inter font-normal leading-7 mb-4" 
                  style={{
                    fontSize: '16px',
                    letterSpacing: '-1.25%',
                    lineHeight: '1.5em',
                    color: 'rgba(15,19,36,0.7)'
                  }}>
                  화학 공정의 순환경제 모델 도입으로 
                  폐기물 감량과 자원 재활용률 극대화 달성
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-inter font-medium text-sm text-[#399084]">
                    폐기물 50% 감축
                  </span>
                  <span className="font-inter font-medium text-sm" 
                    style={{ color: 'rgba(15,19,36,0.7)' }}>
                    2023년
                  </span>
                </div>
              </div>

              {/* Case Study 3 */}
              <div className="bg-white border border-[#DEE0E3] rounded-3xl p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1A3A6F] to-[#399084] rounded-2xl flex items-center justify-center mb-4">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M16 4C10 4 6 8 6 14C6 20 10 24 16 24C22 24 26 20 26 14C26 8 22 4 16 4Z" fill="white"/>
                    </svg>
                  </div>
                  <h3 className="text-[#14151A] font-inter font-bold mb-4" 
                    style={{ 
                      fontSize: '24px',
                      letterSpacing: '-1.5%',
                      lineHeight: '1.333em'
                    }}>
                    C자동차 탄소중립 로드맵
                  </h3>
                </div>
                <p className="font-inter font-normal leading-7 mb-4" 
                  style={{
                    fontSize: '16px',
                    letterSpacing: '-1.25%',
                    lineHeight: '1.5em',
                    color: 'rgba(15,19,36,0.7)'
                  }}>
                  자동차 제조업체의 2050 탄소중립 목표 달성을 위한 
                  단계별 감축 전략 수립 및 실행 계획 지원
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-inter font-medium text-sm text-[#399084]">
                    2050 탄소중립 달성
                  </span>
                  <span className="font-inter font-medium text-sm" 
                    style={{ color: 'rgba(15,19,36,0.7)' }}>
                    진행 중
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Partnership Benefits */}
          <div className="bg-gradient-to-br from-[#1A3A6F] to-[#399084] rounded-3xl p-12 text-white mb-16">
            <div className="text-center mb-12">
              <h2 className="font-inter font-bold mb-6" 
                style={{ 
                  fontSize: '36px',
                  letterSpacing: '-2.083%',
                  lineHeight: '1.167em'
                }}>
                파트너십의 가치
              </h2>
              <p className="font-inter font-normal leading-8 max-w-2xl mx-auto" 
                style={{
                  fontSize: '18px',
                  letterSpacing: '-1.111%',
                  lineHeight: '1.556em',
                  opacity: 0.9
                }}>
                에코에이블컨설팅과 함께하는 고객사들이 얻는 실질적인 가치
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M20 5L25 15H35L27 23L30 35L20 28L10 35L13 23L5 15H15L20 5Z" fill="white"/>
                  </svg>
                </div>
                <h3 className="font-inter font-bold mb-4" 
                  style={{ 
                    fontSize: '20px',
                    letterSpacing: '-1.25%',
                    lineHeight: '1.4em'
                  }}>
                  전문성 확보
                </h3>
                <p className="font-inter font-normal leading-6" 
                  style={{
                    fontSize: '14px',
                    letterSpacing: '-0.714%',
                    lineHeight: '1.429em',
                    opacity: 0.8
                  }}>
                  4개 전문 파트의 
                  통합 솔루션 제공
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M10 15L20 5L30 15L35 20L20 35L5 20L10 15Z" fill="white"/>
                  </svg>
                </div>
                <h3 className="font-inter font-bold mb-4" 
                  style={{ 
                    fontSize: '20px',
                    letterSpacing: '-1.25%',
                    lineHeight: '1.4em'
                  }}>
                  비용 효율성
                </h3>
                <p className="font-inter font-normal leading-6" 
                  style={{
                    fontSize: '14px',
                    letterSpacing: '-0.714%',
                    lineHeight: '1.429em',
                    opacity: 0.8
                  }}>
                  최적화된 솔루션으로 
                  투자 대비 효과 극대화
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M20 10C25 10 30 15 30 20C30 25 25 30 20 30C15 30 10 25 10 20C10 15 15 10 20 10Z" fill="white"/>
                  </svg>
                </div>
                <h3 className="font-inter font-bold mb-4" 
                  style={{ 
                    fontSize: '20px',
                    letterSpacing: '-1.25%',
                    lineHeight: '1.4em'
                  }}>
                  지속적 지원
                </h3>
                <p className="font-inter font-normal leading-6" 
                  style={{
                    fontSize: '14px',
                    letterSpacing: '-0.714%',
                    lineHeight: '1.429em',
                    opacity: 0.8
                  }}>
                  프로젝트 완료 후에도 
                  지속적인 관리 지원
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
              새로운 파트너가 되어주세요
            </h2>
            <p className="font-inter font-normal leading-8 mb-8 max-w-2xl mx-auto" 
              style={{
                fontSize: '18px',
                letterSpacing: '-1.111%',
                lineHeight: '1.556em',
                color: 'rgba(15,19,36,0.7)'
              }}>
              에코에이블컨설팅과 함께 지속가능한 미래를 만들어가는 
              파트너가 되어주세요.
            </p>
            <div className="flex justify-center gap-4">
              <button className="flex items-center gap-2 px-8 py-4 rounded-[999px]" 
                style={{ 
                  background: 'linear-gradient(90deg, #1A3A6F 0%, #399084 100%)'
                }}>
                <span className="text-white font-inter font-semibold text-lg">파트너십 문의</span>
              </button>
              <button className="flex items-center gap-2 px-8 py-4 rounded-[999px] border border-[#DEE0E3]">
                <span className="text-[#14151A] font-inter font-medium text-lg">고객사 자료</span>
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
} 