import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col space-y-6 items-center bg-third justify-center h-screen">
      <div className="relative lg:text-7xl text-2xl md:text-4xl inline-block overflow-hidden cursor-pointer w-fit">
        {/* خط چپ */}
        <div className="absolute left-0 bottom-0 w-[2px] h-0 bg-gradient-to-b from-green-300 via-green-400 to-green-500 animate-draw-vertical"></div>

        {/* خط راست */}
        <div className="absolute right-0 top-0 w-[2px] h-0 bg-gradient-to-t from-green-300 via-green-400 to-green-500 animate-draw-vertical-reverse animation-delay-2"></div>

        <span className="font-medium p-4 text-secondery relative inline-block">
          {/* خط پایین */}
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-green-300 via-green-400 to-green-500 animate-draw-horizontal animation-delay-1"></span>
          {/* خط بالا */}
          <span className="absolute top-0 right-0 h-[2px] w-0 bg-gradient-to-l from-green-300 via-green-400 to-green-500 animate-draw-horizontal-reverse animation-delay-3"></span>
          صفحه مورد نظر یافت نشد :(
        </span>
      </div>
      <Link href="/" className="hover:text-secondery animate-bounce hover:animate-none duration-500 hover:scale-105">
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}
