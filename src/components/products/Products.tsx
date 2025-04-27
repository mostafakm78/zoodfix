'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaChevronLeft } from 'react-icons/fa6';
import { useEffect, useState } from 'react';

// photo

type ProductItem = {
  id: number;
  title: string;
  image: string;
  category: string;
  weight: string;
};

interface productsProps {
  currentProducts: ProductItem[];
  allProducts: ProductItem[];
  activeCategory: string | null;
}

const Prodcuts = ({ currentProducts, allProducts, activeCategory }: productsProps) => {
  const [loading, setLoading] = useState<boolean>(true);

  const filteredProducts = activeCategory ? currentProducts.filter((item) => item.category === activeCategory) : currentProducts;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <div className="container mx-auto">
      <section className="bg-background grid lg:grid-cols-[3fr_8fr] grid-cols-1 gap-10 xl:px-20 px-8 pb-20 pt-20">
        {/* products categories  */}
        <div className="flex flex-col self-start">
          <div className="flex bg-third rounded-xl lg:p-10 p-3 flex-col shadow-lg items-center space-y-2">
            <h4 className='text-lg relative after:content-[""] after:absolute after:w-full after:bg-foreground after:h-0.5 after:-bottom-1 after:right-0 mb-8'>دسته بندی محصولات</h4>
            <Link href={`/products?page=1&category='ملات خشک'`} className="flex flex-wrap text-sm items-center space-x-2 hover:scale-105 duration-300">
              <FaChevronLeft />
              <h3>ملات خشک</h3>
              <span>({allProducts.filter((product) => product.category === 'ملات خشک').length})</span>
            </Link>
            <Link href={`/products?page=1&category='سیمان'`} className="flex flex-wrap text-sm items-center space-x-2 hover:scale-105 duration-300">
              <FaChevronLeft />
              <h3>سیمان</h3>
              <span>({allProducts.filter((product) => product.category === 'سیمان').length})</span>
            </Link>
            <Link href={`/products?page=1&category='محصولات فروشگاهی'`} className="flex flex-wrap text-sm items-center space-x-2 hover:scale-105 duration-300">
              <FaChevronLeft />
              <h3>محصولات فروشگاهی</h3>
              <span>({allProducts.filter((product) => product.category === 'محصولات فروشگاهی').length})</span>
            </Link>
            <Link href={`/products?page=1&category='چسب ها'`} className="flex flex-wrap text-sm items-center space-x-2 hover:scale-105 duration-300">
              <FaChevronLeft />
              <h3>چسب ها</h3>
              <span>({allProducts.filter((product) => product.category === 'چسب ها').length})</span>
            </Link>
            <Link href={`/products?page=1`} className="flex flex-wrap text-sm items-center space-x-2 hover:scale-105 duration-300">
              <FaChevronLeft />
              <h3>همه محصولات</h3>
              <span>({allProducts.length})</span>
            </Link>
          </div>
        </div>

        {/* products list  */}
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 xl:gap-10 lg:gap-5 gap-8">
          {filteredProducts.map((prod, index) => (
            <Link href="" key={index} className="bg-third rounded-t-[20px] shadow-lg hover:ring-1 hover:ring-secondery duration-300 hover:shadow-secondery hover:shadow-lg flex flex-col rounded-b-2xl w-full lg:max-w-[400px]">
              <div className="relative w-full h-[250px]">
                <Image src={prod.image ? prod.image : '/images/Products/loading.jpg'} width={500} height={500} alt="Blog Photo" className="object-cover w-full h-full rounded-b-[20px] rounded-t-[20px]" />
                <div className="absolute bottom-0 left-0 w-full h-[80px] bg-gradient-to-t rounded-b-[20px] from-black/70 to-transparent"></div>
              </div>
              <div className="flex lg:flex-col items-center space-y-2 px-4 justify-around py-4 text-xs">
                <h3 className="text-foreground font-bold opacity-85 text-sm break-words text-right line-clamp-2">{prod.title}</h3>
                <span className="text-foreground opacity-70 text-sm break-words text-justify line-clamp-2">{prod.category}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Prodcuts;
