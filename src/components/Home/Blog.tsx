import Image from 'next/image';
import PicDot from '../../../public/images/pic-dot.png';
import Link from 'next/link';
import { BlogCard } from './BlogCard';

export const Blog = () => {
  return (
    <>
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
        <BlogCard />
      </section>
    </>
  );
};
