import Search from '@/components/search/Search';
import { Footer } from '@/components/shared/Footer';
import { Navbar } from '@/components/shared/Navbar';

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
