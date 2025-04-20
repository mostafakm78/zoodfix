'use client';

import One from '../../../public/images/Blog/1.jpg';
import Two from '../../../public/images/Blog/2.jpg';
import Three from '../../../public/images/Blog/3.jpg';
import Four from '../../../public/images/Blog/4.jpg';
import Five from '../../../public/images/Blog/5.jpg';
import Six from '../../../public/images/Blog/6.jpg';
import Seven from '../../../public/images/Blog/7.jpg';
import Eight from '../../../public/images/Blog/8.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './styles.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

const Blog = [
  { image: One, title: 'پیام تبریک کارخانه زودفیکس', view: '111 بازدید' },
  { image: Two, title: 'پیام تبریک کارخانه زودفیکس', view: '111 بازدید' },
  { image: Three, title: 'پیام تبریک کارخانه زودفیکس', view: '111 بازدید' },
  { image: Four, title: 'پیام تبریک کارخانه زودفیکس', view: '111 بازدید' },
  { image: Five, title: 'پیام تبریک کارخانه زودفیکس', view: '111 بازدید' },
  { image: Six, title: 'پیام تبریک کارخانه زودفیکس', view: '111 بازدید' },
  { image: Seven, title: 'پیام تبریک کارخانه زودفیکس', view: '111 بازدید' },
  { image: Eight, title: 'پیام تبریک کارخانه زودفیکس', view: '111 بازدید' },
];

export const BlogCard = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // برای صفحه‌های بزرگ
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // برای صفحه‌های متوسط
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // برای صفحه‌های کوچک
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
        className="mySwiper h-[400px]"
      >
        {Blog.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-background rounded-t-[20px] flex flex-col rounded-b-2xl w-full max-w-[400px]">
              <div className="relative w-full h-[250px]">
                <Image src={item.image} alt="Blog Photo" className="object-cover w-full h-full rounded-t-[20px]" />
                <div className="absolute bottom-0 left-0 w-full h-[80px] bg-gradient-to-t rounded-b-[20px] from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 right-4 w-[90%] text-white z-10 font-bold text-sm leading-tight break-words text-right line-clamp-2 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300 inline-block"></span>
                  {item.title}
                </div>
              </div>
              <div className="flex justify-around py-2 opacity-60 text-xs">
                <span>{item.view}</span>
                <span>تاریخ</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
