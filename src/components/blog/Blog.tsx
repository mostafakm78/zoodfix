'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTransition } from 'react';
import { BiNews } from 'react-icons/bi';
import { ImSpinner8 } from 'react-icons/im';
import { useRouter, useSearchParams } from 'next/navigation';

// photo
import loadingImage from '../../../public/images/Products/loading.jpg';

type BlogsList = {
  image: string;
  title: string;
  view: string;
  content: string;
  id: number | string;
  category: string;
};

type BlogProps = {
  blogs: BlogsList[];
  allblogs: BlogsList[];
  activeCategory: string | null;
};

const Blog = ({ blogs, allblogs, activeCategory }: BlogProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  // fake date for every post
  const now = new Date();
  const iranianDate = new Intl.DateTimeFormat('fa-IR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now);

  const handleNavigation = (href: string) => {
    startTransition(() => {
      router.push(href);
    });
  };

  // get active category from url
  const categoryParam = searchParams.get('category');
  const isActiveCategory = (category: string) => categoryParam === category;

  // if category is not selected, show all blogs
  const isAllBlogsActive = !categoryParam;

  // result with filter or none
  const filteredBlogs = activeCategory ? blogs.filter((blog) => blog.category === activeCategory) : blogs;

  return (
    <div className="container mx-auto">
      <section className="bg-background min-h-screen grid lg:grid-cols-[3fr_8fr] grid-cols-1 gap-10 xl:px-20 px-8 pb-20 pt-20">
        {/* blog categories */}
        <div className="bg-third rounded-xl lg:p-10 p-3 self-start shadow-lg">
          <div className="flex flex-col items-center space-y-2">
            <h4 className='text-lg relative after:content-[""] after:absolute after:w-full after:bg-foreground after:h-0.5 after:-bottom-1 after:right-0 mb-8'>دسته بندی مطالب</h4>
            <button onClick={() => handleNavigation('/blog?page=1')} className={`flex flex-wrap items-center space-x-2 hover:scale-105 duration-300 ${isAllBlogsActive ? 'text-secondery' : 'text-black'}`}>
              <BiNews />
              <h3>نمایش همه</h3>
              <span>({allblogs.length})</span>
            </button>
            <button onClick={() => handleNavigation('/blog?page=1&category=siteNews')} className={`flex flex-wrap items-center space-x-2 hover:scale-105 duration-300 ${isActiveCategory('siteNews') ? 'text-secondery' : 'text-black'}`}>
              <BiNews />
              <h3>خبر های سایت</h3>
              <span>({allblogs.filter((blog) => blog.category === 'siteNews').length})</span>
            </button>
            <button onClick={() => handleNavigation('/blog?page=1&category=learnNews')} className={`flex flex-wrap items-center space-x-2 hover:scale-105 duration-300 ${isActiveCategory('learnNews') ? 'text-secondery' : 'text-black'}`}>
              <BiNews />
              <h3>خبر های فوری</h3>
              <span>({allblogs.filter((blog) => blog.category === 'learnNews').length})</span>
            </button>
          </div>
        </div>

        {/* blog list */}
        <div className={isPending ? 'grid' : 'grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 xl:gap-10 lg:gap-5 gap-8'}>
          {isPending ? (
            <div className="flex items-center text-2xl min-h-[300px] space-x-3 justify-center">
              <div className="relative text-center rounded-full text-gray-500 w-[100px] h-[100px]">
                <Image src={loadingImage} alt="loading image" className="rounded-full" width={100} height={100} />
                <ImSpinner8 className="animate-spin absolute h-[120px] w-[130px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-300" />
              </div>
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">هیچ مطلبی پیدا نشد.</div>
          ) : (
            filteredBlogs.map((blog) => (
              <Link href={`/blog/${blog.id}`} key={blog.id} className="bg-third rounded-t-[20px] shadow-lg hover:ring-1 hover:ring-secondery duration-300 max-h-[400px] hover:shadow-secondery hover:shadow-lg flex flex-col rounded-b-2xl w-full lg:max-w-[400px]">
                <div className="relative w-full h-[250px]">
                  <Image src={blog.image} width={500} height={500} alt="Blog Photo" className="object-cover w-full h-full rounded-b-[20px] rounded-t-[20px]" />
                  <div className="absolute bottom-0 left-0 w-full h-[80px] bg-gradient-to-t rounded-b-[20px] from-black/70 to-transparent"></div>
                </div>
                <div className="flex flex-col space-y-2 px-4 justify-around py-4 text-xs">
                  <h3 className="text-foreground font-bold opacity-85 text-sm break-words text-right line-clamp-2">{blog.title}</h3>
                  <span className="text-foreground opacity-70 text-sm break-words text-justify line-clamp-2">{blog.content}</span>
                  <span className="text-sm text-foreground opacity-80">{iranianDate}</span>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
