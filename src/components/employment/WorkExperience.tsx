'use client';

import { useState } from 'react';

// type of Row
interface ExperienceRow {
  place: string;
  position: string;
  duration: string;
}

const WorkExperience = () => {
  const [rows, setRows] = useState<ExperienceRow[]>([{ place: '', position: '', duration: '' }]);

  //   add new row
  const handleAddRow = () => {
    setRows([...rows, { place: '', position: '', duration: '' }]);
  };

  //   remove selected row
  const handleRemoveRow = (index: number) => {
    const newRows = rows.filter((_, i) => i !== index);
    setRows(newRows);
  };

  return (
    <div>
      <div className="my-10 flex justify-between">
        <p className="font-normal relative inline before:content-[''] before:absolute before:rounded-full before:w-2 before:h-2 before:bg-secondery before:bottom-2 before:-right-3 after:content-[''] after:absolute after:bg-black/60 after:w-full after:h-0.5 after:-bottom-1 after:right-0">
          سوابق کاری
        </p>
        <button onClick={handleAddRow} className="bg-gray-700 text-background px-2 rounded-lg hover:scale-105 duration-300 cursor-pointer">
          ردیف جدید +
        </button>
      </div>

      {/* add new row with map  */}
      {rows.map((_, index) => (
        <div key={index} className="relative mb-10 lg:border-0 border lg:rounded-none lg:p-0 rounded-2xl p-2 border-gray-300">
          <div className="grid gap-10 lg:grid-cols-3 w-full text-xl opacity-80">
            <div className="relative">
              <input type="text" id={`place-${index}`} placeholder=" " className="peer w-full py-2 px-5 rounded-2xl border-2 border-gray-300 bg-third text-black outline-none focus:border-secondery" />
              <label
                htmlFor={`place-${index}`}
                className="absolute right-4 -top-6 text-sm px-2 text-gray-500 transition-all duration-300
                peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:-translate-y-0
                peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
              >
                محل :
              </label>
            </div>

            <div className="relative">
              <input type="text" id={`position-${index}`} placeholder=" " className="peer w-full py-2 px-5 rounded-2xl border-2 border-gray-300 bg-third text-black outline-none focus:border-secondery" />
              <label
                htmlFor={`position-${index}`}
                className="absolute right-4 -top-6 text-sm px-2 text-gray-500 transition-all duration-300
                peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:-translate-y-0
                peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
              >
                عنوان شغلی :
              </label>
            </div>

            <div className="relative">
              <input type="text" id={`duration-${index}`} placeholder=" " className="peer w-full py-2 px-5 rounded-2xl border-2 border-gray-300 bg-third text-black outline-none focus:border-secondery" />
              <label
                htmlFor={`duration-${index}`}
                className="absolute right-4 -top-6 text-sm px-2 text-gray-500 transition-all duration-300
                peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:-translate-y-0
                peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
              >
                مدت زمان :
              </label>
            </div>
          </div>

          {/* close button */}
          {rows.length > 1 && (
            <button onClick={() => handleRemoveRow(index)} className="absolute -left-6 top-1/2 -translate-y-1/2 text-red-500 font-extrabold hover:scale-110 cursor-pointer duration-200" title="حذف ردیف">
              ✕
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
