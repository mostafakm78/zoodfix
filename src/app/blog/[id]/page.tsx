import SingleBlog from '@/components/blog/SingleBlog';
import { Footer } from '@/components/shared/Footer';
import { Navbar } from '@/components/shared/Navbar';
import { BlogsList } from '../../../../types/types';
import NotFound from '@/app/not-found';

const SingleBlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:4000/blogs`, { cache: 'no-store' });
  const blogs = await res.json();

  const blog = blogs.find((blog: BlogsList) => blog.id === id);

  if (!blog) {
    return NotFound();
  }

  return (
    <>
      <Navbar />
      <SingleBlog blogs={blogs} blog={blog} />
      <Footer />
    </>
  );
};

export default SingleBlogPage;
