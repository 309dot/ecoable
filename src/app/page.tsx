import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1A3A6F] to-[#399084] relative">
      {/* Background Image Container */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" 
           style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen px-20 py-4 gap-2.5">
        
        {/* Navigation Bar */}
        <nav className="flex justify-stretch items-stretch gap-6 py-2">
          <div className="flex-1 flex items-center backdrop-blur-md rounded-[999px] gap-4 px-0 py-0 bg-white/10">
            
            {/* Center Menu Container */}
            <div className="flex-1 flex justify-center items-center gap-2.5 py-3 px-0">
              
              {/* Logo Section */}
              <div className="flex justify-center items-center px-3 py-0 w-40 h-10">
                <div className="text-white font-inter font-bold text-lg tracking-tight">
                  에코에이블컨설팅(주)
                </div>
              </div>

              {/* Menu Links Container */}
              <div className="flex-1 flex justify-center items-center gap-4">
                {/* Home - Active with gradient background */}
                <Link href="/" className="flex justify-center items-center gap-2.5 px-6 py-2.5 rounded-[999px] bg-gradient-to-r from-[#1A3A6F] to-[#399084]">
                  <span className="text-white font-inter font-semibold text-base leading-6 tracking-tight">
                    Home
                  </span>
                </Link>

                {/* Ecoable */}
                <Link href="/ecoable" className="flex justify-center items-center gap-2.5 px-6 py-2.5 rounded-[999px] bg-white/20">
                  <span className="text-white font-inter font-medium text-base leading-6 tracking-tight">
                    Ecoable
                  </span>
                </Link>

                {/* What we do */}
                <Link href="/what-we-do" className="flex justify-center items-center gap-2.5 px-6 py-2.5 rounded-[999px] bg-white/20">
                  <span className="text-white font-inter font-medium text-base leading-6 tracking-tight">
                    What we do
                  </span>
                </Link>

                {/* Portfolio */}
                <Link href="/portfolio" className="flex justify-center items-center gap-2.5 px-6 py-2.5 rounded-[999px] bg-white/20">
                  <span className="text-white font-inter font-medium text-base leading-6 tracking-tight">
                    Portfolio
                  </span>
                </Link>

                {/* Client Company */}
                <Link href="/client-company" className="flex justify-center items-center gap-2.5 px-6 py-2.5 rounded-[999px] bg-white/20">
                  <span className="text-white font-inter font-medium text-base leading-6 tracking-tight">
                    Client Company
                  </span>
                </Link>

                {/* Contact */}
                <Link href="/contact" className="flex justify-center items-center gap-2.5 px-6 py-2.5 rounded-[999px] bg-white/20">
                  <span className="text-white font-inter font-medium text-base leading-6 tracking-tight">
                    Contact
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

        {/* Main Content Container */}
        <div className="flex-1 flex flex-col gap-6">
          
          {/* Text and Cards Section */}
          <div className="flex-1 flex flex-col justify-between gap-10 pt-20 pb-8">
            
            {/* Title Section */}
            <div className="flex flex-col gap-2">
              {/* Main Title */}
              <h1 className="text-white font-inter font-medium text-5xl leading-[56px] tracking-tight">
                환경과 경제의 조화, 새로운 내일을 설계합니다.<br />
                지속가능한 미래를 위한 컨설팅,
              </h1>
              
              {/* Company Name */}
              <h2 className="text-white font-inter font-bold text-6xl leading-[72px] tracking-tight">
                에코에이블컨설팅(주)
              </h2>
            </div>

            {/* Cards and Bottom Section */}
            <div className="flex flex-col gap-4">
              
              {/* Cards Grid */}
              <div className="flex justify-end flex-wrap gap-4">
                {/* Card 1 - 제품환경파트 */}
                <div className="w-60 bg-white border border-[#DEE0E3] rounded-3xl p-6">
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center gap-2">
                      <h3 className="text-[#14151A] font-inter font-bold text-lg leading-[26px] tracking-tight">
                        제품환경파트
                      </h3>
                      <div className="w-6 h-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M5.98 6L12.02 6L12.02 12.02L5.98 6Z" fill="#14151A"/>
                        </svg>
                      </div>
                    </div>
                    <p className="font-inter font-normal text-sm leading-5 tracking-tight text-gray-600">
                      LCA 기반 진단부터 녹색제품 인증까지 전 과정을 지원
                    </p>
                  </div>
                </div>

                {/* Card 2 - 환경정책파트 */}
                <div className="w-60 bg-white border border-[#DEE0E3] rounded-3xl p-6">
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center gap-2">
                      <h3 className="text-[#14151A] font-inter font-bold text-lg leading-[26px] tracking-tight">
                        환경정책파트
                      </h3>
                      <div className="w-6 h-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M5.98 6L12.02 6L12.02 12.02L5.98 6Z" fill="#14151A"/>
                        </svg>
                      </div>
                    </div>
                    <p className="font-inter font-normal text-sm leading-5 tracking-tight text-gray-600">
                      컨설팅과 통합관리 솔루션을 통해 지속가능한 사회 구현을 지원
                    </p>
                  </div>
                </div>

                {/* Card 3 - 자원순환파트 */}
                <div className="w-60 bg-white border border-[#DEE0E3] rounded-3xl p-6">
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center gap-2">
                      <h3 className="text-[#14151A] font-inter font-bold text-lg leading-[26px] tracking-tight">
                        자원순환파트
                      </h3>
                      <div className="w-6 h-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M5.98 6L12.02 6L12.02 12.02L5.98 6Z" fill="#14151A"/>
                        </svg>
                      </div>
                    </div>
                    <p className="font-inter font-normal text-sm leading-5 tracking-tight text-gray-600">
                      자원을 다시 보는 시선, 자원순환의 지속가능한 흐름을 설계
                    </p>
                  </div>
                </div>

                {/* Card 4 - 기후변화대응파트 */}
                <div className="w-60 bg-white border border-[#DEE0E3] rounded-3xl p-6">
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center gap-2">
                      <h3 className="text-[#14151A] font-inter font-bold text-lg leading-[26px] tracking-tight">
                        기후변화대응파트
                      </h3>
                      <div className="w-6 h-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M5.98 6L12.02 6L12.02 12.02L5.98 6Z" fill="#14151A"/>
                        </svg>
                      </div>
                    </div>
                    <p className="font-inter font-normal text-sm leading-5 tracking-tight text-gray-600">
                      제도 수립부터 온실가스 산정 컨설팅까지 전략적 대응을 지원
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom CTA Container */}
              <div className="flex justify-between items-center px-8 py-6 bg-white rounded-3xl backdrop-blur-3xl gap-[156px]">
                
                {/* Left Caption */}
                <div className="flex justify-center items-center gap-4">
                  <p className="font-inter font-normal text-base leading-6 tracking-tight text-gray-600">
                    고객에게는 믿음을, 구성원에게는 의미 있는 일상을.<br />
                    모두가 함께 성장할 수 있는 지속가능한 조직을 만들어갑니다.
                  </p>
                </div>

                {/* Right Buttons */}
                <div className="flex justify-end items-center gap-2">
                  {/* 에코에이블 소개자료 Button */}
                  <button className="flex items-center gap-1 px-4 py-3 rounded-[999px] bg-gray-100">
                    <div className="w-5 h-5">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M2.5 1.67H15L12.02 12.02L15 16.67H2.5V1.67Z" fill="rgba(15,19,36,0.6)"/>
                      </svg>
                    </div>
                    <div className="flex items-center px-1">
                      <span className="text-[#14151A] font-inter font-medium text-base leading-6 tracking-tight">
                        에코에이블 소개자료
                      </span>
                    </div>
                  </button>

                  {/* 찾아오시는 길 Button */}
                  <button className="flex items-center gap-1 px-4 py-3 rounded-[999px] bg-gray-100">
                    <div className="w-5 h-5">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M1.67 1.67H16.67L16.67 16.67L1.67 16.67L1.67 1.67Z" fill="rgba(15,19,36,0.6)"/>
                      </svg>
                    </div>
                    <div className="flex items-center px-1">
                      <span className="text-[#14151A] font-inter font-medium text-base leading-6 tracking-tight">
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
    </div>
  );
}
