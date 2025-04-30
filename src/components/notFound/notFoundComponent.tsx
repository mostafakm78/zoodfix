'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Footer } from '@/components/shared/Footer';
import { Navbar } from '@/components/shared/Navbar';

export default function NotFoundComponent() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [rgbValues, setRgbValues] = useState({ r: 0, g: 255, b: 100 });
  const [textShadow, setTextShadow] = useState('');

  useEffect(() => {
    let animationFrame: number;
    let hue = 0;

    const animateColors = () => {
      hue = (hue + 0.5) % 360;
      const { r, g, b } = hslToRgb(hue / 360, 1, 0.5);
      setRgbValues({ r, g, b });
      setTextShadow(`
        0 0 4px rgb(${r}, ${g}, ${b}),
        0 0 4px rgb(${r}, ${g}, ${b}),
        0 0 4px rgb(${r}, ${g}, ${b}),
        0 0 4px rgb(${r}, ${g}, ${b})
      `);
      animationFrame = requestAnimationFrame(animateColors);
    };

    animateColors();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  function hslToRgb(h: number, s: number, l: number) {
    let r, g, b;
    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255),
    };
  }

  const rgbStyle = {
    textShadow,
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col space-y-6 items-center bg-third justify-center h-[500px]">
        <div className="relative lg:text-7xl text-2xl md:text-4xl inline-block overflow-hidden cursor-pointer w-fit">
          {/* خط چپ */}
          <div className="absolute left-0 bottom-0 w-[2px] h-0 bg-gradient-to-b from-green-300 via-green-400 to-green-500 animate-draw-vertical"></div>

          {/* خط راست */}
          <div className="absolute right-0 top-0 w-[2px] h-0 bg-gradient-to-t from-green-300 via-green-400 to-green-500 animate-draw-vertical-reverse animation-delay-2"></div>

          <span className="font-medium p-4 text-secondery relative inline-block">
            {/* خط پایین */}
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-green-300 via-green-400 to-green-500 animate-draw-horizontal animation-delay-1"></span>
            {/* خط بالا */}
            <span className="absolute top-0 right-0 h-[2px] w-0 bg-gradient-to-l from-green-300 via-green-400 to-green-500 animate-draw-horizontal-reverse animation-delay-3"></span>
            صفحه مورد نظر یافت نشد :(
          </span>
        </div>

        {/* این بخش فقط RGB متحرک دارد */}
        <span className="text-5xl text-center text-secondery p-4 rounded-xl font-extrabold tracking-wider" style={rgbStyle}>
          404
          <br />
          Not Found
        </span>

        <Link href="/" className="hover:text-secondery animate-bounce hover:animate-none duration-500 hover:scale-105">
          بازگشت به صفحه اصلی
        </Link>
      </div>
      <Footer />
    </>
  );
}
