import Appendix from './Appendix';
import CallInfo from './CallInfo';
import Course from './Course';
import HomeInfo from './HomeInfo';
import PersonalData from './PersonalData';
import WorkExperience from './WorkExperience';

const Employment = () => {
  return (
    <div className="container mx-auto">
      <section className="bg-background xl:px-60 px-20 pb-20 pt-32">
        <h3 className="text-4xl font-semibold">فرم استخدام</h3>

        {/* personal data */}
        <PersonalData />

        {/* call info */}
        <CallInfo />

        {/* home info */}
        <HomeInfo />

        {/* course info */}
        <Course />

        {/* works records */}
        <WorkExperience />

        {/* appendix */}
        <Appendix />
        {/* submit */}
        <div className="w-full flex items-center justify-center">
          <button className="py-2 px-10 hover:scale-105 hover:bg-secondery duration-300 bg-gray-700 text-lg text-background rounded-xl">ثبت فرم</button>
        </div>
      </section>
    </div>
  );
};

export default Employment;
