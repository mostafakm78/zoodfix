'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AboutUs: React.FC = () => {
  const [VideoPlayer, setVideoPlayer] = useState<React.ComponentType | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  const handleLoadVideo = async () => {
    if (!VideoPlayer) {
      const mod = await import('./VideoPlayer');
      setVideoPlayer(() => mod.default);
    }
    setShowVideo((prev) => !prev);
  };

  return (
    <div className="container mx-auto">
      <section className="bg-background xl:px-60 px-8 pb-20 pt-20">
        <h3 className="w-full text-xl rounded bg-secondery text-background py-2 px-4">درباره زودفیکس</h3>

        <div className="mt-14 px-4 font-semibold space-y-4">
          <p className="text-base/relaxed text-justify">
            با توجه به رشد روزافزون شهرها، افزایش جمعیت و گسترش ساخت‌وسازهای شهری، تردد وسایل نقلیه سنگین برای حمل مصالحی مانند شن، ماسه و سیمان در ساعات پرترافیک، مشکلات متعددی ایجاد می‌کند و در بسیاری از موارد امکان‌پذیر نیست. علاوه بر این، هر ساله میلیون‌ها تن مصالح ساختمانی در کشور به دلیل
            حمل‌ونقل نامناسب، انبارداری غیراصولی و استفاده غیربهینه هدر می‌رود که این امر علاوه بر افزایش هزینه‌های ساخت، تأثیرات منفی زیست‌محیطی نیز به همراه دارد.
          </p>
          <p className="text-base/relaxed text-justify">
            در همین راستا، گروه تولیدی زود فیکس با مدیریت جناب محمدیان واقع در شهرک صنعتی بزرگ شیراز، با هدف بهینه‌سازی مصرف مصالح و کاهش مشکلات حمل‌ونقل، اقدام به راه‌اندازی کارخانه تولید ملات آماده و چسب‌های نوین ساختمانی کرده است. این کارخانه با ارائه محصولاتی نوین و استاندارد، مزایای متعددی را
            برای صنعت ساخت‌وساز به همراه دارد که از جمله می‌توان به سهولت در حمل‌ونقل و استفاده، افزایش سرعت اجرای پروژه‌ها، بهبود کیفیت ساخت، جلوگیری از هدررفت مصالح، کاهش هزینه‌های اجرایی، امکان نگهداری طولانی‌مدت پاکت‌های ملات در انبار و ارائه تنوع گسترده‌ای از محصولات اشاره کرد.
          </p>
          <p className="text-base/relaxed text-justify">
            علاوه بر این، راه‌اندازی این کارخانه تأثیر مثبتی بر حفظ محیط زیست دارد، چرا که با کاهش ضایعات ساختمانی و بهینه‌سازی مصرف منابع، از آلودگی‌های ناشی از هدررفت مصالح جلوگیری می‌کند. همچنین، این مجموعه صنعتی توانسته است زمینه اشتغال بیش از ۵۰ نفر به‌صورت مستقیم و صدها نفر به‌صورت غیرمستقیم
            را فراهم کند که نقش مهمی در رونق اقتصادی منطقه ایفا می‌نماید. زود فیکس به عنوان مجموعه‌ای پیشرو در این حوزه، با بهره‌گیری از فناوری‌های نوین و استانداردهای بین‌المللی، تحولی اساسی در صنعت ساختمان کشور ایجاد کرده و در نوع خود بی‌نظیر است.
          </p>
        </div>

        <div className="mt-14 flex items-center flex-col justify-center">
          <button className="mb-10 px-4 py-2 bg-gray-500 rounded-lg text-background hover:bg-secondery duration-300 cursor-pointer" onClick={handleLoadVideo}>
            {showVideo ? 'پنهان کردن ویدیو' : 'نمایش ویدیو'}
          </button>

          <AnimatePresence>
            {showVideo && VideoPlayer && (
              <motion.div key="video" initial={{ opacity: 0, y: 30 }} viewport={{ once: true }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }} transition={{ duration: 0.5 }} className="w-full max-w-3xl overflow-hidden rounded-2xl shadow-lg">
                <VideoPlayer />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
