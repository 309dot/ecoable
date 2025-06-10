'use client';

import { useState } from 'react';
import Navigation from "@/components/Navigation";
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    phone: '',
    email: '',
    inquiry: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white font-pretendard min-h-screen">
      {/* Navigation */}
      <div className="relative z-10">
        <Navigation />
      </div>

      {/* Main Content */}
      <main className="px-4 md:px-8 lg:px-20 xl:px-80 py-8 md:py-12">
        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-[#14151a] font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-[-1.7px] mb-6">
            Contact
          </h1>
          <p className="text-[#0f1324]/60 font-medium text-base md:text-lg leading-relaxed tracking-[-0.2px] max-w-2xl">
            에코에이블컨설팅㈜와 함께하고 싶은 프로젝트가 있으시거나 궁금한 점이 있으시면 언제든지 연락주세요. 전문 컨설턴트가 신속하고 정확한 답변을 드리겠습니다.
          </p>
        </div>

        {/* Office Introduction Section */}
        <div className="mb-16 md:mb-20">
          <div className="bg-[#f7f7f8] rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-[#14151a] font-bold text-xl md:text-2xl lg:text-3xl leading-tight tracking-[-0.5px] mb-4 md:mb-6">
                  오피스 소개
                </h2>
                <p className="text-[#0f1324]/80 font-medium text-sm md:text-base leading-relaxed tracking-[-0.2px] mb-6">
                  지속가능한 미래를 위한 혁신적인 환경 솔루션을 제공하는 에코에이블컨설팅㈜의 사무공간을 소개합니다. 친환경적이고 효율적인 업무환경에서 최고의 서비스를 제공하고 있습니다.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden">
                  <Image
                    src="/jpg/image_photo_02.jpg"
                    alt="에코에이블컨설팅 오피스"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-[#14151a] font-bold text-xl md:text-2xl mb-6 md:mb-8">
            오피스 갤러리
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[3, 4, 5, 6, 7, 8].map((num) => (
              <div key={num} className="aspect-square rounded-xl overflow-hidden">
                <Image
                  src={`/jpg/image_photo_${num.toString().padStart(2, '0')}.jpg`}
                  alt={`오피스 이미지 ${num}`}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Location Section */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-[#14151a] font-bold text-xl md:text-2xl mb-6 md:mb-8">
            찾아오시는 길
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-bold text-[#14151a] mb-2">주소</h4>
                  <p className="text-[#0f1324]/80">서울특별시 강남구 테헤란로 123, 4층</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#14151a] mb-2">대표전화</h4>
                  <p className="text-[#0f1324]/80">02-1234-5678</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#14151a] mb-2">팩스</h4>
                  <p className="text-[#0f1324]/80">02-1234-5679</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#14151a] mb-2">이메일</h4>
                  <p className="text-[#0f1324]/80">info@ecoable.co.kr</p>
                </div>
              </div>
            </div>
            <div>
              <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
                <p className="text-gray-500">지도 영역 (구글 맵 또는 네이버 맵 연동)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-[#14151a] font-bold text-xl md:text-2xl mb-6 md:mb-8">
            문의하기
          </h3>
          
          <form onSubmit={handleSubmit} className="max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[#14151a] font-medium text-sm mb-2">
                  성함 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="성함을 입력해주세요"
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#14151a]"
                  required
                />
              </div>
              <div>
                <label className="block text-[#14151a] font-medium text-sm mb-2">
                  소속 및 직책 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  placeholder="소속 및 직책을 입력해주세요"
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#14151a]"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[#14151a] font-medium text-sm mb-2">
                  연락처 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="연락처를 입력해주세요"
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#14151a]"
                  required
                />
              </div>
              <div>
                <label className="block text-[#14151a] font-medium text-sm mb-2">
                  이메일 <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="이메일을 입력해주세요"
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#14151a]"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-[#14151a] font-medium text-sm mb-2">
                문의내용 <span className="text-red-500">*</span>
              </label>
              <textarea
                name="inquiry"
                value={formData.inquiry}
                onChange={handleInputChange}
                placeholder="문의내용을 입력해주세요"
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-[#14151a]"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-[#14151a] text-white font-medium px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              문의 보내기
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#f7f7f8] py-12 md:py-16">
        <div className="px-4 md:px-8 lg:px-20 xl:px-80">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-[#14151a] mb-4">에코에이블컨설팅㈜</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>대표이사: 김성준</p>
                <p>사업자등록번호: 123-45-67890</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-[#14151a] mb-4">연락처</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>전화: 02-1234-5678</p>
                <p>팩스: 02-1234-5679</p>
                <p>이메일: info@ecoable.co.kr</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-[#14151a] mb-4">주소</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>서울특별시 강남구 테헤란로 123, 4층</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-[#14151a] mb-4">소셜 미디어</h4>
              <div className="flex gap-3">
                <Image src="/icons/facebook-circle-fill.svg" alt="Facebook" width={24} height={24} />
                <Image src="/icons/instagram-fill.svg" alt="Instagram" width={24} height={24} />
                <Image src="/icons/twitter-fill.svg" alt="Twitter" width={24} height={24} />
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-300 pt-8">
            <p className="text-sm text-gray-600 text-center">
              © 2024 에코에이블컨설팅㈜. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 