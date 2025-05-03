import Search from '@/components/search/Search';
import { Footer } from '@/components/shared/Footer';
import { Navbar } from '@/components/shared/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'جستجو',
  description: 'صفحه جستجو زودفیکس',
  openGraph: {
    title: 'جستجو',
    description: 'صفحه جستجو زودفیکس',
    images: [{ url: '/images/Products/loading.jpg', alt: 'تصویر سایت' }],
    url: `https://zoodfix.vercel.app/search`,
    type: 'website',
  },
};

const SearchPage = async ({ searchParams }: { searchParams: Promise<{ query?: string }> }) => {
  const Params = await searchParams;
  const searching = Params.query || null;

  return (
    <>
      <Navbar />
      <Search searchWord={searching} />
      <Footer />
    </>
  );
};

export default SearchPage;
