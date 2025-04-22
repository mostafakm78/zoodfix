import BirthYearSelect from './BirthYearsSelect';

const PersonalData = () => {
  return (
    <div>
      <div className="my-10">
        <p className="font-normal relative inline before:content-[''] before:absolute before:rounded-full before:w-2 before:h-2 before:bg-secondery before:bottom-2 before:-right-3 after:content-[''] after:absolute after:bg-black/60 after:w-full after:h-0.5 after:-bottom-1 after:right-0">
          اطلاعات فردی
        </p>
      </div>
      <div className="grid gap-10 lg:grid-cols-2 text-xl opacity-80">
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
            <input type="text" id="fathername" placeholder=" " className="peer w-full py-2 px-5 rounded-2xl border-2 border-gray-300 bg-third text-black outline-none focus:border-secondery" />
            <label
              htmlFor="fathername"
              className="absolute right-4 -top-6 text-sm  px-2 text-gray-500 transition-all duration-300
                 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:-translate-y-0
                 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
            >
              نام پدر :
            </label>
          </div>
          <div className="flex items-center space-x-8">
            <span className="text-base text-gray-500">جنسیت :</span>
            <div>
              <input type="radio" name="gender" value="male" id="gender-male" className="hidden peer" />
              <label htmlFor="gender-male" className="py-1.5 px-3 text-base rounded-xl border-gray-300 cursor-pointer text-gray-500 bg-third border-2 peer-checked:bg-secondery peer-checked:border-secondery peer-checked:text-background peer-checked:duration-300">
                آقا
              </label>
            </div>
            <div>
              <input type="radio" name="gender" value="female" id="gender-female" className="hidden peer" />
              <label htmlFor="gender-female" className="py-1.5 px-3 text-base rounded-xl border-gray-300 cursor-pointer text-gray-500 bg-third border-2 peer-checked:bg-secondery peer-checked:border-secondery peer-checked:text-background peer-checked:duration-300">
                خانوم
              </label>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <input type="text" id="family" placeholder=" " className="peer w-full py-2 px-5 rounded-2xl border-2 border-gray-300 bg-third text-black outline-none focus:border-secondery" />
            <label
              htmlFor="family"
              className="absolute right-4 -top-6 text-sm  px-2 text-gray-500 transition-all duration-300
                 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:-translate-y-0
                 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
            >
              نام خانوادگی :
            </label>
          </div>
          <BirthYearSelect />
          <div className="flex items-center space-x-8">
            <span className="text-base text-gray-500">وضعیت تاهل :</span>
            <div>
              <input type="radio" name="marital" value="single" id="single" className="hidden peer" />
              <label htmlFor="single" className="py-1.5 px-3 text-base rounded-xl border-gray-300 cursor-pointer text-gray-500 bg-third border-2 peer-checked:bg-secondery peer-checked:border-secondery peer-checked:text-background peer-checked:duration-300">
                مجرد
              </label>
            </div>
            <div>
              <input type="radio" name="marital" value="married" id="married" className="hidden peer" />
              <label htmlFor="married" className="py-1.5 px-3 text-base rounded-xl border-gray-300 cursor-pointer text-gray-500 bg-third border-2 peer-checked:bg-secondery peer-checked:border-secondery peer-checked:text-background peer-checked:duration-300">
                متاهل
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalData;
