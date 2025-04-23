import SingleProduct from '@/components/products/SingleProduct';
import { Footer } from '@/components/shared/Footer';
import { Navbar } from '@/components/shared/Navbar';

const SingleProductPage = () => {
  return (
    <>
      <Navbar />
      <SingleProduct />
      <Footer />
    </>
  );
};

export default SingleProductPage;
