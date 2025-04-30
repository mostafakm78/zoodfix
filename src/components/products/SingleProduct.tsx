import Image from 'next/image';
import SingleProductForm from './SingleProductForm';
import Link from 'next/link';

// photo
import loadingImage from '../../../public/images/Products/loading.jpg';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { ProductItem } from '../../../types/types';


interface SingleProductProps {
  product: ProductItem;
}

const SingleProduct = ({ product }: SingleProductProps) => {
  return (
    <div className="container mx-auto">
      <section className="bg-background xl:px-32 px-8 pb-20 pt-20">
        <h3 className="text-4xl font-bold">{product.title}</h3>

        {/* product information  */}
        <div className="flex lg:flex-row flex-col-reverse justify-between bg-secondery mt-10 rounded-lg shadow-lg items-center">
          <div className="flex flex-col gap-6 bg-third lg:px-12 px-4 w-10/12 lg:rounded-l-xl lg:rounded-r-none rounded-t-xl py-10 lg:w-7/12">
            <div className='lg:text-lg flex justify-between lg:px-10 space-x-4 relative after:content-[""] after:absolute after:h-0.5 after:w-full after:bg-secondery after:-bottom-2 after:right-0 hover:after:bg-gray-300 hover:after:duration-300'>
              <span>نام محصول :</span>
              <span>{product.title}</span>
            </div>
            <div className='lg:text-lg flex justify-between lg:px-10 space-x-4 relative after:content-[""] after:absolute after:h-0.5 after:w-full after:bg-secondery after:-bottom-2 after:right-0 hover:after:bg-gray-300 hover:after:duration-300'>
              <span>وزن محصول :</span>
              <span>{product.weight}</span>
            </div>
            <div className='lg:text-lg flex justify-between lg:px-10 space-x-4 relative after:content-[""] after:absolute after:h-0.5 after:w-full after:bg-secondery after:-bottom-2 after:right-0 hover:after:bg-gray-300 hover:after:duration-300'>
              <span>نوع محصول :</span>
              <Link href={`/products?page=1&category=${product.category}`} className="text-secondery hover:text-gray-700 duration-500">
                {product.category}
              </Link>
            </div>
            <div className='lg:text-lg flex justify-between lg:px-10 space-x-4 relative after:content-[""] after:absolute after:h-0.5 after:w-full after:bg-secondery after:-bottom-2 after:right-0 hover:after:bg-gray-300 hover:after:duration-300'>
              <span>شناسه محصول :</span>
              <span>{product.id}</span>
            </div>
          </div>
          <div className="">
            <Image src={product.image ? product.image : loadingImage} width={400} height={400} alt="product photo" className="h-[400px] w-[400px] drop-shadow-xl" />
          </div>
        </div>

        {/* description of product  */}
        <div className="mt-16 flex flex-col gap-8">
          <h4 className="text-2xl font-bold">توضیحات محصول :</h4>
          <p className="text-base/relaxed text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد
            گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان
            مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>

        {/* product form component  */}
        <div className="flex flex-col gap-8 mt-16">
          <h4 className="text-3xl font-bold">ثبت سفارش :</h4>
          <div className="flex lg:flex-row flex-col items-center gap-8 lg:gap-0 justify-center lg:justify-between">
            {/* right section  */}
            <div className="lg:w-2/4 w-full lg:self-start flex flex-col items-center">
              <span className="lg:text-2xl text-xl font-bold shadow-lg bg-gray-700 text-background py-4 px-6 rounded-4xl">برای ثبت سفارش برای ما پیام ارسال کنید</span>
              <div className="flex flex-col">
                <div className="flex flex-col mt-10 shadow-lg space-y-2 rounded-xl text-background bg-secondery py-2 px-4 space-x-2 lg:text-xl">
                  <span>شماره تماس :</span>
                  <div className="flex space-x-2 items-center">
                    <FaPhoneAlt />
                    <span>09169799533</span>
                  </div>
                </div>
                <div className="flex flex-col mt-10 shadow-lg space-y-2 rounded-xl text-background bg-secondery py-2 px-4 space-x-2 lg:text-xl">
                  <span>ایمیل :</span>
                  <div className="flex space-x-2 items-center">
                    <MdEmail />
                    <span>Mostafamf555@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            {/* form section  */}
            <SingleProductForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
