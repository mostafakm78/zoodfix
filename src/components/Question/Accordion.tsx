'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export type AccordionItemType = {
  question: string;
  answer?: string;
  Link?: string;
};

type AccordionProps = {
  data: AccordionItemType[];
};

const Accordion: React.FC<AccordionProps> = ({ data }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {data.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="border border-secondery rounded-xl overflow-hidden">
            <button onClick={() => setOpenIndex(isOpen ? null : index)} className="w-full bg-third text-right px-4 py-3 flex justify-between items-center">
              <span>{item.question}</span>
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="ml-2">
                <ChevronDown size={18} />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div key="content" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="px-4 text-muted-foreground text-justify text-sm leading-relaxed overflow-hidden">
                  {item.answer ? (
                    <div className="py-4 px-4">{item.answer}</div>
                  ) : (
                    <div className="py-4 px-4 break-words">
                      <Link target="_blank" href={item.Link ? item.Link : ''}>
                        {item.Link}
                      </Link>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
