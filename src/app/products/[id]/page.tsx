import NotFound from '@/app/not-found';
import SingleProduct from '@/components/products/SingleProduct';
import { Footer } from '@/components/shared/Footer';
import { Navbar } from '@/components/shared/Navbar';

const SingleProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:4000/products`, { cache: 'no-store' });
  const products = await res.json();

  const product = products.find((product: { id: string }) => product.id === id);

  if (!product) {
    return NotFound();
  }

  return (
    <>
      <Navbar />
      <SingleProduct product={product} />
      <Footer />
    </>
  );
};

export default SingleProductPage;
