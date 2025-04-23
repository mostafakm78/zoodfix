import Blog from '@/components/blog/Blog';
import Pagination from '@/components/blog/Pagination';
import { Footer } from '@/components/shared/Footer';
import { Navbar } from '@/components/shared/Navbar';

const BlogPage = () => {
  return (
    <>
      <Navbar />
      <Blog />
      <Pagination />
      <Footer />
    </>
  );
};

export default BlogPage;
