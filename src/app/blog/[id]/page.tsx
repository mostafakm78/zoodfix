import SingleBlog from '@/components/blog/SingleBlog';
import { Footer } from '@/components/shared/Footer';
import { Navbar } from '@/components/shared/Navbar';
import { BlogsList } from '../../../../types/types';
import NotFound from '@/app/not-found';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const res = await fetch(`${process.env.NEXT}/blogs`, { cache: 'no-store' });
  const blogs: BlogsList[] = await res.json();
  const blog: BlogsList | undefined = blogs.find((blog) => blog.id === id);

  if (!blog) {
    return {
      title: 'مقاله یافت نشد',
    };
  }

  return {
    title: blog.title,
    description: blog.content,
    openGraph: {
      title: blog.title,
      description: blog.content,
      images: [blog.image],
      url: `https://yourdomain.com/blogs/${id}`,
      type: 'article',
    },
  };
}

const SingleBlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const res = await fetch(`${process.env.NEXT}/blogs`, { cache: 'no-store' });
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
