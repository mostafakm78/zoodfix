'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';

const ProgressBar = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.configure({ showSpinner: false });
    NProgress.start();
    NProgress.done();
  }, [pathname, searchParams]);

  return null;
};

export default ProgressBar;
