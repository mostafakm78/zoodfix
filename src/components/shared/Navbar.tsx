'use client';

import Image from 'next/image';
import Logo from '../../../public/images/logo.png';
import Link from 'next/link';
import { IoCall } from 'react-icons/io5';
import { IoMdSearch } from 'react-icons/io';
import { SearchBar } from './SearchBar';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState<boolean>(true);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  return (
    <>
      <div className={showSearchBar ? `fixed top-0 left-0 right-0 -translate-y-16 duration-500 z-50` : `fixed top-0 left-0 right-0 z-50 duration-500`}>
        <SearchBar setClose={() => setShowSearchBar(!showSearchBar)} />
      </div>
      {!isScrolled && (
        <section className={`w-full z-40 top-12 absolute px-20 flex justify-evenly items-center`}>
          <Link href="/">
            <Image src={Logo} alt="Brand Logo" width={250} />
          </Link>
          <div className="w-2/4 text-background flex space-x-3 justify-start">
            <Link href="/" className="hover:text-[#28BE31] hover:bg-yellow-200 px-1 py-2 hover:rounded-4xl duration-200">
              صفحه اصلی
            </Link>
            <Link href="" className="hover:text-[#28BE31] hover:bg-yellow-200 px-1 py-2 hover:rounded-4xl duration-200">
              محصولات و خدمات
            </Link>
            <Link href="" className="hover:text-[#28BE31] hover:bg-yellow-200 px-1 py-2 hover:rounded-4xl duration-200">
              مقالات
            </Link>
            <Link href="" className="hover:text-[#28BE31] hover:bg-yellow-200 px-1 py-2 hover:rounded-4xl duration-200">
              درباره زودفیکس
            </Link>
            <Link href="" className="hover:text-[#28BE31] hover:bg-yellow-200 px-1 py-2 hover:rounded-4xl duration-200">
              ارتباط با ما
            </Link>
            <Link href="" className="hover:text-[#28BE31] hover:bg-yellow-200 px-1 py-2 hover:rounded-4xl duration-200">
              استخدام
            </Link>
          </div>
          <div className="flex flex-col">
            <div>
              <span className="text-background">پشتیبانی سریع</span>
              <div className="flex justify-center items-center gap-2">
                <Link href="" className="flex justify-center items-center hover:scale-105 duration-200 gap-2">
                  <span className="font-bold text-background">09169799533</span>
                  <span className="bg-rose-500 w-8 h-8 rounded-full flex items-center justify-center">
                    <IoCall className="text-xl text-background" />
                  </span>
                </Link>
                <button onClick={() => setShowSearchBar(!showSearchBar)} className="bg-background w-8 h-8 rounded-full flex items-center justify-center">
                  <IoMdSearch className="text-xl text-foreground opacity-70 hover:rotate-90 cursor-pointer duration-200" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className={isScrolled ? 'w-full z-40 duration-500 translate-y-0 fixed h-20 shadow-lg bg-secondery px-20 flex justify-evenly items-center' : 'w-full z-40 -translate-y-40 fixed h-20 shadow-lg bg-secondery px-20 flex justify-evenly items-center'}>
        <Link href="/">
          <Image src={Logo} alt="Brand Logo" width={250} />
        </Link>
        <div className="w-2/4 text-background flex space-x-3 justify-start">
          <Link href="/" className="hover:text-[#28BE31] hover:bg-yellow-200 px-1 py-2 hover:rounded-4xl duration-200">
            صفحه اصلی
          </Link>
          <Link href="" className="hover:text-[#28BE31] hover:bg-yellow-200 px-1 py-2 hover:rounded-4xl duration-200">
            محصولات و خدمات
          </Link>
          <Link href="" className="hover:text-[#28BE31] hover:bg-yellow-200 px-1 py-2 hover:rounded-4xl duration-200">
            مقالات
          </Link>
          <Link href="" className="hover:text-[#28BE31] hover:bg-yellow-200 px-1 py-2 hover:rounded-4xl duration-200">
            درباره زودفیکس
          </Link>
          <Link href="" className="hover:text-[#28BE31] hover:bg-yellow-200 px-1 py-2 hover:rounded-4xl duration-200">
            ارتباط با ما
          </Link>
          <Link href="" className="hover:text-[#28BE31] hover:bg-yellow-200 px-1 py-2 hover:rounded-4xl duration-200">
            استخدام
          </Link>
        </div>
        <div className="flex flex-col">
          <div>
            <span className="text-background">پشتیبانی سریع</span>
            <div className="flex justify-center items-center gap-2">
              <Link href="" className="flex justify-center items-center hover:scale-105 duration-200 gap-2">
                <span className="font-bold text-background">09169799533</span>
                <span className="bg-rose-500 w-8 h-8 rounded-full flex items-center justify-center">
                  <IoCall className="text-xl text-background" />
                </span>
              </Link>
              <button onClick={() => setShowSearchBar(!showSearchBar)} className="bg-background w-8 h-8 rounded-full flex items-center justify-center">
                <IoMdSearch className="text-xl text-foreground opacity-70 hover:rotate-90 cursor-pointer duration-200" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
