import Link from 'next/link';
import { PaginationProps } from '../../../types/types';

const Pagination = ({ currentPage, totalPages, category }: PaginationProps) => {
  const createPageLink = (page: number) => {
    return `/products?page=${page}${category ? `&category=${category}` : ''}`;
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
          {currentPage > 1 && <span>...</span>}
          {[currentPage, currentPage + 1].map((page) =>
            page <= totalPages ? (
              <Link key={page} href={createPageLink(page)} className={`${currentPage === page ? 'bg-secondery' : 'bg-gray-500'} lg:py-2 lg:px-4 p-1.5 hover:scale-110 duration-300 rounded-md text-background`}>
                {page}
              </Link>
            ) : null
          )}
          {currentPage < totalPages && <span>...</span>}
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
