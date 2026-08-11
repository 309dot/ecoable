'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`text-sm px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
        isActive
          ? 'bg-gradient-to-r from-[#1A3A6F] to-[#399084] text-white'
          : 'text-[rgba(15,19,36,0.6)] hover:bg-[#F7F8F9]'
      }`}
    >
      {children}
    </Link>
  );
}
