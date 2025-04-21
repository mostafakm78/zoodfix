'use client';

import Image from 'next/image';
import Logo from '../../../public/images/logo.png';
import Link from 'next/link';
import { IoCall } from 'react-icons/io5';
import { IoMdSearch } from 'react-icons/io';
import { SearchBar } from '../shared/SearchBar';
import { useEffect, useState } from 'react';
import { HiMiniBars3 } from 'react-icons/hi2';
import { IoClose } from 'react-icons/io5';

export const NavbarHome = () => {
  const [showSearchBar, setShowSearchBar] = useState<boolean>(true);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [sideMenu, setSideMenu] = useState<boolean>(false);

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

  useEffect(() => {
    if (sideMenu) document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [sideMenu]);

  return (
    <>
      {sideMenu && <div className="fixed inset-0 bg-black/50 z-46" onClick={() => setSideMenu(false)}></div>}
      <div className={showSearchBar ? `fixed top-0 left-0 right-0 -translate-y-16 duration-500 z-[48]` : `fixed top-0 left-0 right-0 z-[48] duration-500`}>
        <SearchBar setClose={() => setShowSearchBar(!showSearchBar)} />
      </div>
      <div className={sideMenu ? 'fixed z-[47] translate-x-0 duration-500 h-full md:w-2/5 w-3/5 right-0 top-0 bg-third shadow' : 'fixed z-[47] translate-x-full duration-500 h-full md:w-2/5 w-3/5 right-0 top-0 bg-third shadow'}>
        <div className="flex items-center bg-secondery justify-center">
          <Image src={Logo} alt="logo" className="w-1/2 py-6 hover:animate-pulse" />
        </div>
        <div className="flex px-10 mt-6 flex-col">
          <button onClick={() => setSideMenu(!sideMenu)} className="text-foreground text-4xl group">
            <IoClose className="group-hover:scale-110 place-self-end duration-200 cursor-pointer" />
          </button>
          <Link href="/" className="hover:text-[#28BE31] relative after:absolute hover:scale-110 px-1 py-2 hover:rounded-4xl duration-200 after:content-[''] after:h-[1.5px] after:w-full after:bg-black after:opacity-30 after:rounded-full after:bottom-0 after:right-0">
            صفحه اصلی
          </Link>
          <Link href="" className="hover:text-[#28BE31] relative after:absolute hover:scale-110 px-1 py-2 hover:rounded-4xl duration-200 after:content-[''] after:h-[1.5px] after:w-full after:bg-black after:opacity-30 after:rounded-full after:bottom-0 after:right-0">
            محصولات و خدمات
          </Link>
          <Link href="" className="hover:text-[#28BE31] relative after:absolute hover:scale-110 px-1 py-2 hover:rounded-4xl duration-200 after:content-[''] after:h-[1.5px] after:w-full after:bg-black after:opacity-30 after:rounded-full after:bottom-0 after:right-0">
            مقالات
          </Link>
          <Link href="" className="hover:text-[#28BE31] relative after:absolute hover:scale-110 px-1 py-2 hover:rounded-4xl duration-200 after:content-[''] after:h-[1.5px] after:w-full after:bg-black after:opacity-30 after:rounded-full after:bottom-0 after:right-0">
            درباره زودفیکس
          </Link>
          <Link href="/contact-us" className="hover:text-[#28BE31] relative after:absolute hover:scale-110 px-1 py-2 hover:rounded-4xl duration-200 after:content-[''] after:h-[1.5px] after:w-full after:bg-black after:opacity-30 after:rounded-full after:bottom-0 after:right-0">
            ارتباط با ما
          </Link>
          <Link href="" className="hover:text-[#28BE31] relative after:absolute hover:scale-110 px-1 py-2 hover:rounded-4xl duration-200 after:content-[''] after:h-[1.5px] after:w-full after:bg-black after:opacity-30 after:rounded-full after:bottom-0 after:right-0">
            استخدام
          </Link>
        </div>
      </div>
      {!isScrolled && (
        <section className={`w-full z-40 lg:top-12 top-6 absolute xl:px-10 lg:px-0 flex justify-evenly items-center`}>
          <button onClick={() => setSideMenu(!sideMenu)} className="text-background lg:hidden md:text-4xl text-3xl group">
            <HiMiniBars3 className="group-hover:scale-110 duration-200 cursor-pointer" />
          </button>
          <Link href="/">
            <Image src={Logo} alt="Brand Logo" width={250} className="w-2/2 lg:w-[250px] md:w-[150px]" />
          </Link>
          <div className="w-2/4 text-background lg:flex hidden space-x-3 justify-start">
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
            <Link href="/contact-us" className="hover:text-[#28BE31] hover:bg-yellow-200 px-1 py-2 hover:rounded-4xl duration-200">
              ارتباط با ما
            </Link>
            <Link href="" className="hover:text-[#28BE31] hover:bg-yellow-200 px-1 py-2 hover:rounded-4xl duration-200">
              استخدام
            </Link>
          </div>
          <div className="flex flex-col">
            <div>
              <span className="text-background lg:block hidden">پشتیبانی سریع</span>
              <div className="flex justify-center items-center gap-2">
                <Link href="" className="flex justify-center items-center hover:scale-105 duration-200 gap-2">
                  <span className="font-bold lg:block hidden text-background">09169799533</span>
                  <span className="bg-rose-500 lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center">
                    <IoCall className="lg:text-xl text-background" />
                  </span>
                </Link>
                <button onClick={() => setShowSearchBar(!showSearchBar)} className="bg-background lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center">
                  <IoMdSearch className="lg:text-xl text-foreground opacity-70 hover:rotate-90 cursor-pointer duration-200" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      <section
        className={
          isScrolled ? 'w-full z-40 duration-500 translate-y-0 fixed lg:h-20 md:h-16 h-12 shadow-lg bg-secondery xl:px-10 lg:px-0 flex justify-evenly items-center' : 'w-full z-40 -translate-y-40 fixed md:h-16 h-12 lg:h-20 shadow-lg bg-secondery xl:px-10 lg:px-0 flex justify-evenly items-center'
        }
      >
        <button onClick={() => setSideMenu(!sideMenu)} className="text-background lg:hidden text-4xl group">
          <HiMiniBars3 className="group-hover:scale-110 duration-200 cursor-pointer" />
        </button>
        <Link href="/">
          <Image src={Logo} alt="Brand Logo" width={150} />
        </Link>
        <div className="w-2/4 text-background hidden lg:flex space-x-3 justify-start">
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
          <Link href="/contact-us" className="hover:text-[#28BE31] hover:bg-yellow-200 px-1 py-2 hover:rounded-4xl duration-200">
            ارتباط با ما
          </Link>
          <Link href="" className="hover:text-[#28BE31] hover:bg-yellow-200 px-1 py-2 hover:rounded-4xl duration-200">
            استخدام
          </Link>
        </div>
        <div className="flex flex-col">
          <div>
            <span className="text-background lg:block hidden">پشتیبانی سریع</span>
            <div className="flex justify-center items-center gap-2">
              <Link href="" className="flex justify-center items-center hover:scale-105 duration-200 gap-2">
                <span className="font-bold text-background lg:block hidden">09169799533</span>
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
