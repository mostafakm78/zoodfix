'use client';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BiNews } from 'react-icons/bi';
import { ImSpinner2 } from 'react-icons/im';

type BlogsList = {
  image: StaticImageData;
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
  // loading
  const [loading, setLoading] = useState<boolean>(true);

  // result with filter or none
  const filteredBlogs = activeCategory ? blogs.filter((blog) => blog.category === activeCategory) : blogs;

  // set loading timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [loading]);

  // fake date for every post
  const now = new Date();
  const iranianDate = new Intl.DateTimeFormat('fa-IR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now);

  return (
    <div className="container mx-auto">
      <section className="bg-background grid lg:grid-cols-[3fr_8fr] grid-cols-1 gap-10 xl:px-20 px-8 pb-20 pt-20">
        {/* blog categories  */}
        <div className="bg-third rounded-xl lg:p-10 p-3 self-start shadow-lg">
          <div className="flex flex-col items-center space-y-2">
            <h4 className='text-lg relative after:content-[""] after:absolute after:w-full after:bg-foreground after:h-0.5 after:-bottom-1 after:right-0 mb-8'>دسته بندی مطالب</h4>
            <Link href={`/blog?page=1&category=siteNews`} onClick={() => setLoading(true)} className="flex flex-wrap items-center space-x-2 hover:scale-105 duration-300">
              <BiNews />
              <h3>خبر های سایت</h3>
              <span>({allblogs.filter((blog) => blog.category === 'siteNews').length})</span>
            </Link>
            <Link href={`/blog?page=1&category=learnNews`} onClick={() => setLoading(true)} className="flex flex-wrap items-center space-x-2 hover:scale-105 duration-300">
              <BiNews />
              <h3>خبر های فوری</h3>
              <span>({allblogs.filter((blog) => blog.category === 'learnNews').length})</span>
            </Link>
            <Link href={`/blog?page=1`} onClick={() => setLoading(true)} className="flex flex-wrap items-center space-x-2 hover:scale-105 duration-300">
              <BiNews />
              <h3>نمایش همه</h3>
              <span>({allblogs.length})</span>
            </Link>
          </div>
        </div>

        {/* blog list  */}
        <div className={loading ? 'grid' : 'grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 xl:gap-10 lg:gap-5 gap-8'}>
          {loading ? (
            <div className="flex items-center text-2xl space-x-3 justify-center">
              <div className="text-center animate-bounce text-gray-500">درحال بارگزاری ...</div>
              <ImSpinner2 className="animate-spin" />
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">هیچ مطلبی پیدا نشد.</div>
          ) : (
            filteredBlogs.map((blog) => (
              <Link href={`/blog/${blog.id}`} key={blog.id} className="bg-third rounded-t-[20px] shadow-lg hover:ring-1 hover:ring-secondery duration-300 hover:shadow-secondery hover:shadow-lg flex flex-col rounded-b-2xl w-full lg:max-w-[400px]">
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
