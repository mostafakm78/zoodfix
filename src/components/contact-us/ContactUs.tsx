import Link from 'next/link';
import { FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs: React.FC = () => {
  return (
    <div className="container mx-auto">
      <section className="grid lg:grid-cols-2 grid-cols-1 gap-28 bg-background lg:px-60 px-20 pb-20 pt-20">
        {/* data of company */}

        <div className="space-y-8 text-xl opacity-80">
          <h3 className="text-4xl font-semibold">ارتباط با ما</h3>
          <div>
            <h4>شماره تماس :</h4>
            <span>09172003514 - 07137733378</span>
          </div>
          <div>
            <h4>شماره فکس :</h4>
            <span>۰۷۱۳۶۳۰۱۳۶۶</span>
          </div>
          <div>
            <h4>آدرس :</h4>
            <span>شیراز ،قدوسی غربی، نبش کوچه ۲۱ ساختمان مصانیک ،واحد ۸</span>
          </div>
          <div>
            <h4>آدرس کارخانه:</h4>
            <span>شیراز. شهرک صنعتی بزرگ. بلوار سازندگی. خیابان 605</span>
          </div>
          <div>
            <Link href="" className="flex space-x-2 items-center duration-500 hover:scale-105">
              <FaMapMarkerAlt /> <h4>مسیریابی به آدرس دفتر مرکزی</h4>
            </Link>
          </div>
        </div>

        {/* form section */}
        <div className="space-y-8 text-sm lg:text-base opacity-80">
          <h3 className="text-3xl font-semibold">ارسال پیام به ما :</h3>
          <div className="relative">
            <input type="text" id="fullname" placeholder=" " className="peer w-full py-2 px-5 rounded-2xl border-2 border-gray-300 bg-third text-black outline-none focus:border-secondery" />
            <label
              htmlFor="fullname"
              className="absolute right-4 -top-6 text-sm  px-2 text-gray-500 transition-all duration-300
                 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:-translate-y-0
                 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
            >
              نام و نام خانوادگی :
            </label>
          </div>
          <div className="relative">
            <input type="text" id="phoneNumber" placeholder=" " className="peer w-full py-2 px-5 rounded-2xl border-2 border-gray-300 bg-third text-black outline-none focus:border-secondery" />
            <label
              htmlFor="phoneNumber"
              className="absolute right-4 -top-6 text-sm  px-2 text-gray-500 transition-all duration-300
                 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:-translate-y-0
                 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
            >
              شماره تلفن :
            </label>
          </div>
          <div className="relative">
            <input type="text" id="title" placeholder=" " className="peer w-full py-2 px-5 rounded-2xl border-2 border-gray-300 bg-third text-black outline-none focus:border-secondery" />
            <label
              htmlFor="title"
              className="absolute right-4 -top-6 text-sm  px-2 text-gray-500 transition-all duration-300
                 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:-translate-y-0
                 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
            >
              موضوع :
            </label>
          </div>
          <div className="relative mt-10">
            <textarea id="message" rows={5} placeholder=" " className="peer w-full py-4 px-5 rounded-2xl border-2 border-gray-300 bg-third text-black outline-none focus:border-secondery resize-none"></textarea>
            <label
              htmlFor="message"
              className="absolute right-4 -top-6 text-sm px-2 text-gray-500 transition-all duration-300
               peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
               peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
            >
              پیام شما :
            </label>
          </div>
          <button className="cursor-pointer bg-foreground text-background py-2 px-4 text-lg rounded-xl hover:scale-105 hover:opacity-90 duration-300">ارسال پیام</button>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
