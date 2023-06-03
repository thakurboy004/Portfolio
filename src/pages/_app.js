import '@/styles/globals.css';
import Head from 'next/head';
import{Montserrat} from 'next/font/google';
import NavBar from '@/Components/NavBar';
import Footer from '@/Components/Footer';

const mountserrat = Montserrat({
  subsets : ['latin'],
  variable : "--font-mount"
})

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className='${mountserrat.variable} font-mount bg-white w-full min-h-screen'>
      <NavBar />
      <Component {...pageProps} />
      <Footer/>
    </main>
    </>
  );
}
