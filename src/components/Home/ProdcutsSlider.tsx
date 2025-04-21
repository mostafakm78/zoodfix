'use client';

import Ct1 from '../../../public/images/Ct1.png';
import Ct2 from '../../../public/images/Ct2.png';
import Ct3 from '../../../public/images/Ct3.png';
import Ct4 from '../../../public/images/Ct4.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './styles.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

const Products = [
  { image: Ct1, link: '/', title: 'سیمان' },
  { image: Ct2, link: '/', title: 'محصولات فروشگاهی' },
  { image: Ct3, link: '/', title: 'ملات خشک' },
  { image: Ct4, link: '/', title: 'چسب ها' },
];

export const ProductsSlider = () => {
  return (
    <>
      <Swiper
        navigation={true}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          1200: {
            slidesPerView: 4,
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
            spaceBetween: 20,
          },
        }}
        className="mySwiper w-full h-[300px]"
      >
        {Products.map((product, index) => (
          <SwiperSlide key={index}>
            <Link href={product.link} className="flex flex-col items-center">
              <Image src={product.image} alt="category" className="h-[200px]" />
              <span className="font-semibold mt-4">{product.title}</span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
