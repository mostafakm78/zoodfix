'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './styles.css';
import { Autoplay } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image';

// photos
import Customer1 from '../../../public/images/Customers/1.png';
import Customer2 from '../../../public/images/Customers/2.png';
import Customer3 from '../../../public/images/Customers/3.png';
import Customer4 from '../../../public/images/Customers/4.png';
import Customer5 from '../../../public/images/Customers/5.png';
import Customer6 from '../../../public/images/Customers/6.png';

// type of customers 
type CustomersItem = {
  image: StaticImageData;
};

const Customers: CustomersItem[] = [{ image: Customer1 }, { image: Customer2 }, { image: Customer3 }, { image: Customer4 }, { image: Customer5 }, { image: Customer6 }];

export const CustomersSlider: React.FC = () => {
  return (
    <>
      {/* customers slider settings  */}
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
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
        className="mySwiper h-[250px]"
      >
        {/* customers slider with map  */}
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
