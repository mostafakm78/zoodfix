import Image from 'next/image';
import ProductImage from '../../../public/images/Products/product.png';
import SingleProductForm from './SingleProductForm';

const SingleProduct = () => {
  return (
    <div className="container mx-auto">
      <section className="bg-background xl:px-32 px-8 pb-20 pt-20">
        <h3 className="text-4xl font-bold">پلاستر زبره خاکستری 25</h3>
        <div className="flex lg:flex-row flex-col-reverse justify-between bg-secondery mt-10 rounded-lg shadow-lg items-center">
          <div className="flex flex-col gap-6 bg-third lg:px-12 px-4 w-10/12 lg:rounded-l-xl lg:rounded-r-none rounded-t-xl py-10 lg:w-7/12">
            <div className='lg:text-lg flex justify-around space-x-4 relative after:content-[""] after:absolute after:h-0.5 after:w-full after:bg-secondery after:-bottom-2 after:right-0 hover:after:bg-gray-300 hover:after:duration-300'>
              <span>نام محصول :</span>
              <span>پلاسترزبره خاکستری</span>
            </div>
            <div className='lg:text-lg flex justify-around space-x-4 relative after:content-[""] after:absolute after:h-0.5 after:w-full after:bg-secondery after:-bottom-2 after:right-0 hover:after:bg-gray-300 hover:after:duration-300'>
              <span>وزن محصول :</span>
              <span>پلاسترزبره خاکستری</span>
            </div>
            <div className='lg:text-lg flex justify-around space-x-4 relative after:content-[""] after:absolute after:h-0.5 after:w-full after:bg-secondery after:-bottom-2 after:right-0 hover:after:bg-gray-300 hover:after:duration-300'>
              <span>نوع محصول :</span>
              <span>پلاسترزبره خاکستری</span>
            </div>
            <div className='lg:text-lg flex justify-around space-x-4 relative after:content-[""] after:absolute after:h-0.5 after:w-full after:bg-secondery after:-bottom-2 after:right-0 hover:after:bg-gray-300 hover:after:duration-300'>
              <span>شناسه محصول :</span>
              <span>پلاسترزبره خاکستری</span>
            </div>
          </div>
          <div className="">
            <Image src={ProductImage} alt="" className="h-[400px] w-[400px] drop-shadow-xl" />
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-8">
          <h4 className="text-2xl font-bold">توضیحات محصول :</h4>
          <p className="text-base/relaxed text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد
            گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان
            مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>
        <SingleProductForm />
      </section>
    </div>
  );
};

export default SingleProduct;
