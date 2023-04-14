import Head from 'next/head';
import { Hero } from '@components/index';

export default function Home() {
  return (
    <main>
      <Head>
        <title>MJ Asprec&apos;s Portfolio</title>
      </Head>
      <Hero />
    </main>
  );
}
