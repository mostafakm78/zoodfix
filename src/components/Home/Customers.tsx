'use client';

import { CustomersSlider } from './CustomersSlider';
import { motion } from 'framer-motion';

export const Customers: React.FC = () => {
  return (
    // blog section on home page
    <motion.div initial={{ opacity: 0, y: 100 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
      <section className="container mx-auto px-32 mt-20">
        {/* title  */}
        <div className="text-justify space-y-1.5">
          <h3 className="text-3xl font-semibold opacity-80">مشتریان ما</h3>
        </div>

        {/* customers slider component  */}
        <CustomersSlider />
      </section>
    </motion.div>
  );
};
