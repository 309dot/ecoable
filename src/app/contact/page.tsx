'use client';

import React from 'react';
import { useState } from 'react';
import Navigation from "@/components/Navigation";
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

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

  const contactImages = Array.from({ length: 12 }, (_, i) => `image_photo_${i + 11}.jpg`);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Main Content - 1440x2506px as per Figma */}
      <main className="w-[1440px] mx-auto relative figma-layout">
        {/* Container - x:80, y:110, w:1280, h:2364 */}
        <div className="px-[80px] pt-[110px] pb-[32px]">
          <div className="w-[1280px]">
            
            {/* Title Section - 첫 번째 제목 영역 */}
            <div className="mb-[32px]">
              <h1 className="text-[64px] font-bold leading-[72px] tracking-[-1.7px] text-[#14151a] w-[896px]">
                ecoable스러운 사람들이 직접{'\n'}
                만들어가는 ecoable스러운공간
              </h1>
              
              {/* Description Section - positioned to the right */}
              <div className="absolute right-[80px] top-[142px] w-[360px]">
                <p className="text-xl font-bold leading-7 tracking-[-0.2px] text-[#0f1324]/60 mb-6">
                  안녕하세요. ecoable입니다!
                </p>
                <p className="text-base font-medium leading-6 tracking-[-0.2px] text-[#0f1324]/60">
                  Ecoable스러운 사람들이 함께 모여, 스스로 만들어가는 Ecoable스러운 공간. 서로의 다름을 존중하고, 새로움을 두려워하지 않으며, 오늘보다 더 나은 내일을 위해 함께 성장하는 우리의 특별한 터전입니다.
                </p>
              </div>
            </div>

            {/* Main Contact Image Section */}
            <div className="mb-[32px]">
              <div className="w-[1280px] h-[480px] relative rounded-[24px] overflow-hidden">
                <Image
                  src="/image_photo_11.jpg"
                  alt="Contact"
                  fill
                  className="object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Text overlay */}
                <div className="absolute inset-0 px-8 py-10 flex">
                  <div className="w-[604px]">
                    <h2 className="text-[30px] font-bold leading-9 tracking-[-0.5px] text-white mb-6">
                      LCA(전과정평가)
                    </h2>
                  </div>
                  <div className="w-[604px] ml-auto">
                    <p className="text-base font-medium leading-6 tracking-[-0.2px] text-white">
                      녹색제품, 친환경제품 생산은 우리 사회의 가치를 한 단계 높이는 기업과 소비자 간의 보이지 않는 약속입니다. 지속가능한 생산과 소비의 연결을 통해 제품을 통한 사회의 지속가능발전이 현실화 될 수 있습니다. 에코에이블컨설팅(주)는 전과정평가, 탄소발자국, 물발자국, Eco-efficiency 등의 평가 기법을 통해 제품의 지속가능성에 대한 진단을 하고 에코디자인을 통한 녹색제품 및 친환경인증 획득을 지원하고 있습니다. 또한 기업의 자발적인 전과정평가 수행을 지원하고 각 기업별로 특화된 결과물 활용을 돕기 위해 LCA TOOL LCABLE'을 지속적으로 개발 • 보급 중에 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Introduction Section */}
            <div className="mb-[24px]">
              <h2 className="text-[30px] font-bold leading-9 tracking-[-0.5px] text-[#14151a]">
                ecoable 사무실 소개
              </h2>
            </div>

            {/* Image Gallery - 4x3 grid layout as per Figma */}
            <div className="mb-[24px]">
              {/* First Row - 4 images */}
              <div className="flex gap-[24px] mb-[24px]">
                <div className="w-[302px] h-[278px] relative rounded-[24px] overflow-hidden">
                  <Image src="/image_photo_22.jpg" alt="Office Image" fill className="object-cover" />
                </div>
                <div className="w-[302px] h-[278px] relative rounded-[24px] overflow-hidden">
                  <Image src="/image_photo_21.jpg" alt="Office Image" fill className="object-cover" />
                </div>
                <div className="w-[302px] h-[278px] relative rounded-[24px] overflow-hidden">
                  <Image src="/image_photo_20.jpg" alt="Office Image" fill className="object-cover" />
                </div>
                <div className="w-[302px] h-[278px] relative rounded-[24px] overflow-hidden">
                  <Image src="/image_photo_19.jpg" alt="Office Image" fill className="object-cover" />
                </div>
              </div>

              {/* Second Row - 2 large images */}
              <div className="flex gap-[24px] mb-[24px]">
                <div className="w-[628px] h-[278px] relative rounded-[24px] overflow-hidden">
                  <Image src="/image_photo_18.jpg" alt="Office Image" fill className="object-cover" />
                </div>
                <div className="w-[628px] h-[278px] relative rounded-[24px] overflow-hidden">
                  <Image src="/image_photo_17.jpg" alt="Office Image" fill className="object-cover" />
                </div>
              </div>

              {/* Third Row - 2 large images */}
              <div className="flex gap-[24px] mb-[24px]">
                <div className="w-[628px] h-[278px] relative rounded-[24px] overflow-hidden">
                  <Image src="/image_photo_16.jpg" alt="Office Image" fill className="object-cover" />
                </div>
                <div className="w-[628px] h-[278px] relative rounded-[24px] overflow-hidden">
                  <Image src="/image_photo_15.jpg" alt="Office Image" fill className="object-cover" />
                </div>
              </div>

              {/* Fourth Row - 4 images */}
              <div className="flex gap-[24px]">
                <div className="w-[302px] h-[278px] relative rounded-[24px] overflow-hidden">
                  <Image src="/image_photo_14.jpg" alt="Office Image" fill className="object-cover" />
                </div>
                <div className="w-[302px] h-[278px] relative rounded-[24px] overflow-hidden">
                  <Image src="/image_photo_13.jpg" alt="Office Image" fill className="object-cover" />
                </div>
                <div className="w-[302px] h-[278px] relative rounded-[24px] overflow-hidden">
                  <Image src="/image_photo_12.jpg" alt="Office Image" fill className="object-cover" />
                </div>
                <div className="w-[302px] h-[278px] relative rounded-[24px] overflow-hidden">
                  <Image src="/image_photo_11.jpg" alt="Office Image" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="bg-white mb-[24px]">
              <div className="flex">
                <div className="w-[360px] pr-8">
                  <h2 className="text-[30px] font-bold leading-9 tracking-[-0.5px] text-[#14151a] mb-8">
                    찾아오시는 길
                  </h2>
                  <p className="text-base font-normal leading-6 tracking-[-0.2px] text-[#14151a]">
                    녹색제품, 친환경제품 생산은 우리 사회의 가치를 한 단계 높이는 기업과 소비자 간의 보이지 않는 약속입니다. 지속가능한 생산과 소비의 연결을 통해 제품을 통한 사회의 지속가능발전이 현실화 될 수 있습니다. 에코에이블컨설팅(주)는 전과정평가, 탄소발자국, 물발자국, Eco-efficiency 등의 평가 기법을 통해 제품의 지속가능성에 대한 진단을 하고 에코디자인을 통한 녹색제품 및 친환경인증 획득을 지원하고 있습니다. 또한 기업의 자발적인 전과정평가 수행을 지원하고 각 기업별로 특화된 결과물 활용을 돕기 위해 LCA TOOL LCABLE'을 지속적으로 개발 • 보급 중에 있습니다.
                  </p>
                </div>
                <div className="w-[896px] h-[360px] bg-[#e9eaec] rounded-[24px]">
                  {/* Map container - placeholder as per Figma */}
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="bg-white">
              <div className="flex">
                <div className="w-[360px] pr-8">
                  <h2 className="text-[30px] font-bold leading-9 tracking-[-0.5px] text-[#14151a] mb-8">
                    문의하기
                  </h2>
                  <p className="text-base font-normal leading-6 tracking-[-0.2px] text-[#14151a]">
                    녹색제품, 친환경제품 생산은 우리 사회의 가치를 한 단계 높이는 기업과 소비자 간의 보이지 않는 약속입니다. 지속가능한 생산과 소비의 연결을 통해 제품을 통한 사회의 지속가능발전이 현실화 될 수 있습니다. 에코에이블컨설팅(주)는 전과정평가, 탄소발자국, 물발자국, Eco-efficiency 등의 평가 기법을 통해 제품의 지속가능성에 대한 진단을 하고 에코디자인을 통한 녹색제품 및 친환경인증 획득을 지원하고 있습니다. 또한 기업의 자발적인 전과정평가 수행을 지원하고 각 기업별로 특화된 결과물 활용을 돕기 위해 LCA TOOL LCABLE'을 지속적으로 개발 • 보급 중에 있습니다.
                  </p>
                </div>
                
                {/* Contact Form */}
                <div className="w-[896px]">
                  {/* First Row */}
                  <div className="flex gap-4 mb-4">
                    <div className="w-[440px]">
                      <label className="block text-sm font-medium text-[#14151a] mb-2">
                        성함 <span className="text-[#e6483d]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="이름을 입력해주세요"
                        className="w-full h-[40px] px-4 border border-[#dee0e3] rounded-xl text-sm placeholder:text-[#0d1126]/40 focus:outline-none focus:ring-2 focus:ring-[#1a3a6f]"
                        required
                      />
                    </div>
                    <div className="w-[440px]">
                      <label className="block text-sm font-medium text-[#14151a] mb-2">
                        소속 및 직책 <span className="text-[#e6483d]">*</span>
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        placeholder="소속 및 직책을 입력해주세요"
                        className="w-full h-[40px] px-4 border border-[#dee0e3] rounded-xl text-sm placeholder:text-[#0d1126]/40 focus:outline-none focus:ring-2 focus:ring-[#1a3a6f]"
                        required
                      />
                    </div>
                  </div>

                  {/* Second Row */}
                  <div className="flex gap-4 mb-4">
                    <div className="w-[440px]">
                      <label className="block text-sm font-medium text-[#14151a] mb-2">
                        연락처 <span className="text-[#e6483d]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="연락처를 입력해주세요"
                        className="w-full h-[40px] px-4 border border-[#dee0e3] rounded-xl text-sm placeholder:text-[#0d1126]/40 focus:outline-none focus:ring-2 focus:ring-[#1a3a6f]"
                        required
                      />
                    </div>
                    <div className="w-[440px]">
                      <label className="block text-sm font-medium text-[#14151a] mb-2">
                        이메일 <span className="text-[#e6483d]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="이메일을 입력해주세요"
                        className="w-full h-[40px] px-4 border border-[#dee0e3] rounded-xl text-sm placeholder:text-[#0d1126]/40 focus:outline-none focus:ring-2 focus:ring-[#1a3a6f]"
                        required
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-[#14151a] mb-2">
                      문의 사항 <span className="text-[#e6483d]">*</span>
                    </label>
                    <textarea
                      name="inquiry"
                      value={formData.inquiry}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="문의 내용을 작성해주세요"
                      className="w-full px-4 py-3 border border-[#dee0e3] rounded-xl text-sm placeholder:text-[#0d1126]/40 focus:outline-none focus:ring-2 focus:ring-[#1a3a6f] resize-none"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    onSubmit={handleSubmit}
                    className="h-[48px] px-6 bg-gradient-to-r from-[#1a3a6f] to-[#399084] text-white font-medium text-base rounded-xl hover:opacity-90 transition-opacity"
                  >
                    문의하기
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 