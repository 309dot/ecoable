import Image from 'next/image';

export default function EcoableIntroduction() {
  return (
    <div className="w-full flex flex-col gap-8 py-8">
      {/* First Section - Title and Description */}
      <div className="flex flex-col xl:flex-row justify-stretch items-start gap-6 w-full">
        {/* Left - Title */}
        <div className="flex flex-col gap-6 w-full xl:w-full">
          <h1 className="text-[#14151A] text-[30px] md:text-[36px] lg:text-[42px] font-semibold leading-[1.17] tracking-[-2.08%] w-full">
            ecology + economy + able = <br />
            ecoable
          </h1>
        </div>
        
        {/* Right - Description */}
        <div className="flex flex-col justify-center gap-4 w-full xl:w-full">
          <p className="text-[rgba(15,19,36,0.6)] text-sm md:text-base font-medium leading-[1.5] tracking-[-1.25%] w-full">
            에코에이블컨설팅㈜은 환경과 경제의 조화를 통해 사회의 지속가능성을 달성하도록 지원하는 컨설팅 서비스를 지원하고 있습니다.
          </p>
          <p className="text-[rgba(15,19,36,0.6)] text-sm md:text-base font-medium leading-[1.5] tracking-[-1.25%] w-full">
            에코에이블컨설팅㈜은 '에코에이블스러움'이라는 고유의 문화를 통해 고객에게는 신뢰성 있는 컨설팅 결과물과 서비스를, 구성원들에게는 에코에이블스러운 조직문화와 행복한 일터를 제공하고자 합니다.
          </p>
          <p className="text-[rgba(15,19,36,0.6)] text-sm md:text-base font-medium leading-[1.5] tracking-[-1.25%] w-full">
            에코에이블컨설팅㈜은 Life Cycle Linker라는 비전하에 '스스로, 다같이, 즐겁게'라는 공통된 가치관을 가지고 고객의 지속가능한 가치창출을 지원하기 위하여 노력하겠습니다.
          </p>
          <p className="text-[rgba(15,19,36,0.6)] text-sm md:text-base font-medium leading-[1.5] tracking-[-1.25%] w-full">
            앞으로의 에코에이블스러운 행보에 많은 관심 부탁드립니다.
          </p>
        </div>
      </div>

      {/* Second Section - Main Image */}
      <div className="w-full h-[452px] rounded-[24px] overflow-hidden relative">
        <Image
          src="/images/main-image-new.jpg"
          alt="Ecoable Team"
          width={1400}
          height={452}
          className="w-full h-full object-cover brightness-95 contrast-105"
          style={{ objectPosition: 'center 80%' }}
        />
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-5 rounded-[24px]"></div>
      </div>

      {/* Third Section - Vision and Values */}
      <div className="flex flex-col gap-10 py-10 w-full">
        {/* Section Title */}
        <div className="flex flex-col justify-center gap-1 w-full">
          <h2 className="text-[#14151A] text-[30px] md:text-[36px] lg:text-[42px] font-semibold leading-[1.17] tracking-[-2.08%] w-full">
            ecoable이 만들어가는 친환경적이면서 경제적인 솔루선!<br />
            가능합니다!
          </h2>
        </div>
        
        {/* Vision Section - Left: Title, Right: Content */}
        <div className="flex flex-col xl:flex-row gap-6 w-full">
          <h3 className="text-[#14151A] text-[18px] md:text-[20px] lg:text-[24px] font-bold leading-[1.33] tracking-[-1.25%] w-full xl:w-[360px] flex-shrink-0">
            ecoable의 비전과 목표
          </h3>
          <div className="flex flex-col gap-4 w-full">
            <p className="text-[rgba(15,19,36,0.6)] text-sm md:text-base font-medium leading-[1.5] tracking-[-1.25%] w-full">
              Life Cycle Linker (전과정에 대한 연결을 통해 지속가능한 발전 추구)
            </p>
            <p className="text-[rgba(15,19,36,0.6)] text-sm md:text-base font-medium leading-[1.5] tracking-[-1.25%] w-full">
              고객과 구성원의 가치가 모여 회사의 가치가 되는 회사<br />
              우리나라의 전과정적 사고(Life Cycle Thinking) 보급/확산의 주체가 되는 회사<br />
              내일을 위해 내 일을 하는 회사
            </p>
          </div>
        </div>

        {/* Core Values Section - Left: Title, Right: Cards */}
        <div className="flex flex-col xl:flex-row gap-6 w-full">
          <h3 className="text-[#14151A] text-[18px] md:text-[20px] lg:text-[24px] font-bold leading-[1.33] tracking-[-1.25%] w-full xl:w-[360px] flex-shrink-0">
            ecoable의 3대 핵심가치
          </h3>
          
          {/* Three Value Cards in Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6 w-full">
            {/* Value 1 */}
            <div className="flex flex-col justify-center items-center gap-6 p-6 border border-[#DEE0E3] rounded-[24px] w-full">
              <div className="w-[180px] h-[180px] rounded overflow-hidden">
                <Image
                  src="/images/value1.png"
                  alt="가치있는 컨설팅"
                  width={180}
                  height={180}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <h4 className="text-[#14151A] text-[14px] md:text-[16px] font-bold leading-[1.4] tracking-[-1%] text-center">
                  가치있는 컨설팅
                </h4>
                <p className="text-[rgba(15,19,36,0.6)] text-xs md:text-sm leading-[1.5] tracking-[-1.25%] text-center">
                  쓸모있는 결과물을 도출하여 고객사가 결과물을 가치있게 활용할 수 있도록 한다.
                </p>
              </div>
            </div>
            
            {/* Value 2 */}
            <div className="flex flex-col justify-center items-center gap-6 p-6 border border-[#DEE0E3] rounded-[24px] w-full">
              <div className="w-[180px] h-[180px] rounded overflow-hidden">
                <Image
                  src="/images/value2.png"
                  alt="지속가능성"
                  width={180}
                  height={180}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <h4 className="text-[#14151A] text-[14px] md:text-[16px] font-bold leading-[1.4] tracking-[-1%] text-center">
                  지속가능성
                </h4>
                <p className="text-[rgba(15,19,36,0.6)] text-xs md:text-sm leading-[1.5] tracking-[-1.25%] text-center">
                  고객의 지속가능성 증진과 함께 ecoable의 지속가능성을 고민한다.
                </p>
              </div>
            </div>
            
            {/* Value 3 */}
            <div className="flex flex-col justify-center items-center gap-6 p-6 border border-[#DEE0E3] rounded-[24px] w-full">
              <div className="w-[180px] h-[180px] rounded overflow-hidden">
                <Image
                  src="/images/value3.png"
                  alt="모두의 조직"
                  width={180}
                  height={180}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <h4 className="text-[#14151A] text-[14px] md:text-[16px] font-bold leading-[1.4] tracking-[-1%] text-center">
                  모두의 조직
                </h4>
                <p className="text-[rgba(15,19,36,0.6)] text-xs md:text-sm leading-[1.5] tracking-[-1.25%] text-center">
                  구성원 모두가 주인으로 같은 방향을 동등한 눈높이로 바라보는 조직을 추구한다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 