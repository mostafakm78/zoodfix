import { ToastContainer } from 'react-toastify';
import './globals.css';
import ProgressBar from '@/components/shared/ProgressBar';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ProgressBar />
        {children}
        <ToastContainer rtl autoClose={3000} position="top-center" />
      </body>
    </html>
  );
}
