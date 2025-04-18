import { RiCloseLargeFill } from 'react-icons/ri';
import { IoMdSearch } from 'react-icons/io';

type SearchBarProps = {
  setClose: () => void;
};

export const SearchBar = ({ setClose }: SearchBarProps) => {
  return (
    <div className={`fixed top-0 left-0 bg-gray-200 h-14 right-0 flex items-center z-50 justify-center duration-500`}>
      <div className="flex items-center justify-center w-full gap-2">
        <button onClick={() => setClose()}>
          <RiCloseLargeFill className="text-black text-2xl cursor-pointer" />
        </button>
        <div className="flex items-center justify-between rounded-3xl shadow-md p-1 bg-gray-100 w-4/12">
          <input placeholder="عبارت جستجو را وارد نمایید" className="p-1 outline-none w-full" />
          <button>
            <IoMdSearch className="text-2xl ml-2 cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};
