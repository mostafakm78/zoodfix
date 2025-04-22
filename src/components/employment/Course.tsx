const Course = () => {
  return (
    <div>
      <div className="my-10">
        <p className="font-normal relative inline before:content-[''] before:absolute before:rounded-full before:w-2 before:h-2 before:bg-secondery before:bottom-2 before:-right-3 after:content-[''] after:absolute after:bg-black/60 after:w-full after:h-0.5 after:-bottom-1 after:right-0">
          اطلاعات تحصیلی
        </p>
      </div>
      <div className="grid gap-10 lg:grid-cols-2 text-xl opacity-80">
        <div>
          <div className="flex flex-wrap gap-3 items-center mb-10 space-x-1">
            <span className="text-base text-gray-500">مدرک تحصیلی :</span>
            <div>
              <input type="radio" name="course" value="diploma" id="diploma" className="hidden peer" />
              <label htmlFor="diploma" className="py-1 px-1.5 text-base rounded-xl border-gray-300 cursor-pointer text-gray-500 bg-third border-2 peer-checked:bg-secondery peer-checked:border-secondery peer-checked:text-background peer-checked:duration-300">
                دیپلم
              </label>
            </div>
            <div>
              <input type="radio" name="course" value="fogh-diploma" id="fogh-diploma" className="hidden peer" />
              <label htmlFor="fogh-diploma" className="py-1 px-1.5 text-base rounded-xl border-gray-300 cursor-pointer text-gray-500 bg-third border-2 peer-checked:bg-secondery peer-checked:border-secondery peer-checked:text-background peer-checked:duration-300">
                فوق دیپلم
              </label>
            </div>
            <div>
              <input type="radio" name="course" value="lisans" id="lisans" className="hidden peer" />
              <label htmlFor="lisans" className="py-1 px-1.5 text-base rounded-xl border-gray-300 cursor-pointer text-gray-500 bg-third border-2 peer-checked:bg-secondery peer-checked:border-secondery peer-checked:text-background peer-checked:duration-300">
                لیسانس
              </label>
            </div>
            <div>
              <input type="radio" name="course" value="fogh-lisans" id="fogh-lisans" className="hidden peer" />
              <label htmlFor="fogh-lisans" className="py-1 px-1.5 text-base rounded-xl border-gray-300 cursor-pointer text-gray-500 bg-third border-2 peer-checked:bg-secondery peer-checked:border-secondery peer-checked:text-background peer-checked:duration-300">
                فوق لیسانس
              </label>
            </div>
            <div>
              <input type="radio" name="course" value="doctora" id="doctora" className="hidden peer" />
              <label htmlFor="doctora" className="py-1 px-1.5 text-base rounded-xl border-gray-300 cursor-pointer text-gray-500 bg-third border-2 peer-checked:bg-secondery peer-checked:border-secondery peer-checked:text-background peer-checked:duration-300">
                دکتری
              </label>
            </div>
          </div>
          <div className="relative">
            <input type="text" id="univercity" placeholder=" " className="peer w-full py-2 px-5 rounded-2xl border-2 border-gray-300 bg-third text-black outline-none focus:border-secondery" />
            <label
              htmlFor="univercity"
              className="absolute right-4 -top-6 text-sm  px-2 text-gray-500 transition-all duration-300
                 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:-translate-y-0
                 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
            >
              محل تحصیل :
            </label>
          </div>
        </div>
        <div>
          <div className="relative">
            <input type="text" id="reshte" placeholder=" " className="peer w-full py-2 px-5 rounded-2xl border-2 border-gray-300 bg-third text-black outline-none focus:border-secondery" />
            <label
              htmlFor="reshte"
              className="absolute right-4 -top-6 text-sm px-2 text-gray-500 transition-all duration-300
                 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:-translate-y-0
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

export default Course;
