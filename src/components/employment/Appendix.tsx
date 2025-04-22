'use client';

import { useState } from 'react';

const Appendix = () => {
  const [profileFileName, setProfileFileName] = useState('فایلی انتخاب نشده');
  const [attachmentFileName, setAttachmentFileName] = useState('فایلی انتخاب نشده');

  return (
    <div>
      <div className="my-10">
        <p className="font-normal relative inline before:content-[''] before:absolute before:rounded-full before:w-2 before:h-2 before:bg-secondery before:bottom-2 before:-right-3 after:content-[''] after:absolute after:bg-black/60 after:w-full after:h-0.5 after:-bottom-1 after:right-0">ضمیمه</p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2 text-xl opacity-80">
        {/* تصویر پرسنلی */}
        <div className="mb-10">
          <label htmlFor="profileImage" className="block mb-2 text-base text-gray-600">
            تصویر پرسنلی (3 * 4) :
          </label>
          <input
            type="file"
            id="profileImage"
            onChange={(e) => {
              const file = e.target.files?.[0];
              setProfileFileName(file ? file.name : 'فایلی انتخاب نشده');
            }}
            className="block w-full text-base text-gray-500 file:py-2 file:px-4
            file:border-0 file:text-sm file:font-semibold
              file:bg-foreground file:text-background file:cursor-pointer file:rounded-2xl hover:file:brightness-110 file:hover:scale-105 file:duration-300
              cursor-pointer bg-third border-2 border-gray-300 rounded-2xl"
          />
          <p className="mt-2 text-sm text-gray-500">{profileFileName}</p>
        </div>

        {/* فایل ضمیمه */}
        <div className="mb-10">
          <label htmlFor="attachment" className="block mb-2 text-base text-gray-600">
            فایل ضمیمه :
          </label>
          <input
            type="file"
            id="attachment"
            onChange={(e) => {
              const file = e.target.files?.[0];
              setAttachmentFileName(file ? file.name : 'فایلی انتخاب نشده');
            }}
            className="block w-full text-base text-gray-500 file:py-2 file:px-4
            file:border-0 file:text-sm file:font-semibold
              file:bg-foreground file:text-background file:cursor-pointer file:rounded-2xl hover:file:brightness-110 file:hover:scale-105 file:duration-300
              cursor-pointer bg-third border-2 border-gray-300 rounded-2xl"
          />
          <p className="mt-2 text-sm text-gray-500">{attachmentFileName}</p>
        </div>
      </div>
    </div>
  );
};

export default Appendix;
