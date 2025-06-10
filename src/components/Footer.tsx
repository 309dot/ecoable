import React from 'react';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Newsletter Section */}
      <div className="bg-[#f7f7f8] py-10">
        <div className="max-w-[1200px] mx-auto px-[120px] flex items-center justify-between">
          {/* Left */}
          <div className="w-[450px]">
            <h3 className="text-xl font-medium text-[#14151a] mb-3 tracking-[-0.2px] leading-7">
              Subscribe to our newsletter
            </h3>
            <p className="text-base text-[#0f1324] text-opacity-60 leading-6 tracking-[-0.2px]">
              Get a summary of what we've shipped during the last month, behind the scenes updates, and team picks.
            </p>
          </div>
          
          {/* Right */}
          <div className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-60 h-10 px-3 text-sm bg-white border border-[#dee0e3] rounded-xl"
            />
            <button className="h-10 px-6 bg-[#14151a] text-white text-sm font-medium rounded-xl">
              Get early access
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-10">
        <div className="max-w-[1280px] mx-auto px-20 flex justify-between">
          {/* Left - Logo */}
          <div className="w-[160px] pt-2">
            <div className="relative w-[142px] h-[28px]">
              <Image
                src="/image_photo_01.jpg"
                alt="Ecoable Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right - Navigation Columns */}
          <div className="flex space-x-[204px]">
            {/* Ecoable Column */}
            <div className="w-[180px]">
              <h4 className="text-sm font-medium text-[#0f1324] text-opacity-60 mb-7 tracking-[-0.1px] leading-5">
                Ecoable
              </h4>
              <div className="space-y-2">
                <p className="text-sm font-medium text-[#14151a] leading-5 tracking-[-0.1px]">ecoable 소개</p>
                <p className="text-sm font-medium text-[#14151a] leading-5 tracking-[-0.1px]">ecoable스러움</p>
                <p className="text-sm font-medium text-[#14151a] leading-5 tracking-[-0.1px]">찾아오시는 길</p>
              </div>
            </div>

            {/* What we do Column */}
            <div className="w-[180px]">
              <h4 className="text-sm font-medium text-[#0f1324] text-opacity-60 mb-7 tracking-[-0.1px] leading-5">
                What we do
              </h4>
              <div className="space-y-2">
                <p className="text-sm font-medium text-[#14151a] leading-5 tracking-[-0.1px]">제품환경파트</p>
                <p className="text-sm font-medium text-[#14151a] leading-5 tracking-[-0.1px]">환경정책파트</p>
                <p className="text-sm font-medium text-[#14151a] leading-5 tracking-[-0.1px]">자원순환파트</p>
                <p className="text-sm font-medium text-[#14151a] leading-5 tracking-[-0.1px]">기후변화대응파트</p>
              </div>
            </div>

            {/* Portfolio Column */}
            <div className="w-[180px]">
              <h4 className="text-sm font-medium text-[#0f1324] text-opacity-60 mb-7 tracking-[-0.1px] leading-5">
                Portfolio
              </h4>
              <div className="space-y-2">
                <p className="text-sm font-medium text-[#14151a] leading-5 tracking-[-0.1px]">LCA(전과정평가)</p>
                <p className="text-sm font-medium text-[#14151a] leading-5 tracking-[-0.1px]">EPD 인증대응</p>
                <p className="text-sm font-medium text-[#14151a] leading-5 tracking-[-0.1px]">기후변화대응</p>
                <p className="text-sm font-medium text-[#14151a] leading-5 tracking-[-0.1px]">환경정책 및 보건환경</p>
                <p className="text-sm font-medium text-[#14151a] leading-5 tracking-[-0.1px]">고객사</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-[#f7f7f8] py-12">
        <div className="max-w-[1280px] mx-auto px-20 flex justify-between items-end">
          {/* Left - Company Info */}
          <div className="space-y-1">
            <p className="text-sm font-medium text-[#0d1126] text-opacity-40 leading-5 tracking-[-0.1px]">
              04976 서울특별시 광진구 자양로 216 파인캐슬, 201호
            </p>
            <p className="text-sm font-medium text-[#0d1126] text-opacity-40 leading-5 tracking-[-0.1px]">
              대표전화 | 02-6959-8885
            </p>
            <p className="text-sm font-medium text-[#0d1126] text-opacity-40 leading-5 tracking-[-0.1px]">
              팩스 | 070-4327-7279
            </p>
            <p className="text-sm font-medium text-[#0d1126] text-opacity-40 leading-5 tracking-[-0.1px]">
              이메일 | info@ppm.co.kr
            </p>
            <p className="text-sm font-medium text-[#0d1126] text-opacity-40 leading-5 tracking-[-0.1px]">
              © ecoable CO. 2016
            </p>
          </div>

          {/* Right - Social Icons */}
          <div className="flex space-x-2">
            <div className="w-6 h-6 bg-gray-400 rounded"></div>
            <div className="w-6 h-6 bg-gray-400 rounded"></div>
            <div className="w-6 h-6 bg-gray-400 rounded"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}; 