import Image from 'next/image';
import React from 'react';
import Burger from '@public/burger.jpg';
import Link from 'next/link';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';

type Props = {};

const projects = [
  {
    name: 'Thankful Thoughts',
    description:
      'ThankfulThoughts is a web app that generates an appreciative sentence of something or someone you are thankful for.',
    image: '/thankfulthoughts.png',
    github: 'https://github.com/hqasmei/thankful-thoughts',
    link: 'https://thankfulthoughts.io/',
  },
  {
    name: 'PlatoIO',
    description: 'PlatoIO is a to do list app that built using the PERN stack.',
    image: '/platoio.png',
    github: 'https://github.com/hqasmei/platoio',
    link: 'https://platoio.com/register',
  },
  {
    name: 'Kator Family Photos',
    description:
      'Kator Family Photos is a photos and video digitization service in the LA area.',
    image: '/familyphotos.png',
    github: 'https://github.com/hqasmei/katorfamilyphotos',
    link: 'https://katorfamilyphotos.com/',
  },
];

function Projects({}: Props) {
  return (
    <section id='projects'>
      <div className='h-screen px-6'>
        <h1 className='text-2xl mb-8  text-center font-semibold tracking-[10px] uppercase'>
          Projects
          <hr className='w-28 h-1 mx-auto my-2 bg-teal-500 border-0' />
        </h1>

        <div className='flex flex-col space-y-20 mt-8'>
          {projects?.map((project, idx) => (
            <div key={idx}>
              <div className='flex flex-col space-y-3 md:flex-row md:space-x-12'>
                <div className='md:w-1/2'>
                  <Link
                    href={project.link}
                    target='_blank'
                  >
                    <Image
                      src={Burger}
                      alt='project'
                      className='rounded-xl shadow-xl hover:opacity-70'
                    />
                  </Link>
                </div>
                <div className='md:w-1/2 mt-4 space-y-2 px-2 md:px-0 md:mt-0'>
                  <h3 className='text-sm font-semibold md:text-2xl text-neutral-600 uppercase tracking-[10px]'>
                    {project?.name}
                  </h3>

                  <p className='text-xs leading-7 text-gray-500  dark:text-neutral-400 md:text-xl'>
                    {project?.description}
                  </p>

                  <div className='flex flex-row justify-end md:justify-start align-bottom space-x-2'>
                    <Link
                      href={project.link}
                      target='_blank'
                    >
                      <BsGithub
                        size={30}
                        className='hover:-translate-y-1 transition-transform cursor-pointer'
                      />
                    </Link>
                    <Link
                      href={project.link}
                      target='_blank'
                    >
                      <BsArrowUpRightSquare
                        size={30}
                        className='hover:-translate-y-1 transition-transform cursor-pointer'
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
