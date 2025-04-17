import Image from 'next/image';
import Slider1 from '../../../public/images/slider1.jpg';
import { Navbar } from '../shared/Navbar';

export const Slider = () => {
  return (
    <div>
      <Navbar />
      <Image src={Slider1} alt="slider" className="w-full" />
      <div className="h-72"></div>
    </div>
  );
};
