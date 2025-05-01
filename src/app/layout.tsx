import { ToastContainer } from 'react-toastify';
import './globals.css';
import ProgressBar from '@/components/shared/ProgressBar';
import { Suspense } from 'react';
import logo from '../../public/images/logo.png';

export const metadata = {
  title: 'zoodfix',
  description: 'محصولات ساختمانی',
  icon: logo,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Suspense fallback={<div>در حال بارگزاری</div>}>
          <ProgressBar />
        </Suspense>
        {children}
        <ToastContainer rtl autoClose={3000} position="top-center" />
      </body>
    </html>
  );
}
