import { CustomersSlider } from './CustomersSlider';

export const Customers: React.FC = () => {
  return (
    // blog section on home page
    <section className="container mx-auto px-32 mt-20">
      {/* title  */}
      <div className="text-justify space-y-1.5">
        <h3 className="text-3xl font-semibold opacity-80">مشتریان ما</h3>
      </div>

      {/* customers slider component  */}
      <CustomersSlider />
    </section>
  );
};
