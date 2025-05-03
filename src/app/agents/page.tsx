import Agents from '@/components/agents/agents';
import { Footer } from '@/components/shared/Footer';
import { Navbar } from '@/components/shared/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'دریافت نمایندگی',
  description: 'صفحه دریافت نمایندگی زودفیکس',
  openGraph: {
    title: 'دریافت نمایندگی',
    description: 'صفحه دریافت نمایندگی زودفیکس',
    images: [{ url: '/images/Products/loading.jpg', alt: 'تصویر سایت' }],
    url: `https://zoodfix.vercel.app/agents`,
    type: 'website',
  },
};

const AgentsPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Agents />
      <Footer />
    </>
  );
};

export default AgentsPage;
