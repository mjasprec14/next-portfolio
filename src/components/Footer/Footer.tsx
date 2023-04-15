import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer
      id='footer'
      className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'
    >
      <hr className='w-full h-1 mx-auto mt-8 bg-neutral-200 border-0' />
    </footer>
  );
};

export default Footer;
