import Image from 'next/image';
import PicDot from '../../../public/images/pic-dot.png';
import Link from 'next/link';
import { BlogCard } from './BlogCard';

export const Blog: React.FC = () => {
  return (
    <>
      {/* blog section on home page */}
      <section className="container mx-auto lg:px-32 px-14 mt-20">
        {/* title and view all button */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col space-y-3">
            <div className="text-justify space-y-1.5">
              <h3 className="md:text-3xl text-xl font-semibold opacity-80">اخبار و مقالات</h3>
              <h3 className="md:text-3xl text-xl text-secondery font-semibold">زودفیکس</h3>
            </div>
            <Image src={PicDot} alt="corner" width={30} />
          </div>
          <Link href="" className="lg:ml-16 bg-secondery lg:text-xl px-6 py-2 rounded-full text-background shadow-xl hover:scale-110 duration-200">
            مشاهده همه
          </Link>
        </div>

        {/* blog card and slider component */}
        <BlogCard />
      </section>
    </>
  );
};
