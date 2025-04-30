import Link from 'next/link';
import { PaginationProps } from '../../../types/types';


const Pagination = ({ currentPage, totalPages, category }: PaginationProps) => {
  const createPageLink = (page: number) => {
    return `/blog?page=${page}${category ? `&category=${category}` : ''}`;
  };

  return (
    <div className="container mx-auto">
      <div className="flex items-center text-sm my-6 justify-center">
        <div className="space-x-4 flex items-center rounded-lg shadow-lg bg-third lg:p-2 p-1.5">
          {currentPage > 1 && (
            <Link href={createPageLink(currentPage - 1)} className="bg-gray-500 lg:py-2 lg:px-4 p-1.5 hover:scale-110 duration-300 rounded-md text-background">
              قبلی
            </Link>
          )}
          {Array.from({ length: totalPages }, (_, index) => (
            <Link key={index + 1} href={createPageLink(index + 1)} className={`${currentPage === index + 1 ? 'bg-secondery' : 'bg-gray-500'} lg:py-2 lg:px-4 p-1.5 hover:scale-110 duration-300 rounded-md text-background`}>
              {index + 1}
            </Link>
          ))}

          {currentPage < totalPages && (
            <Link href={createPageLink(currentPage + 1)} className="bg-gray-500 lg:py-2 lg:px-4 p-1.5 hover:scale-110 duration-300 rounded-md text-background">
              بعدی
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
