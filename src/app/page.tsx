import { Blog } from '@/components/Home/Blog';
import { Customers } from '@/components/Home/Customers';
import { Products } from '@/components/Home/Porducts';
import { Slider } from '@/components/Home/Slider';
import { WhySection } from '@/components/Home/WhySection';
import { Navbar } from '@/components/shared/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <WhySection />
      <Products />
      <Blog />
      <Customers />
    </div>
  );
}
