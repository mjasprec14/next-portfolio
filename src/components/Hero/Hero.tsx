import React from 'react';
import Image from 'next/image';
import Me from '@/public/about.jpg';
import { Link } from 'react-scroll';
import { HiArrowDown } from 'react-icons/hi';

type Props = {};

const Hero = (props: Props) => {
  return (
    <section id='home'>
      <div className='h-[90vh] overflow-x-hidden flex flex-col md:flex-row md:text-left md:space-x-6 items-center justify-center text-center sm:py-32 py-64 my-10 md:my-0'>
        <div className='flex items-center justify-center md:w-1/2'>
          <Image
            src={Me}
            alt='My photo'
            height={300}
            width={300}
            className='rounded-full shadow-2xl'
          />
        </div>
        <div className='md:w-3/5'>
          <h1 className='font-semibold text-3xl mt-6 tracking-wide md:text-7xl md:mt-0'>
            Hi, I&apos;m MJ!
          </h1>
          <p className='text-lg my-4 mb-6 md:text-xl px-5 md:px-0'>
            I&apos;m a{' '}
            <span className='font-semibold text-teal-600'>
              Software Engineer
            </span>{' '}
            based in Malolos, Bulacan. Working towards creating software that
            makes life easier and more meaningful.
          </p>
          <Link
            to='projects'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className='text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 transition-all duration-200 ease-in'
          >
            Projects
          </Link>
        </div>
      </div>

      <div className='sticky bottom-1 flex flex-row items-center justify-center'>
        <Link
          to='about'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown
            size={35}
            className='animate-bounce cursor-pointer'
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
