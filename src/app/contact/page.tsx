import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative w-full h-[400px] overflow-hidden">
        {/* Background with Gradient */}
        <div className="absolute inset-0" 
          style={{
            background: 'linear-gradient(135deg, #1A3A6F 0%, #399084 100%)'
          }}>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 px-20 py-4">
          <div className="flex items-center backdrop-blur-md rounded-[999px] px-6 py-3">
            {/* Logo */}
            <div className="flex items-center">
              <div className="relative w-[142.27px] h-7">
                <div className="absolute -left-[5px] -top-[2px] w-[152px] h-[33px] bg-white rounded-sm" />
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat z-10"
                  style={{
                    backgroundImage: `url('/logo.png')`,
                  }}
                />
              </div>
            </div>

            {/* Menu Links */}
            <div className="flex-1 flex justify-center items-center gap-4 ml-8">
              <Link href="/" className="flex justify-center items-center gap-2.5 px-6 py-2.5 rounded-[999px]" 
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                <span className="text-white font-inter font-medium text-base leading-6">Home</span>
              </Link>

              <Link href="/ecoable" className="flex justify-center items-center gap-2.5 px-6 py-2.5 rounded-[999px]" 
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                <span className="text-white font-inter font-medium text-base leading-6">Ecoable</span>
              </Link>

              <Link href="/what-we-do" className="flex justify-center items-center gap-2.5 px-6 py-2.5 rounded-[999px]" 
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                <span className="text-white font-inter font-medium text-base leading-6">What we do</span>
              </Link>

              <Link href="/portfolio" className="flex justify-center items-center gap-2.5 px-6 py-2.5 rounded-[999px]" 
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                <span className="text-white font-inter font-medium text-base leading-6">Portfolio</span>
              </Link>

              <Link href="/client-company" className="flex justify-center items-center gap-2.5 px-6 py-2.5 rounded-[999px]" 
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                <span className="text-white font-inter font-medium text-base leading-6">Client Company</span>
              </Link>

              <Link href="/team" className="flex justify-center items-center gap-2.5 px-6 py-2.5 rounded-[999px]" 
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                <span className="text-white font-inter font-medium text-base leading-6">Team</span>
              </Link>

              <Link href="/contact" className="flex justify-center items-center gap-2.5 px-6 py-2.5 rounded-[999px]" 
                style={{
                  background: 'linear-gradient(90deg, #1A3A6F 0%, #399084 100%)',
                }}>
                <span className="text-white font-inter font-semibold text-base leading-6">Contact</span>
              </Link>
            </div>

            {/* Right Buttons */}
            <div className="flex items-center gap-2">
              <button className="flex justify-center items-center gap-1 p-2.5 bg-white border border-[#DEE0E3] rounded-[999px]">
                <div className="w-5 h-5">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M2.5 1.67H15L12.02 12.02L15 16.67H2.5V1.67Z" fill="rgba(15,19,36,0.6)"/>
                  </svg>
                </div>
              </button>
              <button className="flex justify-center items-center gap-1 p-2.5 bg-white border border-[#DEE0E3] rounded-[999px]">
                <div className="w-5 h-5">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M1.67 2.5H16.67L15 15H1.67V2.5Z" fill="rgba(15,19,36,0.6)"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </nav>

        {/* Page Title */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full pt-20">
          <h1 className="text-white font-inter font-bold text-center leading-[72px]" 
            style={{ 
              fontSize: '64px',
              letterSpacing: '-2.656%',
              lineHeight: '1.125em'
            }}>
            Contact
          </h1>
          <p className="text-white font-inter font-medium text-center mt-4 leading-[32px]" 
            style={{ 
              fontSize: '24px',
              letterSpacing: '-1.5%',
              lineHeight: '1.333em'
            }}>
            언제든 문의하세요. 함께 해결책을 찾겠습니다
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-20 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Contact Form & Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-[#14151A] font-inter font-bold mb-6" 
                style={{ 
                  fontSize: '36px',
                  letterSpacing: '-2.083%',
                  lineHeight: '1.167em'
                }}>
                프로젝트 문의
              </h2>
              <p className="font-inter font-normal leading-7 mb-8" 
                style={{
                  fontSize: '16px',
                  letterSpacing: '-1.25%',
                  lineHeight: '1.5em',
                  color: 'rgba(15,19,36,0.7)'
                }}>
                환경 관련 프로젝트나 컨설팅이 필요하시면 언제든 연락주세요. 
                전문가가 직접 상담해드립니다.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-inter font-medium mb-2" 
                      style={{
                        fontSize: '14px',
                        letterSpacing: '-0.714%',
                        lineHeight: '1.429em',
                        color: 'rgba(15,19,36,0.8)'
                      }}>
                      성명 *
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-[#DEE0E3] rounded-2xl font-inter" 
                      style={{
                        fontSize: '16px',
                        letterSpacing: '-1.25%',
                        lineHeight: '1.5em'
                      }}
                      placeholder="성명을 입력해주세요"
                    />
                  </div>
                  <div>
                    <label className="block font-inter font-medium mb-2" 
                      style={{
                        fontSize: '14px',
                        letterSpacing: '-0.714%',
                        lineHeight: '1.429em',
                        color: 'rgba(15,19,36,0.8)'
                      }}>
                      회사명
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-[#DEE0E3] rounded-2xl font-inter" 
                      style={{
                        fontSize: '16px',
                        letterSpacing: '-1.25%',
                        lineHeight: '1.5em'
                      }}
                      placeholder="회사명을 입력해주세요"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-inter font-medium mb-2" 
                      style={{
                        fontSize: '14px',
                        letterSpacing: '-0.714%',
                        lineHeight: '1.429em',
                        color: 'rgba(15,19,36,0.8)'
                      }}>
                      이메일 *
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-[#DEE0E3] rounded-2xl font-inter" 
                      style={{
                        fontSize: '16px',
                        letterSpacing: '-1.25%',
                        lineHeight: '1.5em'
                      }}
                      placeholder="이메일을 입력해주세요"
                    />
                  </div>
                  <div>
                    <label className="block font-inter font-medium mb-2" 
                      style={{
                        fontSize: '14px',
                        letterSpacing: '-0.714%',
                        lineHeight: '1.429em',
                        color: 'rgba(15,19,36,0.8)'
                      }}>
                      연락처 *
                    </label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-[#DEE0E3] rounded-2xl font-inter" 
                      style={{
                        fontSize: '16px',
                        letterSpacing: '-1.25%',
                        lineHeight: '1.5em'
                      }}
                      placeholder="연락처를 입력해주세요"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-inter font-medium mb-2" 
                    style={{
                      fontSize: '14px',
                      letterSpacing: '-0.714%',
                      lineHeight: '1.429em',
                      color: 'rgba(15,19,36,0.8)'
                    }}>
                    문의 분야
                  </label>
                  <select 
                    className="w-full px-4 py-3 border border-[#DEE0E3] rounded-2xl font-inter" 
                    style={{
                      fontSize: '16px',
                      letterSpacing: '-1.25%',
                      lineHeight: '1.5em'
                    }}
                  >
                    <option value="">문의 분야를 선택해주세요</option>
                    <option value="product">제품환경파트</option>
                    <option value="policy">환경정책파트</option>
                    <option value="circulation">자원순환파트</option>
                    <option value="climate">기후변화대응파트</option>
                    <option value="integrated">통합 솔루션</option>
                    <option value="other">기타</option>
                  </select>
                </div>

                <div>
                  <label className="block font-inter font-medium mb-2" 
                    style={{
                      fontSize: '14px',
                      letterSpacing: '-0.714%',
                      lineHeight: '1.429em',
                      color: 'rgba(15,19,36,0.8)'
                    }}>
                    문의 내용 *
                  </label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-3 border border-[#DEE0E3] rounded-2xl font-inter resize-none" 
                    style={{
                      fontSize: '16px',
                      letterSpacing: '-1.25%',
                      lineHeight: '1.5em'
                    }}
                    placeholder="문의하실 내용을 자세히 적어주세요"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full px-8 py-4 rounded-2xl font-inter font-semibold"
                  style={{ 
                    background: 'linear-gradient(90deg, #1A3A6F 0%, #399084 100%)',
                    color: 'white',
                    fontSize: '18px',
                    letterSpacing: '-1.111%',
                    lineHeight: '1.444em'
                  }}
                >
                  문의 보내기
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-[#14151A] font-inter font-bold mb-6" 
                style={{ 
                  fontSize: '36px',
                  letterSpacing: '-2.083%',
                  lineHeight: '1.167em'
                }}>
                연락처 정보
              </h2>
              
              <div className="space-y-8">
                {/* Office */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1A3A6F] to-[#399084] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z M2 17L12 22L22 17M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[#14151A] font-inter font-bold mb-2" 
                      style={{ 
                        fontSize: '18px',
                        letterSpacing: '-1.111%',
                        lineHeight: '1.444em'
                      }}>
                      본사
                    </h3>
                    <p className="font-inter font-normal leading-6" 
                      style={{
                        fontSize: '16px',
                        letterSpacing: '-1.25%',
                        lineHeight: '1.5em',
                        color: 'rgba(15,19,36,0.7)'
                      }}>
                      서울특별시 강남구 테헤란로 123길 45<br />
                      에코타워 12층 1201호
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1A3A6F] to-[#399084] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59332 1.99522 8.06175 2.16708 8.43369 2.48353C8.80565 2.79999 9.05826 3.23945 9.14999 3.72C9.32388 4.68007 9.62305 5.61273 10.04 6.49C10.1856 6.84076 10.2214 7.22945 10.142 7.60478C10.0626 7.98011 9.87195 8.32305 9.59 8.6L8.26 9.93C9.69387 12.4237 11.5763 14.3061 14.07 15.74L15.4 14.41C15.677 14.1281 16.02 13.9374 16.3953 13.858C16.7706 13.7786 17.1593 13.8144 17.51 13.96C18.3873 14.3769 19.3199 14.6761 20.28 14.85C20.7658 14.9429 21.2094 15.2002 21.5265 15.5775C21.8437 15.9547 22.0122 16.4296 22 16.92Z" fill="white"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[#14151A] font-inter font-bold mb-2" 
                      style={{ 
                        fontSize: '18px',
                        letterSpacing: '-1.111%',
                        lineHeight: '1.444em'
                      }}>
                      전화번호
                    </h3>
                    <p className="font-inter font-normal leading-6" 
                      style={{
                        fontSize: '16px',
                        letterSpacing: '-1.25%',
                        lineHeight: '1.5em',
                        color: 'rgba(15,19,36,0.7)'
                      }}>
                      대표: 02-1234-5678<br />
                      팩스: 02-1234-5679
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1A3A6F] to-[#399084] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="L22 6L12 13L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[#14151A] font-inter font-bold mb-2" 
                      style={{ 
                        fontSize: '18px',
                        letterSpacing: '-1.111%',
                        lineHeight: '1.444em'
                      }}>
                      이메일
                    </h3>
                    <p className="font-inter font-normal leading-6" 
                      style={{
                        fontSize: '16px',
                        letterSpacing: '-1.25%',
                        lineHeight: '1.5em',
                        color: 'rgba(15,19,36,0.7)'
                      }}>
                      info@ecoable.co.kr<br />
                      consulting@ecoable.co.kr
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1A3A6F] to-[#399084] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                      <path d="M12 6V12L16 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[#14151A] font-inter font-bold mb-2" 
                      style={{ 
                        fontSize: '18px',
                        letterSpacing: '-1.111%',
                        lineHeight: '1.444em'
                      }}>
                      운영시간
                    </h3>
                    <p className="font-inter font-normal leading-6" 
                      style={{
                        fontSize: '16px',
                        letterSpacing: '-1.25%',
                        lineHeight: '1.5em',
                        color: 'rgba(15,19,36,0.7)'
                      }}>
                      평일: 09:00 - 18:00<br />
                      점심시간: 12:00 - 13:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="mt-12">
                <h3 className="text-[#14151A] font-inter font-bold mb-4" 
                  style={{ 
                    fontSize: '24px',
                    letterSpacing: '-1.5%',
                    lineHeight: '1.333em'
                  }}>
                  오시는 길
                </h3>
                <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
                  <p className="font-inter font-medium text-gray-500">지도가 표시됩니다</p>
                </div>
                <p className="font-inter font-normal leading-6 mt-4" 
                  style={{
                    fontSize: '14px',
                    letterSpacing: '-0.714%',
                    lineHeight: '1.429em',
                    color: 'rgba(15,19,36,0.6)'
                  }}>
                  지하철 2호선 강남역 11번 출구에서 도보 5분
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-[#14151A] font-inter font-bold mb-8 text-center" 
              style={{ 
                fontSize: '36px',
                letterSpacing: '-2.083%',
                lineHeight: '1.167em'
              }}>
              자주 묻는 질문
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-4">
              {/* FAQ 1 */}
              <div className="bg-white border border-[#DEE0E3] rounded-2xl p-6">
                <h3 className="text-[#14151A] font-inter font-bold mb-3" 
                  style={{ 
                    fontSize: '18px',
                    letterSpacing: '-1.111%',
                    lineHeight: '1.444em'
                  }}>
                  Q. 프로젝트 진행 기간은 얼마나 걸리나요?
                </h3>
                <p className="font-inter font-normal leading-6" 
                  style={{
                    fontSize: '16px',
                    letterSpacing: '-1.25%',
                    lineHeight: '1.5em',
                    color: 'rgba(15,19,36,0.7)'
                  }}>
                  프로젝트 규모와 복잡성에 따라 다르지만, 일반적으로 소규모 프로젝트는 2-4주, 
                  대규모 프로젝트는 2-6개월 정도 소요됩니다. 정확한 일정은 초기 상담 후 안내해드립니다.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="bg-white border border-[#DEE0E3] rounded-2xl p-6">
                <h3 className="text-[#14151A] font-inter font-bold mb-3" 
                  style={{ 
                    fontSize: '18px',
                    letterSpacing: '-1.111%',
                    lineHeight: '1.444em'
                  }}>
                  Q. 비용은 어떻게 산정되나요?
                </h3>
                <p className="font-inter font-normal leading-6" 
                  style={{
                    fontSize: '16px',
                    letterSpacing: '-1.25%',
                    lineHeight: '1.5em',
                    color: 'rgba(15,19,36,0.7)'
                  }}>
                  프로젝트 범위, 기간, 투입 인력 등을 종합적으로 고려하여 견적을 제공합니다. 
                  무료 상담을 통해 정확한 견적을 안내해드리니 부담없이 문의하세요.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-white border border-[#DEE0E3] rounded-2xl p-6">
                <h3 className="text-[#14151A] font-inter font-bold mb-3" 
                  style={{ 
                    fontSize: '18px',
                    letterSpacing: '-1.111%',
                    lineHeight: '1.444em'
                  }}>
                  Q. 전국 어디든 프로젝트 수행이 가능한가요?
                </h3>
                <p className="font-inter font-normal leading-6" 
                  style={{
                    fontSize: '16px',
                    letterSpacing: '-1.25%',
                    lineHeight: '1.5em',
                    color: 'rgba(15,19,36,0.7)'
                  }}>
                  네, 전국 어디든 프로젝트 수행이 가능합니다. 현장 조사나 미팅이 필요한 경우 
                  직접 방문하여 서비스를 제공해드립니다.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
} 