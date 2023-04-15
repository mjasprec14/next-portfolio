import React, { useState } from 'react';
import { Link } from 'react-scroll';
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
  const [navbar, setNavbar] = useState(false);
  return (
    <header
      className='w-full mx-auto px-4 py-2 sm:px-20 md:py-0  shadow fixed top-0 z-50  dark:border-b dark:border-teal-600
    bg-zinc-50 dark:bg-zinc-900 
    '
    >
      <div className='md:flex md:items-center justify-between'>
        <div className='flex justify-between items-center'>
          <div className='md:py-5 md:block'>
            <h2 className='text-[20px] text-black-500 font-bold tracking-[5px]'>
              MJ Asprec
            </h2>
          </div>

          <div className='md:hidden flex align-middle'>
            <button onClick={() => setNavbar(!navbar)}>
              <i>{navbar ? <IoMdClose size={20} /> : <IoMdMenu size={20} />}</i>
            </button>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <div className='flex flex-col items-center justify-center space-y-2 md:flex md:flex-row md:space-x-6 md:space-y-0 '>
              {NAV_ITEMS.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.page}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => setNavbar(!navbar)}
                  activeClass='active'
                  className='text-sm font-semibold uppercase text-gray-500 block lg:inline-block hover:text-neutral-500 dark:text-neutral-100 cursor-pointer'
                >
                  {item.label}
                </Link>
              ))}

              {currentTheme === 'dark' ? (
                <button
                  onClick={() => setTheme('light')}
                  className='p-2 rounded-xl'
                >
                  <i>
                    <RiSunLine
                      size={20}
                      color='white'
                    />
                  </i>
                </button>
              ) : (
                <button
                  onClick={() => setTheme('dark')}
                  className=' p-2 rounded-xl'
                >
                  <i>
                    <RiMoonFill size={20} />
                  </i>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
