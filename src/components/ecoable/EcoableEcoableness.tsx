import Image from 'next/image';
import { useState } from 'react';

// Welfare List 데이터 (list 컴포넌트용)
const welfareListData = [
  {
    id: 1,
    title: "연간 휴가일수 20일",
    description: "쉬면서 일하자",
    image: "/images/image_01.png"
  },
  {
    id: 2,
    title: "매3년마다 여행지원 : 별도 5일 휴가 + 휴가비 100만원",
    description: "여행 좀 길게가자 제도",
    image: "/images/image_02.png"
  },
  {
    id: 3,
    title: "12월 24일 종무식",
    description: "크리스마스에는 같이 있지 말자",
    image: "/images/image_03.png"
  },
  {
    id: 4,
    title: "10시 출근",
    description: "Avoided Traffic JAM",
    image: "/images/image_04.png"
  },
  {
    id: 5,
    title: "월요일 11시 출근",
    description: "월요병 탈출",
    image: "/images/image_05.png"
  },
  {
    id: 6,
    title: "매월 마지막 금요일 조기퇴근",
    description: "불금불금 제도",
    image: "/images/image_06.png"
  },
  {
    id: 7,
    title: "순이익 30% 성과급 지급",
    description: "열심히 일한 자 돈쭐나라",
    image: "/images/image_07.png"
  },
  {
    id: 8,
    title: "비밀 용돈 지원",
    description: "묻지마 비상금",
    image: "/images/image_08.png"
  },
  {
    id: 9,
    title: "주거안정자금 무이자 대출",
    description: "쥐꼬리지만 괜찮아 대출 제도",
    image: "/images/image_09.png"
  },
  {
    id: 10,
    title: "승진 시 선물 증정",
    description: "쓸데있는 승진선물",
    image: "/images/image_10.png"
  },
  {
    id: 11,
    title: "매 5년 근속 시 순금열쇠 증정",
    description: "황금열쇠",
    image: "/images/image_11.png"
  },
  {
    id: 12,
    title: "대학원 교육비 및 직무교육비 지원",
    description: "알고 일합시다",
    image: "/images/image_12.png"
  },
  {
    id: 13,
    title: "가정의 달 외식비 지원",
    description: "키워주셔서 대신 감사합니다",
    image: "/images/image_13.png"
  },
  {
    id: 14,
    title: "건강검진 지원",
    description: "인재를 다른 회사에 보낼 수는 있어도 하늘나라엔 보낼 수 없어요",
    image: "/images/image_14.png"
  },
  {
    id: 15,
    title: "텀블러 사용 시 리워드 제공",
    description: "텀블러 사용하면 공짜커피 드려요",
    image: "/images/image_15.png"
  }
];

// Bucket List 데이터 (list_bucket 컴포넌트용)
const bucketListData = [
  // Default 상태
  {
    id: 1,
    title: "주 4일 근무제",
    status: "default" as const,
    image: "/images/image2_01.png"
  },
  {
    id: 2,
    title: "돈 많이 버는 회사",
    status: "default" as const,
    image: "/images/image2_02.png"
  },
  {
    id: 3,
    title: "운동비/학원비 지원제도",
    status: "default" as const,
    image: "/images/image2_03.png"
  },
  {
    id: 4,
    title: "모든 직원이 주주가 되는 회사",
    status: "default" as const,
    image: "/images/image2_04.png"
  },
  {
    id: 5,
    title: "생일선물 주는 회사 (단, 내 돈 주고 사기 아까운)",
    status: "default" as const,
    image: "/images/image2_05.png"
  },
  {
    id: 6,
    title: "일년에 한달씩 장기휴가 주는 회사",
    status: "default" as const,
    image: "/images/image2_06.png"
  },
  {
    id: 7,
    title: "묻지마 비상금\n지원제도",
    status: "default" as const,
    image: "/images/bucket-emergency-fund.png"
  },
  {
    id: 8,
    title: "자가사옥",
    status: "default" as const,
    image: "/images/bucket-building.png"
  },
  {
    id: 9,
    title: "한달에 두 번 재택근무",
    status: "default" as const,
    image: "/images/bucket-remote.png"
  },
  {
    id: 10,
    title: "도서비 지원",
    status: "default" as const,
    image: "/images/bucket-books.png"
  },
  {
    id: 11,
    title: "심리상담 지원",
    status: "default" as const,
    image: "/images/bucket-counseling.png"
  },
  // Done 상태
  {
    id: 12,
    title: "가족이 편하게 놀러올 수 있는 회사",
    status: "done" as const,
    image: "/images/bucket-success.png"
  },
  {
    id: 13,
    title: "커피 한잔의 여유가 있는 회사",
    status: "done" as const,
    image: "/images/bucket-success.png"
  },
  {
    id: 14,
    title: "자가사무실",
    status: "done" as const,
    image: "/images/bucket-success.png"
  },
  {
    id: 15,
    title: "묻지마 비상금\n지원제도",
    status: "done" as const,
    image: "/images/bucket-success.png"
  },
  {
    id: 16,
    title: "장기근속시 휴가 보내주는 회사",
    status: "done" as const,
    image: "/images/bucket-success.png"
  },
  {
    id: 17,
    title: "근무시간에 누워서 편하게 잘 수 있는 회사",
    status: "done" as const,
    image: "/images/bucket-success.png"
  },
  {
    id: 18,
    title: "필요 시 아기와 반려동물과 함께 출근할 수 있는 회사",
    status: "done" as const,
    image: "/images/bucket-success.png"
  }
];

// Welfare List Card Component (list 컴포넌트)
const WelfareCard = ({ title, description, image }: { title: string; description: string; image: string }) => {
  return (
    <div className="bg-white border border-[#DEE0E3] rounded-[24px] p-8 flex flex-col gap-10 transition-all duration-300 hover:shadow-lg hover:shadow-gray-400/25 hover:-translate-y-1 w-full">
      {/* 카피(description)를 제목 자리에, 제도명(title)을 본문 자리에 노출합니다 */}
      <div className="flex-1">
        {/* 2줄(56px) 기준으로 높이를 잡아 1줄짜리도 본문 시작선이 같아집니다 */}
        <h3 className="text-[#14151A] font-bold text-xl leading-[1.4] mb-4 min-h-14">{description}</h3>
        <p className="text-[#14151A] text-lg leading-[1.444] min-h-12">{title}</p>
      </div>
      <div className="w-28 h-28 flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={112}
          height={112}
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
};

// Bucket List Card Component (list_bucket 컴포넌트)
const BucketCard = ({ title, status, image }: { title: string; status: 'default' | 'done'; image: string }) => {
  const isDefault = status === 'default';

  return (
    <div 
      className={`${isDefault ? 'bg-white border border-[#DEE0E3]' : 'bg-[#F7F7F8] border border-[#DEE0E3]'} rounded-[24px] ${isDefault ? 'p-8 flex flex-row gap-7' : 'px-6 py-8 flex flex-row gap-7'} min-h-[160px] ${isDefault ? 'transition-all duration-300 hover:shadow-lg hover:shadow-gray-400/25 hover:-translate-y-1' : ''} w-full`}
    >
      <div className="flex-1">
        <h3 className={`${isDefault ? 'text-[#14151A]' : 'text-[rgba(10,15,41,0.25)]'} font-bold text-xl leading-[28px] tracking-[-0.2px]`}>
          {title}
        </h3>
      </div>
      <div className="w-20 h-20 flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={80}
          height={80}
          className="object-cover"
        />
      </div>
    </div>
  );
};

// 연도별 단체 사진 갤러리.
// 한 배열이 화면의 한 줄이며, 줄당 개수에 맞춰 그리드 열이 잡힙니다. (2 · 2 · 2 · 3)
// 연도를 추가할 때는 맨 앞 줄에 넣고 아래 줄을 한 칸씩 밀어주세요.
const GALLERY_ROWS: { src: string; year: string }[][] = [
  [
    { src: '/images/team-2026.jpg', year: '2026' },
    { src: '/images/image_photo_10.jpg', year: '2025' },
  ],
  [
    { src: '/images/image_photo_09.jpg', year: '2024' },
    { src: '/images/image_photo_07.jpg', year: '2023' },
  ],
  [
    { src: '/images/image_photo_08.jpg', year: '2022' },
    { src: '/images/image_photo_06.jpg', year: '2021' },
  ],
  [
    { src: '/images/image_photo_05.jpg', year: '2020' },
    { src: '/images/image_photo_04.jpg', year: '2018' },
    { src: '/images/image_photo_03.jpg', year: '2016' },
  ],
];

// 줄당 개수별 그리드 클래스 (Tailwind가 클래스명을 정적으로 추출하므로 문자열을 조합하지 않습니다)
const ROW_GRID_CLASS: Record<number, string> = {
  2: 'grid grid-cols-1 sm:grid-cols-2 gap-6 w-full',
  3: 'grid grid-cols-2 sm:grid-cols-3 gap-6 w-full',
  4: 'grid grid-cols-2 sm:grid-cols-4 gap-6 w-full',
};

export default function EcoableEcoableness() {

  // Something to Do 데이터
  const todoItems = [
    "스스로, 다같이, 즐겁게 하자",
    "트렌드 변화에 깨어있어라",
    "자료를 뛰어넘는 직관이 필요하다",
    "컨설팅은 서비스다 진심이 말한다",
    "남의 문제가 아니라 우리의 문제다",
    "기업의 수준은 말단에서 드러난다",
    "전략과 디테일은 하나다",
    "냉소적 비판보다 격려하며 고친다",
    "보고는 짧게 요약만",
    "Dead line은 고객과의 신뢰다",
    "내 결과 보다는 우리의 결과로",
    "가정>>회사는 절대 진리다",
    "회의는 격렬하고 짧게, 뒷정리는 깔끔하게",
    "성선설을 믿는 조직 (모두가 잘, 알아서, 열심히 하고 있으니 의심하지 말라)"
  ];

  // Nothing to Do 데이터
  const notTodoItems = [
    "어제의 정답에 머물러 있지 말라",
    "새로운 시도를 주저하지 말라",
    "퇴근할 때 눈치보지 말라",
    "해외 출장 후 초콜릿 사오지 말라",
    "야근하지 말라",
    "꼭 필요한 야근인지 의심하자",
    "사유와 공부를 게을리 하지 말라",
    "내가 해도 될까?라고 의심하지 말라",
    "휴가때 일하지 말라",
    "감정을 얼굴로 표현하지 말라",
    "뒤에서 말하는 불만은 푸념이다 앞에서 욕하자",
    "회의실은 비판자유구역, 침묵하지 말라",
    "외근중인 직원에게 지금 어디에요? 뭐하고 있어요? 언제와요? 묻지 말라"
  ];

  return (
    <div className="bg-white container-1440">
      {/* ecoable스러한 ecoable人 섹션 - Figma 106-2588 */}
      <section className="spacing-section-large">
        <div className="flex flex-col xl:flex-row justify-stretch items-start gap-6 w-full">
          <div className="flex flex-col gap-6 w-full xl:w-full">
            <h2 className="text-[#14151A] text-[48px] font-semibold leading-[56px] tracking-[-1px] w-full">
              ecoable스러운 <br />
              ecoable人
            </h2>
          </div>
          <div className="flex flex-col justify-center gap-1 w-full xl:w-full max-w-[480px]">
            <p className="text-[rgba(15,19,36,0.6)] text-[16px] font-medium leading-[24px] tracking-[-0.2px] w-full">
              '에코에이블스러움'이라는 고유의 문화를 통해 고객에게는 신뢰성 있는 결과물과 서비스를, 구성원들에게는 새로운 조직문화와 행복한 일터를 제공하고자 합니다. 에코에이블컨설팅을 위해 고생했던, 그리고 고생하고 있는 ecoable人
            </p>
          </div>
        </div>
        
        <div className="pb-6"></div>
        
        {/* 이미지 그리드 - 줄당 2 · 2 · 2 · 3 */}
        <div className="w-full flex flex-col gap-6">
          {GALLERY_ROWS.map((row, rowIndex) => (
            <div key={rowIndex} className={ROW_GRID_CLASS[row.length] ?? ROW_GRID_CLASS[2]}>
              {row.map((photo) => (
                <div
                  key={photo.year}
                  className={`w-full ${row.length >= 3 ? 'aspect-[300/170]' : 'aspect-[628/310]'} rounded-3xl overflow-hidden relative group bg-gray-100`}
                >
                  <Image
                    src={photo.src}
                    alt={`${photo.year}년 단체 사진`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">{photo.year}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Something to Do / Nothing to Do 섹션 - 데스크톱에서 좌우 배치 */}
      <section className="spacing-section-large">
        <div className="flex flex-col lg:flex-row items-stretch gap-6">
          {/* Something to Do */}
          <div className="bg-[#F7F7F8] rounded-[24px] p-6 pb-10 flex-1">
            <div className="flex items-center gap-4 pb-4">
              <div className="w-12 h-12 flex justify-center items-center">
                <Image 
                  src="/images/something-to-do.png"
                  alt="Something to Do"
                  width={33}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-[#14151A] text-subtitle">
                Something to Do
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-2 mobile-list-compact">
              {todoItems.map((item, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  {/* U+FE0E(텍스트 표현) + 고정 폭: ✖와 글리프 폭이 달라도 본문 시작선이 어긋나지 않습니다 */}
                  <span className="text-[#399084] text-body flex-shrink-0 w-[1.25em]">{'✔︎'}</span>
                  <span className="text-[#14151A] text-body">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Nothing to Do */}
          <div className="bg-[#F7F7F8] rounded-[24px] p-6 pb-10 flex-1">
            {/* Something to Do 헤더와 동일한 구조·간격을 유지합니다 (좌우 대칭) */}
            <div className="flex items-center gap-4 pb-4">
              <div className="w-12 h-12 flex justify-center items-center">
                <Image
                  src="/images/nothing-to-do.png"
                  alt="Nothing to Do"
                  width={33}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-[#14151A] text-subtitle">
                Nothing to Do
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-2 mobile-list-compact">
              {notTodoItems.map((item, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  {/* U+FE0E(텍스트 표현)를 붙여야 이모지가 아닌 글리프로 렌더링되어 색이 적용됩니다 */}
                  <span className="text-[#E5484D] text-body flex-shrink-0 w-[1.25em]">{'✖︎'}</span>
                  <span className="text-[#14151A] text-body">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 복리후생 섹션 - Figma 106-2267 */}
      <section className="spacing-section-large">
        <div className="flex flex-col gap-6 mb-6 py-6">
          <div className="w-full">
            <div className="flex flex-col gap-1">
              <h2 className="text-[#000000] text-[24px] font-bold leading-[32px] tracking-[-0.3px]">
                Welfare-able
              </h2>
              <p className="text-[rgba(15,19,36,0.6)] text-[14px] font-normal leading-[20px] tracking-[-0.1px]">
                에코에이블에서 구성원을 위해 제공되고 있는 복지
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {welfareListData.map((welfare) => (
                <WelfareCard 
                  key={welfare.id}
                  title={welfare.title}
                  description={welfare.description}
                  image={welfare.image}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 위시리스트 섹션 - Figma 106-2289 */}
      <section className="spacing-section-large">
        <div className="flex flex-col gap-6 mb-6 py-6">
          <div className="w-full">
            <div className="flex flex-col gap-1">
              <h2 className="text-[#000000] text-[24px] font-bold leading-[32px] tracking-[-0.3px]">
                복지 버킷리스트
              </h2>
              <p className="text-[rgba(15,19,36,0.6)] text-[14px] font-normal leading-[20px] tracking-[-0.1px]">
                에코에이블 구성원이 바라지만 아직은 실현되지 않은 복지
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {bucketListData.map((bucket) => (
                <BucketCard 
                  key={bucket.id}
                  title={bucket.title}
                  status={bucket.status}
                  image={bucket.image}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 