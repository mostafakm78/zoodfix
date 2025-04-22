const HomeInfo = () => {
  return (
    <div>
      <div className="my-10">
        <p className="font-normal relative inline before:content-[''] before:absolute before:rounded-full before:w-2 before:h-2 before:bg-secondery before:bottom-2 before:-right-3 after:content-[''] after:absolute after:bg-black/60 after:w-full after:h-0.5 after:-bottom-1 after:right-0">
          محل سکونت
        </p>
      </div>
      <div className="grid gap-10 lg:grid-cols-2 text-xl opacity-80">
        <div>
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
          <div className="relative">
            <input type="text" id="city" placeholder=" " className="peer w-full py-2 px-5 rounded-2xl border-2 border-gray-300 bg-third text-black outline-none focus:border-secondery" />
            <label
              htmlFor="city"
              className="absolute right-4 -top-6 text-sm  px-2 text-gray-500 transition-all duration-300
                 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:-translate-y-0
                 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
            >
              شهر :
            </label>
          </div>
        </div>
        <div>
          <div className="relative">
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
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
