'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import { formItemProduct } from '../../../types/types';
import { isValidEmail, isValidIranianPhoneNumber } from '../../../validData/validData';

const SingleProductForm: React.FC = () => {
  const [formData, setFormData] = useState<formItemProduct>({
    namePerson: '',
    phone: '',
    email: '',
    title: '',
    comment: '',
  });

  const personError = formData.namePerson.length < 5;
  const phoneError = !isValidIranianPhoneNumber(formData.phone);
  const emailError = !isValidEmail(formData.email);
  const titleError = formData.title.length < 4;
  const commentError = formData.comment.length < 10;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.namePerson.length === 0 && formData.comment.length === 0 && formData.email.length === 0 && formData.phone.length === 0 && formData.title.length === 0) {
      return toast.error('لطفا همه فیلد ها را پر کنید');
    } else if (personError) {
      return toast.error('اسم شخص یا شرکت باید بالای 5 حرف باشد');
    } else if (phoneError) {
      return toast.error('لطفا شماره همراه معتبر استفاده کنید');
    } else if (emailError) {
      return toast.error('لطفا ایمیل معتبر استفاده کنید');
    } else if (titleError) {
      return toast.error('موضوع باید بالای 4 حرف باشد');
    } else if (commentError) {
      return toast.error('توضیحات باید بالای 10 حرف باشد');
    }

    try {
      const res = await fetch(`${process.env.NEXT}/BuyForm`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success('درخواست خرید شما با موفقیت ارسال شد');
        setFormData({ namePerson: '', phone: '', email: '', title: '', comment: '' });
      } else {
        toast.error('ارسال فرم با خطا مواجه شده است');
      }
    } catch (error) {
      console.log('error =>', error);
      toast.error('مشکلی در ارسال فرم پیش آمده');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-third lg:py-8 py-4 lg:px-16 lg:w-2/4 w-full px-8 shadow-lg flex lg:space-y-8 space-y-4 flex-col min-h-[100px] rounded-lg">
      <div>
        <p className="font-normal relative inline before:content-[''] before:absolute before:rounded-full before:w-2 before:h-2 before:bg-secondery before:bottom-2 before:-right-3 after:content-[''] after:absolute after:bg-black/60 after:w-full after:h-0.5 after:-bottom-1 after:right-0">
          نظر خود را برای ما ارسال کنید
        </p>
      </div>
      <div className="grid gap-10 lg:text-lg text-base mt-4 opacity-80">
        <div>
          <div className="relative mb-10 mt-6 lg:mt-0">
            <input type="text" id="namePerson" value={formData.namePerson} onChange={handleChange} placeholder=" " className={`peer w-full py-2 px-5 rounded-2xl border-2 border-gray-300 bg-third text-black outline-none ${personError ? 'focus:border-red-500' : 'focus:border-secondery'}`} />
            <label
              htmlFor="namePerson"
              className="absolute right-4 -top-6 text-sm px-2 text-gray-500 transition-all duration-300
                 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:-translate-y-0
                 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
            >
              نام شخص / شرکت :
            </label>
          </div>
          <div className="relative mb-10">
            <input type="text" id="phone" value={formData.phone} onChange={handleChange} placeholder=" " className={`peer w-full py-2 px-5 rounded-2xl border-2 border-gray-300 bg-third text-black outline-none ${phoneError ? 'focus:border-red-500' : 'focus:border-secondery'}`} />
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
            <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder=" " className={`peer w-full py-2 px-5 rounded-2xl border-2 border-gray-300 bg-third text-black outline-none ${emailError ? 'focus:border-red-500' : 'focus:border-secondery'}`} />
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
            <input type="text" id="title" value={formData.title} onChange={handleChange} placeholder=" " className={`peer w-full py-2 px-5 rounded-2xl border-2 border-gray-300 bg-third text-black outline-none ${titleError ? 'focus:border-red-500' : 'focus:border-secondery'}`} />
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
          <textarea
            id="comment"
            rows={5}
            value={formData.comment}
            onChange={handleChange}
            placeholder=" "
            className={`peer w-full py-4 px-5 rounded-2xl border-2 border-gray-300 bg-third text-black outline-none h-36 ${commentError ? 'focus:border-red-500' : 'focus:border-secondery'} resize-none`}
          ></textarea>
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
        <button type="submit" className="py-2 cursor-pointer px-10 active:scale-105 active:bg-secondery hover:scale-105 hover:bg-secondery duration-300 bg-gray-700 text-lg text-background rounded-xl">
          ثبت فرم
        </button>
      </div>
    </form>
  );
};

export default SingleProductForm;
