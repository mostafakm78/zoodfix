import ContactUs from '@/components/contact-us/ContactUs';
import { WhySection } from '@/components/Home/WhySection';
import { Footer } from '@/components/shared/Footer';
import { Navbar } from '@/components/shared/Navbar';

const ContactUsPage = () => {
  return (
    <>
      <Navbar />
      <ContactUs />
      <Footer />
    </>
  );
};

export default ContactUsPage;
