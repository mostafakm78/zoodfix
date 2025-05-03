'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './styles.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BlogsList } from '../../../types/types';

export const BlogCard: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogsList[]>([]);

  // get last 8 blogs from server
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${process.env.NEXT}/blogs`);
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    fetchBlogs();
  }, []);

  const now = new Date();
  const iranianDate = new Intl.DateTimeFormat('fa-IR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now);

  return (
    <>
      {/* wait for load blogs on slider  */}
      {blogs.length > 0 && (
        <Swiper
          navigation
          loop
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            1200: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 2, spaceBetween: 30 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            480: { slidesPerView: 1, spaceBetween: 10 },
          }}
          className="mySwiper h-[400px]"
        >
          {blogs.length === 0 ? (
            <div className="text-center">مطلبی برای نمایش وجود ندارد.</div>
          ) : (
            // map last 8 blogs
            blogs.slice(0, 8).map((item) => (
              <SwiperSlide key={item.id}>
                <Link href={`/blog/${item.id}`} className="bg-third rounded-t-[20px] flex flex-col rounded-b-2xl w-full max-w-[400px]">
                  <div className="relative w-full h-[250px]">
                    <Image src={item.image} width={400} height={400} alt="Blog Photo" className="object-cover w-full h-full rounded-t-[20px]" />
                    <div className="absolute bottom-0 left-0 w-full h-[80px] bg-gradient-to-t rounded-b-[20px] from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 right-4 w-[90%] text-white z-10 font-bold text-sm leading-tight break-words text-right line-clamp-2 flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-300 inline-block"></span>
                      {item.title}
                    </div>
                  </div>
                  <div className="flex justify-around py-2 opacity-60 text-xs">
                    <span>{item.view} بازدید</span>
                    <span>{iranianDate}</span>
                  </div>
                </Link>
              </SwiperSlide>
            ))
          )}
        </Swiper>
      )}
    </>
  );
};
