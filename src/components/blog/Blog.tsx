import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { BiNews } from 'react-icons/bi';

// photos
import One from '../../../public/images/Blog/1.jpg';
import Two from '../../../public/images/Blog/2.jpg';
import Three from '../../../public/images/Blog/3.jpg';
import Four from '../../../public/images/Blog/4.jpg';
import Five from '../../../public/images/Blog/5.jpg';
import Six from '../../../public/images/Blog/6.jpg';
import Seven from '../../../public/images/Blog/7.jpg';
import Eight from '../../../public/images/Blog/8.jpg';

type BlogsList = {
  image: StaticImageData;
  title: string;
  view: string;
  description: string;
};

const Blogs: BlogsList[] = [
  {
    image: One,
    title: 'پیام تبریک کارخانه زودفیکس',
    view: '111 بازدید',
    description: 'وقتی ثروت‌ های بزرگ به دست برخی مردم می‌افتد در پرتو آن نیرومند می‌شوند و در سایهٔ نیرومندی و ثروت خیال می‌ کنند که می‌توانند در خارج از وطن خود زندگی نمایند و خوشبخت و سرافراز باشند ولی به زودی می‌ فهمند که اشتباه کرده‌ اند و عظمت هر ملتی بر روی خرابه‌ های وطن خودش می‌باشد و بس!',
  },
  {
    image: Two,
    title: 'پیام تبریک کارخانه زودفیکس',
    view: '111 بازدید',
    description: 'وقتی ثروت‌ های بزرگ به دست برخی مردم می‌افتد در پرتو آن نیرومند می‌شوند و در سایهٔ نیرومندی و ثروت خیال می‌ کنند که می‌توانند در خارج از وطن خود زندگی نمایند و خوشبخت و سرافراز باشند ولی به زودی می‌ فهمند که اشتباه کرده‌ اند و عظمت هر ملتی بر روی خرابه‌ های وطن خودش می‌باشد و بس!',
  },
  {
    image: Three,
    title: 'پیام تبریک کارخانه زودفیکس',
    view: '111 بازدید',
    description: 'وقتی ثروت‌ های بزرگ به دست برخی مردم می‌افتد در پرتو آن نیرومند می‌شوند و در سایهٔ نیرومندی و ثروت خیال می‌ کنند که می‌توانند در خارج از وطن خود زندگی نمایند و خوشبخت و سرافراز باشند ولی به زودی می‌ فهمند که اشتباه کرده‌ اند و عظمت هر ملتی بر روی خرابه‌ های وطن خودش می‌باشد و بس!',
  },
  {
    image: Four,
    title: 'پیام تبریک کارخانه زودفیکس',
    view: '111 بازدید',
    description: 'وقتی ثروت‌ های بزرگ به دست برخی مردم می‌افتد در پرتو آن نیرومند می‌شوند و در سایهٔ نیرومندی و ثروت خیال می‌ کنند که می‌توانند در خارج از وطن خود زندگی نمایند و خوشبخت و سرافراز باشند ولی به زودی می‌ فهمند که اشتباه کرده‌ اند و عظمت هر ملتی بر روی خرابه‌ های وطن خودش می‌باشد و بس!',
  },
  {
    image: Five,
    title: 'پیام تبریک کارخانه زودفیکس',
    view: '111 بازدید',
    description: 'وقتی ثروت‌ های بزرگ به دست برخی مردم می‌افتد در پرتو آن نیرومند می‌شوند و در سایهٔ نیرومندی و ثروت خیال می‌ کنند که می‌توانند در خارج از وطن خود زندگی نمایند و خوشبخت و سرافراز باشند ولی به زودی می‌ فهمند که اشتباه کرده‌ اند و عظمت هر ملتی بر روی خرابه‌ های وطن خودش می‌باشد و بس!',
  },
  {
    image: Six,
    title: 'پیام تبریک کارخانه زودفیکس',
    view: '111 بازدید',
    description: 'وقتی ثروت‌ های بزرگ به دست برخی مردم می‌افتد در پرتو آن نیرومند می‌شوند و در سایهٔ نیرومندی و ثروت خیال می‌ کنند که می‌توانند در خارج از وطن خود زندگی نمایند و خوشبخت و سرافراز باشند ولی به زودی می‌ فهمند که اشتباه کرده‌ اند و عظمت هر ملتی بر روی خرابه‌ های وطن خودش می‌باشد و بس!',
  },
  {
    image: Seven,
    title: 'پیام تبریک کارخانه زودفیکس',
    view: '111 بازدید',
    description: 'وقتی ثروت‌ های بزرگ به دست برخی مردم می‌افتد در پرتو آن نیرومند می‌شوند و در سایهٔ نیرومندی و ثروت خیال می‌ کنند که می‌توانند در خارج از وطن خود زندگی نمایند و خوشبخت و سرافراز باشند ولی به زودی می‌ فهمند که اشتباه کرده‌ اند و عظمت هر ملتی بر روی خرابه‌ های وطن خودش می‌باشد و بس!',
  },
  {
    image: Eight,
    title: 'پیام تبریک کارخانه زودفیکس',
    view: '111 بازدید',
    description: 'وقتی ثروت‌ های بزرگ به دست برخی مردم می‌افتد در پرتو آن نیرومند می‌شوند و در سایهٔ نیرومندی و ثروت خیال می‌ کنند که می‌توانند در خارج از وطن خود زندگی نمایند و خوشبخت و سرافراز باشند ولی به زودی می‌ فهمند که اشتباه کرده‌ اند و عظمت هر ملتی بر روی خرابه‌ های وطن خودش می‌باشد و بس!',
  },
];

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto">
      <section className="bg-background grid lg:grid-cols-[3fr_8fr] grid-cols-1 gap-10 xl:px-20 px-8 pb-20 pt-20">
        {/* blog categories  */}
        <div className="bg-third rounded-xl lg:p-10 p-3 self-start shadow-lg">
          <div className="flex flex-col items-center space-y-2">
            <h4 className='text-lg relative after:content-[""] after:absolute after:w-full after:bg-foreground after:h-0.5 after:-bottom-1 after:right-0 mb-8'>دسته بندی مطالب</h4>
            <Link href="" className="flex flex-wrap items-center space-x-2 hover:scale-105 duration-300">
              <BiNews />
              <h3>خبر های سایت</h3>
              <span>(30)</span>
            </Link>
            <Link href="" className="flex flex-wrap items-center space-x-2 hover:scale-105 duration-300">
              <BiNews />
              <h3>خبر های فوری</h3>
              <span>(0)</span>
            </Link>
          </div>
        </div>

        {/* blog list  */}
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 xl:gap-10 lg:gap-5 gap-8">
          {Blogs.map((blog, index) => (
            <Link href="" key={index} className="bg-third rounded-t-[20px] shadow-lg hover:ring-1 hover:ring-secondery duration-300 hover:shadow-secondery hover:shadow-lg flex flex-col rounded-b-2xl w-full lg:max-w-[400px]">
              <div className="relative w-full h-[250px]">
                <Image src={blog.image} alt="Blog Photo" className="object-cover w-full h-full rounded-b-[20px] rounded-t-[20px]" />
                <div className="absolute bottom-0 left-0 w-full h-[80px] bg-gradient-to-t rounded-b-[20px] from-black/70 to-transparent"></div>
              </div>
              <div className="flex flex-col space-y-2 px-4 justify-around py-4 text-xs">
                <h3 className="text-foreground font-bold opacity-85 text-sm break-words text-right line-clamp-2">{blog.title}</h3>
                <span className="text-foreground opacity-70 text-sm break-words text-justify line-clamp-2">{blog.description}</span>
                <span className="text-sm text-foreground opacity-80">تاریخ</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
