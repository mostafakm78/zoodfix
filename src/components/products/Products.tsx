'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaChevronLeft } from 'react-icons/fa6';
import { useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ImSpinner8 } from 'react-icons/im';
import { ProductItem } from '../../../types/types';

// photo
import loadingImage from '../../../public/images/Products/loading.jpg';

interface productsProps {
  currentProducts: ProductItem[];
  allProducts: ProductItem[];
  activeCategory: string | null;
}

const Prodcuts = ({ currentProducts, allProducts, activeCategory }: productsProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, setIsPending] = useTransition();

  const handleNavigation = (href: string) => {
    setIsPending(() => {
      router.push(href);
    });
  };

  // get active category from url
  const categoryParam = searchParams.get('category');
  const isActiveCategory = (category: string) => categoryParam === category;

  // if category is not selected, show all products
  const isAllProductsActive = !categoryParam;

  // check if the category is selected and filter products
  const filteredProducts = activeCategory ? currentProducts.filter((item) => item.category === activeCategory) : currentProducts;

  return (
    <div className="container mx-auto">
      <section className="bg-background min-h-screen grid lg:grid-cols-[3fr_8fr] grid-cols-1 gap-10 xl:px-20 px-8 pb-20 pt-20">
        {/* products categories  */}
        <div className="flex flex-col self-start">
          <div className="flex bg-third rounded-xl lg:p-10 p-3 flex-col shadow-lg items-center space-y-2">
            <h4 className='text-lg relative after:content-[""] after:absolute after:w-full after:bg-foreground after:h-0.5 after:-bottom-1 after:right-0 mb-8'>دسته بندی محصولات</h4>
            {/* دکمه همه محصولات */}
            <button onClick={() => handleNavigation('/products?page=1')} className={`flex flex-wrap text-sm items-center space-x-2 hover:scale-105 duration-300 ${isAllProductsActive ? 'text-secondery' : 'text-black'}`}>
              <FaChevronLeft />
              <h3>همه محصولات</h3>
              <span>({allProducts.length})</span>
            </button>
            {['ملات خشک', 'سیمان', 'محصولات فروشگاهی', 'چسب ها'].map((category) => (
              <button key={category} onClick={() => handleNavigation(`/products?page=1&category=${category}`)} className={`flex flex-wrap text-sm items-center space-x-2 hover:scale-105 duration-300 ${isActiveCategory(category) ? 'text-secondery' : 'text-black'}`}>
                <FaChevronLeft />
                <h3>{category}</h3>
                <span>({allProducts.filter((product) => product.category === category).length})</span>
              </button>
            ))}
          </div>
        </div>

        {/* products list  */}
        <div className={isPending ? 'grid' : 'grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 xl:gap-10 lg:gap-5 gap-8'}>
          {isPending ? (
            <div className="flex items-center text-2xl min-h-[300px] space-x-3 justify-center">
              <div className="relative text-center rounded-full text-gray-500 w-[100px] h-[100px]">
                <Image src={loadingImage} alt="loading image" className="rounded-full" width={100} height={100} />
                <ImSpinner8 className="animate-spin absolute h-[120px] w-[130px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-300" />
              </div>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">هیچ مطلبی پیدا نشد.</div>
          ) : (
            filteredProducts.map((prod, index) => (
              <Link href={`/products/${prod.id}`} key={index} className="bg-third rounded-t-[20px] shadow-lg hover:ring-1 hover:ring-secondery duration-300 max-h-[330px] hover:shadow-secondery hover:shadow-lg flex flex-col rounded-b-2xl w-full lg:max-w-[400px]">
                <div className="relative w-full h-[250px]">
                  <Image src={prod.image ? prod.image : '/images/Products/loading.jpg'} width={500} height={500} alt="Blog Photo" className="object-cover w-full h-full rounded-b-[20px] rounded-t-[20px]" />
                  <div className="absolute bottom-0 left-0 w-full h-[80px] bg-gradient-to-t rounded-b-[20px] from-black/70 to-transparent"></div>
                </div>
                <div className="flex lg:flex-col items-center space-y-2 space-x-1 px-4 justify-around py-4 text-xs">
                  <h3 className="text-foreground font-bold opacity-85 text-sm text-right line-clamp-1">{prod.title}</h3>
                  <span className="text-foreground opacity-70 text-sm break-words text-justify line-clamp-2">{prod.category}</span>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Prodcuts;
