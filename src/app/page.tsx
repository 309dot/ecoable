import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image - 1440x1024 */}
      <section className="relative w-full h-[1024px] overflow-hidden">
        {/* Background Image with Overlays */}
        <div className="absolute inset-0">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/hero-bg.jpg')`,
            }}
          />
          {/* Gradient Overlay #1A3A6F to #399084 */}
          <div 
            className="absolute inset-0" 
            style={{
              background: 'linear-gradient(90deg, #1A3A6F 0%, #399084 100%)',
              opacity: 0.8
            }}
          />
        </div>

        {/* Content Container - px-20 py-4 from figma */}
        <div className="relative z-10 flex flex-col h-full px-20 py-4 gap-2.5">
          
          {/* Navigation - backdrop-blur-md rounded-[999px] */}
          <nav className="flex justify-stretch items-stretch gap-6 py-2">
            <div className="flex-1 flex items-center backdrop-blur-md rounded-[999px] gap-4 px-0 py-0">
              
              {/* Center Menu Container */}
              <div className="flex-1 flex justify-center items-center gap-2.5 py-3 px-0">
                
                {/* Logo Section */}
                <div className="flex justify-center items-center px-3 py-0 w-40 h-10">
                  <div className="relative w-[142.27px] h-7">
                    {/* Logo Background (White Rectangle) */}
                    <div className="absolute -left-[5px] -top-[2px] w-[152px] h-[33px] bg-white rounded-sm" />
                    {/* Logo Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat z-10"
                      style={{
                        backgroundImage: `url('/logo.png')`,
                      }}
                    />
                  </div>
                </div>

                {/* Menu Links Container */}
                <div className="flex-1 flex justify-center items-center gap-4">
                  {/* Home - Active with gradient background */}
                  <Link href="/" className="flex justify-center items-center gap-2.5 px-6 py-2.5 rounded-[999px]" 
                    style={{
                      background: 'linear-gradient(90deg, #1A3A6F 0%, #399084 100%)',
                    }}>
                    <span className="text-white font-inter font-semibold text-base leading-6" style={{ letterSpacing: '-1.25%' }}>
                      Home
                    </span>
                  </Link>

                  {/* Ecoable */}
                  <Link href="/ecoable" className="flex justify-center items-center gap-2.5 px-6 py-2.5 rounded-[999px]" 
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                    <span className="text-white font-inter font-medium text-base leading-6" style={{ letterSpacing: '-1.25%' }}>
                      Ecoable
                    </span>
                  </Link>

                  {/* What we do */}
                  <Link href="/what-we-do" className="flex justify-center items-center gap-2.5 px-6 py-2.5 rounded-[999px]" 
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                    <span className="text-white font-inter font-medium text-base leading-6" style={{ letterSpacing: '-1.25%' }}>
                      What we do
                    </span>
                  </Link>

                  {/* Portfolio */}
                  <Link href="/portfolio" className="flex justify-center items-center gap-2.5 px-6 py-2.5 rounded-[999px]" 
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                    <span className="text-white font-inter font-medium text-base leading-6" style={{ letterSpacing: '-1.25%' }}>
                      Portfolio
                    </span>
                  </Link>
                </div>

                {/* Right Buttons */}
                <div className="flex justify-end items-center gap-2">
                  {/* Article Button */}
                  <button className="flex justify-center items-center gap-1 p-2.5 bg-white border border-[#DEE0E3] rounded-[999px] shadow-[0px_1px_2px_0px_rgba(20,21,26,0.05)]">
                    <div className="w-5 h-5">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M2.5 1.67H15L12.02 12.02L15 16.67H2.5V1.67Z" fill="rgba(15,19,36,0.6)"/>
                      </svg>
                    </div>
                  </button>

                  {/* Mail Button */}
                  <button className="flex justify-center items-center gap-1 p-2.5 bg-white border border-[#DEE0E3] rounded-[999px] shadow-[0px_1px_2px_0px_rgba(20,21,26,0.05)]">
                    <div className="w-5 h-5">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M1.67 2.5H16.67L15 15H1.67V2.5Z" fill="rgba(15,19,36,0.6)"/>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {/* Main Content Container - flex-1 gap-6 */}
          <div className="flex-1 flex flex-col gap-6">
            
            {/* Text and Cards Section - pt-20 pb-8 gap-10 */}
            <div className="flex-1 flex flex-col justify-between gap-10 pt-20 pb-8">
              
              {/* Title Section */}
              <div className="flex flex-col gap-2">
                {/* Main Title - 48px font, line-height 56px */}
                <h1 className="text-white font-inter font-medium leading-[56px]" 
                  style={{ 
                    fontSize: '48px',
                    letterSpacing: '-2.083%',
                    lineHeight: '1.1667em'
                  }}>
                  환경과 경제의 조화, 새로운 내일을 설계합니다.<br />
                  지속가능한 미래를 위한 컨설팅,
                </h1>
                
                {/* Company Name - 64px font, line-height 72px */}
                <h2 className="text-white font-inter font-bold leading-[72px]" 
                  style={{ 
                    fontSize: '64px',
                    letterSpacing: '-2.656%',
                    lineHeight: '1.125em'
                  }}>
                  에코에이블컨설팅(주)
                </h2>
              </div>

              {/* Cards and Bottom Section */}
              <div className="flex flex-col gap-4">
                
                {/* Cards Grid - justify-end, flex-wrap, gap-4 */}
                <div className="flex justify-end flex-wrap gap-4">
                  {/* Card 1 - 제품환경파트 - w-60 (240px) rounded-3xl (24px) */}
                  <div className="w-60 bg-white border border-[#DEE0E3] rounded-3xl p-6">
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between items-center gap-2">
                        <h3 className="text-[#14151A] font-inter font-bold leading-[26px]" 
                          style={{ 
                            fontSize: '18px',
                            letterSpacing: '-1.111%',
                            lineHeight: '1.444em'
                          }}>
                          제품환경파트
                        </h3>
                        <div className="w-6 h-6">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M5.98 6L12.02 6L12.02 12.02L5.98 6Z" fill="#14151A"/>
                          </svg>
                        </div>
                      </div>
                      <p className="font-inter font-normal leading-5" 
                        style={{
                          fontSize: '14px',
                          letterSpacing: '-0.714%',
                          lineHeight: '1.429em',
                          color: 'rgba(15,19,36,0.6)'
                        }}>
                        LCA 기반 진단부터 녹색제품 인증까지 전 과정을 지원
                      </p>
                    </div>
                  </div>

                  {/* Card 2 - 환경정책파트 */}
                  <div className="w-60 bg-white border border-[#DEE0E3] rounded-3xl p-6">
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between items-center gap-2">
                        <h3 className="text-[#14151A] font-inter font-bold leading-[26px]" 
                          style={{ 
                            fontSize: '18px',
                            letterSpacing: '-1.111%',
                            lineHeight: '1.444em'
                          }}>
                          환경정책파트
                        </h3>
                        <div className="w-6 h-6">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M5.98 6L12.02 6L12.02 12.02L5.98 6Z" fill="#14151A"/>
                          </svg>
                        </div>
                      </div>
                      <p className="font-inter font-normal leading-5" 
                        style={{
                          fontSize: '14px',
                          letterSpacing: '-0.714%',
                          lineHeight: '1.429em',
                          color: 'rgba(15,19,36,0.6)'
                        }}>
                        컨설팅과 통합관리 솔루션을 통해 지속가능한 사회 구현을 지원
                      </p>
                    </div>
                  </div>

                  {/* Card 3 - 자원순환파트 */}
                  <div className="w-60 bg-white border border-[#DEE0E3] rounded-3xl p-6">
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between items-center gap-2">
                        <h3 className="text-[#14151A] font-inter font-bold leading-[26px]" 
                          style={{ 
                            fontSize: '18px',
                            letterSpacing: '-1.111%',
                            lineHeight: '1.444em'
                          }}>
                          자원순환파트
                        </h3>
                        <div className="w-6 h-6">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M5.98 6L12.02 6L12.02 12.02L5.98 6Z" fill="#14151A"/>
                          </svg>
                        </div>
                      </div>
                      <p className="font-inter font-normal leading-5" 
                        style={{
                          fontSize: '14px',
                          letterSpacing: '-0.714%',
                          lineHeight: '1.429em',
                          color: 'rgba(15,19,36,0.6)'
                        }}>
                        자원을 다시 보는 시선, 자원순환의 지속가능한 흐름을 설계
                      </p>
                    </div>
                  </div>

                  {/* Card 4 - 기후변화대응파트 */}
                  <div className="w-60 bg-white border border-[#DEE0E3] rounded-3xl p-6">
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between items-center gap-2">
                        <h3 className="text-[#14151A] font-inter font-bold leading-[26px]" 
                          style={{ 
                            fontSize: '18px',
                            letterSpacing: '-1.111%',
                            lineHeight: '1.444em'
                          }}>
                          기후변화대응파트
                        </h3>
                        <div className="w-6 h-6">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M5.98 6L12.02 6L12.02 12.02L5.98 6Z" fill="#14151A"/>
                          </svg>
                        </div>
                      </div>
                      <p className="font-inter font-normal leading-5" 
                        style={{
                          fontSize: '14px',
                          letterSpacing: '-0.714%',
                          lineHeight: '1.429em',
                          color: 'rgba(15,19,36,0.6)'
                        }}>
                        제도 수립부터 온실가스 산정 컨설팅까지 전략적 대응을 지원
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Container - gap-156px px-8 py-6 backdrop-blur-xl */}
                <div className="flex justify-between items-center px-8 py-6 bg-white rounded-3xl backdrop-blur-3xl" 
                  style={{ gap: '156px' }}>
                  
                  {/* Left Caption */}
                  <div className="flex justify-center items-center gap-4">
                    <p className="font-inter font-normal leading-6" 
                      style={{
                        fontSize: '16px',
                        letterSpacing: '-1.25%',
                        lineHeight: '1.5em',
                        color: 'rgba(15,19,36,0.6)'
                      }}>
                      고객에게는 믿음을, 구성원에게는 의미 있는 일상을.<br />
                      모두가 함께 성장할 수 있는 지속가능한 조직을 만들어갑니다.
                    </p>
                  </div>

                  {/* Right Buttons */}
                  <div className="flex justify-end items-center gap-2">
                    {/* 에코에이블 소개자료 Button */}
                    <button className="flex items-center gap-1 px-4 py-3 rounded-[999px]" 
                      style={{ backgroundColor: 'rgba(10,15,41,0.04)' }}>
                      <div className="w-5 h-5">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M2.5 1.67H15L12.02 12.02L15 16.67H2.5V1.67Z" fill="rgba(15,19,36,0.6)"/>
                        </svg>
                      </div>
                      <div className="flex items-center px-1">
                        <span className="text-[#14151A] font-inter font-medium text-center leading-6" 
                          style={{
                            fontSize: '16px',
                            letterSpacing: '-1.25%',
                            lineHeight: '1.5em'
                          }}>
                          에코에이블 소개자료
                        </span>
                      </div>
                    </button>

                    {/* 찾아오시는 길 Button */}
                    <button className="flex items-center gap-1 px-4 py-3 rounded-[999px]" 
                      style={{ backgroundColor: 'rgba(10,15,41,0.04)' }}>
                      <div className="w-5 h-5">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M1.67 1.67H16.67L16.67 16.67L1.67 16.67L1.67 1.67Z" fill="rgba(15,19,36,0.6)"/>
                        </svg>
                      </div>
                      <div className="flex items-center px-1">
                        <span className="text-[#14151A] font-inter font-medium text-center leading-6" 
                          style={{
                            fontSize: '16px',
                            letterSpacing: '-1.25%',
                            lineHeight: '1.5em'
                          }}>
                          찾아오시는 길
                        </span>
                      </div>
                      <div className="w-5 h-5">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M3.33 3.52L13.33 12.96L16.67 3.52L3.33 3.52Z" fill="rgba(15,19,36,0.6)"/>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
