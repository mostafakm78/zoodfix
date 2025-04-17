import Image from 'next/image';
import Logo from '../../../public/images/logo.png';
import Link from 'next/link';
import { IoCall } from 'react-icons/io5';

export const Navbar = () => {
  return (
    <section className="absolute top-10 px-20 flex justify-evenly items-center w-full">
      <div>
        <Image src={Logo} alt="Brand Logo" width={250} />
      </div>
      <div className="w-2/4 text-background flex space-x-3 justify-start">
        <Link href="">صفحه اصلی</Link>
        <Link href="">محصولات و خدمات</Link>
        <Link href="">مقالات</Link>
        <Link href="">درباره زودفیکس</Link>
        <Link href="">ارتباط با ما</Link>
        <Link href="">استخدام</Link>
      </div>
      <div className="">
        <Link href="">
          <span>پشتیبانی سریع</span>
          <span>09169799533</span>
          <span className="bg-rose-700 w-6 h-6 rounded-full">
            <IoCall />
          </span>
        </Link>
      </div>
    </section>
  );
};
