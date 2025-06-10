import Navigation from '@/components/Navigation';
import Link from "next/link";

export default function EcoableCulturePage() {
  return (
    <div className="min-h-screen bg-white font-pretendard">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="mx-4 md:mx-20 mt-8 md:mt-10 pb-20">
        {/* Title Section */}
        <div className="mb-16 md:mb-12">
          <h1 className="text-dark-text text-4xl md:text-6xl font-bold leading-tight md:leading-14 tracking-[-1.7px] mb-8 md:mb-12">
            ecoable스러운 <br />
            <span className="block">ecoable人</span>
          </h1>
          
          {/* Description Box */}
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-20">
            <div className="lg:w-2/5">
              <h2 className="text-gray-text/60 text-xl font-bold mb-6 tracking-[-0.2px]">
                안녕하세요. ecoable입니다!
              </h2>
              <div className="text-gray-text/60 text-base leading-6 tracking-[-0.2px]">
                &apos;에코에이블스러움&apos;이라는 고유의 문화를 통해 고객에게는 신뢰성 있는 결과물과 서비스를, 구성원들에게는 새로운 조직문화와 행복한 일터를 제공하고자 합니다.
              </div>
            </div>
          </div>
        </div>

        {/* Image Grid Section */}
        <div className="mb-16 md:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="space-y-6">
              <div className="w-full h-[235px] bg-gray-100 rounded-3xl"></div>
              <div className="w-full h-[235px] bg-gray-100 rounded-3xl"></div>
            </div>
            <div className="space-y-6">
              <div className="w-full h-[235px] bg-gray-100 rounded-3xl"></div>
              <div className="w-full h-[235px] bg-gray-100 rounded-3xl"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="w-full h-[241px] bg-gray-100 rounded-3xl"></div>
            <div className="w-full h-[241px] bg-gray-100 rounded-3xl"></div>
            <div className="w-full h-[241px] bg-gray-100 rounded-3xl"></div>
            <div className="w-full h-[241px] bg-gray-100 rounded-3xl"></div>
          </div>
        </div>

        {/* ecoable스러움 Rules Section */}
        <div className="mb-16 md:mb-20">
          <div className="flex justify-end mb-6">
            <h2 className="text-dark-text text-2xl font-bold tracking-[-0.3px]">
              ecoable스러움
            </h2>
          </div>
          
          {/* Something to Do */}
          <div className="bg-gray-50 rounded-3xl p-6 mb-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gray-200 rounded">
                {/* Icon placeholder */}
              </div>
              <h3 className="text-dark-text text-2xl font-bold tracking-[-0.3px]">
                Something to Do
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-4">
                <p className="text-dark-text text-lg">✔️ 트렌드 변화에 깨어있어라</p>
                <p className="text-dark-text text-lg">✔️ 기업의 수준은 말단에서 드러난다</p>
                <p className="text-dark-text text-lg">✔️ 회의는 격렬하고 짧게, 뒷정리는 깔끔하게한다</p>
              </div>
              <div className="space-y-4">
                <p className="text-dark-text text-lg">✔️ 자료를 뛰어넘는 직관이 필요하다</p>
                <p className="text-dark-text text-lg">✔️ 전략과 디테일은 하나다</p>
                <p className="text-dark-text text-lg">✔️ Dead line은 고객과의 신뢰다</p>
              </div>
              <div className="space-y-4">
                <p className="text-dark-text text-lg">✔️ 컨설팅은 서비스다 진심이 말한다</p>
                <p className="text-dark-text text-lg">✔️ 냉소적 비판보다 격려하며 고친다</p>
                <p className="text-dark-text text-lg">✔️ 내 결과 보다는 우리의 결과로 만든다</p>
              </div>
              <div className="space-y-4">
                <p className="text-dark-text text-lg">✔️ 남의 문제가 아니라 우리의 문제다</p>
                <p className="text-dark-text text-lg">✔️ 보고는 짧게 요약한다</p>
                <p className="text-dark-text text-lg">✔️ 가정&gt;회사는 절대 진리다</p>
              </div>
            </div>
          </div>

          {/* Nothing to Do */}
          <div className="bg-gray-50 rounded-3xl p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gray-200 rounded">
                {/* Icon placeholder */}
              </div>
              <h3 className="text-dark-text text-2xl font-bold tracking-[-0.3px]">
                Nothing to Do
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-4">
                <p className="text-dark-text text-lg">✖️ 어제의 정답에 머물러 있지 말라</p>
                <p className="text-dark-text text-lg">✖️ 해외 출장 후 초콜릿 사오지 말라</p>
                <p className="text-dark-text text-lg">✖️ 사유와 공부를 게을리 하지 말라</p>
                <p className="text-dark-text text-lg">✖️ 감정을 얼굴로 표현하지 말라</p>
              </div>
              <div className="space-y-4">
                <p className="text-dark-text text-lg">✖️ 새로운 시도를 주저하지 말라</p>
                <p className="text-dark-text text-lg">✖️ 야근하지 말라</p>
                <p className="text-dark-text text-lg">✖️ 이것이 끝이라고 생각하지 말라</p>
                <p className="text-dark-text text-lg">✖️ 외근중인 직원에게 지금 어디에요?, 뭐하고 있어요?, 언제와요? 문지 말라</p>
              </div>
              <div className="space-y-4">
                <p className="text-dark-text text-lg">✖️ 회의실은 비판자유구역, 침묵하지 말라</p>
                <p className="text-dark-text text-lg">✖️ 꼭 필요한 야근인지 의심하라</p>
                <p className="text-dark-text text-lg">✖️ 내가 해도 될까?라고 의심하지 말라</p>
              </div>
              <div className="space-y-4">
                <p className="text-dark-text text-lg">✖️ 퇴근할 때 눈치보지 말라</p>
                <p className="text-dark-text text-lg">✖️ 뒤에서 말하는 불만은 푸념이다</p>
                <p className="text-dark-text text-lg">✖️ 휴가때 일하지 말라</p>
              </div>
            </div>
          </div>
        </div>

        {/* Welfare List Section */}
        <div className="mb-16 md:mb-20">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-dark-text text-2xl font-bold tracking-[-0.3px]">
              ecoable welfare list
            </h2>
            <p className="text-dark-text text-2xl font-bold tracking-[-0.3px]">
              ecoable스러움
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Welfare Cards */}
            <div className="border border-border-gray rounded-3xl p-6 bg-white">
              <h3 className="text-dark-text text-xl font-bold mb-6 tracking-[-0.2px]">
                연간 휴가일수 20일
              </h3>
              <p className="text-dark-text text-lg leading-6 mb-8">
                쉬면서 일하자
              </p>
              <div className="w-20 h-20 bg-gray-100 rounded-2xl"></div>
            </div>

            <div className="border border-border-gray rounded-3xl p-6 bg-white">
              <h3 className="text-dark-text text-xl font-bold mb-6 tracking-[-0.2px]">
                매 3년마다 2주 여행 지원
              </h3>
              <p className="text-dark-text text-lg leading-6 mb-8">
                여행 좀 길게가자<br />
                *별도 10일 휴가 + 100만원
              </p>
              <div className="w-20 h-20 bg-gray-100 rounded-2xl"></div>
            </div>

            <div className="border border-border-gray rounded-3xl p-6 bg-white">
              <h3 className="text-dark-text text-xl font-bold mb-6 tracking-[-0.2px]">
                12월 24일 종무식
              </h3>
              <p className="text-dark-text text-lg leading-6 mb-8">
                크리스마스에는 같이 있지 말자
              </p>
              <div className="w-20 h-20 bg-gray-100 rounded-2xl"></div>
            </div>

            <div className="border border-border-gray rounded-3xl p-6 bg-white">
              <h3 className="text-dark-text text-xl font-bold mb-6 tracking-[-0.2px]">
                10시 출근
              </h3>
              <p className="text-dark-text text-lg leading-6 mb-8">
                Avoided Traffic JAM
              </p>
              <div className="w-20 h-20 bg-gray-100 rounded-2xl"></div>
            </div>

            <div className="border border-border-gray rounded-3xl p-6 bg-white">
              <h3 className="text-dark-text text-xl font-bold mb-6 tracking-[-0.2px]">
                월요일 11시 출근
              </h3>
              <p className="text-dark-text text-lg leading-6 mb-8">
                월요병 탈출
              </p>
              <div className="w-20 h-20 bg-gray-100 rounded-2xl"></div>
            </div>

            <div className="border border-border-gray rounded-3xl p-6 bg-white">
              <h3 className="text-dark-text text-xl font-bold mb-6 tracking-[-0.2px]">
                매월 마지막 금요일 조기퇴근
              </h3>
              <p className="text-dark-text text-lg leading-6 mb-8">
                불금불금 제도
              </p>
              <div className="w-20 h-20 bg-gray-100 rounded-2xl"></div>
            </div>

            <div className="border border-border-gray rounded-3xl p-6 bg-white">
              <h3 className="text-dark-text text-xl font-bold mb-6 tracking-[-0.2px]">
                순이익 30% 성과급 지급
              </h3>
              <p className="text-dark-text text-lg leading-6 mb-8">
                열심히 일한 자 돈쭐나라
              </p>
              <div className="w-20 h-20 bg-gray-100 rounded-2xl"></div>
            </div>

            <div className="border border-border-gray rounded-3xl p-6 bg-white">
              <h3 className="text-dark-text text-xl font-bold mb-6 tracking-[-0.2px]">
                비밀 용돈 지원
              </h3>
              <p className="text-dark-text text-lg leading-6 mb-8">
                묻지마 비상금
              </p>
              <div className="w-20 h-20 bg-gray-100 rounded-2xl"></div>
            </div>

            <div className="border border-border-gray rounded-3xl p-6 bg-white">
              <h3 className="text-dark-text text-xl font-bold mb-6 tracking-[-0.2px]">
                주거안정자금 2000만원 무이자 대출
              </h3>
              <p className="text-dark-text text-lg leading-6 mb-8">
                쥐꼬리지만 괜찮아 대출
              </p>
              <div className="w-20 h-20 bg-gray-100 rounded-2xl"></div>
            </div>

            <div className="border border-border-gray rounded-3xl p-6 bg-white">
              <h3 className="text-dark-text text-xl font-bold mb-6 tracking-[-0.2px]">
                승진 시 선물 증정
              </h3>
              <p className="text-dark-text text-lg leading-6 mb-8">
                쓸데있는 승진선물
              </p>
              <div className="w-20 h-20 bg-gray-100 rounded-2xl"></div>
            </div>

            <div className="border border-border-gray rounded-3xl p-6 bg-white">
              <h3 className="text-dark-text text-xl font-bold mb-6 tracking-[-0.2px]">
                매 5년 근속 시 순금열쇠 증정
              </h3>
              <p className="text-dark-text text-lg leading-6 mb-8">
                황금열쇠
              </p>
              <div className="w-20 h-20 bg-gray-100 rounded-2xl"></div>
            </div>

            <div className="border border-border-gray rounded-3xl p-6 bg-white">
              <h3 className="text-dark-text text-xl font-bold mb-6 tracking-[-0.2px]">
                대학원 교육비 및 직무교육비 지원
              </h3>
              <p className="text-dark-text text-lg leading-6 mb-8">
                알고 일합시다
              </p>
              <div className="w-20 h-20 bg-gray-100 rounded-2xl"></div>
            </div>

            <div className="border border-border-gray rounded-3xl p-6 bg-white">
              <h3 className="text-dark-text text-xl font-bold mb-6 tracking-[-0.2px]">
                가정의 달 외식비 지원
              </h3>
              <p className="text-dark-text text-lg leading-6 mb-8">
                키워주셔서 대신 감사합니다
              </p>
              <div className="w-20 h-20 bg-gray-100 rounded-2xl"></div>
            </div>

            <div className="border border-border-gray rounded-3xl p-6 bg-white">
              <h3 className="text-dark-text text-xl font-bold mb-6 tracking-[-0.2px]">
                건강검진 지원
              </h3>
              <p className="text-dark-text text-lg leading-6 mb-8">
                인재를 다른 회사에 보낼 수는 있어도 하늘나라엔 보낼 수 없어요
              </p>
              <div className="w-20 h-20 bg-gray-100 rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Bucket List Section */}
        <div className="mb-16 md:mb-20">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-dark-text text-2xl font-bold tracking-[-0.3px]">
              ecoable bucket list
            </h2>
            <p className="text-dark-text text-2xl font-bold tracking-[-0.3px]">
              ecoable스러움
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Bucket List Items */}
            <div className="border border-border-gray rounded-3xl p-6 bg-gray-50 opacity-50">
              <h3 className="text-dark-text text-xl font-bold mb-8 tracking-[-0.2px] opacity-25">
                묻지마 비상금<br />지원제도
              </h3>
              <div className="w-20 h-20 bg-gray-200 rounded-2xl ml-auto"></div>
            </div>

            <div className="border border-border-gray rounded-3xl p-6 bg-white">
              <h3 className="text-dark-text text-xl font-bold mb-8 tracking-[-0.2px]">
                주 4일 근무제
              </h3>
              <div className="w-20 h-20 bg-gray-100 rounded-2xl ml-auto"></div>
            </div>

            <div className="border border-border-gray rounded-3xl p-6 bg-gray-50 opacity-50">
              <h3 className="text-dark-text text-xl font-bold mb-8 tracking-[-0.2px] opacity-25">
                근무시간에 누워서 편하게 잘 수 있는 회사
              </h3>
              <div className="w-20 h-20 bg-gray-200 rounded-2xl ml-auto"></div>
            </div>

            <div className="border border-border-gray rounded-3xl p-6 bg-gray-50 opacity-50">
              <h3 className="text-dark-text text-xl font-bold mb-8 tracking-[-0.2px] opacity-25">
                가족이 편하게 놀러올 수 있는 회사
              </h3>
              <div className="w-20 h-20 bg-gray-200 rounded-2xl ml-auto"></div>
            </div>

            <div className="border border-border-gray rounded-3xl p-6 bg-gray-50 opacity-50">
              <h3 className="text-dark-text text-xl font-bold mb-8 tracking-[-0.2px] opacity-25">
                장기근속시 휴가 보내주는 회사
              </h3>
              <div className="w-20 h-20 bg-gray-200 rounded-2xl ml-auto"></div>
            </div>

            <div className="border border-border-gray rounded-3xl p-6 bg-white">
              <h3 className="text-dark-text text-xl font-bold mb-8 tracking-[-0.2px]">
                돈 많이 버는 회사
              </h3>
              <div className="w-20 h-20 bg-gray-100 rounded-2xl ml-auto"></div>
            </div>

            <div className="border border-border-gray rounded-3xl p-6 bg-gray-50 opacity-50">
              <h3 className="text-dark-text text-xl font-bold mb-8 tracking-[-0.2px] opacity-25">
                커피 한잔의 여유가 있는 회사
              </h3>
              <div className="w-20 h-20 bg-gray-200 rounded-2xl ml-auto"></div>
            </div>

            <div className="border border-border-gray rounded-3xl p-6 bg-white">
              <h3 className="text-dark-text text-xl font-bold mb-8 tracking-[-0.2px]">
                운동비/학원비 지원제도
              </h3>
              <div className="w-20 h-20 bg-gray-100 rounded-2xl ml-auto"></div>
            </div>

            <div className="border border-border-gray rounded-3xl p-6 bg-gray-50 opacity-50">
              <h3 className="text-dark-text text-xl font-bold mb-8 tracking-[-0.2px] opacity-25">
                필요 시 아기와 반려동물과 함께 출근할 수 있는 회사
              </h3>
              <div className="w-20 h-20 bg-gray-200 rounded-2xl ml-auto"></div>
            </div>

            <div className="border border-border-gray rounded-3xl p-6 bg-white">
              <h3 className="text-dark-text text-xl font-bold mb-8 tracking-[-0.2px]">
                모든 직원이 주주가 되는 회사
              </h3>
              <div className="w-20 h-20 bg-gray-100 rounded-2xl ml-auto"></div>
            </div>

            <div className="border border-border-gray rounded-3xl p-6 bg-white">
              <h3 className="text-dark-text text-xl font-bold mb-8 tracking-[-0.2px]">
                생일선물 주는 회사 (단, 내 돈 주고 사기 아까운)
              </h3>
              <div className="w-20 h-20 bg-gray-100 rounded-2xl ml-auto"></div>
            </div>

            <div className="border border-border-gray rounded-3xl p-6 bg-white">
              <h3 className="text-dark-text text-xl font-bold mb-8 tracking-[-0.2px]">
                일년에 한달씩 장기휴가 주는 회사
              </h3>
              <div className="w-20 h-20 bg-gray-100 rounded-2xl ml-auto"></div>
            </div>

            <div className="border border-border-gray rounded-3xl p-6 bg-white">
              <h3 className="text-dark-text text-xl font-bold mb-8 tracking-[-0.2px]">
                묻지마 비상금<br />지원제도
              </h3>
              <div className="w-20 h-20 bg-gray-100 rounded-2xl ml-auto"></div>
            </div>

            <div className="border border-border-gray rounded-3xl p-6 bg-gray-50 opacity-50">
              <h3 className="text-dark-text text-xl font-bold mb-8 tracking-[-0.2px] opacity-25">
                자가사무실
              </h3>
              <div className="w-20 h-20 bg-gray-200 rounded-2xl ml-auto"></div>
            </div>

            <div className="border border-border-gray rounded-3xl p-6 bg-white">
              <h3 className="text-dark-text text-xl font-bold mb-8 tracking-[-0.2px]">
                자가사옥
              </h3>
              <div className="w-20 h-20 bg-gray-100 rounded-2xl ml-auto"></div>
            </div>

            <div className="border border-border-gray rounded-3xl p-6 bg-white">
              <h3 className="text-dark-text text-xl font-bold mb-8 tracking-[-0.2px]">
                한달에 두 번 재택근무
              </h3>
              <div className="w-20 h-20 bg-gray-100 rounded-2xl ml-auto"></div>
            </div>

            <div className="border border-border-gray rounded-3xl p-6 bg-white">
              <h3 className="text-dark-text text-xl font-bold mb-8 tracking-[-0.2px]">
                도서비 지원
              </h3>
              <div className="w-20 h-20 bg-gray-100 rounded-2xl ml-auto"></div>
            </div>

            <div className="border border-border-gray rounded-3xl p-6 bg-white">
              <h3 className="text-dark-text text-xl font-bold mb-8 tracking-[-0.2px]">
                심리상담 지원
              </h3>
              <div className="w-20 h-20 bg-gray-100 rounded-2xl ml-auto"></div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 pt-12 pb-8">
        {/* Newsletter Section */}
        <div className="bg-gray-100 py-12 mb-12">
          <div className="mx-4 md:mx-20">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="lg:w-1/3">
                <h3 className="text-dark-text text-xl font-medium mb-3 tracking-[-0.2px]">
                  Subscribe to our newsletter
                </h3>
                <p className="text-gray-text/60 text-base leading-6 tracking-[-0.2px]">
                  Get a summary of what we've shipped during the last month, behind the scenes updates, and team picks.
                </p>
              </div>
              <div className="lg:w-1/3 flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl border border-border-gray bg-white text-sm placeholder:text-gray-400"
                />
                <button className="bg-dark-text text-white px-6 py-3 rounded-xl font-medium text-sm hover:bg-gray-800 transition-colors whitespace-nowrap">
                  Get early access
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mx-4 md:mx-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-12">
            {/* Logo */}
            <div className="lg:w-1/4">
              <div className="w-40 h-10 bg-white rounded border border-border-gray flex items-center justify-center">
                <span className="text-dark-text font-bold">Logo</span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Ecoable */}
              <div>
                <h4 className="text-gray-text/60 text-sm font-medium mb-4 tracking-[-0.1px]">Ecoable</h4>
                <ul className="space-y-3">
                  <li><Link href="/ecoable" className="text-dark-text text-sm font-medium hover:text-primary-blue">ecoable 소개</Link></li>
                  <li><Link href="/ecoable/culture" className="text-dark-text text-sm font-medium hover:text-primary-blue">ecoable스러움</Link></li>
                  <li><Link href="/contact" className="text-dark-text text-sm font-medium hover:text-primary-blue">찾아오시는 길</Link></li>
                </ul>
              </div>

              {/* What we do */}
              <div>
                <h4 className="text-gray-text/60 text-sm font-medium mb-4 tracking-[-0.1px]">What we do</h4>
                <ul className="space-y-3">
                  <li><Link href="/what-we-do" className="text-dark-text text-sm font-medium hover:text-primary-blue">제품환경파트</Link></li>
                  <li><Link href="/what-we-do" className="text-dark-text text-sm font-medium hover:text-primary-blue">환경정책파트</Link></li>
                  <li><Link href="/what-we-do" className="text-dark-text text-sm font-medium hover:text-primary-blue">자원순환파트</Link></li>
                  <li><Link href="/what-we-do" className="text-dark-text text-sm font-medium hover:text-primary-blue">기후변화대응파트</Link></li>
                </ul>
              </div>

              {/* Portfolio */}
              <div>
                <h4 className="text-gray-text/60 text-sm font-medium mb-4 tracking-[-0.1px]">Portfolio</h4>
                <ul className="space-y-3">
                  <li><Link href="/portfolio" className="text-dark-text text-sm font-medium hover:text-primary-blue">LCA(전과정평가)</Link></li>
                  <li><Link href="/portfolio" className="text-dark-text text-sm font-medium hover:text-primary-blue">EPD 인증대응</Link></li>
                  <li><Link href="/portfolio" className="text-dark-text text-sm font-medium hover:text-primary-blue">기후변화대응</Link></li>
                  <li><Link href="/portfolio" className="text-dark-text text-sm font-medium hover:text-primary-blue">환경정책 및 보건환경</Link></li>
                  <li><Link href="/client-company" className="text-dark-text text-sm font-medium hover:text-primary-blue">고객사</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pt-8 border-t border-border-gray">
            <div className="text-gray-text/40 text-sm space-y-1">
              <p>04976 서울특별시 광진구 자양로 216 파인캐슬, 201호</p>
              <p>대표전화 | 02-6959-8885</p>
              <p>팩스  | 070-4327-7279</p>
              <p>이메일 | info@ppm.co.kr</p>
              <p>© ecoable CO. 2016</p>
            </div>
            <div className="flex gap-4">
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 