import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      {/* Top Section - Desktop Only */}
      <div className="hidden xl:flex flex-col justify-center items-center w-full gap-16 py-10">
        <div className="flex justify-between items-start w-full max-w-[1440px] gap-10">
          {/* Logo Section */}
          <div className="flex items-center w-full">
            <div className="flex justify-center items-center w-40 h-10 px-3">
              <div className="relative w-[142.27px] h-7">
                <Image
                  src="/images/logo.png"
                  alt="Ecoable Logo"
                  width={142}
                  height={28}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-end items-center gap-6">
            <div className="flex gap-6">
              {/* Ecoable Column */}
              <div className="flex flex-col gap-2">
                <div className="text-[rgba(15,19,36,0.6)] text-sm font-medium leading-[1.43] tracking-[-0.71%] w-[180px]">
                  Ecoable
                </div>
                <Link href="/ecoable" className="text-[#14151A] text-sm font-medium leading-[1.43] tracking-[-0.71%] w-[180px] hover:opacity-70">
                  ecoable 소개
                </Link>
                <Link href="/ecoable" className="text-[#14151A] text-sm font-medium leading-[1.43] tracking-[-0.71%] w-[180px] hover:opacity-70">
                  ecoable스러움
                </Link>
              </div>

              {/* What we do Column */}
              <div className="flex flex-col gap-2">
                <div className="text-[rgba(15,19,36,0.6)] text-sm font-medium leading-[1.43] tracking-[-0.71%] w-[180px]">
                  What we do
                </div>
                <Link href="/what-we-do" className="text-[#14151A] text-sm font-medium leading-[1.43] tracking-[-0.71%] w-[180px] hover:opacity-70">
                  전과정정책본부
                </Link>
                <Link href="/what-we-do" className="text-[#14151A] text-sm font-medium leading-[1.43] tracking-[-0.71%] w-[180px] hover:opacity-70">
                  전과정순환본부
                </Link>
              </div>

              {/* Portfolio Column */}
              <div className="flex flex-col gap-2">
                <div className="text-[rgba(15,19,36,0.6)] text-sm font-medium leading-[1.43] tracking-[-0.71%] w-[180px]">
                  Portfolio
                </div>
                <Link href="/portfolio" className="text-[#14151A] text-sm font-medium leading-[1.43] tracking-[-0.71%] w-[180px] hover:opacity-70">
                  LCA(전과정평가)
                </Link>
                <Link href="/portfolio" className="text-[#14151A] text-sm font-medium leading-[1.43] tracking-[-0.71%] w-[180px] hover:opacity-70">
                  EPD 인증대응
                </Link>
                <Link href="/portfolio" className="text-[#14151A] text-sm font-medium leading-[1.43] tracking-[-0.71%] w-[180px] hover:opacity-70">
                  기후변화대응
                </Link>
                <Link href="/portfolio" className="text-[#14151A] text-sm font-medium leading-[1.43] tracking-[-0.71%] w-[180px] hover:opacity-70">
                  환경정책 및 보건환경
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Always Visible */}
      <div className="flex flex-col justify-center items-center w-full gap-6 xl:gap-16 py-6">
        <div className="flex flex-col xl:flex-row justify-between xl:items-end items-start w-full max-w-[1440px] gap-6 xl:gap-10 px-3 sm:px-4 md:px-6 lg:px-8">
          
          {/* Mobile/Tablet Logo - Only visible on small screens */}
          <div className="xl:hidden flex justify-start items-center w-40 h-10">
            <div className="relative w-[142.27px] h-7">
              <Image
                src="/images/logo.png"
                alt="Ecoable Logo"
                width={142}
                height={28}
                className="object-contain"
              />
            </div>
          </div>

          {/* Company Info */}
          <div className="flex justify-start items-center gap-6">
            <div className="flex flex-col justify-start items-start text-left">
              <div className="text-[rgba(13,17,38,0.4)] text-sm font-medium leading-[1.43] tracking-[-0.71%] mb-1">
                04976 서울특별시 광진구 자양로 216 파인캐슬, 1층-2층
              </div>
              <div className="text-[rgba(13,17,38,0.4)] text-sm font-medium leading-[1.43] tracking-[-0.71%] mb-1">
                대표전화 | 02-6959-8885
              </div>
              <div className="text-[rgba(13,17,38,0.4)] text-sm font-medium leading-[1.43] tracking-[-0.71%] mb-1">
                팩스 | 070-4327-7279
              </div>
              <div className="text-[rgba(13,17,38,0.4)] text-sm font-medium leading-[1.43] tracking-[-0.71%]">
                ©_ecoable CO. 2016
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 