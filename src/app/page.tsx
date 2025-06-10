import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A3A6F] to-[#399084]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-20 py-6">
        <div className="flex items-center justify-between bg-white/10 backdrop-blur-md rounded-[999px] px-8 py-4">
          <div className="text-white text-xl font-semibold">
            에코에이블컨설팅(주)
          </div>
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-white text-base font-medium bg-gradient-to-r from-[#1A3A6F] to-[#399084] px-6 py-3 rounded-[999px]">
              Home
            </Link>
            <Link href="/ecoable" className="text-white text-base font-medium hover:bg-white/10 px-6 py-3 rounded-[999px] transition-all">
              Ecoable
            </Link>
            <Link href="/what-we-do" className="text-white text-base font-medium hover:bg-white/10 px-6 py-3 rounded-[999px] transition-all">
              What we do
            </Link>
            <Link href="/portfolio" className="text-white text-base font-medium hover:bg-white/10 px-6 py-3 rounded-[999px] transition-all">
              Portfolio
            </Link>
            <Link href="/client-company" className="text-white text-base font-medium hover:bg-white/10 px-6 py-3 rounded-[999px] transition-all">
              Client Company
            </Link>
            <Link href="/team" className="text-white text-base font-medium hover:bg-white/10 px-6 py-3 rounded-[999px] transition-all">
              Team
            </Link>
            <Link href="/contact" className="text-white text-base font-medium hover:bg-white/10 px-6 py-3 rounded-[999px] transition-all">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 px-20">
        <div className="text-center mb-16">
          <h1 className="text-white text-6xl font-bold leading-tight mb-6 tracking-tight">
            환경과 경제의 조화, 새로운 내일을 설계합니다.
          </h1>
          <p className="text-white text-2xl font-medium tracking-wide">
            지속가능한 미래를 위한 컨설팅,
          </p>
          <h2 className="text-white text-4xl font-bold mt-4 tracking-wide">
            에코에이블컨설팅(주)
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-4 gap-6 mb-20">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-white">
            <h3 className="text-xl font-bold mb-4 leading-tight">제품환경파트</h3>
            <p className="text-base leading-relaxed">
              LCA 기반 진단부터 녹색제품 인증까지 전 과정을 지원
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-white">
            <h3 className="text-xl font-bold mb-4 leading-tight">환경정책파트</h3>
            <p className="text-base leading-relaxed">
              컨설팅과 통합관리 솔루션을 통해 지속가능한 사회 구현을 지원
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-white">
            <h3 className="text-xl font-bold mb-4 leading-tight">자원순환파트</h3>
            <p className="text-base leading-relaxed">
              자원을 다시 보는 시선, 자원순환의 지속가능한 흐름을 설계
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-white">
            <h3 className="text-xl font-bold mb-4 leading-tight">기후변화대응파트</h3>
            <p className="text-base leading-relaxed">
              제도 수립부터 온실가스 산정 컨설팅까지 전략적 대응을 지원
            </p>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <h3 className="text-white text-3xl font-bold mb-6 leading-tight">
            고객에게는 믿음을, 구성원에게는 의미 있는 일상을.
          </h3>
          <p className="text-white text-xl font-medium mb-12 leading-relaxed">
            모두가 함께 성장할 수 있는 지속가능한 조직을 만들어갑니다.
          </p>
          <div className="flex justify-center space-x-8">
            <button className="bg-white text-[#1A3A6F] px-8 py-4 rounded-3xl text-lg font-bold hover:bg-gray-100 transition-all">
              에코에이블 소개자료
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white border-2 border-white px-8 py-4 rounded-3xl text-lg font-bold hover:bg-white/20 transition-all">
              찾아오시는 길
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
