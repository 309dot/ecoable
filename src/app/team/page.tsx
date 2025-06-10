'use client';

import Link from 'next/link';

export default function TeamPage() {
  const departments = [
    {
      name: "제품환경팀",
      description: "제품의 전 생애주기 환경영향을 평가하고 개선방안을 제시합니다",
      color: "blue",
      members: [
        { name: "김환경", position: "팀장", experience: "15년", specialty: "LCA, 탄소발자국" },
        { name: "이지속", position: "수석연구원", experience: "12년", specialty: "제품설계, 친환경소재" },
        { name: "박녹색", position: "선임연구원", experience: "8년", specialty: "인증획득, 평가분석" },
      ]
    },
    {
      name: "환경정책팀",
      description: "환경 법규 분석과 정책 수립을 통해 컴플라이언스를 보장합니다",
      color: "green",
      members: [
        { name: "정법규", position: "팀장", experience: "18년", specialty: "환경법, 정책분석" },
        { name: "한규제", position: "수석연구원", experience: "14년", specialty: "환경영향평가" },
        { name: "조정책", position: "선임연구원", experience: "10년", specialty: "인허가, 컨설팅" },
      ]
    },
    {
      name: "자원순환팀",
      description: "순환경제 구축을 위한 자원관리 및 폐기물 감축 솔루션을 제공합니다",
      color: "purple",
      members: [
        { name: "신순환", position: "팀장", experience: "16년", specialty: "순환경제, 폐기물관리" },
        { name: "류재활", position: "수석연구원", experience: "11년", specialty: "재활용시스템" },
        { name: "홍자원", position: "선임연구원", experience: "7년", specialty: "물질흐름분석" },
      ]
    },
    {
      name: "기후변화대응팀",
      description: "온실가스 감축과 기후변화 적응을 위한 전략을 수립합니다",
      color: "red",
      members: [
        { name: "강기후", position: "팀장", experience: "20년", specialty: "온실가스, 탄소중립" },
        { name: "윤탄소", position: "수석연구원", experience: "13년", specialty: "배출권거래" },
        { name: "서중립", position: "선임연구원", experience: "9년", specialty: "기후금융, ESG" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section with Navigation */}
      <section className="relative w-full h-[400px] overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A3A6F] to-[#399084]"></div>

        {/* Navigation */}
        <nav className="relative z-10 px-20 py-6">
          <div className="flex items-center justify-between bg-white/10 backdrop-blur-md rounded-[999px] px-8 py-4">
            <div className="text-white text-xl font-semibold">
              에코에이블컨설팅(주)
            </div>
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-white text-base font-medium hover:bg-white/10 px-6 py-3 rounded-[999px] transition-all">
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
              <Link href="/team" className="text-white text-base font-medium bg-gradient-to-r from-[#1A3A6F] to-[#399084] px-6 py-3 rounded-[999px]">
                Team
              </Link>
              <Link href="/contact" className="text-white text-base font-medium hover:bg-white/10 px-6 py-3 rounded-[999px] transition-all">
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {/* Page Title */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full pt-8">
          <h1 className="text-white font-inter font-bold text-6xl leading-tight tracking-tight mb-4">
            Our Team
          </h1>
          <p className="text-white font-inter font-medium text-2xl tracking-wide">
            전문성과 열정으로 함께하는 팀
          </p>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="px-20 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            우리 팀을 소개합니다
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-16">
            4개의 전문 부서가 각자의 분야에서 축적한 깊이 있는 경험과 전문성을 바탕으로<br />
            고객에게 최고 수준의 환경 컨설팅 서비스를 제공합니다.
          </p>
        </div>
      </section>

      {/* Department Teams */}
      <section className="px-20 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-all">
                <div className="mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                    dept.color === 'blue' ? 'bg-blue-100' : 
                    dept.color === 'green' ? 'bg-green-100' :
                    dept.color === 'purple' ? 'bg-purple-100' : 'bg-red-100'
                  }`}>
                    <svg className={`w-8 h-8 ${
                      dept.color === 'blue' ? 'text-blue-600' : 
                      dept.color === 'green' ? 'text-green-600' :
                      dept.color === 'purple' ? 'text-purple-600' : 'text-red-600'
                    }`} fill="currentColor" viewBox="0 0 20 20">
                      {dept.color === 'blue' && <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>}
                      {dept.color === 'green' && <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>}
                      {dept.color === 'purple' && <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/>}
                      {dept.color === 'red' && <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>}
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {dept.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {dept.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {dept.members.map((member, memberIndex) => (
                    <div key={memberIndex} className="bg-gray-50 rounded-2xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                            dept.color === 'blue' ? 'bg-blue-500' : 
                            dept.color === 'green' ? 'bg-green-500' :
                            dept.color === 'purple' ? 'bg-purple-500' : 'bg-red-500'
                          }`}>
                            {member.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-bold text-gray-900">{member.name}</div>
                            <div className="text-sm text-gray-600">{member.position}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-gray-900">경력 {member.experience}</div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        전문분야: {member.specialty}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Statistics */}
      <section className="px-20 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">팀 현황</h3>
            <p className="text-xl text-gray-600">전문성을 갖춘 인재들의 현황</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-8 rounded-3xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">12</div>
              <div className="text-lg text-gray-600">총 구성원</div>
            </div>
            <div className="text-center bg-white p-8 rounded-3xl">
              <div className="text-4xl font-bold text-green-600 mb-2">4</div>
              <div className="text-lg text-gray-600">전문 부서</div>
            </div>
            <div className="text-center bg-white p-8 rounded-3xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-lg text-gray-600">평균 경력 (년)</div>
            </div>
            <div className="text-center bg-white p-8 rounded-3xl">
              <div className="text-4xl font-bold text-red-600 mb-2">100+</div>
              <div className="text-lg text-gray-600">보유 자격증</div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="px-20 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#1A3A6F] to-[#399084] rounded-3xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">
              함께할 인재를 찾습니다
            </h2>
            <p className="text-xl leading-relaxed mb-8 max-w-3xl mx-auto opacity-90">
              지속가능한 미래를 만들어가는 에코에이블컨설팅과 함께할<br />
              열정적이고 전문적인 인재를 모집합니다.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/contact" className="bg-white text-gray-900 px-8 py-4 rounded-3xl text-lg font-bold hover:bg-gray-100 transition-all">
                채용 문의
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-3xl text-lg font-bold hover:bg-white hover:text-gray-900 transition-all">
                채용 공고 보기
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 