import Navigation from "@/components/Navigation";
import ServiceCard from "@/components/ServiceCard";
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="bg-white font-pretendard">
      {/* Navigation */}
      <div className="relative z-10 pt-4">
        <Navigation />
      </div>

      {/* Main Content Container - 반응형으로 개선 */}
      <main className="relative">
        {/* Hero Section */}
        <div className="px-4 md:px-8 lg:px-20 xl:px-80 pt-16 md:pt-20 lg:pt-24">
          {/* Main Title */}
          <div className="mb-12 md:mb-16">
            <h1 className="text-[#14151a] font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-[-1.7px] mb-6">
              환경과 경제의 조화,<br />
              새로운 내일을 설계합니다.
            </h1>
            <p className="text-[#0f1324]/60 font-medium text-base md:text-lg leading-relaxed tracking-[-0.2px] max-w-md">
              지속가능한 미래를 위한 컨설팅,<br />
              <span className="font-bold text-[#14151a]">에코에이블컨설팅㈜</span>
            </p>
          </div>
        </div>

        {/* Service Cards Section */}
        <div className="px-4 md:px-8 lg:px-20 xl:px-80 mb-16 md:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
            <ServiceCard
              title="제품환경파트"
              description="LCA 기반 진단부터 녹색제품 인증까지 전 과정을 지원"
              iconPath="/icons/lead-icon-1.svg"
            />
            <ServiceCard
              title="환경정책파트"
              description="컨설팅과 통합관리 솔루션을 통해 지속가능한 사회 구현을 지원"
              iconPath="/icons/lead-icon-2.svg"
            />
            <ServiceCard
              title="자원순환파트"
              description="자원을 다시 보는 시선, 자원순환의 지속가능한 흐름을 설계"
              iconPath="/icons/lead-icon-3.svg"
            />
            <ServiceCard
              title="기후변화대응파트"
              description="제도 수립부터 온실가스 산정 컨설팅까지 전략적 대응을 지원"
              iconPath="/icons/lead-icon-4.svg"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="px-4 md:px-8 lg:px-20 xl:px-80 pb-16 md:pb-20">
          <div className="bg-[#f7f7f8] rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Text Content */}
              <div>
                <h2 className="text-[#14151a] font-bold text-xl md:text-2xl lg:text-3xl leading-tight tracking-[-0.5px] mb-4 md:mb-6">
                  고객에게는 믿음을,<br />
                  구성원에게는 의미 있는 일상을.
                </h2>
                <p className="text-[#0f1324]/80 font-medium text-sm md:text-base leading-relaxed tracking-[-0.2px] mb-6 md:mb-8">
                  모두가 함께 성장할 수 있는 지속가능한 조직을 만들어갑니다.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/ecoable"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#14151a] text-white font-medium text-sm rounded-xl hover:bg-gray-800 transition-colors"
                  >
                    에코에이블 소개자료
                    <Image 
                      src="/icons/arrow-right-up-line.svg" 
                      alt="arrow" 
                      width={16} 
                      height={16} 
                      className="ml-2" 
                    />
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 border border-[#dee0e3] text-[#14151a] font-medium text-sm rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    찾아오시는 길
                    <Image 
                      src="/icons/arrow-right-up-line.svg" 
                      alt="arrow" 
                      width={16} 
                      height={16} 
                      className="ml-2" 
                    />
                  </a>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden">
                  <Image
                    src="/jpg/image_photo_01.jpg"
                    alt="에코에이블컨설팅 사무실"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
