'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';

interface NavigationProps {
  variant: 'default' | 'pill';
}

export default function Navigation({ variant = 'default' }: NavigationProps) {
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

  // 메뉴 열릴 때 스크롤 방지
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

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

  if (variant === 'default') {
    return (
      <>
        <nav className="fixed top-0 left-0 right-0 z-50 my-4">
          <div className="w-full max-w-[1440px] mx-auto">
            <div className={`relative h-[72px] bg-white/10 backdrop-blur-[16px] rounded-[999px] border border-white/20 transition-shadow duration-300 mx-3 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-0 ${
              isScrolled ? 'shadow-lg' : ''
            }`}>
              {/* Logo - 클릭시 메인 화면으로 링크 */}
              <Link href="/" className="absolute top-1/2 -translate-y-1/2 left-4 w-[160px] h-[40px] flex items-center justify-center pl-4">
                <Image
                  src="/logo_wh.png"
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
                          : 'bg-white/40 hover:bg-white/60 text-white'
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
                    className="w-[40px] h-[40px] bg-white rounded-[999px] border border-[#DEE0E3] flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Image
                      src="/icons/home-icon.svg"
                      alt="Home"
                      width={20}
                      height={20}
                    />
                  </Link>
                </div>
              </div>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="xl:hidden absolute top-1/2 -translate-y-1/2 right-4 w-[40px] h-[40px] bg-white/40 hover:bg-white/60 rounded-[999px] flex items-center justify-center transition-all duration-200"
              >
                <div className="w-5 h-5 flex flex-col justify-center items-center gap-1">
                  <div className="w-4 h-0.5 bg-white rounded"></div>
                  <div className="w-4 h-0.5 bg-white rounded"></div>
                  <div className="w-4 h-0.5 bg-white rounded"></div>
                </div>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Slide Menu */}
        <div className={`xl:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Slide Menu */}
          <div className={`absolute top-0 right-0 h-full w-80 bg-white shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <Image
                src="/logo_bk.png"
                alt="Ecoable Logo"
                width={120}
                height={24}
                className="object-contain"
              />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <div className="w-5 h-5 relative">
                  <div className="absolute top-1/2 left-1/2 w-4 h-0.5 bg-gray-600 rounded transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                  <div className="absolute top-1/2 left-1/2 w-4 h-0.5 bg-gray-600 rounded transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
                </div>
              </button>
            </div>
            
            {/* Menu Items */}
            <div className="py-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={handleMenuItemClick}
                  className={`block px-6 py-4 text-lg font-medium transition-colors border-l-4 ${
                    isActive(item.path)
                      ? 'text-[#1A3A6F] bg-blue-50 border-l-[#1A3A6F]'
                      : 'text-gray-700 hover:text-[#1A3A6F] hover:bg-gray-50 border-l-transparent'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }

  // Pill variant for white backgrounds
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 my-4">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className={`relative h-[72px] bg-white rounded-[999px] border border-[#DEE0E3] transition-shadow duration-300 mx-3 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-0 ${
            isScrolled ? 'shadow-lg' : ''
          }`}>
            {/* Logo - 클릭시 메인 화면으로 링크 */}
            <Link href="/" className="absolute top-1/2 -translate-y-1/2 left-4 w-[160px] h-[40px] flex items-center justify-center pl-4">
              <Image
                src="/logo_bk.png"
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
                    src="/icons/home-icon.svg"
                    alt="Home"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
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

      {/* Mobile Slide Menu */}
      <div className={`xl:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Slide Menu */}
        <div className={`absolute top-0 right-0 h-full w-80 bg-white shadow-2xl transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <Image
              src="/logo_bk.png"
              alt="Ecoable Logo"
              width={120}
              height={24}
              className="object-contain"
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              <div className="w-5 h-5 relative">
                <div className="absolute top-1/2 left-1/2 w-4 h-0.5 bg-gray-600 rounded transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                <div className="absolute top-1/2 left-1/2 w-4 h-0.5 bg-gray-600 rounded transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
              </div>
            </button>
          </div>
          
          {/* Menu Items */}
          <div className="py-6">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={handleMenuItemClick}
                className={`block px-6 py-4 text-lg font-medium transition-colors border-l-4 ${
                  isActive(item.path)
                    ? 'text-[#1A3A6F] bg-blue-50 border-l-[#1A3A6F]'
                    : 'text-gray-700 hover:text-[#1A3A6F] hover:bg-gray-50 border-l-transparent'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
} 