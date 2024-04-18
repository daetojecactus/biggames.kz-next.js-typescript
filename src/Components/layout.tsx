import React from 'react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  style: 'normal',
  weight: ['300', '400', '700', '900'],
  display: 'swap',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={roboto.className}>{children}</div>;
}
