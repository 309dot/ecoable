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
    title: "매 3년마다 2주 여행 지원",
    description: "여행 좀 길게가자\n*별도 10일 휴가 + 100만원",
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
    title: "주거안정자금 2000만원 무이자 대출",
    description: "쥐꼬리지만 괜찮아 대출",
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
    image: "/images/bucket-emergency-fund.webp"
  },
  {
    id: 8,
    title: "자가사옥",
    status: "default" as const,
    image: "/images/bucket-building.webp"
  },
  {
    id: 9,
    title: "한달에 두 번 재택근무",
    status: "default" as const,
    image: "/images/bucket-remote.webp"
  },
  {
    id: 10,
    title: "도서비 지원",
    status: "default" as const,
    image: "/images/bucket-books.webp"
  },
  {
    id: 11,
    title: "심리상담 지원",
    status: "default" as const,
    image: "/images/bucket-counseling.webp"
  },
  // Done 상태
  {
    id: 12,
    title: "가족이 편하게 놀러올 수 있는 회사",
    status: "done" as const,
    image: "/images/bucket-success.webp"
  },
  {
    id: 13,
    title: "커피 한잔의 여유가 있는 회사",
    status: "done" as const,
    image: "/images/bucket-success.webp"
  },
  {
    id: 14,
    title: "자가사무실",
    status: "done" as const,
    image: "/images/bucket-success.webp"
  },
  {
    id: 15,
    title: "묻지마 비상금\n지원제도",
    status: "done" as const,
    image: "/images/bucket-success.webp"
  },
  {
    id: 16,
    title: "장기근속시 휴가 보내주는 회사",
    status: "done" as const,
    image: "/images/bucket-success.webp"
  },
  {
    id: 17,
    title: "근무시간에 누워서 편하게 잘 수 있는 회사",
    status: "done" as const,
    image: "/images/bucket-success.webp"
  },
  {
    id: 18,
    title: "필요 시 아기와 반려동물과 함께 출근할 수 있는 회사",
    status: "done" as const,
    image: "/images/bucket-success.webp"
  }
];

// Welfare List Card Component (list 컴포넌트)
const WelfareCard = ({ title, description, image }: { title: string; description: string; image: string }) => {
  return (
    <div className="bg-white border border-[#DEE0E3] rounded-[24px] p-8 flex flex-col gap-10 transition-all duration-300 hover:shadow-lg hover:shadow-gray-400/25 hover:-translate-y-1 w-full">
      <div className="flex-1">
        <h3 className="text-[#14151A] font-bold text-xl leading-[1.4] mb-4">{title}</h3>
        <p className="text-[#14151A] text-lg leading-[1.444] h-12 overflow-hidden">{description}</p>
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

// Bucket List Card Component (list_bucket 컴포넌트)
const BucketCard = ({ title, status, image }: { title: string; status: 'default' | 'done'; image: string }) => {
  const isDefault = status === 'default';
  
  return (
    <div 
      className={`${isDefault ? 'bg-white border border-[#DEE0E3]' : 'bg-[#F7F7F8] border border-[#DEE0E3]'} rounded-[24px] p-8 flex ${isDefault ? 'flex-row gap-7' : 'relative'} min-h-[160px] ${isDefault ? 'transition-all duration-300 hover:shadow-lg hover:shadow-gray-400/25 hover:-translate-y-1' : ''} w-full`}
    >
      <div className="flex-1">
        <h3 className={`${isDefault ? 'text-[#14151A]' : 'text-[rgba(10,15,41,0.25)]'} font-bold text-xl leading-[1.4]`}>
          {title}
        </h3>
      </div>
      {isDefault ? (
        <div className="w-20 h-20 flex items-center justify-center">
          <Image
            src={image}
            alt={title}
            width={80}
            height={80}
            className="object-cover"
          />
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={image}
            alt={title}
            width={120}
            height={120}
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default function EcoableEcoableness() {
  // 이미지와 연도 매핑
  const imageYears = {
    'team-photo-10': '2025',
    'team-photo-09': '2024', 
    'team-photo-08': '2023',
    'team-photo-07': '2022',
    'team-photo-06': '2021',
    'team-photo-05': '2020',
    'team-photo-04': '2018',
    'team-photo-03': '2016'
  } as const;

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
              {/* ecoable스러운 ecoable人 섹션 */}
        <section className="spacing-section-large">
        <div className="flex flex-col xl:flex-row justify-stretch items-start gap-6 w-full">
          <div className="flex flex-col gap-6 w-full xl:w-full">
            <h2 className="text-[#14151A] text-[30px] md:text-[36px] lg:text-[42px] font-semibold leading-[1.17] tracking-[-2.08%] w-full">
              ecoable스러운 <br />
              ecoable人
            </h2>
          </div>
          <div className="flex flex-col justify-center gap-4 w-full xl:w-full">
            <p className="text-[rgba(15,19,36,0.6)] text-sm md:text-base font-medium leading-[1.5] tracking-[-1.25%] w-full">
              '에코에이블스러움'이라는 고유의 문화를 통해 고객에게는 신뢰성 있는 결과물과 서비스를, 구성원들에게는 새로운 조직문화와 행복한 일터를 제공하고자 합니다.
            </p>
          </div>
        </div>
        
        <div className="pb-10"></div>
        
        <div className="w-full flex flex-col gap-3">
          {/* 위쪽 2x2 그리드 - 반응형 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-3">
            <div className="w-full h-48 rounded-[12px] overflow-hidden relative group">
              <Image
                src="/images/team-photo-10.png"
                alt="팀 사진 10"
                width={300}
                height={192}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">{imageYears['team-photo-10']}</span>
              </div>
            </div>
            <div className="w-full h-48 rounded-[12px] overflow-hidden relative group">
              <Image
                src="/images/team-photo-09.png"
                alt="팀 사진 9"
                width={300}
                height={192}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">{imageYears['team-photo-09']}</span>
              </div>
            </div>
            <div className="w-full h-48 rounded-[12px] overflow-hidden relative group">
              <Image
                src="/images/team-photo-08.png"
                alt="팀 사진 8"
                width={300}
                height={192}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">{imageYears['team-photo-08']}</span>
              </div>
            </div>
            <div className="w-full h-48 rounded-[12px] overflow-hidden relative group">
              <Image
                src="/images/team-photo-07.png"
                alt="팀 사진 7"
                width={300}
                height={192}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">{imageYears['team-photo-07']}</span>
              </div>
            </div>
          </div>
          
          {/* 아래쪽 1x4 그리드 - 반응형 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
            <div className="w-full h-48 rounded-[12px] overflow-hidden relative group">
              <Image
                src="/images/team-photo-06.png"
                alt="팀 사진 6"
                width={300}
                height={192}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">{imageYears['team-photo-06']}</span>
              </div>
            </div>
            <div className="w-full h-48 rounded-[12px] overflow-hidden relative group">
              <Image
                src="/images/team-photo-05.png"
                alt="팀 사진 5"
                width={300}
                height={192}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">{imageYears['team-photo-05']}</span>
              </div>
            </div>
            <div className="w-full h-48 rounded-[12px] overflow-hidden relative group">
              <Image
                src="/images/team-photo-04.png"
                alt="팀 사진 4"
                width={300}
                height={192}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">{imageYears['team-photo-04']}</span>
              </div>
            </div>
            <div className="w-full h-48 rounded-[12px] overflow-hidden relative group">
              <Image
                src="/images/team-photo-03.png"
                alt="팀 사진 3"
                width={300}
                height={192}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">{imageYears['team-photo-03']}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Something to Do / Nothing to Do 섹션 - 반응형 */}
      <section className="spacing-section-large">
        <div className="flex flex-col gap-6">
          {/* Something to Do */}
          <div className="bg-[#F7F7F8] rounded-[24px] p-6 pb-10 flex-1">
            <div className="flex items-center gap-4 pb-4">
              <div className="w-12 h-12 flex justify-center items-center">
                <Image 
                  src="/images/something-to-do.png"
                  alt="Something to Do"
                  width={33}
                  height={48}
                  className="object-cover"
                />
              </div>
              <h3 className="text-[#14151A] text-subtitle">
                Something to Do
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-2 mobile-list-compact">
              {todoItems.map((item, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <span className="text-[#14151A] text-body flex-shrink-0">✔️ </span>
                  <span className="text-[#14151A] text-body">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Nothing to Do */}
          <div className="bg-[#F7F7F8] rounded-[24px] p-6 pb-10 flex-1">
            <div className="flex justify-between items-center pb-1">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex justify-center items-center">
                  <Image 
                    src="/images/nothing-to-do.png"
                    alt="Nothing to Do"
                    width={33}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-[#14151A] text-subtitle">
                  Nothing to Do
                </h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-2 mobile-list-compact">
              {notTodoItems.map((item, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <span className="text-[#14151A] text-body flex-shrink-0">✖️ </span>
                  <span className="text-[#14151A] text-body">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 복리후생 섹션 */}
      <section className="spacing-section-large">
        <div className="flex flex-col gap-6 mb-6 py-6">
          <div className="w-full">
            <h2 className="text-[#14151A] text-title mb-2">
              복리후생
            </h2>
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

      {/* 위시리스트 섹션 */}
      <section className="spacing-section-large">
        <div className="flex flex-col gap-6 mb-6 py-6">
          <div className="w-full">
            <h2 className="text-[#14151A] text-title mb-2">
              위시리스트
            </h2>
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