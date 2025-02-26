import React from 'react';
// import ThemeSwitcher from './ThemeSwitcher';
import Link from 'next/link';
import LogoImg from '@/assets/logo.png';
import Image from 'next/image';

const MainHeader: React.FC = () => {
  return (
    <header
      className="flex items-center justify-between py-4 px-10 h-72 bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: "url('/wave.svg')" }}
    >
      <Link className="flex items-center justify-center z-10" href="/">
        <Image
          src={LogoImg}
          alt="logo"
          height={70}
          width={70}
          priority
          className="rounded-full border-2 border-white shadow-lg"
        />
        <h3 className="text-3xl font-bold text-white ml-4">TasteBudz</h3>
      </Link>

      {/* Navigation Links */}
      <nav className="z-10">
        <ul className="flex items-center gap-8">
          <li>
            <Link
              href="/meals"
              className="text-white hover:text-yellow-400 text-lg font-semibold transition-colors duration-300"
            >
              Meals
            </Link>
          </li>
          <li>
            <Link
              href="/community"
              className="text-white hover:text-yellow-400 text-lg font-semibold transition-colors duration-300"
            >
              Community
            </Link>
          </li>
        </ul>
      </nav>

      {/* Theme Switcher */}
      <div className="z-10">{/* <ThemeSwitcher /> */}</div>
    </header>
  );
};

export default MainHeader;
