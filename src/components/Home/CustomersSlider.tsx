'use client';

import Customer1 from '../../../public/images/Customers/1.png';
import Customer2 from '../../../public/images/Customers/2.png';
import Customer3 from '../../../public/images/Customers/3.png';
import Customer4 from '../../../public/images/Customers/4.png';
import Customer5 from '../../../public/images/Customers/5.png';
import Customer6 from '../../../public/images/Customers/6.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './styles.css';

import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

const Customers = [{ image: Customer1 }, { image: Customer2 }, { image: Customer3 }, { image: Customer4 }, { image: Customer5 }, { image: Customer6 }];

export const CustomersSlider = () => {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        modules={[Autoplay]}
        breakpoints={{
          1200: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
          // برای صفحه‌های بزرگ
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          // برای صفحه‌های متوسط
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // برای صفحه‌های کوچک
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
        className="mySwiper h-[250px]"
      >
        {Customers.map((custom, index) => (
          <SwiperSlide key={index}>
            <div className="hover:shadow-xl">
              <Image src={custom.image} alt="customer" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
