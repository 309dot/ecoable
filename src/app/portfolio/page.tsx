'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';


interface PortfolioProject {
  year: string;
  title: string;
  client: string;
}

// CSV 데이터를 기반으로 한 탭별 프로젝트 데이터
const portfolioData = {
  lca: {
    title: 'LCA(전과정평가)',
    projects: [
      { year: '2025', title: '탄소나노소재의 전주기 평가를 위한 자료 수집 및 환경성 분석', client: '광주과학기술원' },
      { year: '2025', title: 'S-OIL 전제품에 대한 LCA 수행 및 LCA 시스템 개발', client: 'S-OIL㈜' },
      { year: '2025', title: 'KT&G 스틱, 각초, 디바이스, 잎담배에 대한 전과정평가 수행', client: '㈜케이티앤지' },
      { year: '2025', title: 'OCI 제품 전과정평가 수행 및 Tool 개발', client: 'OCI 주식회사' },
      { year: '2025', title: '현대OCI 카본블랙 제품 전과정평가 및 Tool 개발', client: 'HD현대오씨아이㈜' },
      { year: '2025', title: '삼양이노켐 ISB 제품에 대한 LCA 수행', client: '삼양이노켐㈜' },
      { year: '2025', title: '켐코 황산니켈 제품에 대한 전과정평가 수행', client: '켐코㈜' },
      { year: '2025', title: 'SK케미칼 Recycle PET 제품에 대한 LCA 수행 및 소통 방법론 개발', client: 'SK케미칼㈜' },
      { year: '2025', title: '(4차)전과정목록 전면개편 및 국제 플랫폼 등록_총괄주관사', client: '한국환경산업기술원' },
      { year: '2025', title: '대동 제품 전과정평가 컨설팅 및 내부 담당자 교육', client: '(주)대동' },
      { year: '2025', title: 'HD현대케미칼 LCA Tool 업데이트 컨설팅', client: '현대케미칼㈜' },
      { year: '2024', title: 'HD현대케미칼 HDPE, LDPE, EVA, PP에 대한 ISCC인증 및 제3자 검증', client: '현대케미칼㈜' },
      { year: '2024', title: '국도화학 제품에 대한 간이 LCA 수행', client: '국도화학㈜' },
      { year: '2024', title: '조선내화 내화물 제품에 대한 전과정평가 수행', client: '조선내화(주)' },
      { year: '2024', title: '삼성병원 유방암 수술에 대한 LCA 수행', client: '삼성서울병원' },
      { year: '2024', title: '국가 LCI DB 전면개편 및 국제 플랫폼 등록', client: '한국환경산업기술원' },
      { year: '2024', title: '콜마비앤에이치 헤모힘에 대한 전과정평가 수행', client: '콜마비앤에이치 주식회사' },
      { year: '2024', title: 'LS일렉트릭 제품 에코디자인 체계 구축', client: '엘에스일렉트릭㈜' },
      { year: '2024', title: '국도화학 10개 제품에 대한 전과정평가 수행 및 LCA 내재화 방안 마련', client: '국도화학㈜' },
      { year: '2024', title: 'SK케미칼 제품 LCA Tool 개발', client: 'SK케미칼㈜' },
      { year: '2024', title: '현대엔지니어링 P2E 수소 LCA 수행 및 청정수소인증제 대응방안 마련', client: '현대엔지니어링㈜' },
      { year: '2023', title: 'DL케미칼 PE제품에 대한 Carbon footprint 산정', client: 'DL케미칼㈜' },
      { year: '2023', title: 'SK온 Battery 제품의 환경전과정평가 수행 및 교육', client: 'SK온㈜' },
      { year: '2023', title: 'NB-Latex에 대한 환경성평가', client: '금호석유화학㈜' },
      { year: '2023', title: '나이스LMS 폐어망 활용 PA6 생산에 대한 환경성 평가', client: '(주)나이스엘엠에스' },
      { year: '2023', title: '삼성엔지니어링 CO2 포집 기술에 대한 환경성평가', client: '삼성엔지니어링㈜' },
      { year: '2023', title: '현대쉘베이스오일 윤활기유에 대한 전과정평가 수행', client: 'HD현대쉘베이스오일㈜' },
      { year: '2023', title: 'KT&G NGP 플랫폼에 대한 전과정평가 수행 및 에코디자인 가이드라인 개발', client: '㈜케이티앤지' },
      { year: '2023', title: 'LG CNS 탄소발자국 산정 시스템(LG에너지솔루션 대상) 개발 지원', client: '㈜LG CNS' },
      { year: '2023', title: 'LG화학 Scope 3 Upstream 협력회사 탄소발자국 (Product Carbon Footprint, PCF) 관리', client: '㈜LG화학' },
      { year: '2023', title: 'OCI 제품 LCA 수행 및 내재화 방안 마련', client: 'OCI 주식회사' },
      { year: '2022', title: 'LG화학 폐배터리 재활용 및 전구체에 대한 전과정평가 산정 Tool 개발', client: '㈜LG화학' },
      { year: '2022', title: '삼성SDI 배터리 제품 대한 전과정평가 수행 및 카본트러스트 인증', client: '삼성SDI㈜' },
      { year: '2021', title: '유한킴벌리 제품 환경성 평가', client: '유한킴벌리㈜' },
      { year: '2020', title: 'LG화학 제품 전과정평가 수행_TPEE, PC', client: '㈜LG화학' },
      { year: '2019', title: '송원산업 제품 전과정평가 체계 구축', client: '송원산업' }
    ]
  },
  epd: {
    title: 'EPD 인증대응',
    projects: [
      { year: '2025', title: '유니스포텍 인조잔디 제품 환경성적표지인증', client: '(주)유니스포텍' },
      { year: '2025', title: '덕신 EPC 제품에 대한 환경성적표지인증', client: '(주)덕신이피씨' },
      { year: '2025', title: 'TCC 도금 공정에 대한 노르웨이 EPD 인증 컨설팅', client: '(주)TCC스틸' },
      { year: '2025', title: '신원하이테크 단열재 제품에 대한 환경성적표지인증', client: '신원하이테크㈜' },
      { year: '2025', title: '현대쉘베이스오일 윤활기유 및 Gasoil에 대한 ISCC 인증 대응', client: 'HD현대쉘베이스오일㈜' },
      { year: '2025', title: '삼성물산 협력사 환경성적표지인증', client: '삼성물산㈜' },
      { year: '2025', title: '롯데마트 협력사 환경성적표지인증', client: '롯데쇼핑㈜ 롯데마트사업부' },
      { year: '2025', title: 'LS ELECTRIC 몰드변압기 제품에 대한 노르웨이 EPD 인증', client: '엘에스일렉트릭㈜' },
      { year: '2024', title: '삼양식품 3개 제품 환경성적표지인증 컨설팅', client: '삼양식품㈜' },
      { year: '2024', title: '빙그레 4개 제품 환경성적표지인증 컨설팅', client: '㈜빙그레' },
      { year: '2024', title: '한국신에츠실리콘 제품 환경성적표지인증 컨설팅', client: '한국신에츠실리콘㈜' },
      { year: '2023', title: '아모레퍼시픽 제품 카본트러스트 인증', client: '㈜아모레퍼시픽' },
      { year: '2023', title: 'D&K켐텍 PF보드 제품 환경성적표지 인증', client: '(주)디앤케이켐텍' },
      { year: '2022', title: '삼성전자 모니터 제품 UL EPD 인증 컨설팅', client: '삼성전자㈜' },
      { year: '2022', title: '삼성SDI 배터리 제품 대한 전과정평가 수행 및 카본트러스트 인증', client: '삼성SDI㈜' },
      { year: '2021', title: 'SK picglobal PO, PG제품의 카본트러스트 인증 컨설팅', client: 'SK picglobal' },
      { year: '2020', title: '무릉도원 제품 환경성적표지인증 컨설팅', client: '무릉도원㈜' }
    ]
  },
  circulation: {
    title: '자원순환',
    projects: [
      { year: '2025', title: '환경성보장제도 전품목 확대에 따른 회수재활용 의무이행 방안 마련', client: '이순환거버넌스' },
      { year: '2023', title: '미래폐자원 자원순환체계 구축 기반 마련 연구', client: '이순환거버넌스' },
      { year: '2023', title: '폐전기·전자제품 물질흐름분석 및 실질 재활용률 분석 사업', client: '이순환거버넌스' },
      { year: '2022', title: '전기전자제품 자원순환 정책 및 법령 정비 방안마련 연구', client: '이순환거버넌스' },
      { year: '2022', title: '한국농수산재활용공제조합 재활용 분담금 단가 산정 연구', client: '한국농수산재활용사업공제조합' },
      { year: '2022', title: '알루미늄 캔 닫힌 고리 재활용 활성화를 위한 방안 연구', client: '노벨리스코리아(주)' },
      { year: '2021', title: '지속가능 회수재활용체계 마련 환경성보장제 발전 방안', client: '이순환거버넌스' },
      { year: '2021', title: '제로웨이스트 매장 인증기준 개발 연구', client: '서울특별시' },
      { year: '2020', title: '필름류 제품ᆞ포장재 재생원료ᆞ재활용제품 사용현황 분석 및 판로확대 제도화 방안 연구', client: '환경부' },
      { year: '2020', title: '전기전자제품 장기재활용 목표량 적정성 분석', client: '이순환거버넌스' },
      { year: '2019', title: '건설용 발포플라스틱 회수 및 재활용활성화 방안 연구', client: '한국발포플라스틱공업협동조합' },
      { year: '2018', title: '전기차 폐배터리 재활용 방법 및 기준마련 연구', client: '환경부' },
      { year: '2017', title: '폐기물부담금 플라스틱 자발적 협약 품목 발생량 추정 및 재활용 비용산정 연구', client: '자발적협약 재활용협회' }
    ]
  },
  climate: {
    title: '기후변화대응',
    projects: [
      { year: '2025', title: 'LS ELECTRIC㈜ ESG 및 지속가능성 평가 대응 전략수립 연구', client: '엘에스일렉트릭㈜' },
      { year: '2025', title: 'DL케미칼 SCOPE3 배출량 산정', client: 'DL케미칼㈜' },
      { year: '2024', title: 'SK쉴더스 SCOPE3 배출량 산정', client: 'SK쉴더스㈜' },
      { year: '2024', title: '삼성전자 GLEC Framework 검증 컨설팅', client: '삼성전자㈜' },
      { year: '2024', title: 'DL케미칼 SCOPE3 배출량 산정', client: 'DL케미칼㈜' },
      { year: '2024', title: '조선내화 SCOPE3 배출량 산정', client: '조선내화(주)' },
      { year: '2023', title: '유한킴벌리 Scope 3 배출량 산정 및 관리방안 마련', client: '유한킴벌리㈜' },
      { year: '2023', title: '서연이화 Scope3 배출량 산정 및 산정 체계 구축', client: '서연이화' },
      { year: '2023', title: 'DL케미칼 Scope3 배출량 산정 및 검증', client: 'DL케미칼㈜' },
      { year: '2023', title: '아모레퍼시픽 SCOPE3 배출량 산정체계 구축 및 SBTi 검증', client: '㈜아모레퍼시픽' },
      { year: '2023', title: '서연이화 사업장인벤토리 구축', client: '서연이화' },
      { year: '2021', title: '아태 환경장관포럼 탄소배출량 산정', client: '한국환경산업기술원' },
      { year: '2020', title: '섬유패션 소재 제조기업 기후변화 대응 기반구축 지원', client: 'FITI시험연구원' },
      { year: '2019', title: '코스맥스 CDP 대응 컨설팅', client: '코스맥스' },
      { year: '2017', title: '전과정평가 기법을 활용한 온실가스 저감기술에 대한 환경성평가', client: '한국화학연구원' }
    ]
  },
  policy: {
    title: '환경정책 및 보건환경',
    projects: [
      { year: '2025', title: '2025년 유통 생활화학제품 및 어린이용품 온오프라인 시장모니터링', client: '한국환경산업기술원' },
      { year: '2025', title: '2025년 취약계층 실내환경 컨설팅 사업', client: '한국환경산업기술원' },
      { year: '2025', title: '녹색분류체계 인정기준 고도화 및 기준안 연구', client: '한국환경산업기술원' },
      { year: '2024', title: '2024년 취약계층 실내환경 컨설팅 사업', client: '한국환경산업기술원' },
      { year: '2024', title: '2024년 생활화학제품 시장감시단 운영', client: '한국환경산업기술원' },
      { year: '2024', title: '2024년 어린이용품 모니터링 및 환경유해인자 관리 컨설팅', client: '한국환경산업기술원' },
      { year: '2024', title: '환경책임투자 동향 DB 구축 사업', client: '한국환경산업기술원' },
      { year: '2024', title: '한국형 녹색분류체계 협의체 운영', client: '한국환경산업기술원' },
      { year: '2023', title: '2023년 취약계층 실내환경 컨설팅 사업', client: '한국환경산업기술원' },
      { year: '2023', title: '한국형 녹색분류체계의 전과정평가 기반 인정기준 적용방안 연구', client: '한국환경산업기술원' },
      { year: '2023', title: '생활화학제품 정보제공 체계 선진화 방안 마련', client: '환경부' },
      { year: '2022', title: '생활화학제품 안전관리제도 효율적 운영 및 개선방안 연구', client: '환경부' },
      { year: '2021', title: '기업 ESG평가를 위한 전략수립 컨설팅', client: '트레스웍스' },
      { year: '2020', title: '환경성적표지 인증 심사 매뉴얼 개발', client: '한국환경산업기술원' },
      { year: '2019', title: '환경산업연구단지 입주기업 실태조사', client: '한국환경산업기술원' },
      { year: '2018', title: '어린이 사용제품의 안정성 향상을 위한 위험성 평가', client: '에코플러스' }
    ]
  }
};

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<keyof typeof portfolioData>('lca');

  const portfolioTabs = [
    { key: 'lca', label: 'LCA(전과정평가)' },
    { key: 'epd', label: 'EPD 인증대응' },
    { key: 'circulation', label: '자원순환' },
    { key: 'climate', label: '기후변화대응' },
    { key: 'policy', label: '환경정책 및 보건환경' }
  ];

  const activeData = portfolioData[activeTab];

  // 연도별로 프로젝트 그룹화
  const groupedProjects = activeData.projects.reduce((groups: { [key: string]: PortfolioProject[] }, project) => {
    const year = project.year;
    if (!groups[year]) {
      groups[year] = [];
    }
    groups[year].push(project);
    return groups;
  }, {});

  // 연도를 내림차순으로 정렬
  const sortedYears = Object.keys(groupedProjects).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <div className="min-h-screen" style={{
      maxWidth: '1440px',
      margin: '0 auto',
      wordBreak: 'keep-all',
      overflowWrap: 'break-word'
    }}>
      {/* Navigation Section */}
      <div className="w-full">
        <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-20 py-4">
          <Navigation variant="pill" />
        </div>
      </div>

      <div className="pt-16">
        {/* Tab Menu Section - 왼쪽 정렬 */}
        <div className="w-full py-8">
          <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-20">
            <div className="flex justify-start">
              <div className="bg-[rgba(10,15,41,0.08)] rounded-full p-0.5 flex">
                {portfolioTabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key as keyof typeof portfolioData)}
                    className={`px-3 py-2.5 rounded-full font-medium text-base ${
                      activeTab === tab.key
                        ? 'bg-white border border-[#DEE0E3] text-[#14151A]'
                        : 'text-[rgba(15,19,36,0.6)]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full">
          <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-20 py-6">
            <div className="flex flex-col xl:flex-row gap-6 mb-6 py-6">
              
              {/* Title Section */}
              <div className="w-full xl:w-[360px]">
                <h1 className="text-[#14151A] font-bold text-[30px] leading-[1.2] mb-2">
                  수행 실적 소개
                </h1>
              </div>

              {/* Projects List */}
              <div className="flex-1">
                {sortedYears.length > 0 ? (
                  sortedYears.map((year) => (
                    <div key={year} className="mb-8">
                      {/* Year Header */}
                      <div className="flex items-stretch mb-4">
                        <div className="flex items-stretch flex-1 gap-2.5 p-4">
                          <h2 className="text-xl font-bold leading-[1.4] text-black flex-1">
                            {year}
                          </h2>
                        </div>
                      </div>

                      {/* Projects for this year */}
                      <div className="flex flex-col">
                        {groupedProjects[year].map((project, index) => (
                          <div key={index} className="flex flex-col sm:flex-row items-stretch border-t border-gray-200">
                            <div className="flex items-stretch flex-1 gap-2.5 p-4">
                              <div className="flex-1 text-lg leading-[1.44] text-black">
                                {project.title}
                              </div>
                            </div>
                            <div className="flex items-stretch">
                              <div className="flex items-stretch flex-1 gap-2.5 p-4">
                                <div className="flex-1 text-lg leading-[1.44] text-black">
                                  {project.client}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex items-center justify-center py-16 text-gray-500">
                    해당 분야의 프로젝트가 준비 중입니다.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
} 