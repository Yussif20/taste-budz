import React from 'react';

import LogoImg from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import NavLink from './NavLink';

const MainHeader: React.FC = () => {
  return (
    <header
      className="h-72 bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: "url('/wave.svg')" }}
    >
      <div className="w-4/6 mx-auto flex items-center justify-between py-12 px-10">
        <Link className="flex items-center justify-center z-10" href="/">
          <Image
            src={LogoImg}
            alt="logo Image"
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
              <NavLink link="Meals" href="/meals" />
            </li>
            <li>
              <NavLink link="Community" href="/community" />
            </li>
          </ul>
        </nav>

        {/* Theme Switcher */}
        <div className="z-10">{/* <ThemeSwitcher /> */}</div>
      </div>
    </header>
  );
};

export default MainHeader;
