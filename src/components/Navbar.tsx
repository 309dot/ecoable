'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('Home');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-5 py-4 bg-transparent">
      <div className="mx-auto max-w-[1280px]">
        {/* Pill Style Navigation */}
        <div className="bg-white border border-[#dee0e3] rounded-full flex items-center justify-between px-6 py-3 h-[68px]">
          {/* Left - Logo */}
          <div className="flex items-center w-[160px]">
            <div className="relative w-[142px] h-[28px]">
              <Image
                src="/image_photo_01.jpg"
                alt="Ecoable Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Center - Navigation Menu */}
          <div className="flex items-center space-x-2">
            {[
              { name: 'Home', href: '/' },
              { name: 'Ecoable', href: '/ecoable' },
              { name: 'What we do', href: '/what-we-do' },
              { name: 'Portfolio', href: '/portfolio' },
              { name: 'Client Company', href: '/client-company' }
            ].map((item) => (
              <Link key={item.name} href={item.href}>
                <button
                  onClick={() => setActiveMenu(item.name)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeMenu === item.name
                      ? 'bg-gradient-to-r from-[#1a3a6f] to-[#399084] text-white'
                      : 'text-[#0f1324] text-opacity-60 hover:text-opacity-100'
                  }`}
                >
                  {item.name}
                </button>
              </Link>
            ))}
          </div>

          {/* Right - Contact Button and Icons */}
          <div className="flex items-center space-x-3">
            {/* Icon Buttons */}
            <button className="w-10 h-10 bg-white border border-[#dee0e3] rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-gray-400 rounded-sm"></div>
            </button>
            <button className="w-10 h-10 bg-white border border-[#dee0e3] rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-gray-400 rounded-sm"></div>
            </button>
            
            {/* Contact Button */}
            <Link href="/contact">
              <div className="bg-gradient-to-r from-[#1a3a6f] to-[#399084] rounded-full px-4 py-3 flex items-center space-x-2">
                <div className="w-6 h-6 bg-white bg-opacity-20 rounded-sm"></div>
                <span className="text-white font-medium text-sm">contact</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}; 