'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/ecoable", label: "Ecoable" },
    { href: "/what-we-do", label: "What we do" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/client-company", label: "Client Company" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="relative z-10 mx-4 md:mx-20 pt-4">
      <div className="bg-white/40 backdrop-blur-sm rounded-full h-[68px] flex items-center justify-between px-6">
        {/* Logo */}
        <div className="w-40 h-10 flex items-center">
          <Link href="/" className="w-[142px] h-7 bg-white rounded relative overflow-hidden">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-xs text-gray-600">
              Logo
            </div>
          </Link>
        </div>

        {/* Desktop Menu Items */}
        <div className="hidden lg:flex items-center space-x-4">
          {menuItems.slice(0, 4).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-6 py-2 transition-all duration-200 ${
                pathname === item.href
                  ? "bg-gradient-to-r from-primary-blue to-primary-green text-white font-semibold"
                  : "bg-white/40 text-white font-medium hover:bg-white/60"
              }`}
            >
              <span className="text-base tracking-[-0.2px]">{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button className="w-10 h-10 bg-white border border-border-gray rounded-full flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Right Buttons - Desktop */}
        <div className="hidden lg:flex items-center space-x-2">
          <button className="w-10 h-10 bg-white border border-border-gray rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
          </button>
          <button className="w-10 h-10 bg-white border border-border-gray rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 