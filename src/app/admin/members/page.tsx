import { getMembersByDivision } from '@/lib/queries';
import MembersAdmin from './MembersAdmin';

export const dynamic = 'force-dynamic';

export default async function AdminMembersPage() {
  const membersByDivision = await getMembersByDivision();
  return <MembersAdmin membersByDivision={membersByDivision} />;
}
