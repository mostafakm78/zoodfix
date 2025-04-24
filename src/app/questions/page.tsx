import Question from '@/components/Question/Question';
import { Footer } from '@/components/shared/Footer';
import { Navbar } from '@/components/shared/Navbar';

const QuestionPage = () => {
  return (
    <>
      <Navbar />
      <Question />
      <Footer />
    </>
  );
};

export default QuestionPage;
