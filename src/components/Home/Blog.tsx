import Image from 'next/image';
import PicDot from '../../../public/images/pic-dot.png';
import Ct1 from '../../../public/images/Ct1.png';
import Ct2 from '../../../public/images/Ct2.png';
import Ct3 from '../../../public/images/Ct3.png';
import Ct4 from '../../../public/images/Ct4.png';
import Link from 'next/link';

export const Blog = () => {
  return (
    <section className="container mx-auto px-32 mt-20">
      <div className="flex items-center justify-between">
        <div className="flex flex-col space-y-3">
          <div className="text-justify space-y-1.5">
            <h3 className="text-3xl font-semibold opacity-80">اخبار و مقالات</h3>
            <h3 className="text-3xl text-secondery font-semibold">زودفیکس</h3>
          </div>
          <Image src={PicDot} alt="corner" width={30} />
        </div>
        <Link href="" className="ml-16 bg-secondery text-xl px-6 py-2 rounded-full text-background shadow-xl hover:scale-110 duration-200">
          مشاهده همه
        </Link>
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
