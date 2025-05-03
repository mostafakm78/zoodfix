import { ToastContainer } from 'react-toastify';
import './globals.css';
import ProgressBar from '@/components/shared/ProgressBar';
import { Suspense } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zoodfix / صفحه اصلی',
  description: 'محصولات ساختمانی',
  openGraph: {
    title: 'صفحه اصلی',
    description: 'صفحه اصلی سایت زودفیکس',
    images: [{ url: '/images/Products/loading.jpg', alt: 'تصویر سایت' }],
    url: `https://yourdomain.com`,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Suspense fallback={<div>...</div>}>
          <ProgressBar />
        </Suspense>
        {children}
        <ToastContainer rtl autoClose={3000} position="top-center" />
      </body>
    </html>
  );
}
