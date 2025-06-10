import Navigation from "@/components/Navigation";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden font-inter">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Desktop_main_01.png')",
          filter: "brightness(0.74) contrast(0.91) saturate(0.51) sepia(0.36) hue-rotate(120deg)",
        }}
      >
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10 mx-4 md:mx-20 mt-8 md:mt-20">
        {/* Title Section */}
        <div className="mb-16 md:mb-[200px]">
          <h1 className="text-white text-3xl md:text-5xl font-medium leading-tight md:leading-14 tracking-[-1px] mb-4 md:mb-5">
            환경과 경제의 조화, 새로운 내일을 설계합니다.<br />
            <span className="block md:inline">지속가능한 미래를 위한 컨설팅,</span>
          </h1>
          <h2 className="text-white text-4xl md:text-6xl font-bold leading-tight md:leading-18 tracking-[-1.7px]">
            에코에이블컨설팅(주)
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 justify-items-center">
          <ServiceCard
            title="제품환경파트"
            description="LCA 기반 진단부터 녹색제품 인증까지 전 과정을 지원"
          />
          <ServiceCard
            title="환경정책파트"
            description="컨설팅과 통합관리 솔루션을 통해 지속가능한 사회 구현을 지원"
          />
          <ServiceCard
            title="자원순환파트"
            description="자원을 다시 보는 시선, 자원순환의 지속가능한 흐름을 설계"
          />
          <ServiceCard
            title="기후변화대응파트"
            description="제도 수립부터 온실가스 산정 컨설팅까지 전략적 대응을 지원"
          />
        </div>

        {/* Bottom Section */}
        <div className="bg-white rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex-1 max-w-md">
            <p className="text-gray-text/60 text-base leading-6 tracking-[-0.2px]">
              고객에게는 믿음을, 구성원에게는 의미 있는 일상을.<br />
              모두가 함께 성장할 수 있는 지속가능한 조직을 만들어갑니다.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button className="bg-[#0a0f29]/4 rounded-full pl-4 pr-6 py-3 flex items-center space-x-3 hover:bg-[#0a0f29]/8 transition-colors whitespace-nowrap">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10,9 9,9 8,9"/>
                </svg>
              </div>
              <span className="text-dark-text font-medium text-base tracking-[-0.2px]">에코에이블 소개자료</span>
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 7l10 10M7 17l10-10"/>
                </svg>
              </div>
            </button>
            <button className="bg-[#0a0f29]/4 rounded-full pl-4 pr-6 py-3 flex items-center space-x-3 hover:bg-[#0a0f29]/8 transition-colors whitespace-nowrap">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <span className="text-dark-text font-medium text-base tracking-[-0.2px]">찾아오시는 길</span>
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 7l10 10M7 17l10-10"/>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
