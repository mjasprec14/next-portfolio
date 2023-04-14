import React from 'react';

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
      <div className='h-screen'>
        <h1 className='text-2xl mb-8 md:mb-0 text-center font-semibold tracking-[10px] uppercase'>
          Projects
        </h1>
      </div>
    </section>
  );
}

export default Projects;
