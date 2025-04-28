'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

// photo
import loadingImage from '../../../public/images/Products/loading.jpg';
import { ImSpinner8 } from 'react-icons/im';
import Image from 'next/image';

type ProductItem = {
  id: number;
  title: string;
  image: string;
  category: string;
  weight: string;
};

type BlogsList = {
  title: string;
  view: string;
  content: string;
  id: number | string;
  category: string;
};

type SearchProps = {
  searchWord: string | null;
};

const Search = ({ searchWord }: SearchProps) => {
  const [blogs, setBlogs] = useState<BlogsList[]>([]);
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    if (searchWord) {
      setIsPending(true);

      fetch(`http://localhost:4000/blogs?q=${searchWord}`)
        .then((response) => response.json())
        .then((data) => {
          const resualt = data.filter((item: BlogsList) => item.title.includes(searchWord));
          setBlogs(resualt);
          setIsPending(false);
        })
        .catch(() => {
          setIsPending(false);
        });

      fetch(`http://localhost:4000/products?q=${searchWord}`)
        .then((response) => response.json())
        .then((data) => {
          const resualt = data.filter((item: ProductItem) => item.title.includes(searchWord));
          setProducts(resualt);
          setIsPending(false);
        })
        .catch(() => {
          setIsPending(false);
        });
    }
  }, [searchWord]);

  return (
    <div className="container mx-auto">
      <section className="bg-background xl:px-60 px-20 pb-20 pt-20">
        <h3 className="w-full text-xl rounded bg-secondery text-background mb-10 py-4 px-4">نتایج جستجو: {searchWord}</h3>

        {isPending ? (
          <div className="flex items-center text-2xl min-h-[300px] space-x-3 justify-center">
            <div className="relative text-center rounded-full text-gray-500 w-[100px] h-[100px]">
              <Image src={loadingImage} alt="loading image" className="rounded-full" width={100} height={100} />
              <ImSpinner8 className="animate-spin absolute h-[120px] w-[130px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-300" />
            </div>
          </div>
        ) : (
          <>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
              <div className="mb-10">
                <h4 className="text-xl text-background mb-6 bg-gray-400 rounded p-2">نتایج بلاگ‌ها:</h4>
                {blogs.length > 0 ? (
                  <ul>
                    {blogs.map((blog) => (
                      <li key={blog.id}>
                        <Link href={`/blogs/${blog.id}`} className="border-b hover:scale-105 hover:text-secondery duration-300">
                          {blog.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-base font-bold">
                    هیچ بلاگی برای این عبارت پیدا نشد.
                    <br />
                    <span className="opacity-50 font-light text-sm">یه 404 کوچولو پیش اومد :)</span>
                  </p>
                )}
              </div>

              <div className="mb-10">
                <h4 className="text-xl text-background mb-6 bg-gray-400 rounded p-2">نتایج محصولات:</h4>
                {products.length > 0 ? (
                  <ul className="space-y-3">
                    {products.map((product) => (
                      <li key={product.id}>
                        <Link href={`/products/${product.id}`} className="border-b hover:scale-105 hover:text-secondery duration-300">
                          {product.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-base font-bold">
                    هیچ محصولی برای این عبارت پیدا نشد.
                    <br />
                    <span className="opacity-50 font-light text-sm">یه 404 کوچولو پیش اومد :)</span>
                  </p>
                )}
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Search;
