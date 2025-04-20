import { CustomersSlider } from './CustomersSlider';

export const Customers = () => {
  return (
    <section className="container mx-auto px-32 mt-20">
      <div className="text-justify space-y-1.5">
        <h3 className="text-3xl font-semibold opacity-80">مشتریان ما</h3>
      </div>
      <CustomersSlider />
    </section>
  );
};
