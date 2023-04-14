import Head from 'next/head';
import { About, Hero } from '@components/index';

export default function Home() {
  return (
    <main className='snap-y snap-mandatory'>
      <Head>
        <title>MJ Asprec&apos;s Portfolio</title>
      </Head>
      <Hero />
      <About />
    </main>
  );
}
