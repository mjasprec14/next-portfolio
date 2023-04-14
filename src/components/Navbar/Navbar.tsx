import React, { useState } from 'react';
// import { Link } from 'react-scroll/modules';
import { useTheme } from 'next-themes';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

type Props = {};

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    page: 'home',
  },
  {
    label: 'About',
    page: 'about',
  },
  {
    label: 'Projects',
    page: 'projects',
  },
];

const Navbar = (props: Props) => {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <header className='w-full mx-auto px-4 bg-white shadow fixed top-0 z-50 dark:bg-stone-900 dark:border-b dark:border-stone-600'>
      <div className='md:flex md:items-center justify-between'>
        <div>
          <div className='md:py-5 md:block'>
            <h2 className='text-2xl font-bold'>MJ Asprec</h2>
          </div>
        </div>

        <div className='md:flex md:space-x-6'>
          {NAV_ITEMS.map((item, idx) => (
            <a key={idx}>{item.label}</a>
          ))}

          {currentTheme === 'dark' ? (
            <button
              onClick={() => setTheme('light')}
              className='bg-slate-100 p-2 rounded-xl'
            >
              <RiSunLine />
            </button>
          ) : (
            <button onClick={() => setTheme('dark')}>
              <RiMoonFill className='bg-slate-100 p-2 rounded-xl' />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
