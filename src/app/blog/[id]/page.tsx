import NotFound from '@/app/not-found';
import SingleBlog from '@/components/blog/SingleBlog';
import { Footer } from '@/components/shared/Footer';
import { Navbar } from '@/components/shared/Navbar';
import { StaticImageData } from 'next/image';


interface Blog {
  image: StaticImageData;
  title: string;
  view: string;
  content: string;
  id: number | string;
  category: string;
}

const SingleBlogPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const res = await fetch('http://localhost:4000/blogs', { cache: 'no-store' });
  const blogs = await res.json();

  const blog = blogs.find((blog: Blog) => blog.id === id);

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
