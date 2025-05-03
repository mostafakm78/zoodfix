import AboutUs from '@/components/about-us/AboutUs';
import { Footer } from '@/components/shared/Footer';
import { Navbar } from '@/components/shared/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'درباره ما',
  description: 'صفحه درباره ما و اطلاعات زودفیکس',
  openGraph: {
    title: 'درباره ما',
    description: 'صفحه درباره ما و اطلاعات زودفیکس',
    images: [{ url: '/images/Products/loading.jpg', alt: 'تصویر سایت' }],
    url: `https://yourdomain.com/about-us`,
    type: 'website',
  },
};

const AboutUsPage = () => {
  return (
    <>
      <Navbar />
      <AboutUs />
      <Footer />
    </>
  );
};

export default AboutUsPage;
