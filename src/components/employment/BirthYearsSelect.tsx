'use client';

import { useState, useEffect } from 'react';

const BirthDatePicker: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [selectedMonth, setSelectedMonth] = useState<string>('');
  const [days, setDays] = useState<number[]>([]);

  const currentYear = new Date().getFullYear();
  const persianYear = currentYear - 621;

  //  persian month array
  const years: number[] = Array.from({ length: persianYear - 1329 }, (_, i) => persianYear - i);
  const months: string[] = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];

  // get days for two models month
  const getDaysInMonth = (month: number): number => {
    if (month <= 6) return 31;
    if (month <= 11) return 30;
    return 29; // kabise year
  };

  useEffect(() => {
    if (selectedMonth) {
      const numDays = getDaysInMonth(Number(selectedMonth));
      const newDays = Array.from({ length: numDays }, (_, i) => i + 1);
      setDays(newDays);
    } else {
      setDays([]);
    }
  }, [selectedMonth]);

  return (
    <div className="flex justify-between w-ful mt-4 mb-10">
      {/* year */}
      <div>
        <label htmlFor="year" className="block mb-2 text-sm text-gray-500">
          سال
        </label>
        <select id="year" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} className="w-full p-2 border border-gray-300 rounded-xl text-base outline-0 focus:outline-1 focus:outline-secondery bg-white text-gray-500">
          <option value="">سال</option>
          {years.map((year) => (
            <option key={year} value={year.toString()}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* month */}
      <div>
        <label htmlFor="month" className="block mb-2 text-sm text-gray-500">
          ماه
        </label>
        <select id="month" value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} className="w-full p-2 border border-gray-300 rounded-xl text-base outline-0 focus:outline-1 focus:outline-seconderytext-base bg-white text-gray-500">
          <option value="">ماه</option>
          {months.map((month, index) => (
            <option key={index} value={(index + 1).toString()}>
              {month}
            </option>
          ))}
        </select>
      </div>

      {/* day */}
      <div>
        <label htmlFor="day" className="block mb-2 text-sm text-gray-500">
          روز
        </label>
        <select id="day" className="w-full p-2 border border-gray-300 outline-0 focus:outline-1 focus:outline-secondery rounded-xl text-base bg-white text-gray-500">
          <option value="">روز</option>
          {days.map((day) => (
            <option key={day} value={day.toString()}>
              {day}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default BirthDatePicker;
