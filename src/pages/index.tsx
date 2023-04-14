import Head from 'next/head';
import { About, Hero, Projects, Navbar } from '@components/index';

export default function Home() {
  return (
    <main className='snap-y snap-mandatory'>
      <Head>
        <title>MJ Asprec&apos;s Portfolio</title>
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
