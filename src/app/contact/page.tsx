import Link from 'next/link';

export default function ContactPage() {
  const faqs = [
    {
      question: "프로젝트 진행 기간은 어느 정도인가요?",
      answer: "프로젝트 규모와 복잡도에 따라 다르지만, 일반적으로 소규모 프로젝트는 2-3개월, 대규모 프로젝트는 6개월-1년 정도 소요됩니다. 정확한 기간은 초기 상담을 통해 안내해드립니다."
    },
    {
      question: "4개 전문 파트가 모두 필요한가요?",
      answer: "고객사의 요구사항과 프로젝트 성격에 따라 필요한 전문 분야만 선택적으로 진행할 수 있습니다. 통합 솔루션이 필요한 경우 4개 파트가 협업하여 시너지 효과를 극대화합니다."
    },
    {
      question: "비용은 어떻게 산정되나요?",
      answer: "프로젝트 범위, 기간, 참여 인력 등을 종합적으로 고려하여 산정됩니다. 무료 초기 상담을 통해 상세한 견적을 제공해드리며, 고객사 예산에 맞는 최적의 솔루션을 제안합니다."
    },
    {
      question: "사후 지원 서비스가 있나요?",
      answer: "네, 프로젝트 완료 후에도 지속적인 사후 관리 서비스를 제공합니다. 정기적인 모니터링, 성과 측정, 추가 개선 방안 제안 등을 통해 장기적인 파트너십을 유지합니다."
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
              <Link href="/contact" className="text-white text-base font-medium bg-gradient-to-r from-[#1A3A6F] to-[#399084] px-6 py-3 rounded-[999px]">
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {/* Page Title */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full pt-8">
          <h1 className="text-white font-inter font-bold text-6xl leading-tight tracking-tight mb-4">
            Contact
          </h1>
          <p className="text-white font-inter font-medium text-2xl tracking-wide">
            지속가능한 미래를 함께 만들어갑니다
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-20 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                프로젝트 문의하기
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                환경 과제 해결을 위한 전문 컨설팅이 필요하시다면 언제든 연락주세요. 
                최적의 솔루션을 제안해드리겠습니다.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      이름 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="홍길동"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      회사명 *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="에코에이블컨설팅(주)"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      이메일 *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="contact@ecoable.co.kr"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      연락처
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="010-1234-5678"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    관심 서비스 *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">선택해주세요</option>
                    <option value="product">제품환경 (LCA, 녹색제품 인증)</option>
                    <option value="policy">환경정책 (환경영향평가, ISO 14001)</option>
                    <option value="circular">자원순환 (순환경제, 폐기물 관리)</option>
                    <option value="climate">기후변화대응 (탄소중립, ESG)</option>
                    <option value="integrated">통합 솔루션</option>
                    <option value="other">기타</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    프로젝트 내용 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="프로젝트 목적, 기간, 예산 등을 자세히 알려주세요."
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    개인정보 수집 및 이용에 동의합니다. *<br />
                    <span className="text-xs text-gray-500">
                      수집된 정보는 문의 응답 목적으로만 사용되며, 동의 철회 시 삭제됩니다.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#1A3A6F] to-[#399084] text-white py-4 px-8 rounded-3xl text-lg font-bold hover:shadow-lg transition-all"
                >
                  문의 보내기
                </button>
              </form>
            </div>

            {/* Company Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                회사 정보
              </h2>

              {/* Contact Info Cards */}
              <div className="space-y-6 mb-12">
                <div className="bg-gray-50 rounded-3xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">이메일</h3>
                    <p className="text-gray-600">contact@ecoable.co.kr</p>
                    <p className="text-gray-600">info@ecoable.co.kr</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-3xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">전화번호</h3>
                    <p className="text-gray-600">02-1234-5678</p>
                    <p className="text-gray-600">070-1234-5678</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-3xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">주소</h3>
                    <p className="text-gray-600">
                      서울특별시 강남구 테헤란로 123<br />
                      에코빌딩 10층 1001호
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-3xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">운영시간</h3>
                    <p className="text-gray-600">평일 09:00 - 18:00</p>
                    <p className="text-gray-600">점심시간 12:00 - 13:00</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-gray-200 rounded-3xl h-64 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <p className="font-medium">위치 지도</p>
                  <p className="text-sm">서울특별시 강남구 테헤란로 123</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 px-20 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">자주 묻는 질문</h2>
            <p className="text-lg text-gray-600">
              고객님들이 자주 문의하시는 내용들을 정리했습니다
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-3">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      Q
                    </span>
                    {faq.question}
                  </h3>
                  <div className="pl-9">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">더 궁금한 점이 있으신가요?</p>
            <button className="bg-gradient-to-r from-[#1A3A6F] to-[#399084] text-white px-8 py-3 rounded-3xl font-bold hover:shadow-lg transition-all">
              직접 문의하기
            </button>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="bg-gradient-to-r from-[#1A3A6F] to-[#399084] px-20 py-16">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-3xl font-bold mb-6">
            환경 전문가와 상담하고 싶으신가요?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            무료 초기 상담을 통해 고객사에 최적화된 솔루션을 제안해드립니다
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-[#1A3A6F] px-8 py-4 rounded-3xl text-lg font-bold hover:bg-gray-100 transition-all">
              전화 상담 신청
            </button>
            <button className="bg-white/10 backdrop-blur-md border-2 border-white text-white px-8 py-4 rounded-3xl text-lg font-bold hover:bg-white/20 transition-all">
              온라인 미팅 예약
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 