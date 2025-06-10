'use client';

import { useState } from 'react';
import Navigation from "@/components/Navigation";

export default function ClientCompanyPage() {
  const [activeTab, setActiveTab] = useState('고객사');

  // 클라이언트 회사 목록 데이터 (Figma에 있는 순서대로)
  const clientCompanies = [
    '삼성전자㈜', '삼성전기㈜', '삼성SDI㈜', '삼성웰스토리㈜', '삼성엔지니어링㈜',
    '㈜LG화학', 'LG전자㈜', 'LG이노텍㈜', '㈜LG생활건강', 'SK이노베이션㈜',
    'SK머티리얼즈 그룹14', 'Sk picglobal', 'SK매직㈜', '금호석유화학㈜', '한화솔루션㈜',
    '현대케미칼㈜', 'DL케미칼㈜', '코오롱인더스트리㈜', '코오롱바스프이노폼㈜', '코오롱플라스틱㈜',
    '㈜아모레퍼시픽', '유한킴벌리㈜', '삼양식품㈜', '㈜빙그레', '㈜케이티앤지',
    '㈜이마트', '롯데쇼핑㈜ 롯데마트사업부', '㈜에코프로', '㈜나노신소재', '㈜단석산업',
    '송원산업', '서연이화', '노보텔', '환경부', '서울특별시',
    '한국환경산업기술원', '한국생산기술연구원', '한국지역난방공사', '한국화학연구원', '한국지질자원연구원',
    'E-순환거버넌스', '한국농수산재활용사업공제조합', '한국포장재재활용사업공제조합', '한국순환자원유통지원센터', '한국발포플라스틱공업협동조합',
    '한국제지연합회', '한국전선공업협동조합', '코오롱인더스트리'
  ];

  return (
    <div className="bg-white font-pretendard" style={{ width: '1440px', height: '2462px' }}>
      {/* Navigation - positioned at y:16 as per Figma */}
      <div className="relative z-10 pt-4">
        <Navigation />
      </div>

      {/* Main Content Container - positioned exactly as in Figma */}
      <main className="relative">
        {/* Tab Menu Section - positioned at y:142 as per Figma */}
        <div className="absolute" style={{ top: '142px', left: '80px', width: '1280px', height: '80px' }}>
          <div className="flex items-center bg-black/8 rounded-xl" style={{ top: '16px', position: 'relative', width: '820px', height: '48px' }}>
            {/* Tab Menu Items with exact Figma spacing */}
            <button
              onClick={() => setActiveTab('LCA(전과정평가)')}
              className={`px-4 py-2 rounded-xl text-base font-medium transition-all ${
                activeTab === 'LCA(전과정평가)'
                  ? 'bg-white text-[#14151a] shadow-sm'
                  : 'text-[#0f1324]/60 hover:text-[#0f1324]'
              }`}
              style={{ 
                width: '156px', 
                height: '48px',
                fontSize: '16px', 
                lineHeight: '24px', 
                letterSpacing: '-0.2px' 
              }}
            >
              LCA(전과정평가)
            </button>
            <button
              onClick={() => setActiveTab('EPD 인증대응')}
              className={`px-4 py-2 rounded-xl text-base font-medium transition-all ${
                activeTab === 'EPD 인증대응'
                  ? 'bg-white text-[#14151a] shadow-sm'
                  : 'text-[#0f1324]/60 hover:text-[#0f1324]'
              }`}
              style={{ 
                width: '134px', 
                height: '48px',
                fontSize: '16px', 
                lineHeight: '24px', 
                letterSpacing: '-0.2px' 
              }}
            >
              EPD 인증대응
            </button>
            <button
              onClick={() => setActiveTab('자원순환')}
              className={`px-4 py-2 rounded-xl text-base font-medium transition-all ${
                activeTab === '자원순환'
                  ? 'bg-white text-[#14151a] shadow-sm'
                  : 'text-[#0f1324]/60 hover:text-[#0f1324]'
              }`}
              style={{ 
                width: '99px', 
                height: '48px',
                fontSize: '16px', 
                lineHeight: '24px', 
                letterSpacing: '-0.2px' 
              }}
            >
              자원순환
            </button>
            <button
              onClick={() => setActiveTab('기후변화대응')}
              className={`px-4 py-2 rounded-xl text-base font-medium transition-all ${
                activeTab === '기후변화대응'
                  ? 'bg-white text-[#14151a] shadow-sm'
                  : 'text-[#0f1324]/60 hover:text-[#0f1324]'
              }`}
              style={{ 
                width: '128px', 
                height: '48px',
                fontSize: '16px', 
                lineHeight: '24px', 
                letterSpacing: '-0.2px' 
              }}
            >
              기후변화대응
            </button>
            <button
              onClick={() => setActiveTab('환경정책 및 보건환경')}
              className={`px-4 py-2 rounded-xl text-base font-medium transition-all ${
                activeTab === '환경정책 및 보건환경'
                  ? 'bg-white text-[#14151a] shadow-sm'
                  : 'text-[#0f1324]/60 hover:text-[#0f1324]'
              }`}
              style={{ 
                width: '179px', 
                height: '48px',
                fontSize: '16px', 
                lineHeight: '24px', 
                letterSpacing: '-0.2px' 
              }}
            >
              환경정책 및 보건환경
            </button>
            <button
              onClick={() => setActiveTab('고객사')}
              className={`px-4 py-2 rounded-xl text-base font-medium transition-all ${
                activeTab === '고객사'
                  ? 'bg-white text-[#14151a] shadow-sm border border-[#dee0e3]'
                  : 'text-[#0f1324]/60 hover:text-[#0f1324]'
              }`}
              style={{ 
                width: '84px', 
                height: '48px',
                fontSize: '16px', 
                lineHeight: '24px', 
                letterSpacing: '-0.2px' 
              }}
            >
              고객사
            </button>
          </div>
        </div>

        {/* Main Content Grid - positioned at y:254 as per Figma */}
        <div className="absolute" style={{ top: '254px', left: '80px', width: '1280px', height: '2176px' }}>
          <div 
            className="grid gap-8"
            style={{ 
              gridTemplateColumns: 'repeat(6, 197px)',
              gridAutoRows: '104px',
              rowGap: '32px',
              columnGap: '32px'
            }}
          >
            {clientCompanies.map((company, index) => (
              <div
                key={index}
                className="bg-white border border-[#dee0e3] rounded-3xl flex items-center justify-center hover:shadow-lg transition-all"
                style={{ width: '197px', height: '104px' }}
              >
                <div className="text-[#14151a] text-sm font-medium text-center px-4">
                  {company}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-[#0f1324]/60 font-medium text-base leading-[24px] tracking-[-0.2px] max-w-2xl">
          에코에이블컨설팅㈜와 함께하는 파트너 기업들을 소개합니다. 다양한 분야의 우수한 기업들과의 협력을 통해 지속가능한 가치를 창출하고 있습니다. 우리의 &apos;에코에이블스러운&apos; 서비스를 믿고 함께하는 소중한 파트너들입니다.
        </p>
      </main>
    </div>
  );
} 