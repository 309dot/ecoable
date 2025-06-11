'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import EcoableIntroduction from '@/components/ecoable/EcoableIntroduction';
import EcoableEcoableness from '@/components/ecoable/EcoableEcoableness';

export default function EcoablePage() {
  const [activeTab, setActiveTab] = useState<'introduction' | 'ecoableness'>('introduction');

  const ecoableTabs = [
    { key: 'introduction', label: 'ecoable 소개' },
    { key: 'ecoableness', label: 'ecoable스러움' }
  ];

  return (
    <div className="min-h-screen" style={{
      maxWidth: '1440px',
      margin: '0 auto',
      wordBreak: 'keep-all',
      overflowWrap: 'break-word'
    }}>
      {/* Navigation */}
      <div className="w-full">
        <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4">
          <Navigation variant="pill" />
        </div>
      </div>

      <div className="pt-16">
        {/* Tab Menu Section */}
        <div className="w-full py-8">
          <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="flex justify-start">
              <div className="bg-[rgba(10,15,41,0.08)] rounded-full p-0.5 flex">
                {ecoableTabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key as 'introduction' | 'ecoableness')}
                    className={`px-3 py-2.5 rounded-full font-medium text-base ${
                      activeTab === tab.key
                        ? 'bg-white border border-[#DEE0E3] text-[#14151A]'
                        : 'text-[rgba(15,19,36,0.6)]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="w-full">
          <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6">
            {activeTab === 'introduction' && <EcoableIntroduction />}
            {activeTab === 'ecoableness' && <EcoableEcoableness />}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 