const AgentForm: React.FC = () => {
  return (
    <div className="grid gap-10 text-xl opacity-80">
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
            نام :
          </label>
        </div>
        <div className="relative mb-10">
          <input type="text" id="family" placeholder=" " className="peer w-full py-2 px-5 rounded-2xl border-2 border-gray-300 bg-third text-black outline-none focus:border-secondery" />
          <label
            htmlFor="family"
            className="absolute right-4 -top-6 text-sm px-2 text-gray-500 transition-all duration-300
                 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:-translate-y-0
                 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
          >
            نام خانوادگی :
          </label>
        </div>
        <div className="relative mb-10">
          <input type="text" id="country" placeholder=" " className="peer w-full py-2 px-5 rounded-2xl border-2 border-gray-300 bg-third text-black outline-none focus:border-secondery" />
          <label
            htmlFor="country"
            className="absolute right-4 -top-6 text-sm px-2 text-gray-500 transition-all duration-300
                 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:-translate-y-0
                 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
          >
            کشور :
          </label>
        </div>
        <div className="relative mb-10">
          <input type="text" id="provice" placeholder=" " className="peer w-full py-2 px-5 rounded-2xl border-2 border-gray-300 bg-third text-black outline-none focus:border-secondery" />
          <label
            htmlFor="provice"
            className="absolute right-4 -top-6 text-sm px-2 text-gray-500 transition-all duration-300
                 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:-translate-y-0
                 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
          >
            استان :
          </label>
        </div>
        <div className="relative mb-10">
          <input type="text" id="city" placeholder=" " className="peer w-full py-2 px-5 rounded-2xl border-2 border-gray-300 bg-third text-black outline-none focus:border-secondery" />
          <label
            htmlFor="city"
            className="absolute right-4 -top-6 text-sm px-2 text-gray-500 transition-all duration-300
                 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:-translate-y-0
                 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
          >
            شهر :
          </label>
        </div>
        <div className="relative mb-10">
          <input type="text" id="phone" placeholder=" " className="peer w-full py-2 px-5 rounded-2xl border-2 border-gray-300 bg-third text-black outline-none focus:border-secondery" />
          <label
            htmlFor="phone"
            className="absolute right-4 -top-6 text-sm px-2 text-gray-500 transition-all duration-300
                 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:-translate-y-0
                 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
          >
            شماره تلفن :
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
            ایمیل :
          </label>
        </div>
      </div>
      <div>
        <div className="relative mb-10">
          <textarea id="address" rows={5} placeholder=" " className="peer w-full py-4 px-5 rounded-2xl border-2 border-gray-300 bg-third text-black outline-none h-36 focus:border-secondery resize-none"></textarea>
          <label
            htmlFor="address"
            className="absolute right-4 -top-6 text-sm px-2 text-gray-500 transition-all duration-300
                 peer-placeholder-shown:top-1/5 peer-placeholder-shown:-translate-y-1/2 peer-focus:-translate-y-0
                 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
          >
            آدرس :
          </label>
        </div>
        <div className="w-full flex items-center justify-center">
          <button className="py-2 cursor-pointer px-10 hover:scale-105 hover:bg-secondery duration-300 bg-gray-700 text-lg text-background rounded-xl">ثبت</button>
        </div>
      </div>
    </div>
  );
};

export default AgentForm;
