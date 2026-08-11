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
    <>
      {/* Background Image with Overlay - 마진에 영향받지 않음 */}
      <div className="fixed inset-0 w-screen h-screen z-0">
        <Image
          src="/images/main-hero-2026.jpg"
          alt="Background"
          fill
          className="object-cover"
          style={{
            filter: 'exposure(0.16) contrast(-0.09) saturate(1.49) brightness(1.27)',
          }}
        />
        {/* Dark overlay - 검정 50% */}
        <div className="absolute inset-0 bg-black/35"></div>
      </div>
      
      {/* 데스크톱(lg 이상)에서는 네비 + 콘텐츠가 정확히 한 화면에 들어가 스크롤이 생기지 않습니다.
          그 이하에서는 내용이 잘리지 않도록 기존처럼 세로로 흐릅니다. */}
      <div className="relative min-h-screen lg:h-screen bg-transparent overflow-hidden flex flex-col">

      {/* Navigation */}
      <Navigation theme="transparent" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full container-1440 mx-auto lg:flex-1 lg:min-h-0">
        <div className="flex flex-col justify-between min-h-screen lg:min-h-0 lg:h-full pb-8">
          
          {/* Title Section */}
          <div className="text-left mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 2xl:mb-32 mt-32">{/* mt-20을 mt-32로 증가 */}
            <div className="flex flex-col gap-2 items-start justify-start text-white text-[48px] text-left tracking-[-1px]">
            <h1 className="font-pretendard font-normal leading-[56px] w-full">
              환경과 경제의 조화, 새로운 내일을 설계합니다.<br />
              지속가능한 미래를 위한 컨설팅,
            </h1>
            <h2 className="font-pretendard font-semibold leading-[56px] w-full">
              에코에이블컨설팅(주)
            </h2>
            </div>
          </div>

          {/* Service Cards */}
          <div className="mt-auto">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-lg md:max-w-none mx-auto md:mx-0 md:justify-end md:flex md:flex-row">
              {/* Card 1 - 전과정정책본부 */}
              <div 
                onClick={handlePolicyClick}
                className="group w-full md:w-80 bg-gradient-to-r from-[#1a3a6f] to-[#399084] border border-[#dee0e3] rounded-3xl p-6 transition-all duration-300 hover:shadow-[0px_18px_24px_-5px_rgba(20,21,26,0.1),0px_8px_8px_-5px_rgba(20,21,26,0.05)] cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-pretendard text-white text-lg font-bold leading-[26px] tracking-[-0.2px]">
                    전과정정책본부
                  </h3>
                  <Image
                    src="/images/common/arrow-right-up-line.svg"
                    alt="Arrow"
                    width={20}
                    height={20}
                    className="transition-all flex-shrink-0 w-6 h-6 brightness-0 invert"
                  />
                </div>
                <p className="font-pretendard text-white/60 text-sm leading-[20px] tracking-[-0.1px]">
                  환경은 미래 세대의 권리와 직결된 중대한 문제로, 전 세계와 우리나라는 지속가능한 발전을 위해 다양한 환경 정책과 제도를 추진하고 있습니다.
                </p>
              </div>

              {/* Card 2 - 전과정순환본부 */}
              <div 
                onClick={handleCirculationClick}
                className="group w-full md:w-80 bg-gradient-to-r from-[#1a3a6f] to-[#399084] border border-[#dee0e3] rounded-3xl p-6 transition-all duration-300 hover:shadow-[0px_18px_24px_-5px_rgba(20,21,26,0.1),0px_8px_8px_-5px_rgba(20,21,26,0.05)] cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-pretendard text-white text-lg font-bold leading-[26px] tracking-[-0.2px]">
                    전과정순환본부
                  </h3>
                  <Image
                    src="/images/common/arrow-right-up-line.svg"
                    alt="Arrow"
                    width={20}
                    height={20}
                    className="transition-all flex-shrink-0 w-6 h-6 brightness-0 invert"
                  />
                </div>
                <p className="font-pretendard text-white/60 text-sm leading-[20px] tracking-[-0.1px]">
                  폐기물은 단순한 쓰레기가 아닌 또 다른 자원이며, 환경과 경제를 고려한 순환 활용은 자원 고갈과 지구 환경 문제를 해결하는 첫걸음입니다.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="bg-gradient-to-r from-[#1a3a6f] to-[#399084] rounded-3xl p-6 mt-4 lg:mt-6 border border-[#dee0e3] shadow-[0px_18px_24px_-5px_rgba(20,21,26,0.1),0px_8px_8px_-5px_rgba(20,21,26,0.05)]">
            <div className="flex flex-col lg:flex-row items-end justify-between gap-6">
              <div>
                <p className="font-pretendard text-white/60 text-base leading-[24px] tracking-[-0.2px]">
                  고객에게는 믿음을, 구성원에게는 의미 있는 일상을.<br />
                  모두가 함께 성장할 수 있는 지속가능한 조직을 만들어갑니다.
                </p>
              </div>
              <div className="flex">
                <Link 
                  href="/contact#directions"
                  className="h-12 bg-[rgba(10,15,41,0.04)] rounded-full flex items-center gap-1 px-4 py-3 hover:bg-[rgba(10,15,41,0.08)] transition-colors"
                >
                  <Image
                    src="/images/common/lead-icon-3.svg"
                    alt="Map"
                    width={20}
                    height={20}
                    className="flex-shrink-0 w-5 h-5 brightness-0 invert opacity-60"
                  />
                  <span className="font-pretendard text-white text-base font-medium leading-[24px] tracking-[-0.2px] whitespace-nowrap px-1">
                    찾아오시는 길
                  </span>
                  <Image
                    src="/images/common/tail-icon.svg"
                    alt="Tail"
                    width={20}
                    height={20}
                    className="flex-shrink-0 w-5 h-5 brightness-0 invert opacity-60"
                  />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
      </div>
    </>
  );
}
