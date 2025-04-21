import { Blog } from '@/components/Home/Blog';
import { Customers } from '@/components/Home/Customers';
import { Footer } from '@/components/Home/Footer';
import { Products } from '@/components/Home/Porducts';
import { Slider } from '@/components/Home/Slider';
import { WhySection } from '@/components/Home/WhySection';
import { Navbar } from '@/components/Home/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <WhySection />
      <Products />
      <Blog />
      <Customers />
      <Footer />
    </div>
  );
}
