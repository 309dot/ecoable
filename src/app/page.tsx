'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';

export default function Home() {
  const router = useRouter();

  const handlePolicyClick = () => {
    router.push('/what-we-do?tab=policy');
  };

  const handleCirculationClick = () => {
    router.push('/what-we-do?tab=circulation');
  };

  return (
    <div className="relative w-screen min-h-screen bg-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full min-h-screen">
        <Image
          src="/jpg/image_photo_01.jpg"
          alt="Background"
          fill
          className="object-cover"
          style={{
            filter: 'exposure(0.16) contrast(-0.09) saturate(1.49) brightness(1.27)',
          }}
        />
        {/* Dark overlay - 검정 25% */}
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      {/* Navigation */}
      <Navigation variant="default" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col justify-between min-h-screen pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28 2xl:pt-32 pb-8 px-3 sm:px-4 md:px-6 lg:px-8">
          
          {/* Title Section */}
          <div className="text-left mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 2xl:mb-32 mt-20">
            <h1 className="font-pretendard text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.167] tracking-[-1px] mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 2xl:mb-8">
              환경과 경제의 조화,<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>새로운 내일을 설계합니다.<br />
              지속가능한 미래를 위한 컨설팅,
            </h1>
            <h2 className="font-pretendard text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.167] tracking-[-1px]">
              에코에이블컨설팅(주)
            </h2>
          </div>

          {/* Service Cards */}
          <div className="mt-auto">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-lg md:max-w-none mx-auto md:mx-0 md:justify-end md:flex md:flex-row">
              {/* Card 1 - 전과정정책본부 */}
              <div 
                onClick={handlePolicyClick}
                className="group w-full md:w-80 bg-white border border-figma-border rounded-lg md:rounded-xl p-3 md:p-4 lg:p-5 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#1A3A6F] hover:to-[#399084] hover:shadow-lg cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2 md:mb-3">
                  <h3 className="font-pretendard text-figma-text-dark text-xs md:text-base lg:text-lg font-bold leading-tight tracking-tight group-hover:text-white transition-colors">
                    전과정정책본부
                  </h3>
                  <Image
                    src="/icons/arrow-right-up-line.svg"
                    alt="Arrow"
                    width={20}
                    height={20}
                    className="group-hover:brightness-0 group-hover:invert transition-all flex-shrink-0 w-3 h-3 md:w-5 md:h-5"
                  />
                </div>
                <p className="hidden md:block font-pretendard text-figma-text-secondary/60 text-sm leading-relaxed tracking-tight group-hover:text-white/60 transition-colors">
                  환경은 미래 세대의 권리와 직결된 중대한 문제로, 전 세계와 우리나라는 지속가능한 발전을 위해 다양한 환경 정책과 제도를 추진하고 있습니다.
                </p>
              </div>

              {/* Card 2 - 전과정순환본부 */}
              <div 
                onClick={handleCirculationClick}
                className="group w-full md:w-80 bg-white border border-figma-border rounded-lg md:rounded-xl p-3 md:p-4 lg:p-5 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#1A3A6F] hover:to-[#399084] hover:shadow-lg cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2 md:mb-3">
                  <h3 className="font-pretendard text-figma-text-dark text-xs md:text-base lg:text-lg font-bold leading-tight tracking-tight group-hover:text-white transition-colors">
                    전과정순환본부
                  </h3>
                  <Image
                    src="/icons/arrow-right-up-line.svg"
                    alt="Arrow"
                    width={20}
                    height={20}
                    className="group-hover:brightness-0 group-hover:invert transition-all flex-shrink-0 w-3 h-3 md:w-5 md:h-5"
                  />
                </div>
                <p className="hidden md:block font-pretendard text-figma-text-secondary/60 text-sm leading-relaxed tracking-tight group-hover:text-white/60 transition-colors">
                  폐기물은 단순한 쓰레기가 아닌 또 다른 자원이며, 환경과 경제를 고려한 순환 활용은 자원 고갈과 지구 환경 문제를 해결하는 첫걸음입니다.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 lg:p-5 mt-4 lg:mt-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 lg:gap-4">
              <div className="flex-1">
                <p className="font-pretendard text-figma-text-secondary/60 text-xs md:text-sm lg:text-base leading-relaxed tracking-tight">
                  고객에게는 믿음을, 구성원에게는 의미 있는 일상을.<br />
                  모두가 함께 성장할 수 있는 지속가능한 조직을 만들어갑니다.
                </p>
              </div>
              <div className="flex">
                <Link 
                  href="/contact#directions"
                  className="h-9 md:h-10 lg:h-11 bg-figma-bg-overlay/[0.04] rounded-full flex items-center gap-1 md:gap-2 px-3 md:px-4 lg:px-5 hover:bg-figma-bg-overlay/[0.08] transition-colors"
                >
                  <Image
                    src="/icons/lead-icon-3.svg"
                    alt="Map"
                    width={20}
                    height={20}
                    className="flex-shrink-0 w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5"
                  />
                  <span className="font-pretendard text-figma-text-dark text-xs md:text-sm lg:text-base font-medium leading-tight tracking-tight whitespace-nowrap">
                    찾아오시는 길
                  </span>
                  <Image
                    src="/icons/tail-icon.svg"
                    alt="Arrow"
                    width={20}
                    height={20}
                    className="flex-shrink-0 w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5"
                  />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
