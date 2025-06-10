'use client';

import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import Navigation from "@/components/Navigation";
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function EcoablePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Main Content - 1440x1836px as per Figma */}
      <main className="w-[1440px] mx-auto relative figma-layout">
        {/* Container - x:80, y:110, w:1280, h:988 */}
        <div className="px-[80px] pt-[110px] pb-[100px]">
          <div className="w-[1280px]">
            
            {/* Container - x:0, y:32, w:1280, h:924 relative to parent */}
            <div className="mt-8">
              
              {/* Title Section - x:0, y:48, w:1280, h:408 */}
              <div className="mb-[64px]">
                {/* Main Title */}
                <h1 className="text-[#14151a] text-[64px] font-bold leading-[72px] tracking-[-1.7px] mb-[64px] max-w-[896px]">
                  ecology + economy + able = <br />ecoable
                </h1>
                
                                 {/* Description Section - positioned to the right */}
                 <div className="absolute right-[80px] top-[268px] w-[360px] mobile-responsive">
                  <h2 className="text-[#0f1324]/60 text-[20px] font-bold leading-[28px] tracking-[-0.2px] mb-4">
                    안녕하세요. ecoable입니다!
                  </h2>
                  <p className="text-[#0f1324]/60 text-[16px] font-medium leading-[24px] tracking-[-0.2px]">
                    안녕하세요. Ecoable입니다!<br />
                    에코에이블컨설팅㈜은 환경과 경제의 조화를 통해 지속가능한 발전을 가능하도록 하는 다양한 컨설팅서비스를 제공하는 회사입니다.<br /><br />
                    
                    에코에이블컨설팅㈜은 '에코에이블스러움'이라는 고유의 문화를 통해 고객에게는 신뢰성 있는 결과물과 서비스를, 구성원들에게는 새로운 조직문화와 행복한 일터를 제공하고자 합니다.<br /><br />
                    
                    새로운 가치 창출을 최우선으로 생각하는 에코에이블컨설팅(주)은 '새로움'과 '젊음'이라는 무기로 환경컨설팅 시장의 새바람을 일으키고자 노력하고 있습니다.<br /><br />
                    
                    앞으로의 에코에이블스러운 행보에 많은 관심 부탁 드립니다.
                  </p>
                </div>
              </div>

              {/* Main Image Section - x:0, y:488, w:1280, h:452 */}
              <div className="w-[1280px] h-[452px] rounded-[24px] overflow-hidden border border-[#dee0e3] mb-[68px]">
                <Image
                  src="/image_photo_26.jpg"
                  alt="Ecoable Main"
                  width={1280}
                  height={452}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Section - Container starting from y:998 */}
              <div className="mt-[68px]">
                {/* Title */}
                <h2 className="text-[#14151a] text-[48px] font-bold leading-[56px] tracking-[-1px] mb-[92px]">
                  ecoable이 만들어가는 친환경적이면서 경제적인 솔루션!<br />
                  가능합니다!
                </h2>

                {/* Vision Section */}
                <div className="mb-[88px]">
                  <div className="flex">
                    <div className="w-[360px]">
                      <h3 className="text-[#14151a] text-[24px] font-bold leading-[32px] tracking-[-0.3px] mb-2">
                        ecoable의 비전과 목표
                      </h3>
                      <div className="w-[360px] h-[1px] bg-[#d9d9d9] mb-4"></div>
                    </div>
                    <div className="flex-1 ml-[24px]">
                      <h4 className="text-[#0f1324]/60 text-[20px] font-bold leading-[28px] tracking-[-0.2px] mb-4">
                        안녕하세요. ecoable입니다!
                      </h4>
                      <p className="text-[#0f1324]/60 text-[16px] font-medium leading-[24px] tracking-[-0.2px] max-w-[896px]">
                        에코에이블컨설팅㈜은 'Life Cycle Linker'로서, 고객과 구성원의 가치가 모여 회사의 가치를 이루고, 모두의 내일을 위해 오늘의 일을 실천하는 지속가능한 컨설팅 회사입니다.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Core Values Section */}
                <div>
                  <div className="flex">
                    <div className="w-[360px]">
                      <h3 className="text-[#14151a] text-[24px] font-bold leading-[32px] tracking-[-0.3px] mb-2">
                        ecoable의 3대 핵심가치
                      </h3>
                      <div className="w-[360px] h-[1px] bg-[#d9d9d9]"></div>
                    </div>
                    
                                         {/* Three Value Cards */}
                     <div className="flex gap-[24px] ml-[24px] mobile-stack">
                                             {/* Card 1 - 가치있는 컨설팅 */}
                       <div className="w-[282.67px] h-[376px] border border-[#dee0e3] rounded-[24px] p-6 mobile-full-width">
                        <div className="w-[180px] h-[180px] mx-auto mb-6 bg-gray-200 rounded">
                          <Image
                            src="/image_photo_25.jpg"
                            alt="가치있는 컨설팅"
                            width={180}
                            height={180}
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        <div className="text-center">
                          <h4 className="text-[#14151a] text-[20px] font-bold leading-[28px] tracking-[-0.2px] mb-4">
                            가치있는 컨설팅
                          </h4>
                          <p className="text-[#0f1324]/60 text-[16px] leading-[24px] tracking-[-0.2px]">
                            쓸모있는 결과물을 도출하여 고객사가 결과물을 가치있게 활용할 수 있도록 한다.
                          </p>
                        </div>
                      </div>

                                             {/* Card 2 - 지속가능성 */}
                       <div className="w-[282.67px] h-[376px] border border-[#dee0e3] rounded-[24px] p-6 mobile-full-width">
                        <div className="w-[180px] h-[180px] mx-auto mb-6 bg-gray-200 rounded">
                          <Image
                            src="/image_photo_24.jpg"
                            alt="지속가능성"
                            width={180}
                            height={180}
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        <div className="text-center">
                          <h4 className="text-[#14151a] text-[20px] font-bold leading-[28px] tracking-[-0.2px] mb-4">
                            지속가능성
                          </h4>
                          <p className="text-[#0f1324]/60 text-[16px] leading-[24px] tracking-[-0.2px]">
                            고객의 지속가능성 증진과 함께 ecoable의 지속가능성을<br />
                            고민한다.
                          </p>
                        </div>
                      </div>

                                             {/* Card 3 - 모두의 조직 */}
                       <div className="w-[282.67px] h-[376px] border border-[#dee0e3] rounded-[24px] p-6 mobile-full-width">
                        <div className="w-[180px] h-[180px] mx-auto mb-6 bg-gray-200 rounded">
                          <Image
                            src="/image_photo_23.jpg"
                            alt="모두의 조직"
                            width={180}
                            height={180}
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        <div className="text-center">
                          <h4 className="text-[#14151a] text-[20px] font-bold leading-[28px] tracking-[-0.2px] mb-4">
                            모두의 조직
                          </h4>
                          <p className="text-[#0f1324]/60 text-[16px] leading-[24px] tracking-[-0.2px]">
                            구성원 모두가 주인으로 같은 방향을 동등한 눈높이로 바라보는 조직을 추구한다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
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