import Image from 'next/image';
import PicDot from '../../../public/images/pic-dot.png';
import { ProductsSlider } from './ProdcutsSlider';

export const Products = () => {
  return (
    <section className="container mx-auto lg:px-32 px-14">
      <div className="flex flex-col space-y-3">
        <Image src={PicDot} alt="corner" width={30} />
        <div className="text-justify space-y-1.5">
          <h3 className="md:text-5xl text-3xl font-semibold opacity-80">لیـست</h3>
          <h3 className="md:text-3xl text-xl text-secondery font-semibold">محصولات ما</h3>
        </div>
      </div>
      <ProductsSlider />
    </section>
  );
};
