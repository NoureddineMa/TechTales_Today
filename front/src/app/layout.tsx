"use client"

import "../styles/globals.scss";
import { useEffect, useState } from 'react';
import { Inter } from 'next/font/google';
import Navbar from './components/organisms/Navbar';

const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        {pathname === '/login' || pathname === '/register' ? <> </>  : <Navbar />}
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
