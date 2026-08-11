import { Suspense } from 'react';
import { getMembersByDivision } from '@/lib/queries';
import WhatWeDoContent from './WhatWeDoContent';

// 관리자에서 수정한 구성원이 즉시 반영되도록 캐시하지 않습니다.
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

export default async function WhatWeDoPage() {
  const members = await getMembersByDivision();

  return (
    <Suspense fallback={<LoadingScreen />}>
      <WhatWeDoContent
        policyProfiles={members.policy}
        circulationProfiles={members.circulation}
      />
    </Suspense>
  );
}
