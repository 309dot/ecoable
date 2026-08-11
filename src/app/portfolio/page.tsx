import { Suspense } from 'react';
import { getPortfolioByCategory } from '@/lib/queries';
import PortfolioContent from './PortfolioContent';

// 관리자에서 수정한 수행실적이 즉시 반영되도록 캐시하지 않습니다.
export const dynamic = 'force-dynamic';

function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1A3A6F] mx-auto mb-4"></div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );
}

export default async function PortfolioPage() {
  const portfolioData = await getPortfolioByCategory();

  return (
    <Suspense fallback={<LoadingScreen />}>
      <PortfolioContent portfolioData={portfolioData} />
    </Suspense>
  );
}
