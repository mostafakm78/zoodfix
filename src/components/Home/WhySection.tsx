import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';

// photo
import Why from '../../../public/images/why.png';

export const WhySection = () => {
  return (
    // short introduction section
    <div className="w-full bg-background shadow-lg lg:p-20 py-10 lg:mb-10 mb-14 lg:rounded-b-[90%]">
      <div className="flex lg:flex-row flex-col justify-center lg:justify-baseline space-y-6 lg:space-y-0 lg:mb-10 items-center lg:p-12">
        <div className="flex flex-col lg:items-start items-center w-full space-y-2 xl:w-2/12 lg:w-3/12">
          <span className="font-semibold text-3xl">چــــــــــرا</span>
          <span className="font-semibold text-3xl animate-pulse text-secondery">زودفیکس ؟</span>
          <span className="text-xl bg-gray-600 text-background lg:px-3 px-2 py-1 rounded-full">درباره زودفیکس</span>
        </div>
        <div className="flex flex-col w-11/12 lg:w-5/12">
          <p className="text-base/loose text-justify opacity-50">
            ماحصل 30 سال دانش، تجربه و فعالیت مستمر ما در صنعت ساختمان‌سازی، ما را بر آن داشت تا گامی نوین در جهت بهبود و ارتقای کیفیت ساخت‌وساز برداریم. از همین رو، از سال 1395 طراحی و احداث کارخانه زودفیکس را آغاز کردیم؛ کارخانه‌ای که با تکیه بر دانش فنی کاملاً ایرانی و به‌کارگیری تجهیزات تمام
            اتوماتیک، موفق به تولید طیف وسیعی از ملات‌ها و چسب‌های ساختمانی با بالاترین استانداردهای ملی شده است.
          </p>
          <div className="flex space-x-6 mt-6">
            <Link href="" className="flex items-center bg-secondery hover:scale-110 duration-200 text-sm text-background px-4 py-1.5 rounded-full">
              بیشتر بدانید
              <IoIosArrowBack className="mr-2" />
            </Link>
            <Link href="" className="flex text-sm items-center opacity-50">
              دانلود کاتالوگ
              <IoIosArrowBack className="mr-2" />
            </Link>
          </div>
        </div>
        <div className="lg:w-5/12 lg:mr-14">
          <Image src={Why} alt="About Image" width={450} />
        </div>
      </div>
    </div>
  );
};
