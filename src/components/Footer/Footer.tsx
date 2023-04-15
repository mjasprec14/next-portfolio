import Link from 'next/link';
import React from 'react';
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from 'react-icons/ai';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer
      id='footer'
      className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'
    >
      <hr className='w-full h-1 mx-auto mt-8 bg-neutral-200 border-0' />

      <div className='mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between'>
        <div className='flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100'>
          © 2023 MJ Asprec
          <Link href='/'></Link>
        </div>

        <div className='flex flex-row items-center justify-center space-x-2 mb-1'>
          <Link
            href='https://github.com/mjasprec14'
            rel='noreferrer'
            target='_blank'
          >
            <AiOutlineGithub
              className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
              size={30}
            />
          </Link>
          <Link
            href='https://twitter.com/MjAsprec'
            rel='noreferrer'
            target='_blank'
          >
            <AiOutlineTwitter
              className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
              size={30}
            />
          </Link>

          <Link
            href='https://www.linkedin.com/in/michael-joseph-asprec-254071251/'
            rel='noreferrer'
            target='_blank'
          >
            <AiOutlineLinkedin
              className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
              size={30}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
