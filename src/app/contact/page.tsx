'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Toast from '@/components/Toast';

function KakaoMapEmbed() {
  useEffect(() => {
    if (!document.getElementById('daum-roughmap-script')) {
      const script = document.createElement('script');
      script.id = 'daum-roughmap-script';
      script.src = 'https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js';
      script.charset = 'UTF-8';
      document.body.appendChild(script);
      script.onload = () => {
        const runScript = document.createElement('script');
        runScript.innerHTML = `new daum.roughmap.Lander({"timestamp":"1749715413709","key":"3f9yu4xsqg2","mapWidth":"640","mapHeight":"360"}).render();`;
        document.body.appendChild(runScript);
      };
    }
  }, []);
  return <div id="daumRoughmapContainer1749715413709" className="root_daum_roughmap root_daum_roughmap_landing w-full h-full" />;
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    contact: '',
    email: '',
    inquiry: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({
    message: '',
    type: 'success' as 'success' | 'error',
    isVisible: false
  });

  // 크롬 자동완성 스타일 방지용 공통 스타일
  const inputStyle = {
    backgroundColor: 'white',
    color: '#14151A',
    WebkitTextFillColor: '#14151A',
    WebkitBoxShadow: '0 0 0px 1000px white inset',
    transition: 'background-color 5000s ease-in-out 0s'
  };

  // 이미지 갤러리 데이터
  const images = [
    '/images/contact/image_photo_22.jpg',
    '/images/contact/image_photo_21.jpg',
    '/images/contact/image_photo_20.jpg',
    '/images/contact/image_photo_19.jpg',
    '/images/contact/image_photo_18.jpg',
    '/images/contact/image_photo_17.jpg',
    '/images/contact/image_photo_16.jpg',
    '/images/contact/image_photo_15.jpg',
    '/images/contact/image_photo_14.jpg',
    '/images/contact/image_photo_13.jpg',
    '/images/contact/image_photo_12.jpg',
    '/images/contact/image_photo_11.jpg',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        if (result.useMailto && result.mailtoLink) {
          // mailto 링크를 사용하는 경우
          window.location.href = result.mailtoLink;
          setToast({
            message: '문의전송이 완료되었습니다.',
            type: 'success',
            isVisible: true
          });
        } else {
          // 정상적으로 서버에서 전송된 경우
          setToast({
            message: '문의전송이 완료되었습니다.',
            type: 'success',
            isVisible: true
          });
        }
        
        // 폼 리셋
        setFormData({
          name: '',
          organization: '',
          contact: '',
          email: '',
          inquiry: ''
        });
      } else {
        setToast({
          message: result.error || '전송 중 오류가 발생했습니다.',
          type: 'error',
          isVisible: true
        });
      }
    } catch (error) {
      console.error('Submit error:', error);
      setToast({
        message: '전송 중 네트워크 오류가 발생했습니다.',
        type: 'error',
        isVisible: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  return (
    <div className="min-h-screen" style={{
      maxWidth: '1440px',
      margin: '0 auto', 
      wordBreak: 'keep-all',
      overflowWrap: 'break-word'
    }}>
      {/* Navigation */}
      <Navigation theme="light" />

      <div className="nav-spacing">
        {/* Hero Section */}  
        <div className="w-full py-8">
          <div className="w-full container-1440 mx-auto">
            <div className="flex flex-col xl:flex-row justify-stretch items-start gap-6 w-full">
              {/* Left - Title */}
              <div className="flex flex-col gap-6 w-full xl:w-full">
                <h1 className="text-[#14151A] text-[30px] md:text-[36px] lg:text-[42px] font-semibold leading-[1.17] tracking-[-2.08%] w-full">
                  ecoable스러운 사람들이 직접 <br />
                  만들어가는 ecoable스러운공간
                </h1>
              </div>
              
              {/* Right - Description */}
              <div className="flex flex-col justify-center gap-4 w-full xl:w-full">
                <p className="text-[rgba(15,19,36,0.6)] text-base font-medium leading-[1.5] tracking-[-1.25%] w-full">
                  Ecoable스러운 사람들이 함께 모여, 스스로 만들어가는 Ecoable스러운 공간. 서로의 다름을 존중하고, 새로움을 두려워하지 않으며, 오늘보다 더 나은 내일을 위해 함께 성장하는 우리의 특별한 터전입니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Office Introduction Section */}
        <div className="w-full">
          <div className="w-full container-1440 mx-auto py-6">
            <div className="flex flex-col gap-6 pb-6">
              <div className="flex flex-col gap-2 w-full">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#14151A] leading-[1.2em] tracking-[-1.67%]">
                  ecoable 사무실 소개
                </h2>
              </div>
              <div className="w-full">
                {/* Image Gallery - 반응형 그리드로 변경 */}
                <div className="flex flex-col gap-6">
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
                    <div 
                      className="h-[200px] md:h-[240px] lg:h-[278px] bg-gray-100 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <Image
                        src={images[0]}
                        alt="사무실 전경 1"
                        width={500}
                        height={278}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div 
                      className="h-[200px] md:h-[240px] lg:h-[278px] bg-gray-100 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <Image
                        src={images[1]}
                        alt="사무실 전경 2"
                        width={500}
                        height={278}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div 
                      className="h-[200px] md:h-[240px] lg:h-[278px] bg-gray-100 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <Image
                        src={images[2]}
                        alt="사무실 전경 3"
                        width={500}
                        height={278}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div 
                      className="h-[200px] md:h-[240px] lg:h-[278px] bg-gray-100 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <Image
                        src={images[3]}
                        alt="사무실 전경 4"
                        width={500}
                        height={278}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div 
                      className="h-[200px] md:h-[240px] lg:h-[278px] bg-gray-100 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <Image
                        src={images[4]}
                        alt="사무실 전경 5"
                        width={500}
                        height={278}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div 
                      className="h-[200px] md:h-[240px] lg:h-[278px] bg-gray-100 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <Image
                        src={images[5]}
                        alt="사무실 전경 6"
                        width={500}
                        height={278}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div 
                      className="h-[200px] md:h-[240px] lg:h-[278px] bg-gray-100 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <Image
                        src={images[6]}
                        alt="사무실 전경 7"
                        width={500}
                        height={278}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div 
                      className="h-[200px] md:h-[240px] lg:h-[278px] bg-gray-100 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <Image
                        src={images[7]}
                        alt="사무실 전경 8"
                        width={500}
                        height={278}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Row 4 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
                    <div 
                      className="h-[200px] md:h-[240px] lg:h-[278px] bg-gray-100 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <Image
                        src={images[8]}
                        alt="사무실 전경 9"
                        width={500}
                        height={278}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div 
                      className="h-[200px] md:h-[240px] lg:h-[278px] bg-gray-100 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <Image
                        src={images[9]}
                        alt="사무실 전경 10"
                        width={500}
                        height={278}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div 
                      className="h-[200px] md:h-[240px] lg:h-[278px] bg-gray-100 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <Image
                        src={images[10]}
                        alt="사무실 전경 11"
                        width={500}
                        height={278}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div 
                      className="h-[200px] md:h-[240px] lg:h-[278px] bg-gray-100 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <Image
                        src={images[11]}
                        alt="사무실 전경 12"
                        width={500}
                        height={278}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Directions Section */}
        <div className="w-full">
          {/* 앵커 포인트 - 네비게이션보다 2rem 아래 위치 */}
          <div id="directions" style={{ scrollMarginTop: 'calc(88px + 2rem)' }}></div>
          <div className="w-full container-1440 mx-auto py-6">
            <div className="flex flex-col xl:flex-row gap-6 py-6">
              <div className="w-full xl:w-[360px]">
                <h2 className="text-[#14151A] font-bold text-xl md:text-2xl lg:text-[30px] leading-[1.2] mb-2">
                  찾아오시는 길
                </h2>
              </div>
              <div className="flex-1">
                <div className="w-full h-[250px] md:h-[350px] lg:h-[400px] bg-[#E9EAEC] rounded-2xl md:rounded-[24px] flex items-center justify-center p-0 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d790.8434821921609!2d127.0863286302409!3d37.54625306778347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca4e6bbc065b7%3A0x81939160157f2033!2z7JeQ7L2U7JeQ7J2067iU7Luo7ISk7YyFKOyjvCk!5e0!3m2!1sko!2skr!4v1749716780971!5m2!1sko!2skr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full">
          <div className="w-full container-1440 mx-auto py-6">
            <div className="flex flex-col xl:flex-row gap-6 py-6">
              <div className="w-full xl:w-[360px]">
                <h2 className="text-[#14151A] font-bold text-[30px] leading-[1.2] mb-2">
                  문의하기
                </h2>
              </div>
              <div className="flex-1">
                <div className="rounded-[24px]">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1">
                        <label className="block text-[#14151A] font-medium text-sm mb-2">
                          성함
                        </label>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[rgba(13,17,38,0.4)]">
                            <Image
                              src="/images/common/lead-icon-6.svg"
                              alt="Person Icon"
                              width={20}
                              height={20}
                            />
                          </div>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="이름을 입력해주세요"
                            className="w-full pl-11 pr-3 py-3 border border-[#DEE0E3] rounded-[12px] text-sm text-[#14151A] placeholder:text-[rgba(13,17,38,0.4)]"
                            style={inputStyle}
                            required
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <label className="block text-[#14151A] font-medium text-sm mb-2">
                          소속 및 직책
                        </label>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[rgba(13,17,38,0.4)]">
                            <Image
                              src="/images/common/lead-icon-7.svg"
                              alt="Organization Icon"
                              width={20}
                              height={20}
                            />
                          </div>
                          <input
                            type="text"
                            name="organization"
                            value={formData.organization}
                            onChange={handleInputChange}
                            placeholder="소속 및 직책을 입력해주세요"
                            className="w-full pl-11 pr-3 py-3 border border-[#DEE0E3] rounded-[12px] text-sm text-[#14151A] placeholder:text-[rgba(13,17,38,0.4)]"
                            style={inputStyle}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1">
                        <label className="block text-[#14151A] font-medium text-sm mb-2">
                          연락처
                        </label>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[rgba(13,17,38,0.4)]">
                            <Image
                              src="/images/common/lead-icon-8.svg"
                              alt="Phone Icon"
                              width={20}
                              height={20}
                            />
                          </div>
                          <input
                            type="tel"
                            name="contact"
                            value={formData.contact}
                            onChange={handleInputChange}
                            placeholder="연락처를 입력해주세요"
                            className="w-full pl-11 pr-3 py-3 border border-[#DEE0E3] rounded-[12px] text-sm text-[#14151A] placeholder:text-[rgba(13,17,38,0.4)]"
                            style={inputStyle}
                            required
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <label className="block text-[#14151A] font-medium text-sm mb-2">
                          이메일
                        </label>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[rgba(13,17,38,0.4)]">
                            <Image
                              src="/images/common/lead-icon-9.svg"
                              alt="Email Icon"
                              width={20}
                              height={20}
                            />
                          </div>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="이메일을 입력해주세요"
                            className="w-full pl-11 pr-3 py-3 border border-[#DEE0E3] rounded-[12px] text-sm text-[#14151A] placeholder:text-[rgba(13,17,38,0.4)]"
                            style={inputStyle}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[#14151A] font-medium text-sm mb-2">
                        문의사항
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-3 w-5 h-5 text-[rgba(13,17,38,0.4)]">
                          <Image
                            src="/images/common/lead-icon-10.svg"
                            alt="Message Icon"
                            width={20}
                            height={20}
                          />
                        </div>
                        <textarea
                          name="inquiry"
                          value={formData.inquiry}
                          onChange={handleInputChange}
                          placeholder="문의사항을 입력해주세요"
                          rows={6}
                          className="w-full pl-11 pr-3 py-3 border border-[#DEE0E3] rounded-[12px] text-sm text-[#14151A] placeholder:text-[rgba(13,17,38,0.4)] resize-none"
                          style={inputStyle}
                          required
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-gradient-to-r from-[#1B376F] to-[#3A9284] text-white font-medium py-3 rounded-[12px] transition-all duration-300 ${
                        isSubmitting 
                          ? 'opacity-70 cursor-not-allowed' 
                          : 'hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5'
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          전송 중...
                        </div>
                      ) : (
                        '문의 보내기'
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={closeToast}
      />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}