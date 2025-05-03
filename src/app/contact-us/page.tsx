import ContactUs from '@/components/contact-us/ContactUs';
import { Footer } from '@/components/shared/Footer';
import { Navbar } from '@/components/shared/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ارتباط با ما',
  description: 'صفحه ارتباط با ما زودفیکس',
  openGraph: {
    title: 'ارتباط با ما',
    description: 'صفحه ارتباط با ما زودفیکس',
    images: [{ url: '/images/Products/loading.jpg', alt: 'تصویر سایت' }],
    url: `https://zoodfix.vercel.app/contact-us`,
    type: 'website',
  },
};

const ContactUsPage = () => {
  return (
    <>
      <Navbar />
      <ContactUs />
      <Footer />
    </>
  );
};

export default ContactUsPage;
