import { Suspense } from 'react';
import Pagination from '@/components/blog/Pagination';
import { Footer } from '@/components/shared/Footer';
import { Navbar } from '@/components/shared/Navbar';
import { redirect } from 'next/navigation';
import { ImSpinner8 } from 'react-icons/im';
import Image from 'next/image';
import Blog from '@/components/blog/Blog';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'بلاگ ها',
  description: 'صفحه بلاگ های زود فیکس',
  openGraph: {
    title: 'صفحه بلاگ ها',
    description: 'صفحه بلاگ های زودفیکس',
    images: [{ url: '/images/Products/loading.jpg', alt: 'تصویر سایت' }],
    url: `https://yourdomain.com/blog`,
    type: 'article',
  },
};

// photo
import loadingImage from '../../../public/images/Products/loading.jpg';

const BlogPage = async ({ searchParams }: { searchParams: Promise<{ page?: string; category?: string }> }) => {
  const data = await fetch(`${process.env.NEXT}/blogs`);
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
      <Suspense
        fallback={
          <div className="flex items-center text-2xl min-h-[300px] space-x-3 justify-center">
            <div className="relative text-center rounded-full text-gray-500 w-[100px] h-[100px]">
              <Image src={loadingImage} alt="loading image" className="rounded-full" width={100} height={100} />
              <ImSpinner8 className="animate-spin absolute h-[120px] w-[130px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-300" />
            </div>
          </div>
        }
      >
        <Blog blogs={currentBlogs} allblogs={allBlogs} activeCategory={category} />
      </Suspense>
      <Pagination currentPage={page} totalPages={totalPages} category={category} />
      <Footer />
    </>
  );
};

export default BlogPage;
