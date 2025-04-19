import Image from 'next/image';
import PicDot from '../../../public/images/pic-dot.png';
import Ct1 from '../../../public/images/Ct1.png';
import Ct2 from '../../../public/images/Ct2.png';
import Ct3 from '../../../public/images/Ct3.png';
import Ct4 from '../../../public/images/Ct4.png';
import Link from 'next/link';

export const Products = () => {
  return (
    <section className="container mx-auto px-32 mt-16">
      <div className="flex flex-col space-y-3">
        <Image src={PicDot} alt="corner" width={30} />
        <div className="text-justify space-y-1.5">
          <h3 className="text-5xl font-semibold opacity-80">لیـست</h3>
          <h3 className="text-3xl text-secondery font-semibold">محصولات ما</h3>
        </div>
      </div>
      <div className="flex gap-14 justify-center mt-10">
        <Link href="" className="flex flex-col items-center">
          <Image src={Ct4} alt="category" />
          <span className="font-semibold mt-4">سیمان</span>
        </Link>
        <Link href="" className="flex flex-col items-center">
          <Image src={Ct1} alt="category" />
          <span className="font-semibold mt-4">محصولات فروشگاهی</span>
        </Link>
        <Link href="" className="flex flex-col items-center">
          <Image src={Ct3} alt="category" />
          <span className="font-semibold mt-4">ملات خشک</span>
        </Link>
        <Link href="" className="flex flex-col items-center">
          <Image src={Ct2} alt="category" />
          <span className="font-semibold mt-4">چسب ها</span>
        </Link>
      </div>
    </section>
  );
};
