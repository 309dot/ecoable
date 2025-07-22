'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';

interface NavigationProps {
  variant: 'default' | 'pill' | 'figma-main' | 'main-transparent'; // 'main-transparent' 타입 추가
  logo?: string;
}

export default function Navigation({ variant = 'default', logo = '/images/logo.png' }: NavigationProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Ecoable', path: '/ecoable' },
    { name: 'What we do', path: '/what-we-do' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Client Company', path: '/client-company' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  // main-transparent 타입 - pill과 동일한 사이즈
  if (variant === 'main-transparent') {
    return (
      <>
        <div className="w-full">
          <div className="w-full container-1440 mx-auto py-2">
            <div className="flex flex-row gap-6 items-center justify-center px-0 py-2">
              <div className="flex-1 flex flex-row gap-4 items-center justify-start">
                <div className="bg-transparent rounded-[999px] border-0 flex-1">
                  <div className="flex flex-row items-center justify-center px-0 py-[1.625rem]">
                    {/* Logo - logo_wh.png 하드코딩 */}
                    <Link href="/" className="flex flex-col h-10 items-center justify-center px-3 py-0 w-40">
                      <Image src="/images/logo_wh.png" alt="Ecoable Logo" width={142.27} height={28} className="object-contain" priority />
                    </Link>
                    
                    {/* Navigation Links */}
                    <div className="flex-1 flex flex-row gap-4 items-center justify-center">
                      {navigationItems.slice(1).map((item) => (
                        <Link
                          key={item.path}
                          href={item.path}
                          className={`px-6 py-2.5 rounded-[999px] transition-all duration-200 ${
                            isActive(item.path)
                              ? 'bg-white'
                              : 'bg-[rgba(255,255,255,0.4)]'
                          }`}
                        >
                          <span className={`font-${isActive(item.path) ? 'semibold' : 'medium'} text-[16px] leading-[24px] tracking-[-0.2px] ${
                            isActive(item.path)
                              ? 'bg-clip-text bg-gradient-to-r from-[#1a3a6f] to-[#399084] text-transparent'
                              : 'text-white'
                          }`} style={isActive(item.path) ? { WebkitTextFillColor: 'transparent' } : {}}>
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                    
                    {/* Home Button */}
                    <div className="flex flex-row gap-2 items-center justify-end">
                      <Link href="/" className="bg-white rounded-[999px] border border-[#dee0e3] shadow-[0px_1px_2px_0px_rgba(20,21,26,0.05)] hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-center overflow-clip p-[10px]">
                          <Image src="/images/common/home-icon.svg" alt="Home" width={20} height={20} className="size-5 opacity-60" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`xl:hidden fixed top-20 left-4 right-4 z-[60] transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="w-full max-w-[1440px] mx-auto">
            <div className="bg-white/10 backdrop-blur-[16px] rounded-[24px] border border-white/20 shadow-lg">
              <div className="py-4">
                {navigationItems.map((item, index) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={handleMenuItemClick}
                    className={`block px-6 py-3 text-base font-medium transition-colors ${
                      index !== navigationItems.length - 1 ? 'border-b border-white/20' : ''
                    } ${
                      isActive(item.path)
                        ? 'text-white bg-white/20 rounded-lg mx-2'
                        : 'text-white hover:text-white hover:bg-white/10 rounded-lg mx-2'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (variant === 'pill') {
    return (
      <>
        <div className="w-full">
          <div className="w-full container-1440 mx-auto py-2">
            <div className="flex flex-row gap-6 items-center justify-center px-0 py-2">
              <div className="flex-1 flex flex-row gap-4 items-center justify-start">
                <div className="bg-white rounded-[999px] border border-[#DEE0E3] flex-1">
                  <div className="flex flex-row items-center justify-center px-6 py-3">
                    {/* Logo - logo_bk.png 하드코딩 */}
                    <Link href="/" className="flex flex-col h-10 items-center justify-center px-3 py-0 w-40">
                      <Image src="/images/logo_bk.png" alt="Ecoable Logo" width={142.27} height={28} className="object-contain" />
                    </Link>
                    
                    {/* Navigation Links */}
                    <div className="flex-1 flex flex-row gap-4 items-center justify-center">
                      {navigationItems.slice(1).map((item) => (
                        <Link
                          key={item.path}
                          href={item.path}
                          className={`px-6 py-2.5 rounded-[999px] transition-all duration-200 ${
                            isActive(item.path)
                              ? 'bg-gradient-to-r from-[#1a3a6f] to-[#399084]'
                              : 'border border-[#DEE0E3]'
                          }`}
                        >
                          <span className={`font-${isActive(item.path) ? 'semibold' : 'medium'} text-[16px] leading-[24px] tracking-[-0.2px] ${
                            isActive(item.path)
                              ? 'text-white'
                              : 'text-[rgba(15,19,36,0.6)]'
                          }`}>
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                    
                    {/* Home Button */}
                    <div className="flex flex-row gap-2 items-center justify-end">
                      <Link href="/" className="bg-white rounded-[999px] border border-[#dee0e3] shadow-[0px_1px_2px_0px_rgba(20,21,26,0.05)] hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-center overflow-clip p-[10px]">
                          <Image src="/images/common/home-icon.svg" alt="Home" width={20} height={20} className="size-5 opacity-60" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (variant === 'default') {
    return (
      <>
        <nav className="fixed top-0 left-0 right-0 z-50 mt-4 mx-4 sm:mx-6 md:mx-6 xl:mx-20">
          <div className="w-full max-w-[1440px] mx-auto">
            <div className={`relative h-[72px] bg-white rounded-[999px] border border-[#DEE0E3] transition-shadow duration-300 ${
              isScrolled ? 'shadow-lg' : ''
            }`}>
              {/* Logo - 클릭시 메인 화면으로 링크 */}
              <Link href="/" className="absolute top-1/2 -translate-y-1/2 left-4 w-[160px] h-[40px] flex items-center justify-center pl-4">
                <Image
                  src={logo}
                  alt="Ecoable Logo"
                  width={142.27}
                  height={28}
                  className="object-contain"
                />
              </Link>
              
              {/* Desktop Navigation Links - Center */}
              <div className="hidden xl:block absolute top-1/2 -translate-y-1/2 left-[184px] right-[72px] h-[44px]">
                <div className="flex items-center justify-center gap-[16px] h-full">
                  {navigationItems.slice(1).map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={`h-[44px] rounded-[999px] flex items-center justify-center px-[24px] transition-all duration-200 ${
                        isActive(item.path)
                          ? 'bg-gradient-to-r from-[#1A3A6F] to-[#399084] text-white'
                          : 'hover:bg-gray-100 text-[#0F1324]/60 border border-[#DEE0E3]'
                      }`}
                    >
                      <span className="font-pretendard text-[16px] font-medium leading-[24px] tracking-[-0.2px]">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Desktop Right Icon Button */}
              <div className="hidden xl:block absolute top-1/2 -translate-y-1/2 right-[8px] w-[56px] h-[40px]">
                <div className="flex gap-[8px]">
                  <Link 
                    href="/"
                    className="w-[40px] h-[40px] bg-white rounded-[999px] border border-[#DEE0E3] flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
                  >
                    <Image
                      src="/images/common/home-icon.svg"
                      alt="Home"
                      width={20}
                      height={20}
                    />
                  </Link>
                </div>
              </div>
              
              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden absolute top-1/2 -translate-y-1/2 right-4 w-[40px] h-[40px] hover:bg-gray-100 rounded-[999px] flex items-center justify-center transition-all duration-200"
              >
                <div className="w-5 h-5 flex flex-col justify-center items-center gap-1">
                  <div className="w-4 h-0.5 bg-gray-700 rounded"></div>
                  <div className="w-4 h-0.5 bg-gray-700 rounded"></div>
                  <div className="w-4 h-0.5 bg-gray-700 rounded"></div>
                </div>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        <div className={`xl:hidden fixed top-24 left-4 right-4 sm:left-6 sm:right-6 md:left-6 md:right-6 xl:left-20 xl:right-20 z-[60] transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="w-full max-w-[1440px] mx-auto">
            <div className="bg-white rounded-[24px] border border-[#DEE0E3] shadow-lg">
              {/* Menu Items */}
              <div className="py-4">
                {navigationItems.map((item, index) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={handleMenuItemClick}
                    className={`block px-6 py-3 text-base font-medium transition-colors ${
                      index !== navigationItems.length - 1 ? 'border-b border-gray-100' : ''
                    } ${
                      isActive(item.path)
                        ? 'text-white bg-gradient-to-r from-[#1A3A6F] to-[#399084]'
                        : 'text-[#0F1324]/60 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Figma 메인 디자인 타입
  if (variant === 'figma-main') {
    return (
      <>
        <nav className="fixed top-0 left-0 right-0 z-50 py-2 px-20">
          <div className="w-full max-w-[1440px] mx-auto">
            <div className={`relative h-[72px] transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
              <div className="backdrop-blur backdrop-filter flex flex-row gap-4 items-center justify-start p-0 rounded-[999px] h-full">
                <div className="basis-0 flex flex-row gap-2.5 grow items-center justify-center px-0 py-3">
                  {/* Logo */}
                  <Link href="/" className="flex flex-col h-10 items-center justify-center px-3 py-0 w-40">
                    <Image
                      src={logo}
                      alt="Ecoable Logo"
                      width={142.27}
                      height={28}
                      className="object-contain"
                    />
                  </Link>
                  {/* Navigation Links */}
                  <div className="hidden xl:block basis-0 flex flex-row gap-4 grow items-center justify-center p-0">
                    {navigationItems.slice(1).map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        className={`flex items-center justify-center px-6 py-2.5 rounded-[999px] transition-all duration-200 ${
                          isActive(item.path)
                            ? 'bg-white'
                            : 'bg-[rgba(255,255,255,0.4)]'
                        }`}
                      >
                        <span className={`font-medium text-[16px] leading-[24px] tracking-[-0.2px] ${
                          isActive(item.path) 
                            ? 'bg-clip-text bg-gradient-to-r from-[#1a3a6f] to-[#399084] text-transparent' 
                            : 'text-white'
                        }`} style={isActive(item.path) ? { WebkitTextFillColor: 'transparent' } : {}}>
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                  {/* Home Button */}
                  <div className="hidden xl:block flex flex-row gap-2 items-center justify-end p-0">
                    <Link 
                      href="/"
                      className="bg-white rounded-[999px] border border-[#dee0e3] shadow-[0px_1px_2px_0px_rgba(20,21,26,0.05)] hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-center overflow-clip p-[10px]">
                        <Image
                          src="/images/common/home-icon.svg"
                          alt="Home"
                          width={20}
                          height={20}
                          className="size-5"
                        />
                      </div>
                    </Link>
                  </div>
                  {/* Mobile Hamburger Button */}
                  <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="xl:hidden w-[40px] h-[40px] bg-white/40 hover:bg-white/60 rounded-[999px] flex items-center justify-center transition-all duration-200"
                  >
                    <div className="w-5 h-5 flex flex-col justify-center items-center gap-1">
                      <div className="w-4 h-0.5 bg-white rounded"></div>
                      <div className="w-4 h-0.5 bg-white rounded"></div>
                      <div className="w-4 h-0.5 bg-white rounded"></div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`xl:hidden fixed top-24 left-4 right-4 z-[60] transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="w-full max-w-[1440px] mx-auto">
            <div className="bg-white/10 backdrop-blur-[16px] rounded-[24px] border border-white/20 shadow-lg">
              <div className="py-4">
                {navigationItems.map((item, index) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={handleMenuItemClick}
                    className={`block px-6 py-3 text-base font-medium transition-colors ${
                      index !== navigationItems.length - 1 ? 'border-b border-white/20' : ''
                    } ${
                      isActive(item.path)
                        ? 'text-white bg-white/20 rounded-lg mx-2'
                        : 'text-white hover:text-white hover:bg-white/10 rounded-lg mx-2'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
} 