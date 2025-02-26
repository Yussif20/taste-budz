import type { Metadata } from 'next';
import './globals.css';
import MainHeader from '@/components/MainHeader';

export const metadata: Metadata = {
  title: 'Taste Budz',
  description: 'Your favorite food app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" bg-[#1f1f1f] text-white">
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
// <div className="bg-radial-gradient from-green-custom to-blue-custom h-screen w-full">
//   {/* Your content here */}
// </div>;
