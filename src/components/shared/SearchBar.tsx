'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { RiCloseLargeFill } from 'react-icons/ri';
import { IoMdSearch } from 'react-icons/io';

// type of searchBarProps from navbar
type SearchBarProps = {
  setClose: () => void;
};

export const SearchBar = ({ setClose }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      router.push(`/search?query=${searchQuery}`);
    }
  };

  return (
    <div className={`fixed top-0 left-0 bg-gray-200 h-14 right-0 flex items-center z-50 justify-center duration-500`}>
      <div className="flex items-center justify-center w-full gap-2">
        <button onClick={() => setClose()}>
          <RiCloseLargeFill className="text-black text-2xl cursor-pointer" />
        </button>
        <div onKeyDown={(e) => e.key === 'Enter' && handleSearch()} className="flex items-center justify-between rounded-3xl shadow-md p-1 bg-gray-100 xl:w-4/12 lg:w-6/12">
          <input placeholder="عبارت جستجو را وارد نمایید" className="p-1 placeholder:text-sm lg:placeholder:text-base text-base lg:text-lg outline-none w-full" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <button onClick={handleSearch}>
            <IoMdSearch className="text-2xl ml-2 cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};
