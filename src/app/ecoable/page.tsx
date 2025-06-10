import Link from 'next/link';

export default function EcoablePage() {
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
                style={{
                  background: 'linear-gradient(90deg, #1A3A6F 0%, #399084 100%)',
                }}>
                <span className="text-white font-inter font-semibold text-base leading-6">Ecoable</span>
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
            에코에이블컨설팅(주)
          </h1>
          <p className="text-white font-inter font-medium text-center mt-4 leading-[32px]" 
            style={{ 
              fontSize: '24px',
              letterSpacing: '-1.5%',
              lineHeight: '1.333em'
            }}>
            환경과 경제의 조화, 새로운 내일을 설계합니다
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-20 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Company Overview */}
          <div className="mb-16">
            <h2 className="text-[#14151A] font-inter font-bold mb-8" 
              style={{ 
                fontSize: '48px',
                letterSpacing: '-2.083%',
                lineHeight: '1.167em'
              }}>
              회사 소개
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-inter font-normal leading-8 mb-6" 
                  style={{
                    fontSize: '18px',
                    letterSpacing: '-1.111%',
                    lineHeight: '1.556em',
                    color: 'rgba(15,19,36,0.8)'
                  }}>
                  에코에이블컨설팅(주)는 환경과 경제의 균형 있는 발전을 추구하며, 
                  지속가능한 미래를 위한 전문 컨설팅 서비스를 제공합니다.
                </p>
                
                <p className="font-inter font-normal leading-8 mb-6" 
                  style={{
                    fontSize: '18px',
                    letterSpacing: '-1.111%',
                    lineHeight: '1.556em',
                    color: 'rgba(15,19,36,0.8)'
                  }}>
                  우리는 제품환경, 환경정책, 자원순환, 기후변화대응 등 4개 전문 파트를 통해 
                  고객의 다양한 환경 과제를 해결합니다.
                </p>

                <p className="font-inter font-normal leading-8" 
                  style={{
                    fontSize: '18px',
                    letterSpacing: '-1.111%',
                    lineHeight: '1.556em',
                    color: 'rgba(15,19,36,0.8)'
                  }}>
                  고객에게는 믿음을, 구성원에게는 의미 있는 일상을 제공하며, 
                  모두가 함께 성장할 수 있는 지속가능한 조직을 만들어갑니다.
                </p>
              </div>

              <div className="flex justify-center">
                <div className="w-full h-80 bg-gradient-to-br from-[#1A3A6F] to-[#399084] rounded-3xl flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M20 5L25 15H35L27 23L30 35L20 28L10 35L13 23L5 15H15L20 5Z" fill="white"/>
                      </svg>
                    </div>
                    <h3 className="font-inter font-bold text-2xl mb-2">지속가능한 미래</h3>
                    <p className="font-inter font-medium text-lg">환경과 경제의 조화</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Mission */}
            <div className="bg-white border border-[#DEE0E3] rounded-3xl p-8">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1A3A6F] to-[#399084] rounded-2xl flex items-center justify-center mb-4">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M16 4L20 12H28L22 18L24 28L16 22L8 28L10 18L4 12H12L16 4Z" fill="white"/>
                  </svg>
                </div>
                <h3 className="text-[#14151A] font-inter font-bold mb-4" 
                  style={{ 
                    fontSize: '24px',
                    letterSpacing: '-1.5%',
                    lineHeight: '1.333em'
                  }}>
                  Mission
                </h3>
              </div>
              <p className="font-inter font-normal leading-7" 
                style={{
                  fontSize: '16px',
                  letterSpacing: '-1.25%',
                  lineHeight: '1.5em',
                  color: 'rgba(15,19,36,0.7)'
                }}>
                환경과 경제의 조화를 통해 지속가능한 발전을 추구하며, 
                전문적인 컨설팅 서비스로 고객의 환경 과제 해결을 지원합니다.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white border border-[#DEE0E3] rounded-3xl p-8">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1A3A6F] to-[#399084] rounded-2xl flex items-center justify-center mb-4">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M16 4C20 4 24 6 26 10C28 14 28 18 26 22C24 26 20 28 16 28C12 28 8 26 6 22C4 18 4 14 6 10C8 6 12 4 16 4Z" fill="white"/>
                  </svg>
                </div>
                <h3 className="text-[#14151A] font-inter font-bold mb-4" 
                  style={{ 
                    fontSize: '24px',
                    letterSpacing: '-1.5%',
                    lineHeight: '1.333em'
                  }}>
                  Vision
                </h3>
              </div>
              <p className="font-inter font-normal leading-7" 
                style={{
                  fontSize: '16px',
                  letterSpacing: '-1.25%',
                  lineHeight: '1.5em',
                  color: 'rgba(15,19,36,0.7)'
                }}>
                새로운 내일을 설계하는 환경 전문 기업으로, 
                모두가 함께 성장할 수 있는 지속가능한 조직을 만들어갑니다.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h2 className="text-[#14151A] font-inter font-bold mb-8 text-center" 
              style={{ 
                fontSize: '36px',
                letterSpacing: '-2.083%',
                lineHeight: '1.167em'
              }}>
              핵심 가치
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Value 1 */}
              <div className="text-center bg-white border border-[#DEE0E3] rounded-3xl p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#1A3A6F] to-[#399084] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M20 5L25 15H35L27 23L30 35L20 28L10 35L13 23L5 15H15L20 5Z" fill="white"/>
                  </svg>
                </div>
                <h3 className="text-[#14151A] font-inter font-bold mb-4" 
                  style={{ 
                    fontSize: '20px',
                    letterSpacing: '-1.25%',
                    lineHeight: '1.4em'
                  }}>
                  전문성
                </h3>
                <p className="font-inter font-normal leading-6" 
                  style={{
                    fontSize: '14px',
                    letterSpacing: '-0.714%',
                    lineHeight: '1.429em',
                    color: 'rgba(15,19,36,0.6)'
                  }}>
                  4개 전문 파트의 깊이 있는 
                  환경 전문 지식과 경험
                </p>
              </div>

              {/* Value 2 */}
              <div className="text-center bg-white border border-[#DEE0E3] rounded-3xl p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#1A3A6F] to-[#399084] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M10 15L20 5L30 15L35 20L20 35L5 20L10 15Z" fill="white"/>
                  </svg>
                </div>
                <h3 className="text-[#14151A] font-inter font-bold mb-4" 
                  style={{ 
                    fontSize: '20px',
                    letterSpacing: '-1.25%',
                    lineHeight: '1.4em'
                  }}>
                  신뢰
                </h3>
                <p className="font-inter font-normal leading-6" 
                  style={{
                    fontSize: '14px',
                    letterSpacing: '-0.714%',
                    lineHeight: '1.429em',
                    color: 'rgba(15,19,36,0.6)'
                  }}>
                  고객에게는 믿음을 주는 
                  투명하고 정직한 서비스
                </p>
              </div>

              {/* Value 3 */}
              <div className="text-center bg-white border border-[#DEE0E3] rounded-3xl p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#1A3A6F] to-[#399084] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M20 10C25 10 30 15 30 20C30 25 25 30 20 30C15 30 10 25 10 20C10 15 15 10 20 10Z" fill="white"/>
                  </svg>
                </div>
                <h3 className="text-[#14151A] font-inter font-bold mb-4" 
                  style={{ 
                    fontSize: '20px',
                    letterSpacing: '-1.25%',
                    lineHeight: '1.4em'
                  }}>
                  지속가능성
                </h3>
                <p className="font-inter font-normal leading-6" 
                  style={{
                    fontSize: '14px',
                    letterSpacing: '-0.714%',
                    lineHeight: '1.429em',
                    color: 'rgba(15,19,36,0.6)'
                  }}>
                  미래 세대를 위한 
                  환경과 경제의 균형
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
} 