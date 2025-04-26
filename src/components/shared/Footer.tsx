import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaFacebookMessenger, FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa';

// photos
import Phone from '../../../public/images/phone-ft.png';
import Work from '../../../public/images/work-Time.png';

export const Footer: React.FC = () => {
  return (
    // background for footer
    <div className="md:bg-[url('/images/footer.png')] md:bg-transparent bg-secondery bg-cover lg:px-48 px-12 py-20 lg:justify-items-end grid grid-cols-1 lg:grid-cols-2">
      {/* right section  */}
      <div className="flex flex-col lg:mt-44 items-center lg:items-start md:mt-64">
        <h3 className="text-2xl text-amber-200 mb-3">درباره زود فیکس</h3>
        <p className="text-base/relaxed lg:w-10/12 text-justify text-background mb-6">
          دانش و تجربه 30 ساله ما را بر آن داشت تا فعالیتی نوین در راستای بهبود ساختمان سازی برداریم که از سال 95 طراحی و ساخت کارخانه زودفیکس استارت خورد و یک کارخانه تمام ایرانی و اتومات با دانش فنی داخلی که در نوع خود بی نظیر می باشد ساخته و با تنوع و بسته بندی حدود 30 نوع ملات و چسب های نوین
          ساختمانی در انواع بسته بندی های از 500 گرم تا 50 کیلو گرم براساس استانداردهای ملی و نیاز ساختمان سازی تولید نماییم
        </p>
        <div className="xl:flex xl:flex-row flex-col justify-between w-10/12">
          <div className="flex">
            <Image src={Phone} alt="call number" />
            <div className="flex flex-col text-background mr-2">
              <span>پشتیبانی سریع</span>
              <span>09169799533</span>
            </div>
          </div>
          <div className="flex mt-4 xl:mt-0">
            <Image src={Work} alt="call number" />
            <div className="flex flex-col text-background mr-2">
              <span>ساعت کاری</span>
              <span>9:00 الی 19:00</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4 text-4xl mb-6 text-yellow-200 mt-4">
          <Link href="">
            <FaFacebook />
          </Link>
          <Link href="">
            <FaWhatsapp />
          </Link>
          <Link href="">
            <FaTelegram />
          </Link>
          <Link href="">
            <FaInstagram />
          </Link>
          <Link href="">
            <FaFacebookMessenger />
          </Link>
        </div>
        <div className="group inline-block relative overflow-hidden text-background cursor-pointer">
          {/* خط چپ */}
          <div className="absolute left-0 bottom-0 w-[2px] h-0 bg-gray-700 transition-all duration-500 group-hover:h-full" />

          {/* خط راست */}
          <div className="absolute right-0 top-0 w-[2px] h-0 bg-gray-700 transition-all duration-500 group-hover:h-full" />

          <Link href="" className="font-medium p-2 hover:text-gray-700 duration-500 relative inline-block">
            {/* خط پایین */}
            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-gray-700 transition-all duration-500 group-hover:w-full" />
            {/* خط بالا */}
            <span className="absolute top-0 left-0 h-[2px] w-0 bg-gray-700 transition-all duration-500 group-hover:w-full" />
            بازطراحی شده توسط مصطفی کمری
          </Link>
        </div>
      </div>

      {/* left section  */}
      <div className="flex flex-col lg:mt-44 mt-16">
        <h4 className="text-2xl mb-4 text-amber-200">دسترسی سریع</h4>
        <div className="flex gap-6 text-base/relaxed">
          <div>
            <Link href="/" className="flex items-center">
              <span className="font-semibold mb-1 text-amber-200">ـــ</span>
              <span className="mr-2 text-background">خانه</span>
            </Link>
            <Link href="" className="flex items-center">
              <span className="font-semibold mb-1 text-amber-200">ـــ</span>
              <span className="mr-2 text-background">محصولات ما</span>
            </Link>
            <Link href="" className="flex items-center">
              <span className="font-semibold mb-1 text-amber-200">ـــ</span>
              <span className="mr-2 text-background">لیـست خدمات</span>
            </Link>
            <Link href="" className="flex items-center">
              <span className="font-semibold mb-1 text-amber-200">ـــ</span>
              <span className="mr-2 text-background">ملات خشک</span>
            </Link>
            <Link href="" className="flex items-center">
              <span className="font-semibold mb-1 text-amber-200">ـــ</span>
              <span className="mr-2 text-background">لوازم ساختمان سازی</span>
            </Link>
            <Link href="/agents" className="flex items-center">
              <span className="font-semibold mb-1 text-amber-200">ـــ</span>
              <span className="mr-2 text-background">اخذ نمایندگی</span>
            </Link>
          </div>
          <div>
            <Link href="/questions" className="flex items-center">
              <span className="font-semibold mb-1 text-amber-200">ـــ</span>
              <span className="mr-2 text-background">سوالات متداول</span>
            </Link>
            <Link href="" className="flex items-center">
              <span className="font-semibold mb-1 text-amber-200">ـــ</span>
              <span className="mr-2 text-background">آجر و بتن</span>
            </Link>
            <Link href="/about-us" className="flex items-center">
              <span className="font-semibold mb-1 text-amber-200">ـــ</span>
              <span className="mr-2 text-background">درباره زودفیکس</span>
            </Link>
            <Link href="/contact-us" className="flex items-center">
              <span className="font-semibold mb-1 text-amber-200">ـــ</span>
              <span className="mr-2 text-background">ارتباط با ما</span>
            </Link>
            <Link href="/employment" className="flex items-center">
              <span className="font-semibold mb-1 text-amber-200">ـــ</span>
              <span className="mr-2 text-background">فرم استخدام</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
