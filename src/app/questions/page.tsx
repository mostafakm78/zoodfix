import Question from '@/components/Question/Question';
import { Footer } from '@/components/shared/Footer';
import { Navbar } from '@/components/shared/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'سوالات متداول',
  description: 'صفحه سوالات متداول زودفیکس',
  openGraph: {
    title: 'سوالات متداول',
    description: 'صفحه سوالات متداول زودفیکس',
    images: [{ url: '/images/Products/loading.jpg', alt: 'تصویر سایت' }],
    url: `https://yourdomain.com/questions`,
    type: 'website',
  },
};

const QuestionPage = () => {
  return (
    <>
      <Navbar />
      <Question />
      <Footer />
    </>
  );
};

export default QuestionPage;
