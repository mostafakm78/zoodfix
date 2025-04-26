import Link from 'next/link';
import { FaRegBookmark } from 'react-icons/fa6';
import { AiOutlineDownSquare } from 'react-icons/ai';
import Image, { StaticImageData } from 'next/image';

interface Blog {
  image: StaticImageData;
  title: string;
  view: string;
  content: string;
  id: number;
  category: string;
}

interface SingleBlogProps {
  blog: Blog;
  blogs: Blog[];
}

const SingleBlog: React.FC<SingleBlogProps> = ({ blog, blogs }) => {
  const relatedBlogs = blogs.filter((b) => blog.category === b.category && b.id !== blog.id);

  return (
    <div className="container mx-auto">
      <section className="bg-background xl:px-60 px-20 pb-20 pt-20">
        <div className="space-y-20">
          {/* title and description section  */}
          <h3 className="font-bold lg:text-4xl text-2xl">{blog.title}</h3>
          <p className="text-justify lg:text-base/relaxed text-base/loose">{blog.content}</p>
          <div className="flex items-center justify-center">
            <Image src={blog.image} alt="blog image" width={500} height={500} />
          </div>

          {/* same blog section  */}
          {relatedBlogs.length > 0 && (
            <div className="bg-third lg:py-8 py-4 lg:px-16 px-8 shadow-lg flex lg:space-y-8 space-y-4 flex-col min-h-[100px] rounded-lg">
              <div className="flex items-center space-x-3">
                <FaRegBookmark />
                <h4 className="text-lg font-bold">مطالب مرتبط</h4>
              </div>
              <div className="flex flex-col">
                {relatedBlogs.map((item) => (
                  <Link
                    key={item.id}
                    href={`/blog/${item.id}`}
                    className="hover:bg-secondery relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bottom-0 after:right-0 after:bg-gray-300 hover:after:h-0 hover:after:duration-300 flex items-center space-x-3 lg:py-2 py-1 lg:px-4 px-2 rounded duration-300 hover:text-background"
                  >
                    <AiOutlineDownSquare className="text-lg" />
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* form for comment  */}
          <div className="bg-third lg:py-8 py-4 lg:px-16 px-8 shadow-lg flex lg:space-y-8 space-y-4 flex-col min-h-[100px] rounded-lg">
            <div>
              <p className="font-normal relative inline before:content-[''] before:absolute before:rounded-full before:w-2 before:h-2 before:bg-secondery before:bottom-2 before:-right-3 after:content-[''] after:absolute after:bg-black/60 after:w-full after:h-0.5 after:-bottom-1 after:right-0">
                نظر خود را برای ما ارسال کنید
              </p>
            </div>
            <div className="grid gap-10 lg:grid-cols-2 text-xl mt-4 opacity-80">
              <div>
                <div className="relative mb-10">
                  <input type="text" id="name" placeholder=" " className="peer w-full py-2 px-5 rounded-2xl border-2 border-gray-300 bg-third text-black outline-none focus:border-secondery" />
                  <label
                    htmlFor="name"
                    className="absolute right-4 -top-6 text-sm px-2 text-gray-500 transition-all duration-300
                 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:-translate-y-0
                 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
                  >
                    نام شما :
                  </label>
                </div>
                <div className="relative">
                  <input type="email" id="email" placeholder=" " className="peer w-full py-2 px-5 rounded-2xl border-2 border-gray-300 bg-third text-black outline-none focus:border-secondery" />
                  <label
                    htmlFor="email"
                    className="absolute right-4 -top-6 text-sm  px-2 text-gray-500 transition-all duration-300
                 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:-translate-y-0
                 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
                  >
                    ایمیل شما :
                  </label>
                </div>
              </div>
              <div className="relative">
                <textarea id="comment" rows={5} placeholder=" " className="peer w-full py-4 px-5 rounded-2xl border-2 border-gray-300 bg-third text-black outline-none h-36 focus:border-secondery resize-none"></textarea>
                <label
                  htmlFor="comment"
                  className="absolute right-4 -top-6 text-sm px-2 text-gray-500 transition-all duration-300
                 peer-placeholder-shown:top-1/5 peer-placeholder-shown:-translate-y-1/2 peer-focus:-translate-y-0
                 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
                >
                  متن نظر :
                </label>
              </div>
            </div>
            <div className="w-full flex items-center justify-center">
              <button className="py-2 px-10 cursor-pointer hover:scale-105 hover:bg-secondery duration-300 bg-gray-700 text-lg text-background rounded-xl">ثبت نظر</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleBlog;
