'use client'

import Navigation from '@/components/Navigation';
import Image from 'next/image';
import Footer from '@/components/Footer';

export default function ClientCompanyPage() {
  // 고객사 데이터 - 피그마에서 확인한 순서대로
  const clients = [
    { name: '삼성전자㈜', logo: '/clients/logo_client_68.png' },
    { name: '삼성전기㈜', logo: '/clients/logo_client_67.png' },
    { name: '삼성SDI㈜', logo: '/clients/logo_client_66.png' },
    { name: '삼성웰스토리㈜', logo: '/clients/logo_client_65.png' },
    { name: '삼성엔지니어링㈜', logo: '/clients/logo_client_64.png' },
    { name: '㈜LG화학', logo: '/clients/logo_client_63.png' },
    { name: 'LG전자㈜', logo: '/clients/logo_client_62.png' },
    { name: 'LG이노텍㈜', logo: '/clients/logo_client_61.png' },
    { name: '㈜LG생활건강', logo: '/clients/logo_client_60.png' },
    { name: 'SK이노베이션㈜', logo: '/clients/logo_client_59.png' },
    { name: 'SK머티리얼즈 그룹14', logo: '/clients/logo_client_58.png' },
    { name: 'Sk picglobal', logo: '/clients/logo_client_57.png' },
    { name: 'SK매직㈜', logo: '/clients/logo_client_56.png' },
    { name: '금호석유화학㈜', logo: '/clients/logo_client_55.png' },
    { name: '한화솔루션㈜', logo: '/clients/logo_client_54.png' },
    { name: '현대케미칼㈜', logo: '/clients/logo_client_53.png' },
    { name: 'DL케미칼㈜', logo: '/clients/logo_client_52.png' },
    { name: '코오롱인더스트리㈜', logo: '/clients/logo_client_51.png' },
    { name: '코오롱바스프이노폼㈜', logo: '/clients/logo_client_50.png' },
    { name: '코오롱플라스틱㈜', logo: '/clients/logo_client_49.png' },
    { name: '㈜아모레퍼시픽', logo: '/clients/logo_client_48.png' },
    { name: '유한킴벌리㈜', logo: '/clients/logo_client_47.png' },
    { name: '삼양식품㈜', logo: '/clients/logo_client_46.png' },
    { name: '㈜빙그레', logo: '/clients/logo_client_45.png' },
    { name: '㈜케이티앤지', logo: '/clients/logo_client_44.png' },
    { name: '㈜이마트', logo: '/clients/logo_client_43.png' },
    { name: '롯데쇼핑㈜ 롯데마트사업부', logo: '/clients/logo_client_42.png' },
    { name: '㈜에코프로', logo: '/clients/logo_client_41.png' },
    { name: '㈜나노신소재', logo: '/clients/logo_client_40.png' },
    { name: '㈜단석산업', logo: '/clients/logo_client_39.png' },
    { name: '송원산업', logo: '/clients/logo_client_38.png' },
    { name: '서연이화', logo: '/clients/logo_client_37.png' },
    { name: '노보텔', logo: '/clients/logo_client_36.png' },
    { name: '환경부', logo: '/clients/logo_client_35.png' },
    { name: '서울특별시', logo: '/clients/logo_client_34.png' },
    { name: '한국환경산업기술원', logo: '/clients/logo_client_33.png' },
    { name: '한국생산기술연구원', logo: '/clients/logo_client_32.png' },
    { name: '한국지역난방공사', logo: '/clients/logo_client_31.png' },
    { name: '한국화학연구원', logo: '/clients/logo_client_30.png' },
    { name: '한국지질자원연구원', logo: '/clients/logo_client_29.png' },
    { name: 'E-순환거버넌스', logo: '/clients/logo_client_28.png' },
    { name: '한국농수산재활용사업공제조합', logo: '/clients/logo_client_27.png' },
    { name: '한국포장재재활용사업공제조합', logo: '/clients/logo_client_26.png' },
    { name: '한국순환자원유통지원센터', logo: '/clients/logo_client_25.png' },
    { name: '한국발포플라스틱공업협동조합', logo: '/clients/logo_client_24.png' },
    { name: '한국제지연합회', logo: '/clients/logo_client_23.png' },
    { name: '한국전선공업협동조합', logo: '/clients/logo_client_22.png' },
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
        <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-20 py-4">
          <Navigation variant="pill" />
        </div>
      </div>

      {/* Client List with 180px top padding */}
      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-20 py-[180px]">
        {/* Title Section */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-[#14151A] leading-[1.2em] tracking-[-1.67%]">
            고객사 리스트
          </h1>
        </div>

        {/* Client Grid */}
        <div className="mb-4">
          <div className="flex justify-center">
            <div className="w-full">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-[1.3rem]">
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