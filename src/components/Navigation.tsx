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
    <nav style={{ marginLeft: '80px', width: '1280px' }}>
      <div 
        className="bg-white/10 backdrop-blur-md rounded-full flex items-center justify-between px-8"
        style={{ height: '68px' }}
      >
        <div className="flex items-center">
          <Link href="/" className="text-white text-xl font-semibold">
            에코에이블컨설팅(주)
          </Link>
        </div>

        <div className="flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-base font-medium px-6 py-3 rounded-full transition-all ${
                pathname === item.href
                  ? "bg-gradient-to-r from-[#1A3A6F] to-[#399084] text-white"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <span className="tracking-[-0.2px]">{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <button className="w-10 h-10 bg-white border border-[#dee0e3] rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
          </button>
          <button className="w-10 h-10 bg-white border border-[#dee0e3] rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
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