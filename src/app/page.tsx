export default function Home() {
  return (
    <div className="min-h-screen relative w-[1440px] h-[1024px]">
      {/* Hero Section with Background Image */}
      <section className="relative w-full h-full overflow-hidden">
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
              opacity: 0.75
            }}
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black opacity-25" />
        </div>

        {/* Navigation */}
        <nav className="relative z-20 px-20 py-4">
          <div className="flex justify-between items-center h-16 backdrop-blur-md rounded-[999px] gap-4 px-0 py-2">
            <div className="flex items-center justify-center gap-2.5 px-3 py-0 flex-1">
              {/* Logo */}
              <div className="flex justify-center items-center px-3 py-0 w-40 h-10">
                <div className="w-[142.27px] h-7 relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url('/logo.png')`,
                    }}
                  />
                  <div className="absolute -left-[5px] -top-[2px] w-[152px] h-[33px] bg-white" />
                </div>
              </div>

              {/* Menu Links */}
              <div className="flex justify-center items-center gap-4 flex-1">
                {/* Home - Active */}
                <button className="flex justify-center items-center gap-2.5 px-6 py-2.5 bg-white rounded-[999px] shadow-[0px_1px_2px_0px_rgba(20,21,26,0.05)] bg-gradient-to-r from-[#1A3A6F] to-[#399084]">
                  <span className="text-[#14151A] font-inter font-semibold text-base leading-6 tracking-[-1.25%]">Home</span>
                </button>

                {/* Ecoable */}
                <button className="flex justify-center items-center gap-2.5 px-6 py-2.5 bg-white/40 rounded-[999px]">
                  <span className="text-white font-inter font-medium text-base leading-6 tracking-[-1.25%]">Ecoable</span>
                </button>

                {/* What we do */}
                <button className="flex justify-center items-center gap-2.5 px-6 py-2.5 bg-white/40 rounded-[999px]">
                  <span className="text-white font-inter font-medium text-base leading-6 tracking-[-1.25%]">What we do</span>
                </button>

                {/* Portfolio */}
                <button className="flex justify-center items-center gap-2.5 px-6 py-2.5 bg-white/40 rounded-[999px]">
                  <span className="text-white font-inter font-medium text-base leading-6 tracking-[-1.25%]">Portfolio</span>
                </button>
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

        {/* Main Content Container */}
        <div className="relative z-10 flex flex-col flex-1 gap-6 px-0 py-8">
          {/* Text Section */}
          <div className="flex flex-col justify-between flex-1 gap-10 pt-20 pb-8 px-0">
            {/* Title */}
            <div className="flex flex-col flex-1 gap-2">
              {/* Main Title */}
              <h1 className="text-white font-inter font-medium text-5xl leading-[56px] tracking-[-2.08%] fill-mode">
                환경과 경제의 조화, 새로운 내일을 설계합니다.<br />
                지속가능한 미래를 위한 컨설팅,
              </h1>
              {/* Company Name */}
              <h2 className="text-white font-inter font-bold text-6xl leading-[72px] tracking-[-2.66%] fill-mode">
                에코에이블컨설팅(주)
              </h2>
            </div>

            {/* Cards Section */}
            <div className="flex flex-col flex-1 gap-4">
              {/* Cards Grid */}
              <div className="flex justify-end flex-wrap gap-4 flex-1">
                {/* Card 1 - 제품환경파트 */}
                <div className="flex justify-stretch items-stretch gap-4 p-6 w-60 bg-white border border-[#DEE0E3] rounded-3xl">
                  <div className="flex flex-col gap-3 flex-1">
                    <div className="flex justify-between items-center flex-1 gap-2">
                      <h3 className="text-[#14151A] font-inter font-bold text-lg leading-[26px] tracking-[-1.11%]">제품환경파트</h3>
                      <div className="w-6 h-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M5.98 6L12.02 6L12.02 12.02L5.98 6Z" fill="#14151A"/>
                        </svg>
                      </div>
                    </div>
                    <p className="text-[rgba(15,19,36,0.6)] font-inter font-normal text-sm leading-5 tracking-[-0.71%] fill-mode">
                      LCA 기반 진단부터 녹색제품 인증까지 전 과정을 지원
                    </p>
                  </div>
                </div>

                {/* Card 2 - 환경정책파트 */}
                <div className="flex justify-stretch items-stretch gap-4 p-6 w-60 bg-white border border-[#DEE0E3] rounded-3xl">
                  <div className="flex flex-col gap-3 flex-1">
                    <div className="flex justify-between items-center flex-1 gap-2">
                      <h3 className="text-[#14151A] font-inter font-bold text-lg leading-[26px] tracking-[-1.11%]">환경정책파트</h3>
                      <div className="w-6 h-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M5.98 6L12.02 6L12.02 12.02L5.98 6Z" fill="#14151A"/>
                        </svg>
                      </div>
                    </div>
                    <p className="text-[rgba(15,19,36,0.6)] font-inter font-normal text-sm leading-5 tracking-[-0.71%] fill-mode">
                      컨설팅과 통합관리 솔루션을 통해 지속가능한 사회 구현을 지원
                    </p>
                  </div>
                </div>

                {/* Card 3 - 자원순환파트 */}
                <div className="flex justify-stretch items-stretch gap-4 p-6 w-60 bg-white border border-[#DEE0E3] rounded-3xl">
                  <div className="flex flex-col gap-3 flex-1">
                    <div className="flex justify-between items-center flex-1 gap-2">
                      <h3 className="text-[#14151A] font-inter font-bold text-lg leading-[26px] tracking-[-1.11%]">자원순환파트</h3>
                      <div className="w-6 h-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M5.98 6L12.02 6L12.02 12.02L5.98 6Z" fill="#14151A"/>
                        </svg>
                      </div>
                    </div>
                    <p className="text-[rgba(15,19,36,0.6)] font-inter font-normal text-sm leading-5 tracking-[-0.71%] fill-mode">
                      자원을 다시 보는 시선, 자원순환의 지속가능한 흐름을 설계
                    </p>
                  </div>
                </div>

                {/* Card 4 - 기후변화대응파트 */}
                <div className="flex justify-stretch items-stretch gap-4 p-6 w-60 bg-white border border-[#DEE0E3] rounded-3xl">
                  <div className="flex flex-col gap-3 flex-1">
                    <div className="flex justify-between items-center flex-1 gap-2">
                      <h3 className="text-[#14151A] font-inter font-bold text-lg leading-[26px] tracking-[-1.11%]">기후변화대응파트</h3>
                      <div className="w-6 h-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M5.98 6L12.02 6L12.02 12.02L5.98 6Z" fill="#14151A"/>
                        </svg>
                      </div>
                    </div>
                    <p className="text-[rgba(15,19,36,0.6)] font-inter font-normal text-sm leading-5 tracking-[-0.71%] fill-mode">
                      제도 수립부터 온실가스 산정 컨설팅까지 전략적 대응을 지원
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom CTA Container */}
              <div className="flex justify-between items-center flex-1 gap-[156px] px-8 py-6 bg-white rounded-3xl backdrop-blur-xl">
                {/* Left Caption */}
                <div className="flex justify-center items-center gap-4">
                  <p className="text-[rgba(15,19,36,0.6)] font-inter font-normal text-base leading-6 tracking-[-1.25%]">
                    고객에게는 믿음을, 구성원에게는 의미 있는 일상을.<br />
                    모두가 함께 성장할 수 있는 지속가능한 조직을 만들어갑니다.
                  </p>
                </div>

                {/* Right Buttons */}
                <div className="flex justify-end items-center gap-2">
                  {/* 에코에이블 소개자료 Button */}
                  <button className="flex items-center gap-1 px-4 py-3 bg-[rgba(10,15,41,0.04)] rounded-[999px]">
                    <div className="w-5 h-5">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M2.5 1.67H15L12.02 12.02L15 16.67H2.5V1.67Z" fill="rgba(15,19,36,0.6)"/>
                      </svg>
                    </div>
                    <div className="flex items-center px-1">
                      <span className="text-[#14151A] font-inter font-medium text-base leading-6 tracking-[-1.25%] text-center">에코에이블 소개자료</span>
                    </div>
                  </button>

                  {/* 찾아오시는 길 Button */}
                  <button className="flex items-center gap-1 px-4 py-3 bg-[rgba(10,15,41,0.04)] rounded-[999px]">
                    <div className="w-5 h-5">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M1.67 1.67H16.67L16.67 16.67L1.67 16.67L1.67 1.67Z" fill="rgba(15,19,36,0.6)"/>
                      </svg>
                    </div>
                    <div className="flex items-center px-1">
                      <span className="text-[#14151A] font-inter font-medium text-base leading-6 tracking-[-1.25%] text-center">찾아오시는 길</span>
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
      </section>
    </div>
  );
}
