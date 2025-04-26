import Blog from '@/components/blog/Blog';
import Pagination from '@/components/blog/Pagination';
import { Footer } from '@/components/shared/Footer';
import { Navbar } from '@/components/shared/Navbar';
import { redirect } from 'next/navigation';

const BlogPage = async ({ searchParams }: { searchParams: { page?: string; category?: string } }) => {
  const data = await fetch('http://localhost:4000/blogs');
  const allBlogs = await data.json();

  const pages = await searchParams;

  const page = Number(pages.page) || 1;
  const category = pages.category || null;
  const Blogs = category ? allBlogs.filter((blog: { category: string }) => blog.category === category) : allBlogs;
  const BlogPerPage = 6;

  const totalPages = Math.ceil(Blogs.length / BlogPerPage);

  if (totalPages > 0 && page > totalPages) {
    redirect(`/blog?page=1`);
  }

  const start = (page - 1) * BlogPerPage;
  const end = start + BlogPerPage;
  const currentBlogs = Blogs.slice(start, end);

  return (
    <>
      <Navbar />
      <Blog blogs={currentBlogs} allblogs={allBlogs} activeCategory={category} />
      <Pagination currentPage={page} totalPages={totalPages} category={category} />
      <Footer />
    </>
  );
};

export default BlogPage;
