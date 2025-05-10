'use client';

import Image from 'next/image';
import { ProductsSlider } from './ProdcutsSlider';
import { motion } from 'framer-motion';

// photo
import PicDot from '../../../public/images/pic-dot.png';

export const Products: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 100 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
      <section className="container mx-auto lg:px-32 px-14">
        {/* products title */}
        <div className="flex flex-col space-y-3">
          <Image src={PicDot} alt="corner" width={30} />
          <div className="text-justify space-y-1.5">
            <h3 className="md:text-5xl text-3xl font-semibold opacity-80">لیـست</h3>
            <h3 className="md:text-3xl text-xl text-secondery font-semibold">محصولات ما</h3>
          </div>
        </div>

        {/* products slider component  */}
        <ProductsSlider />
      </section>
    </motion.div>
  );
};
