'use client'; // Add this since we're using a client-side hook

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname

const NavLink = ({ link, href }) => {
  const pathname = usePathname(); // Get the current pathname

  return (
    <Link
      href={href}
      className={`text-3xl font-semibold transition-colors duration-300 ${
        pathname === href
          ? 'text-yellow-400 border-b-2 border-yellow-400'
          : 'text-white hover:text-yellow-400'
      }`}
    >
      {link}
    </Link>
  );
};

export default NavLink;
