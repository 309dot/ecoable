'use client'

import Navigation from '@/components/Navigation';
import Image from 'next/image';
import Footer from '@/components/Footer';

export default function ClientCompanyPage() {
  // 고객사 데이터 - 피그마에서 확인한 순서대로
  const clients = [
    { name: '삼성전자㈜', logo: '/images/client-company/삼성전자.svg' },
    { name: '삼성전기㈜', logo: '/images/client-company/삼성전기.svg' },
    { name: '삼성SDI㈜', logo: '/images/client-company/삼성SDI.svg' },
    { name: '삼성웰스토리㈜', logo: '/images/client-company/삼성웰스토리.png' },
    { name: '삼성엔지니어링㈜', logo: '/images/client-company/삼성엔지니어링.svg' },
    { name: '㈜LG화학', logo: '/images/client-company/LG화학.svg' },
    { name: 'LG전자㈜', logo: '/images/client-company/LG전자.svg' },
    { name: 'LG이노텍㈜', logo: '/images/client-company/LG이노텍.svg' },
    { name: '㈜LG생활건강', logo: '/images/client-company/LG생활건강.svg' },
    { name: 'SK이노베이션㈜', logo: '/images/client-company/SK이노베이션.svg' },
    { name: 'SK머티리얼즈 그룹14', logo: '/images/client-company/SK머티리얼즈.png' },
    { name: 'Sk picglobal', logo: '/images/client-company/SK picglobal.png' },
    { name: 'SK매직㈜', logo: '/images/client-company/SK매직.svg' },
    { name: '금호석유화학㈜', logo: '/images/client-company/금호석유화학.svg' },
    { name: '한화솔루션㈜', logo: '/images/client-company/한화솔루션.svg' },
    { name: '현대케미칼㈜', logo: '/images/client-company/현대케미칼.png' },
    { name: 'DL케미칼㈜', logo: '/images/client-company/DL케미칼.svg' },
    { name: '코오롱인더스트리㈜', logo: '/images/client-company/코오롱인더스트리.svg' },
    { name: '코오롱바스프이노폼㈜', logo: '/images/client-company/코오롱바스프이노폼.svg' },
    { name: '코오롱플라스틱㈜', logo: '/images/client-company/코오롱플라스틱.png' },
    { name: '㈜아모레퍼시픽', logo: '/images/client-company/아모레퍼시픽.svg' },
    { name: '유한킴벌리㈜', logo: '/images/client-company/유한킴벌리.svg' },
    { name: '삼양식품㈜', logo: '/images/client-company/삼양식품.svg' },
    { name: '㈜빙그레', logo: '/images/client-company/빙그레.svg' },
    { name: '㈜케이티앤지', logo: '/images/client-company/케이티앤지.svg' },
    { name: '㈜이마트', logo: '/images/client-company/이마트.svg' },
    { name: '롯데쇼핑㈜ 롯데마트사업부', logo: '/images/client-company/롯데쇼핑.svg' },
    { name: '㈜에코프로', logo: '/images/client-company/에코프로.svg' },
    { name: '㈜나노신소재', logo: '/images/client-company/나노신소재.png' },
    { name: '㈜단석산업', logo: '/images/client-company/단석산업.png' },
    { name: '송원산업', logo: '/images/client-company/송원산업.png' },
    { name: '서연이화', logo: '/images/client-company/서연이화.png' },
    { name: '노보텔', logo: '/images/client-company/노보텔.png' },
    { name: '환경부', logo: '/images/client-company/환경부.png' },
    { name: '서울특별시', logo: '/images/client-company/서울특별시.svg' },
    { name: '한국환경산업기술원', logo: '/images/client-company/한국환경산업기술원.svg' },
    { name: '한국생산기술연구원', logo: '/images/client-company/한국생산기술연구원.svg' },
    { name: '한국지역난방공사', logo: '/images/client-company/한국지역난방공사.svg' },
    { name: '한국화학연구원', logo: '/images/client-company/한국화학연구원.svg' },
    { name: '한국지질자원연구원', logo: '/images/client-company/한국지질자원연구원.svg' },
    { name: 'E-순환거버넌스', logo: '/images/client-company/E-순환거버넌스.png' },
    { name: '한국농수산재활용사업공제조합', logo: '/images/client-company/한국농수산재활용사업공제조합.png' },
    { name: '한국포장재재활용사업공제조합', logo: '/images/client-company/한국포장재재활용사업공제조합.png' },
    { name: '한국순환자원유통지원센터', logo: '/images/client-company/한국순환자원유통지원센터.png' },
    { name: '한국발포플라스틱공업협동조합', logo: '/images/client-company/한국발포플라스틱공업협동조합.png' },
    { name: '한국제지연합회', logo: '/images/client-company/한국제지연합회.png' },
    { name: '한국전선공업협동조합', logo: '/images/client-company/한국전선공업협동조합.png' },
  ];

  return (
    <div className="min-h-screen" style={{
      maxWidth: '1440px',
      margin: '0 auto',
      wordBreak: 'keep-all',
      overflowWrap: 'break-word'
    }}>
      {/* Navigation */}
      <div className="w-full">
        <div className="w-full container-1440 mx-auto py-4">
          <Navigation variant="pill" />
        </div>
      </div>

      {/* Client List with 180px top padding */}
      <div className="w-full container-1440 mx-auto py-24">
        {/* Title Section */}
        <div className="mb-6 py-8">
          <h1 className="text-3xl font-bold text-[#14151A] leading-[1.2em] tracking-[-1.67%]">
            고객사 리스트
          </h1>
        </div>

        {/* Client Grid */}
        <div className="mb-4">
          <div className="flex justify-center">
            <div className="w-full">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                {clients.map((client, index) => (
                  <div 
                    key={index}
                    className="bg-white border border-[#DEE0E3] rounded-3xl p-6 flex flex-col justify-center items-center gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    {/* Logo Container */}
                    <div className="w-full h-8 flex items-center justify-center">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={120}
                        height={32}
                        className="max-w-full max-h-8 object-contain"
                      />
                    </div>
                    
                    {/* Company Name */}
                    <p className="text-sm font-normal text-[rgba(15,19,36,0.6)] leading-[1.43em] tracking-[-0.71%] text-center">
                      {client.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 