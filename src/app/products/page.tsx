import Pagination from '@/components/products/Pagination';
import Prodcuts from '@/components/products/Products';
import { Footer } from '@/components/shared/Footer';
import { Navbar } from '@/components/shared/Navbar';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import { ImSpinner8 } from 'react-icons/im';
import { Metadata } from 'next';

// photo
import loadingImage from '../../../public/images/Products/loading.jpg';

export const metadata: Metadata = {
  title: 'صفحه محصولات',
  description: 'صفحه محصولات زودفیکس',
  openGraph: {
    title: 'صفحه محصولات',
    description: 'صفحه محصولات زودفیکس',
    images: [{ url: '/images/Products/loading.jpg', alt: 'تصویر سایت' }],
    url: `https://zoodfix.vercel.app/products`,
    type: 'website',
  },
};

const ProductsPage = async ({ searchParams }: { searchParams: Promise<{ page?: string; category?: string }> }) => {
  const data = await fetch(`${process.env.NEXT}/products`);
  const products = await data.json();

  const URL_query = await searchParams;

  const page = Number(URL_query.page) || 1;
  const category = URL_query.category || null;

  const filteredProducts = category ? products.filter((product: { product: string; category: string }) => product.category === category) : products;

  const ProductsPerPage = 9;
  const totalPages = Math.ceil(filteredProducts.length / ProductsPerPage);

  if (totalPages > 0 && page > totalPages) redirect('/products?page=1');

  const start = (page - 1) * totalPages;
  const end = start + ProductsPerPage;
  const currentProducts = filteredProducts.slice(start, end);

  return (
    <>
      <Navbar />
      <Suspense
        fallback={
          <div className="flex items-center text-2xl min-h-[300px] space-x-3 justify-center">
            <div className="relative text-center rounded-full text-gray-500 w-[100px] h-[100px]">
              <Image src={loadingImage} alt="loading image" className="rounded-full" width={100} height={100} />
              <ImSpinner8 className="animate-spin absolute h-[120px] w-[130px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-300" />
            </div>
          </div>
        }
      >
        <Prodcuts currentProducts={currentProducts} allProducts={products} activeCategory={category} />
      </Suspense>
      <Pagination currentPage={page} totalPages={totalPages} category={category} />
      <Footer />
    </>
  );
};

export default ProductsPage;
