import Employment from '@/components/employment/Employment';
import { Footer } from '@/components/shared/Footer';
import { Navbar } from '@/components/shared/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'استخدام',
  description: 'صفحه استخدام زودفیکس',
  openGraph: {
    title: 'استخدام',
    description: 'صفحه استخدام زودفیکس',
    images: [{ url: '/images/Products/loading.jpg', alt: 'تصویر سایت' }],
    url: `https://zoodfix.vercel.app/employment`,
    type: 'website',
  },
};

const EmploymentPage = () => {
  return (
    <>
      <Navbar />
      <Employment />
      <Footer />
    </>
  );
};

export default EmploymentPage;
