import Head from 'next/head';
import Navbar from '@/components/navigation/Navbar';
import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';
import Footer from '@/components/Footer';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const montserrat = Montserrat({
  subsets:['latin'],
  variable: '--font-mont'
})

export default function App({ Component, pageProps })
{
  const router= useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
      </Head>

      <main className={`${montserrat.variable} font-mont bg-light dark:bg-black w-full min-h-screen`}> 
        <Navbar />
        <AnimatePresence mode='wait'>
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer/>
      </main>
    </>
  )
}
