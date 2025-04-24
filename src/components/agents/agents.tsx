import AgentForm from './AgentForm';

const Agents: React.FC = () => {
  return (
    <div className="container mx-auto">
      <section className="grid lg:grid-cols-2 grid-cols-1 gap-28 bg-background lg:px-60 px-20 pb-20 pt-20">
        <div className="space-y-10">
          <h3 className="text-3xl font-semibold">شرایط دریافت نمایندگی</h3>
          <p className="text-justify text-base/relaxed">دریافت نمایندگی محصولات یک کارخانه نیازمند رعایت مجموعه‌ای از شرایط و معیارهای تعیین‌شده از سوی کارخانه تولیدکننده است. این شرایط ممکن است بسته به نوع محصول، سیاست‌های شرکت و بازار هدف متفاوت باشد.</p>
          <p className="text-justify text-base/relaxed">در صورت تمایل به دریافت نمایندگی، پیشنهاد می‌شود با کارخانه موردنظر تماس گرفته و از شرایط دقیق و مدارک مورد نیاز اطلاع حاصل کنید.</p>
        </div>
        <div>
          <AgentForm />
        </div>
      </section>
    </div>
  );
};

export default Agents;
