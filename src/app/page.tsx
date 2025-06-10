import Navigation from "@/components/Navigation";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  return (
    <div className="bg-white relative overflow-hidden font-pretendard" style={{ width: '1440px', height: '1024px' }}>
      {/* Background Image with exact Figma specifications */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Desktop_main_01.png')",
          // Figma filters: exposure 0.16, contrast -0.09, saturation 0.49, highlights -0.42, shadows 0.27
          filter: "brightness(1.16) contrast(0.91) saturate(1.49) hue-rotate(-5deg)",
        }}
      >
        {/* Overlay with exact opacity from Figma */}
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      {/* Navigation - positioned at y:16 as per Figma */}
      <div className="relative z-10 pt-4">
        <Navigation />
      </div>

      {/* Main Content Container - matches Figma coordinates */}
      <main className="relative z-10">
        {/* Title Section - positioned at y:190 as per Figma */}
        <div className="absolute" style={{ top: '190px', left: '80px', width: '1280px' }}>
          {/* Main title - exact Figma specs: Inter Medium 48px, letter-spacing -1px, line-height 56px */}
          <h1 className="text-white font-medium text-5xl leading-14 tracking-[-1px] mb-5">
            환경과 경제의 조화, 새로운 내일을 설계합니다.<br />
            지속가능한 미래를 위한 컨설팅,
          </h1>
          {/* Company name - exact Figma specs: Inter Bold 64px, letter-spacing -1.7px, line-height 72px */}
          <h2 className="text-white font-bold text-6xl leading-18 tracking-[-1.7px]">
            에코에이블컨설팅(주)
          </h2>
        </div>

        {/* Service Cards Section - positioned at y:722 as per Figma */}
        <div className="absolute" style={{ top: '722px', left: '80px', width: '1280px' }}>
          {/* Cards positioned exactly as in Figma: x: 352, 608, 864, 1120 */}
          <div className="relative">
            {/* Card 1 - x:352 (352-80=272px from container start) */}
            <div className="absolute" style={{ left: '272px', top: '0' }}>
              <ServiceCard
                title="제품환경파트"
                description="LCA 기반 진단부터 녹색제품 인증까지 전 과정을 지원"
              />
            </div>
            {/* Card 2 - x:608 (608-80=528px from container start) */}
            <div className="absolute" style={{ left: '528px', top: '0' }}>
              <ServiceCard
                title="환경정책파트"
                description="컨설팅과 통합관리 솔루션을 통해 지속가능한 사회 구현을 지원"
              />
            </div>
            {/* Card 3 - x:864 (864-80=784px from container start) */}
            <div className="absolute" style={{ left: '784px', top: '0' }}>
              <ServiceCard
                title="자원순환파트"
                description="자원을 다시 보는 시선, 자원순환의 지속가능한 흐름을 설계"
              />
            </div>
            {/* Card 4 - x:1120 (1120-80=1040px from container start) */}
            <div className="absolute" style={{ left: '1040px', top: '0' }}>
              <ServiceCard
                title="기후변화대응파트"
                description="제도 수립부터 온실가스 산정 컨설팅까지 전략적 대응을 지원"
              />
            </div>
          </div>
        </div>

        {/* Bottom Container - positioned at y:864 as per Figma, width:1280px, height:96px */}
        <div 
          className="absolute bg-white rounded-3xl flex items-center px-8"
          style={{ 
            top: '864px', 
            left: '80px', 
            width: '1280px', 
            height: '96px' 
          }}
        >
          {/* Caption text - positioned as per Figma */}
          <div className="flex-1">
            <p className="text-gray-text/60 text-base leading-6 tracking-[-0.2px]">
              고객에게는 믿음을, 구성원에게는 의미 있는 일상을.<br />
              모두가 함께 성장할 수 있는 지속가능한 조직을 만들어갑니다.
            </p>
          </div>
          
          {/* Button container - positioned at right side */}
          <div className="flex gap-2">
            <button className="bg-[#0a0f29]/4 rounded-full pl-4 pr-5 py-3 flex items-center space-x-3 hover:bg-[#0a0f29]/8 transition-colors">
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
            <button className="bg-[#0a0f29]/4 rounded-full pl-4 pr-5 py-3 flex items-center space-x-3 hover:bg-[#0a0f29]/8 transition-colors">
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
