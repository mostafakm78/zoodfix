import NotFound from '@/app/not-found';
import SingleProduct from '@/components/products/SingleProduct';
import { Footer } from '@/components/shared/Footer';
import { Navbar } from '@/components/shared/Navbar';
import { Metadata } from 'next';
import { ProductItem } from '../../../../types/types';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const res = await fetch(`${process.env.NEXT}/products`, { cache: 'no-store' });
  const products: ProductItem[] = await res.json();
  const product: ProductItem | undefined = products.find((product) => product.id === id);

  if (!product) {
    return {
      title: 'محصول یافت نشد',
    };
  }

  return {
    title: product.title,
    description: product.category, // Corrected this line to use `product.description`
    openGraph: {
      title: product.title,
      description: product.category, // Corrected this line to use `product.description`
      images: [{ url: product.image }], // Corrected to use `product.image`
      url: `https://zoodfix.vercel.app/products/${id}`, // Corrected to use `param.id`
      type: 'website',
    },
  };
}

const SingleProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const res = await fetch(`${process.env.NEXT}/products`, { cache: 'no-store' });
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
