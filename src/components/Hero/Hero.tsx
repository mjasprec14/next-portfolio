import React from 'react';
import Image from 'next/image';
import Me from '../../../public/about.jpg';

type Props = {};

const Hero = (props: Props) => {
  return (
    <section id='home'>
      <div>
        <div>
          <Image
            src={Me}
            alt='My photo'
          />
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Hero;
