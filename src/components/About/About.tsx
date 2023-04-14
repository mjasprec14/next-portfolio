import React from 'react';
import Fox from '@public/arabica-29.png';
import Image from 'next/image';

type Props = {};

function About({}: Props) {
  const skills = [
    { skill: 'React' },
    { skill: 'Javascript' },
    { skill: 'TypeScript' },
    { skill: 'HTML' },
    { skill: 'CSS' },
    { skill: 'SASS' },
    { skill: 'Material-UI' },
    { skill: 'TailwindCSS' },
    { skill: 'Bootstrap' },
    { skill: 'ReactStrap' },
    { skill: 'HandleBars' },
    { skill: 'Nodejs' },
    { skill: 'Strapi' },
    { skill: 'GraphQL' },
    { skill: 'MongoDB' },
    { skill: 'Git' },
    { skill: 'GitHub' },
    { skill: 'GitLab' },
    { skill: 'Jest' },
    { skill: 'Cypress' },
  ];

  return (
    <section
      id='about'
      className='snap-center'
    >
      <div className='h-screen my-12 md:pt-16 md:pb-48'>
        <h1 className='text-2xl mb-8 md:mb-0 text-center font-semibold tracking-[10px] uppercase'>
          About me
        </h1>

        <div className='flex flex-col space-y-10 px-5 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10'>
          <div className='md:w-1/2 space-y-4'>
            <h1 className='text-center uppercase text-lg text-gray-500 font-bold mb-6 md:text-left'>
              Get to know me!
            </h1>
            <p>
              Hi, my name is MJ and I am a{' '}
              <span className='font-semibold underline decoration-[#F7AB0A]/50'>
                high ambitious
              </span>
              ,
              <span className='font-semibold underline decoration-[#F7AB0A]/50'>
                self-motivated
              </span>
              , and{' '}
              <span className='font-semibold underline decoration-[#F7AB0A]/50'>
                driven
              </span>{' '}
              software engineer based in Malolos, Bulacan.
            </p>

            <p>
              I graduated from AMA University in 2019 with a BS in Computer
              Science and have been working in the field ever since.
            </p>

            <p>
              {' '}
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, traveling, to making YouTube videos,
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>

            <p>
              I believe that you should{' '}
              <span className='font-bold text-teal-500'>
                never stop growing
              </span>{' '}
              and that&apos;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities.{' '}
            </p>
          </div>

          <div className='md:w-1/2 pb-8'>
            <h1 className='text-center text-lg font-bold mb-6 md:text-left text-gray-500 tracking-wide uppercase'>
              My Skills
            </h1>

            <div className='flex flex-wrap flex-row justify-center md:justify-start'>
              {skills?.map(({ skill }, idx) => (
                <p
                  key={idx}
                  className='bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold'
                >
                  {skill}
                </p>
              ))}
            </div>
            <Image
              src={Fox}
              alt='fox'
              height={150}
              width={150}
              className='hidden md:block md:relative md:bottom-4 md:left-72 md:z-0'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
