import Pagination from '@/components/products/Pagination';
import Prodcuts from '@/components/products/Products';
import { Footer } from '@/components/shared/Footer';
import { Navbar } from '@/components/shared/Navbar';
import { redirect } from 'next/navigation';

const ProductsPage = async ({ searchParams }: { searchParams: { page?: string; category?: string } }) => {
  const data = await fetch('http://localhost:4000/products');
  const products = await data.json();

  const URL_query = await searchParams;

  const page = Number(URL_query.page) || 1;
  const category = URL_query.category || null;

  const filteredProducts = category ? products.filter((product: { product: string; category: string }) => product.category === category) : products;

  const ProductsPerPage = 6;
  const totalPages = Math.ceil(filteredProducts.length / ProductsPerPage);

  if (totalPages > 0 && page > totalPages) redirect('/products?page=1');

  const start = (page - 1) * totalPages;
  const end = start + ProductsPerPage;
  const currentProducts = filteredProducts.slice(start, end);

  return (
    <>
      <Navbar />
      <Prodcuts currentProducts={currentProducts} allProducts={products} activeCategory={category} />
      <Pagination currentPage={page} totalPages={totalPages} category={category} />
      <Footer />
    </>
  );
};

export default ProductsPage;
