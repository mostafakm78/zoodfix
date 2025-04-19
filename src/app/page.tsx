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
    </div>
  );
}
