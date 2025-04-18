'use client';

import Image from 'next/image';
import Slider1 from '../../../public/images/slider1.jpg';
import Slider2 from '../../../public/images/slider2.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';

export const Slider = () => {
  return (
    <div className="relative [&_.swiper-button-next]:ml-24 font-extrabold [&_.swiper-button-next]:hover:scale-110 [&_.swiper-button-prev]:mr-24 [&_.swiper-button-prev]:hover:scale-110">
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-navigation-size': '20px',
        }}
        spaceBetween={30}
        loop={true}
        effect={'fade'}
        autoplay={{
          delay: 5000,
        }}
        navigation={true}
        modules={[Autoplay, Navigation, EffectFade]}
      >
        <SwiperSlide>
          <Image src={Slider1} alt="slider" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Slider2} alt="slider" className="w-full" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
