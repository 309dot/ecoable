import { getPortfolioByCategory } from '@/lib/queries';
import PortfolioAdmin from './PortfolioAdmin';

export const dynamic = 'force-dynamic';

export default async function AdminPortfolioPage() {
  const projectsByCategory = await getPortfolioByCategory();
  return <PortfolioAdmin projectsByCategory={projectsByCategory} />;
}
