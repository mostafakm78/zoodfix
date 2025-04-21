import { Blog } from '@/components/Home/Blog';
import { Customers } from '@/components/Home/Customers';
import { Footer } from '@/components/shared/Footer';
import { Products } from '@/components/Home/Porducts';
import { Slider } from '@/components/Home/Slider';
import { WhySection } from '@/components/Home/WhySection';
import { NavbarHome } from '@/components/Home/NavbarHome';

export default function Home() {
  return (
    <div>
      <NavbarHome />
      <Slider />
      <WhySection />
      <Products />
      <Blog />
      <Customers />
      <Footer />
    </div>
  );
}
