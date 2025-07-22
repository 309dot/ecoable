import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white w-full" style={{
      maxWidth: '1440px',
      margin: '0 auto',
      wordBreak: 'keep-all',
      overflowWrap: 'break-word'
    }}>
      {/* Main Footer Section */}
      <div className="py-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16 w-full">
          {/* Left - Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center justify-center w-40 h-10 px-3">
              <Image
                src="/images/logo.png"
                alt="Ecoable Logo"
                width={142.27}
                height={28}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Right - Site Map */}
          <div className="flex flex-wrap gap-4 lg:gap-4">
            {/* Ecoable Column */}
            <div className="flex flex-col gap-2 w-[110px]">
              <h3 className="font-medium text-xs leading-4 text-[rgba(15,19,36,0.6)]">
                Ecoable
              </h3>
              <Link href="/ecoable" className="font-normal text-xs leading-4 text-[#14151a] hover:underline">
                ecoable 소개
              </Link>
              <Link href="/ecoable/culture" className="font-normal text-xs leading-4 text-[#14151a] hover:underline">
                ecoable스러움
              </Link>
            </div>

            {/* What we do Column */}
            <div className="flex flex-col gap-2 w-[110px]">
              <h3 className="font-medium text-xs leading-4 text-[rgba(15,19,36,0.6)]">
                What we do
              </h3>
              <Link href="/what-we-do?tab=policy" className="font-normal text-xs leading-4 text-[#14151a] hover:underline">
                전과정정책본부
              </Link>
              <Link href="/what-we-do?tab=circulation" className="font-normal text-xs leading-4 text-[#14151a] hover:underline">
                전과정순환본부
              </Link>
            </div>

            {/* Portfolio Column */}
            <div className="flex flex-col gap-2 w-[110px]">
              <h3 className="font-medium text-xs leading-4 text-[rgba(15,19,36,0.6)]">
                Portfolio
              </h3>
              <Link href="/portfolio?tab=lca" className="font-normal text-xs leading-4 text-[#14151a] hover:underline">
                LCA(전과정평가)
              </Link>
              <Link href="/portfolio?tab=epd" className="font-normal text-xs leading-4 text-[#14151a] hover:underline">
                EPD 인증대응
              </Link>
              <Link href="/portfolio?tab=circulation" className="font-normal text-xs leading-4 text-[#14151a] hover:underline">
                자원순환
              </Link>
              <Link href="/portfolio?tab=climate" className="font-normal text-xs leading-4 text-[#14151a] hover:underline">
                기후변화대응
              </Link>
              <Link href="/portfolio?tab=policy" className="font-normal text-xs leading-4 text-[#14151a] hover:underline">
                환경정책 및 보건환경
              </Link>
            </div>

            {/* Client Company Column */}
            <div className="flex flex-col gap-2 w-[110px]">
              <h3 className="font-medium text-xs leading-4 text-[rgba(15,19,36,0.6)]">
                Client Company
              </h3>
              <Link href="/client-company" className="font-normal text-xs leading-4 text-[#14151a] hover:underline">
                고객사 리스트
              </Link>
            </div>

            {/* Contact Column */}
            <div className="flex flex-col gap-2 w-[110px]">
              <h3 className="font-medium text-xs leading-4 text-[rgba(15,19,36,0.6)]">
                Contact
              </h3>
              <Link href="/contact" className="font-normal text-xs leading-4 text-[#14151a] hover:underline">
                ecoable 사무실 소개
              </Link>
              <Link href="/contact#directions" className="font-normal text-xs leading-4 text-[#14151a] hover:underline">
                찾아오시는 길
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="py-6">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 items-start lg:items-end justify-start w-full">
          <div className="flex flex-col gap-0">
            <p className="font-medium text-sm leading-5 text-[rgba(13,17,38,0.4)] tracking-[-0.1px]">
              04976 서울특별시 광진구 자양로 216 파인캐슬, 1층-2층
            </p>
            <p className="font-medium text-sm leading-5 text-[rgba(13,17,38,0.4)] tracking-[-0.1px]">
              T.02-6959-8885
            </p>
            <p className="font-medium text-sm leading-5 text-[rgba(13,17,38,0.4)] tracking-[-0.1px]">
              F.070-4327-7279
            </p>
            <p className="font-medium text-sm leading-5 text-[rgba(13,17,38,0.4)] tracking-[-0.1px]">
              © ecoable CO. 2016
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 