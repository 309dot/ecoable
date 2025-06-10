import Link from 'next/link';

export default function TeamPage() {
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
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                <span className="text-white font-inter font-medium text-base leading-6">Client Company</span>
              </Link>

              <Link href="/team" className="flex justify-center items-center gap-2.5 px-6 py-2.5 rounded-[999px]" 
                style={{
                  background: 'linear-gradient(90deg, #1A3A6F 0%, #399084 100%)',
                }}>
                <span className="text-white font-inter font-semibold text-base leading-6">Team</span>
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
            Our Team
          </h1>
          <p className="text-white font-inter font-medium text-center mt-4 leading-[32px]" 
            style={{ 
              fontSize: '24px',
              letterSpacing: '-1.5%',
              lineHeight: '1.333em'
            }}>
            전문성과 열정으로 함께하는 팀
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-20 py-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Team Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-[#14151A] font-inter font-bold mb-6" 
              style={{ 
                fontSize: '48px',
                letterSpacing: '-2.083%',
                lineHeight: '1.167em'
              }}>
              우리 팀을 소개합니다
            </h2>
            <p className="font-inter font-normal leading-8 max-w-3xl mx-auto" 
              style={{
                fontSize: '18px',
                letterSpacing: '-1.111%',
                lineHeight: '1.556em',
                color: 'rgba(15,19,36,0.7)'
              }}>
              4개 전문 파트의 경험 풍부한 전문가들이 
              혁신적이고 지속가능한 솔루션을 제공합니다.
            </p>
          </div>

          {/* Join Our Team */}
          <div className="bg-gradient-to-br from-[#1A3A6F] to-[#399084] rounded-3xl p-12 text-white text-center">
            <h2 className="font-inter font-bold mb-6" 
              style={{ 
                fontSize: '36px',
                letterSpacing: '-2.083%',
                lineHeight: '1.167em'
              }}>
              함께할 인재를 찾습니다
            </h2>
            <p className="font-inter font-normal leading-8 mb-8 max-w-2xl mx-auto" 
              style={{
                fontSize: '18px',
                letterSpacing: '-1.111%',
                lineHeight: '1.556em',
                opacity: 0.9
              }}>
              지속가능한 미래를 만들어가는 에코에이블컨설팅과 함께할 
              열정적이고 전문적인 인재를 모집합니다.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
} 