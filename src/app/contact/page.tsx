'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useState } from 'react';
import Toast from '@/components/Toast';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    contact: '',
    email: '',
    inquiry: ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({
    message: '',
    type: 'success' as 'success' | 'error',
    isVisible: false
  });

  // 이미지 갤러리 데이터
  const galleryImages = [
    { src: '/contact/office_photo_22.jpg', alt: '사무실 전경 1' },
    { src: '/contact/office_photo_21.jpg', alt: '사무실 전경 2' },
    { src: '/contact/office_photo_20.jpg', alt: '사무실 전경 3' },
    { src: '/contact/office_photo_19.jpg', alt: '사무실 전경 4' },
    { src: '/contact/office_photo_18.jpg', alt: '사무실 전경 5' },
    { src: '/contact/office_photo_17.jpg', alt: '사무실 전경 6' },
    { src: '/contact/office_photo_16.jpg', alt: '사무실 전경 7' },
    { src: '/contact/office_photo_15.jpg', alt: '사무실 전경 8' },
    { src: '/contact/office_photo_14.jpg', alt: '사무실 전경 9' },
    { src: '/contact/office_photo_13.jpg', alt: '사무실 전경 10' },
    { src: '/contact/office_photo_12.jpg', alt: '사무실 전경 11' },
    { src: '/contact/office_photo_11.jpg', alt: '사무실 전경 12' }
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
            message: '이메일 클라이언트가 열립니다. 문의를 전송해주세요.',
            type: 'success',
            isVisible: true
          });
        } else {
          // 정상적으로 서버에서 전송된 경우
          setToast({
            message: '문의내용이 성공적으로 전송되었습니다.',
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

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
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
      <div className="w-full">
        <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-20 py-4">
          <Navigation variant="pill" />
        </div>
      </div>

      <div className="pt-16">
        {/* Hero Section */}  
        <div className="w-full py-8">
          <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-20">
            <div className="flex flex-col xl:flex-row justify-stretch items-start gap-6 w-full">
              {/* Left - Title */}
              <div className="flex flex-col gap-6 w-full xl:w-full">
                <h1 className="text-[#14151A] text-[48px] font-semibold leading-[1.17] tracking-[-2.08%] w-full">
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
          <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-20 py-6">
            <div className="flex flex-col xl:flex-row gap-6 pb-6">
              <div className="flex flex-col gap-2 w-full xl:w-[360px]">
                <h2 className="text-3xl font-bold text-[#14151A] leading-[1.2em] tracking-[-1.67%]">
                  ecoable 사무실 소개
                </h2>
              </div>
              <div className="flex-1">
                {/* Image Gallery - 반응형 그리드로 변경 */}
                <div className="flex flex-col gap-6">
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    <div 
                      className="h-[278px] bg-gray-100 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      onClick={() => openModal(galleryImages[0].src)}
                    >
                      <Image
                        src={galleryImages[0].src}
                        alt={galleryImages[0].alt}
                        width={500}
                        height={278}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div 
                      className="h-[278px] bg-gray-100 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      onClick={() => openModal(galleryImages[1].src)}
                    >
                      <Image
                        src={galleryImages[1].src}
                        alt={galleryImages[1].alt}
                        width={500}
                        height={278}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div 
                      className="h-[278px] bg-gray-100 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      onClick={() => openModal(galleryImages[2].src)}
                    >
                      <Image
                        src={galleryImages[2].src}
                        alt={galleryImages[2].alt}
                        width={500}
                        height={278}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div 
                      className="h-[278px] bg-gray-100 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      onClick={() => openModal(galleryImages[3].src)}
                    >
                      <Image
                        src={galleryImages[3].src}
                        alt={galleryImages[3].alt}
                        width={500}
                        height={278}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div 
                      className="h-[278px] bg-gray-100 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      onClick={() => openModal(galleryImages[4].src)}
                    >
                      <Image
                        src={galleryImages[4].src}
                        alt={galleryImages[4].alt}
                        width={500}
                        height={278}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div 
                      className="h-[278px] bg-gray-100 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      onClick={() => openModal(galleryImages[5].src)}
                    >
                      <Image
                        src={galleryImages[5].src}
                        alt={galleryImages[5].alt}
                        width={500}
                        height={278}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div 
                      className="h-[278px] bg-gray-100 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      onClick={() => openModal(galleryImages[6].src)}
                    >
                      <Image
                        src={galleryImages[6].src}
                        alt={galleryImages[6].alt}
                        width={500}
                        height={278}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div 
                      className="h-[278px] bg-gray-100 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      onClick={() => openModal(galleryImages[7].src)}
                    >
                      <Image
                        src={galleryImages[7].src}
                        alt={galleryImages[7].alt}
                        width={500}
                        height={278}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Row 4 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    <div 
                      className="h-[278px] bg-gray-100 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      onClick={() => openModal(galleryImages[8].src)}
                    >
                      <Image
                        src={galleryImages[8].src}
                        alt={galleryImages[8].alt}
                        width={500}
                        height={278}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div 
                      className="h-[278px] bg-gray-100 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      onClick={() => openModal(galleryImages[9].src)}
                    >
                      <Image
                        src={galleryImages[9].src}
                        alt={galleryImages[9].alt}
                        width={500}
                        height={278}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div 
                      className="h-[278px] bg-gray-100 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      onClick={() => openModal(galleryImages[10].src)}
                    >
                      <Image
                        src={galleryImages[10].src}
                        alt={galleryImages[10].alt}
                        width={500}
                        height={278}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div 
                      className="h-[278px] bg-gray-100 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      onClick={() => openModal(galleryImages[11].src)}
                    >
                      <Image
                        src={galleryImages[11].src}
                        alt={galleryImages[11].alt}
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
          <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-20 py-6">
            <div id="directions" className="flex flex-col xl:flex-row gap-6 py-6">
              <div className="w-full xl:w-[360px]">
                <h2 className="text-[#14151A] font-bold text-[30px] leading-[1.2] mb-2">
                  찾아오시는 길
                </h2>
              </div>
              <div className="flex-1">
                <div className="w-full h-[400px] bg-[#E9EAEC] rounded-[24px] flex items-center justify-center">
                  <p className="text-gray-600">지도가 여기에 표시됩니다</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full">
          <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-20 py-6">
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
                              src="/icons/lead-icon-6.svg"
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
                            className="w-full pl-11 pr-3 py-3 border border-[#DEE0E3] rounded-[12px] text-sm placeholder:text-[rgba(13,17,38,0.4)]"
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
                              src="/icons/lead-icon-7.svg"
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
                            className="w-full pl-11 pr-3 py-3 border border-[#DEE0E3] rounded-[12px] text-sm placeholder:text-[rgba(13,17,38,0.4)]"
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
                              src="/icons/lead-icon-8.svg"
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
                            className="w-full pl-11 pr-3 py-3 border border-[#DEE0E3] rounded-[12px] text-sm placeholder:text-[rgba(13,17,38,0.4)]"
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
                              src="/icons/lead-icon-9.svg"
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
                            className="w-full pl-11 pr-3 py-3 border border-[#DEE0E3] rounded-[12px] text-sm placeholder:text-[rgba(13,17,38,0.4)]"
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
                            src="/icons/lead-icon-10.svg"
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
                          className="w-full pl-11 pr-3 py-3 border border-[#DEE0E3] rounded-[12px] text-sm placeholder:text-[rgba(13,17,38,0.4)] resize-none"
                          required
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#1B376F] to-[#3A9284] text-white font-medium py-3 rounded-[12px] hover:opacity-90 transition-opacity"
                    >
                      문의 보내기
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

      {/* Image Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-[720px] max-h-[90vh] p-4">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white hover:text-gray-300 text-3xl font-bold z-10"
            >
              ×
            </button>
            <Image
              src={selectedImage}
              alt="사무실 사진"
              width={720}
              height={540}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
      
      {/* Footer */}
      <Footer />
    </div>
  );
}