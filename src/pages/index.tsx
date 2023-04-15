import Head from 'next/head';
import { About, Hero, Projects, Navbar, Footer } from '@components/index';

export default function Home() {
  return (
    <main className='bg-zinc-50 dark:bg-zinc-900 min-h-screen snap-y snap-mandatory'>
      <Head>
        <title>MJ Asprec&apos;s Portfolio</title>
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
