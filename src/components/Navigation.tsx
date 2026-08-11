'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

/**
 * 메인과 서브 페이지가 같은 마크업을 쓰고 테마(색상)만 달라집니다.
 * 여백도 컴포넌트 안에서 통일해서 로고 위치가 페이지마다 흔들리지 않습니다.
 * - transparent: 메인 페이지. 배경 사진 위에 얹히는 투명 바
 * - light: 서브 페이지. 흰 알약 바
 */
export type NavTheme = 'transparent' | 'light';

interface NavigationProps {
  theme?: NavTheme;
}

const NAV_ITEMS = [
  { name: 'Ecoable', path: '/ecoable' },
  { name: 'What we do', path: '/what-we-do' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Client Company', path: '/client-company' },
  { name: 'Contact', path: '/contact' },
] as const;

interface NavThemeStyle {
  shell: string;
  logo: string;
  itemActive: string;
  itemIdle: string;
  labelActive: string;
  labelIdle: string;
  /** 활성 라벨이 그라디언트 클리핑을 쓰는 테마인지 (Safari 대응 필요) */
  clipsText: boolean;
  burgerBar: string;
  burgerButton: string;
  panel: string;
  panelItemActive: string;
  panelItemIdle: string;
  panelDivider: string;
}

const THEMES: Record<NavTheme, NavThemeStyle> = {
  transparent: {
    // light 테마에는 1px 테두리가 있습니다. 투명 테두리로 폭을 맞춰야
    // 메인↔서브 이동 시 로고와 메뉴 위치가 1~2px씩 흔들리지 않습니다.
    shell: 'bg-transparent border border-transparent',
    logo: '/images/logo_wh.png',
    itemActive: 'bg-white border border-transparent',
    itemIdle: 'bg-[rgba(255,255,255,0.4)] border border-transparent',
    labelActive:
      'font-semibold bg-clip-text bg-gradient-to-r from-[#1a3a6f] to-[#399084] text-transparent',
    labelIdle: 'font-medium text-white',
    clipsText: true,
    burgerBar: 'bg-white',
    burgerButton: 'bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.6)]',
    panel: 'bg-white/10 backdrop-blur-[16px] border border-white/20',
    panelItemActive: 'text-white bg-white/20',
    panelItemIdle: 'text-white hover:bg-white/10',
    panelDivider: 'border-white/20',
  },
  light: {
    shell: 'bg-white border border-[#DEE0E3]',
    logo: '/images/logo_bk.png',
    itemActive: 'bg-gradient-to-r from-[#1a3a6f] to-[#399084] border border-transparent',
    itemIdle: 'border border-[#DEE0E3]',
    labelActive: 'font-semibold text-white',
    labelIdle: 'font-medium text-[rgba(15,19,36,0.6)]',
    clipsText: false,
    burgerBar: 'bg-[#14151A]',
    burgerButton: 'border border-[#DEE0E3] hover:bg-[#F7F8F9]',
    panel: 'bg-white border border-[#DEE0E3] shadow-lg',
    panelItemActive: 'text-white bg-gradient-to-r from-[#1a3a6f] to-[#399084]',
    panelItemIdle: 'text-[rgba(15,19,36,0.6)] hover:bg-[#F7F8F9]',
    panelDivider: 'border-[#EFF0F2]',
  },
};

export default function Navigation({ theme = 'light' }: NavigationProps) {
  const pathname = usePathname();
  const style = THEMES[theme];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 페이지를 옮기면 열려 있던 모바일 메뉴를 닫습니다.
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path);

  return (
    <div className="w-full container-1440 mx-auto py-4 relative">
      <div className={`rounded-[999px] ${style.shell}`}>
        <div className="flex flex-row items-center gap-4 px-6 py-3">
          {/* 로고 */}
          <Link
            href="/"
            className="flex flex-col h-10 items-center justify-center px-3 py-0 w-40 shrink-0"
          >
            <Image
              src={style.logo}
              alt="Ecoable Logo"
              width={142.27}
              height={28}
              className="object-contain"
              priority
            />
          </Link>

          {/* 메뉴 - 오른쪽 정렬 */}
          <div className="hidden lg:flex flex-1 flex-row gap-4 items-center justify-end">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-6 py-2.5 rounded-[999px] transition-all duration-200 ${
                    active ? style.itemActive : style.itemIdle
                  }`}
                >
                  <span
                    className={`text-[16px] leading-[24px] tracking-[-0.2px] ${
                      active ? style.labelActive : style.labelIdle
                    }`}
                    style={
                      active && style.clipsText
                        ? { WebkitTextFillColor: 'transparent' }
                        : undefined
                    }
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* 햄버거 (lg 미만) */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={isMenuOpen}
            className={`lg:hidden ml-auto w-10 h-10 shrink-0 rounded-[999px] flex items-center justify-center transition-colors ${style.burgerButton}`}
          >
            <span className="w-5 h-5 flex flex-col justify-center items-center gap-1">
              <span className={`w-4 h-0.5 rounded ${style.burgerBar}`} />
              <span className={`w-4 h-0.5 rounded ${style.burgerBar}`} />
              <span className={`w-4 h-0.5 rounded ${style.burgerBar}`} />
            </span>
          </button>
        </div>
      </div>

      {/* 모바일 드롭다운 */}
      {isMenuOpen && (
        <div className="lg:hidden absolute left-0 right-0 top-full z-50 px-0">
          <div className={`rounded-[24px] overflow-hidden ${style.panel}`}>
            {NAV_ITEMS.map((item, index) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-6 py-3 text-base font-medium transition-colors ${
                  index !== 0 ? `border-t ${style.panelDivider}` : ''
                } ${isActive(item.path) ? style.panelItemActive : style.panelItemIdle}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
