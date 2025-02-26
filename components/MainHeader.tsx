import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const MainHeader: React.FC = () => {
  return (
    <header
      className="h-64 bg-cover bg-center"
      style={{ backgroundImage: "url('/wave.svg')" }}
    >
      <ThemeSwitcher />
    </header>
  );
};

export default MainHeader;
