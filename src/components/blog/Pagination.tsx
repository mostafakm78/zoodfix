import Link from 'next/link';

const Pagination = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center text-sm my-6 justify-center">
        <div className="space-x-4 flex items-center rounded-lg shadow-lg bg-third lg:p-2 p-1.5">
          <Link href="" className="bg-secondery lg:py-2 lg:px-4 p-1.5 hover:scale-110 duration-300 rounded-md text-background">
            قبلی
          </Link>
          <Link href="" className="bg-secondery lg:py-2 lg:px-4 p-1.5 hover:scale-110 duration-300 rounded-md text-background">
            1
          </Link>
          <Link href="" className="bg-secondery lg:py-2 lg:px-4 p-1.5 hover:scale-110 duration-300 rounded-md text-background">
            2
          </Link>

          <Link href="" className="bg-secondery lg:py-2 lg:px-4 p-1.5 hover:scale-110 duration-300 rounded-md text-background">
            بعدی
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
