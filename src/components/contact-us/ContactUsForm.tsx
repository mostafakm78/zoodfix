'use client';

import { useState } from 'react';
import { ContactUsFormItem } from '../../../types/types';
import { isValidIranianPhoneNumber } from '../../../validData/validData';
import { toast } from 'react-toastify';

const ContactUsForm = () => {
  const [formData, setFormData] = useState<ContactUsFormItem>({
    fullName: '',
    phone: '',
    title: '',
    message: '',
  });

  const fullNameError = formData.fullName.length < 5;
  const phoneError = !isValidIranianPhoneNumber(formData.phone);
  const titleError = formData.title.length < 5;
  const messageError = formData.message.length < 10;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (fullNameError) {
      return toast.error('اسم شخص یا شرکت باید بالای 5 حرف باشد');
    } else if (phoneError) {
      return toast.error('لطفا شماره همراه معتبر استفاده کنید');
    } else if (titleError) {
      return toast.error('موضوع باید بالای 5 حرف باشد');
    } else if (messageError) {
      return toast.error('توضیحات باید بالای 15 حرف باشد');
    }

    try {
      const res = await fetch('http://localhost:4000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success('پیام شما با موفقیت ارسال شد');
        setFormData({ fullName: '', phone: '', title: '', message: '' });
      } else {
        toast.error('ارسال پیام با خطا مواجه شده است');
      }
    } catch (error) {
      console.log('error =>', error);
      toast.error('مشکلی در ارسال پیام پیش آمده');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 text-sm lg:text-base opacity-80">
      <h3 className="text-3xl font-semibold">ارسال پیام به ما :</h3>
      <div className="relative">
        <input type="text" id="fullName" value={formData.fullName} onChange={handleChange} placeholder=" " className={`peer w-full py-2 px-5 rounded-2xl border-2 border-gray-300 bg-third text-black outline-none ${fullNameError ? 'focus:border-red-500' : 'focus:border-secondery'}`} />
        <label
          htmlFor="fullName"
          className="absolute right-4 -top-6 text-sm  px-2 text-gray-500 transition-all duration-300
                 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:-translate-y-0
                 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
        >
          نام و نام خانوادگی :
        </label>
      </div>
      <div className="relative">
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
      <div className="relative mt-10">
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder=" "
          className={`peer w-full py-4 px-5 rounded-2xl border-2 border-gray-300 bg-third text-black outline-none h-36 ${messageError ? 'focus:border-red-500' : 'focus:border-secondery'} resize-none`}
        ></textarea>
        <label
          htmlFor="message"
          className="absolute right-4 -top-6 text-sm px-2 text-gray-500 transition-all duration-300
               peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
               peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
        >
          پیام شما :
        </label>
      </div>
      <button type="submit" className="cursor-pointer hover:bg-secondery bg-foreground text-background py-2 px-4 text-lg rounded-xl hover:scale-105 hover:opacity-90 duration-300">
        ارسال پیام
      </button>
    </form>
  );
};

export default ContactUsForm;
