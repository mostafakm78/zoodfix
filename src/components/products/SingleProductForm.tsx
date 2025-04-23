import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const SingleProductForm = () => {
  return (
    <div className="flex flex-col gap-8 mt-16">
      <h4 className="text-3xl font-bold">ثبت سفارش :</h4>
      <div className="flex lg:flex-row flex-col items-center gap-8 lg:gap-0 justify-center lg:justify-between">
        <div className="lg:w-2/4 w-full lg:self-start flex flex-col items-center">
          <span className="lg:text-2xl text-xl font-bold shadow-lg bg-gray-700 text-background py-4 px-6 rounded-4xl">برای ثبت سفارش برای ما پیام ارسال کنید</span>
          <div className="flex flex-col">
            <div className="flex flex-col mt-10 shadow-lg space-y-2 rounded-xl text-background bg-secondery py-2 px-4 space-x-2 lg:text-xl">
              <span>شماره تماس :</span>
              <div className="flex space-x-2 items-center">
                <FaPhoneAlt />
                <span>09169799533</span>
              </div>
            </div>
            <div className="flex flex-col mt-10 shadow-lg space-y-2 rounded-xl text-background bg-secondery py-2 px-4 space-x-2 lg:text-xl">
              <span>ایمیل :</span>
              <div className="flex space-x-2 items-center">
                <MdEmail />
                <span>Mostafamf555@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-third lg:py-8 py-4 lg:px-16 lg:w-2/4 w-full px-8 shadow-lg flex lg:space-y-8 space-y-4 flex-col min-h-[100px] rounded-lg">
          <div>
            <p className="font-normal relative inline before:content-[''] before:absolute before:rounded-full before:w-2 before:h-2 before:bg-secondery before:bottom-2 before:-right-3 after:content-[''] after:absolute after:bg-black/60 after:w-full after:h-0.5 after:-bottom-1 after:right-0">
              نظر خود را برای ما ارسال کنید
            </p>
          </div>
          <div className="grid gap-10 text-xl mt-4 opacity-80">
            <div>
              <div className="relative mb-10 mt-6 lg:mt-0">
                <input type="text" id="name" placeholder=" " className="peer w-full py-2 px-5 rounded-2xl border-2 border-gray-300 bg-third text-black outline-none focus:border-secondery" />
                <label
                  htmlFor="name"
                  className="absolute right-4 -top-6 text-sm px-2 text-gray-500 transition-all duration-300
                 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:-translate-y-0
                 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
                >
                  نام شخص / شرکت :
                </label>
              </div>
              <div className="relative mb-10">
                <input type="text" id="phone" placeholder=" " className="peer w-full py-2 px-5 rounded-2xl border-2 border-gray-300 bg-third text-black outline-none focus:border-secondery" />
                <label
                  htmlFor="phone"
                  className="absolute right-4 -top-6 text-sm  px-2 text-gray-500 transition-all duration-300
                 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:-translate-y-0
                 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
                >
                  شماره تلفن :
                </label>
              </div>
              <div className="relative mb-10">
                <input type="email" id="email" placeholder=" " className="peer w-full py-2 px-5 rounded-2xl border-2 border-gray-300 bg-third text-black outline-none focus:border-secondery" />
                <label
                  htmlFor="email"
                  className="absolute right-4 -top-6 text-sm  px-2 text-gray-500 transition-all duration-300
                 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:-translate-y-0
                 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
                >
                  آدرس ایمیل :
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
                توضیحات :
              </label>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <button className="py-2 px-10 hover:scale-105 hover:bg-secondery duration-300 bg-gray-700 text-lg text-background rounded-xl">ثبت فرم</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductForm;
