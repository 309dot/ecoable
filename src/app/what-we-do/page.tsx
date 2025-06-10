export default function WhatWeDoPage() {
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
              <button className="flex justify-center items-center gap-2.5 px-6 py-2.5 rounded-[999px]" 
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                <span className="text-white font-inter font-medium text-base leading-6">Home</span>
              </button>

              <button className="flex justify-center items-center gap-2.5 px-6 py-2.5 rounded-[999px]" 
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                <span className="text-white font-inter font-medium text-base leading-6">Ecoable</span>
              </button>

              <button className="flex justify-center items-center gap-2.5 px-6 py-2.5 rounded-[999px]" 
                style={{
                  background: 'linear-gradient(90deg, #1A3A6F 0%, #399084 100%)',
                }}>
                <span className="text-white font-inter font-semibold text-base leading-6">What we do</span>
              </button>

              <button className="flex justify-center items-center gap-2.5 px-6 py-2.5 rounded-[999px]" 
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                <span className="text-white font-inter font-medium text-base leading-6">Portfolio</span>
              </button>
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
            What we do
          </h1>
          <p className="text-white font-inter font-medium text-center mt-4 leading-[32px]" 
            style={{ 
              fontSize: '24px',
              letterSpacing: '-1.5%',
              lineHeight: '1.333em'
            }}>
            4개 전문 파트의 통합 솔루션
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-20 py-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Services Overview */}
          <div className="text-center mb-16">
            <h2 className="text-[#14151A] font-inter font-bold mb-6" 
              style={{ 
                fontSize: '48px',
                letterSpacing: '-2.083%',
                lineHeight: '1.167em'
              }}>
              전문 서비스 영역
            </h2>
            <p className="font-inter font-normal leading-8 max-w-3xl mx-auto" 
              style={{
                fontSize: '18px',
                letterSpacing: '-1.111%',
                lineHeight: '1.556em',
                color: 'rgba(15,19,36,0.7)'
              }}>
              에코에이블컨설팅은 4개의 전문 파트를 통해 종합적인 환경 솔루션을 제공합니다. 
              각 분야의 전문가들이 고객의 다양한 환경 과제를 체계적으로 해결해드립니다.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            
            {/* 제품환경파트 */}
            <div className="bg-white border border-[#DEE0E3] rounded-3xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1A3A6F] to-[#399084] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M16 4L20 8V12L16 16L12 12V8L16 4Z M8 20L12 16L16 20V28L8 20Z M24 20L28 16L32 20L28 28L24 20Z" fill="white"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[#14151A] font-inter font-bold mb-4" 
                    style={{ 
                      fontSize: '24px',
                      letterSpacing: '-1.5%',
                      lineHeight: '1.333em'
                    }}>
                    제품환경파트
                  </h3>
                  <p className="font-inter font-normal leading-7 mb-4" 
                    style={{
                      fontSize: '16px',
                      letterSpacing: '-1.25%',
                      lineHeight: '1.5em',
                      color: 'rgba(15,19,36,0.7)'
                    }}>
                    LCA 기반 진단부터 녹색제품 인증까지 전 과정을 지원
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 font-inter font-normal" 
                      style={{
                        fontSize: '14px',
                        letterSpacing: '-0.714%',
                        lineHeight: '1.429em',
                        color: 'rgba(15,19,36,0.6)'
                      }}>
                      <div className="w-1.5 h-1.5 bg-[#399084] rounded-full"></div>
                      전과정평가(LCA) 및 탄소발자국 산정
                    </li>
                    <li className="flex items-center gap-2 font-inter font-normal" 
                      style={{
                        fontSize: '14px',
                        letterSpacing: '-0.714%',
                        lineHeight: '1.429em',
                        color: 'rgba(15,19,36,0.6)'
                      }}>
                      <div className="w-1.5 h-1.5 bg-[#399084] rounded-full"></div>
                      녹색제품 인증 및 환경성적표지 취득
                    </li>
                    <li className="flex items-center gap-2 font-inter font-normal" 
                      style={{
                        fontSize: '14px',
                        letterSpacing: '-0.714%',
                        lineHeight: '1.429em',
                        color: 'rgba(15,19,36,0.6)'
                      }}>
                      <div className="w-1.5 h-1.5 bg-[#399084] rounded-full"></div>
                      친환경 제품 개발 컨설팅
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 환경정책파트 */}
            <div className="bg-white border border-[#DEE0E3] rounded-3xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1A3A6F] to-[#399084] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M4 8H28V24H4V8Z M8 12H24V20H8V12Z M6 6H26V26H6V6Z" fill="white"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[#14151A] font-inter font-bold mb-4" 
                    style={{ 
                      fontSize: '24px',
                      letterSpacing: '-1.5%',
                      lineHeight: '1.333em'
                    }}>
                    환경정책파트
                  </h3>
                  <p className="font-inter font-normal leading-7 mb-4" 
                    style={{
                      fontSize: '16px',
                      letterSpacing: '-1.25%',
                      lineHeight: '1.5em',
                      color: 'rgba(15,19,36,0.7)'
                    }}>
                    컨설팅과 통합관리 솔루션을 통해 지속가능한 사회 구현을 지원
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 font-inter font-normal" 
                      style={{
                        fontSize: '14px',
                        letterSpacing: '-0.714%',
                        lineHeight: '1.429em',
                        color: 'rgba(15,19,36,0.6)'
                      }}>
                      <div className="w-1.5 h-1.5 bg-[#399084] rounded-full"></div>
                      환경영향평가 및 환경관리계획
                    </li>
                    <li className="flex items-center gap-2 font-inter font-normal" 
                      style={{
                        fontSize: '14px',
                        letterSpacing: '-0.714%',
                        lineHeight: '1.429em',
                        color: 'rgba(15,19,36,0.6)'
                      }}>
                      <div className="w-1.5 h-1.5 bg-[#399084] rounded-full"></div>
                      환경정책 수립 및 제도 개선
                    </li>
                    <li className="flex items-center gap-2 font-inter font-normal" 
                      style={{
                        fontSize: '14px',
                        letterSpacing: '-0.714%',
                        lineHeight: '1.429em',
                        color: 'rgba(15,19,36,0.6)'
                      }}>
                      <div className="w-1.5 h-1.5 bg-[#399084] rounded-full"></div>
                      지속가능경영 통합관리시스템
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 자원순환파트 */}
            <div className="bg-white border border-[#DEE0E3] rounded-3xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1A3A6F] to-[#399084] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M16 4C20 6 24 10 24 16C24 22 20 26 16 28C12 26 8 22 8 16C8 10 12 6 16 4Z" fill="white"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[#14151A] font-inter font-bold mb-4" 
                    style={{ 
                      fontSize: '24px',
                      letterSpacing: '-1.5%',
                      lineHeight: '1.333em'
                    }}>
                    자원순환파트
                  </h3>
                  <p className="font-inter font-normal leading-7 mb-4" 
                    style={{
                      fontSize: '16px',
                      letterSpacing: '-1.25%',
                      lineHeight: '1.5em',
                      color: 'rgba(15,19,36,0.7)'
                    }}>
                    자원을 다시 보는 시선, 자원순환의 지속가능한 흐름을 설계
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 font-inter font-normal" 
                      style={{
                        fontSize: '14px',
                        letterSpacing: '-0.714%',
                        lineHeight: '1.429em',
                        color: 'rgba(15,19,36,0.6)'
                      }}>
                      <div className="w-1.5 h-1.5 bg-[#399084] rounded-full"></div>
                      순환경제 전환 전략 수립
                    </li>
                    <li className="flex items-center gap-2 font-inter font-normal" 
                      style={{
                        fontSize: '14px',
                        letterSpacing: '-0.714%',
                        lineHeight: '1.429em',
                        color: 'rgba(15,19,36,0.6)'
                      }}>
                      <div className="w-1.5 h-1.5 bg-[#399084] rounded-full"></div>
                      폐기물 감량 및 재활용 최적화
                    </li>
                    <li className="flex items-center gap-2 font-inter font-normal" 
                      style={{
                        fontSize: '14px',
                        letterSpacing: '-0.714%',
                        lineHeight: '1.429em',
                        color: 'rgba(15,19,36,0.6)'
                      }}>
                      <div className="w-1.5 h-1.5 bg-[#399084] rounded-full"></div>
                      자원순환 정책 및 제도 설계
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 기후변화대응파트 */}
            <div className="bg-white border border-[#DEE0E3] rounded-3xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1A3A6F] to-[#399084] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M16 4C10 4 6 8 6 14C6 20 10 24 16 24C22 24 26 20 26 14C26 8 22 4 16 4Z M16 8C20 8 22 10 22 14C22 18 20 20 16 20C12 20 10 18 10 14C10 10 12 8 16 8Z" fill="white"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[#14151A] font-inter font-bold mb-4" 
                    style={{ 
                      fontSize: '24px',
                      letterSpacing: '-1.5%',
                      lineHeight: '1.333em'
                    }}>
                    기후변화대응파트
                  </h3>
                  <p className="font-inter font-normal leading-7 mb-4" 
                    style={{
                      fontSize: '16px',
                      letterSpacing: '-1.25%',
                      lineHeight: '1.5em',
                      color: 'rgba(15,19,36,0.7)'
                    }}>
                    제도 수립부터 온실가스 산정 컨설팅까지 전략적 대응을 지원
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 font-inter font-normal" 
                      style={{
                        fontSize: '14px',
                        letterSpacing: '-0.714%',
                        lineHeight: '1.429em',
                        color: 'rgba(15,19,36,0.6)'
                      }}>
                      <div className="w-1.5 h-1.5 bg-[#399084] rounded-full"></div>
                      온실가스 인벤토리 구축 및 감축
                    </li>
                    <li className="flex items-center gap-2 font-inter font-normal" 
                      style={{
                        fontSize: '14px',
                        letterSpacing: '-0.714%',
                        lineHeight: '1.429em',
                        color: 'rgba(15,19,36,0.6)'
                      }}>
                      <div className="w-1.5 h-1.5 bg-[#399084] rounded-full"></div>
                      탄소중립 로드맵 수립
                    </li>
                    <li className="flex items-center gap-2 font-inter font-normal" 
                      style={{
                        fontSize: '14px',
                        letterSpacing: '-0.714%',
                        lineHeight: '1.429em',
                        color: 'rgba(15,19,36,0.6)'
                      }}>
                      <div className="w-1.5 h-1.5 bg-[#399084] rounded-full"></div>
                      기후변화 적응정책 개발
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="bg-gradient-to-br from-[#1A3A6F] to-[#399084] rounded-3xl p-12 text-white mb-16">
            <div className="text-center mb-12">
              <h2 className="font-inter font-bold mb-6" 
                style={{ 
                  fontSize: '36px',
                  letterSpacing: '-2.083%',
                  lineHeight: '1.167em'
                }}>
                우리의 작업 프로세스
              </h2>
              <p className="font-inter font-normal leading-8 max-w-2xl mx-auto" 
                style={{
                  fontSize: '18px',
                  letterSpacing: '-1.111%',
                  lineHeight: '1.556em',
                  opacity: 0.9
                }}>
                체계적이고 전문적인 접근 방식으로 고객의 환경 과제를 해결합니다
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-inter font-bold text-2xl">1</span>
                </div>
                <h3 className="font-inter font-bold mb-2" 
                  style={{ 
                    fontSize: '18px',
                    letterSpacing: '-1.111%',
                    lineHeight: '1.444em'
                  }}>
                  현황 분석
                </h3>
                <p className="font-inter font-normal leading-6" 
                  style={{
                    fontSize: '14px',
                    letterSpacing: '-0.714%',
                    lineHeight: '1.429em',
                    opacity: 0.8
                  }}>
                  고객의 현재 환경 상황과 
                  과제를 정확히 파악
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-inter font-bold text-2xl">2</span>
                </div>
                <h3 className="font-inter font-bold mb-2" 
                  style={{ 
                    fontSize: '18px',
                    letterSpacing: '-1.111%',
                    lineHeight: '1.444em'
                  }}>
                  전략 수립
                </h3>
                <p className="font-inter font-normal leading-6" 
                  style={{
                    fontSize: '14px',
                    letterSpacing: '-0.714%',
                    lineHeight: '1.429em',
                    opacity: 0.8
                  }}>
                  전문가 팀이 맞춤형 
                  솔루션 전략을 설계
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-inter font-bold text-2xl">3</span>
                </div>
                <h3 className="font-inter font-bold mb-2" 
                  style={{ 
                    fontSize: '18px',
                    letterSpacing: '-1.111%',
                    lineHeight: '1.444em'
                  }}>
                  실행 지원
                </h3>
                <p className="font-inter font-normal leading-6" 
                  style={{
                    fontSize: '14px',
                    letterSpacing: '-0.714%',
                    lineHeight: '1.429em',
                    opacity: 0.8
                  }}>
                  단계별 실행과 
                  지속적인 모니터링
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-inter font-bold text-2xl">4</span>
                </div>
                <h3 className="font-inter font-bold mb-2" 
                  style={{ 
                    fontSize: '18px',
                    letterSpacing: '-1.111%',
                    lineHeight: '1.444em'
                  }}>
                  성과 관리
                </h3>
                <p className="font-inter font-normal leading-6" 
                  style={{
                    fontSize: '14px',
                    letterSpacing: '-0.714%',
                    lineHeight: '1.429em',
                    opacity: 0.8
                  }}>
                  결과 검증과 
                  지속적인 개선 지원
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
              전문 컨설팅이 필요하신가요?
            </h2>
            <p className="font-inter font-normal leading-8 mb-8 max-w-2xl mx-auto" 
              style={{
                fontSize: '18px',
                letterSpacing: '-1.111%',
                lineHeight: '1.556em',
                color: 'rgba(15,19,36,0.7)'
              }}>
              4개 전문 파트의 통합 솔루션으로 고객의 환경 과제를 해결해드립니다. 
              지금 바로 상담을 신청하세요.
            </p>
            <div className="flex justify-center gap-4">
              <button className="flex items-center gap-2 px-8 py-4 rounded-[999px]" 
                style={{ 
                  background: 'linear-gradient(90deg, #1A3A6F 0%, #399084 100%)'
                }}>
                <span className="text-white font-inter font-semibold text-lg">상담 신청</span>
                <div className="w-5 h-5">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3.33 3.52L13.33 12.96L16.67 3.52L3.33 3.52Z" fill="white"/>
                  </svg>
                </div>
              </button>
              <button className="flex items-center gap-2 px-8 py-4 rounded-[999px] border border-[#DEE0E3]">
                <span className="text-[#14151A] font-inter font-medium text-lg">서비스 자료</span>
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