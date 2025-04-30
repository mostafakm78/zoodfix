'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { ProductsItemSliderHome } from '../../../types/types';
import Link from 'next/link';

// photos
import Ct1 from '../../../public/images/Ct1.png';
import Ct2 from '../../../public/images/Ct2.png';
import Ct3 from '../../../public/images/Ct3.png';
import Ct4 from '../../../public/images/Ct4.png';

const Products: ProductsItemSliderHome[] = [
  { image: Ct1, link: '/products?page=1&category=سیمان', title: 'سیمان' },
  { image: Ct2, link: '/products?page=1&category=محصولات فروشگاهی', title: 'محصولات فروشگاهی' },
  { image: Ct3, link: '/products?page=1&category=ملات خشک', title: 'ملات خشک' },
  { image: Ct4, link: '/products?page=1&category=چسب ها', title: 'چسب ها' },
];

export const ProductsSlider: React.FC = () => {
  return (
    <>
      {/* slider settings  */}
      <Swiper
        navigation={true}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
        className="mySwiper w-full h-[300px] [&_.swiper-button-next]:after:text-gray-700 [&_.swiper-button-prev]:after:text-gray-700"
      >
        {/* products slider with map  */}
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
