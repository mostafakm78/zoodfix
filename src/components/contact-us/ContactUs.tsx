import Link from 'next/link';
import { FaMapMarkerAlt } from 'react-icons/fa';
import ContactUsForm from './ContactUsForm';

const ContactUs: React.FC = () => {
  return (
    <div className="container mx-auto">
      <section className="grid lg:grid-cols-2 grid-cols-1 gap-28 bg-background lg:px-60 px-20 pb-20 pt-20">
        {/* data of company */}

        <div className="space-y-8 text-xl opacity-80">
          <h3 className="text-4xl font-semibold">ارتباط با ما</h3>
          <div>
            <h4>شماره تماس :</h4>
            <span>09172003514 - 07137733378</span>
          </div>
          <div>
            <h4>شماره فکس :</h4>
            <span>۰۷۱۳۶۳۰۱۳۶۶</span>
          </div>
          <div>
            <h4>آدرس :</h4>
            <span>شیراز ،قدوسی غربی، نبش کوچه ۲۱ ساختمان مصانیک ،واحد ۸</span>
          </div>
          <div>
            <h4>آدرس کارخانه:</h4>
            <span>شیراز. شهرک صنعتی بزرگ. بلوار سازندگی. خیابان 605</span>
          </div>
          <div>
            <Link target='_blank' href="https://www.google.com/maps/search/29.474962,+52.532992?entry=tts&g_ep=EgoyMDI0MDYxMi4wKgBIAVAD" className="flex space-x-2 items-center duration-500 hover:scale-105">
              <FaMapMarkerAlt /> <h4>مسیریابی به آدرس دفتر مرکزی</h4>
            </Link>
          </div>
        </div>

        {/* form section */}
        <ContactUsForm />
      </section>
    </div>
  );
};

export default ContactUs;
