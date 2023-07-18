import Layout from '../components/Layout';
import '../styles/globals.css';
import NavBar from '../components/NavBar';
import { useRouter } from 'next/router';
import Head from 'next/head';
import ErrorBoundary from '@/components/ErrorBoundary';

export function reportWebVitals(metric) {
  console.log(metric);
}

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Drew</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />
      <Layout>
        <ErrorBoundary>
          <Component {...pageProps} pathname={router.pathname} />
        </ErrorBoundary>
      </Layout>
    </>
  );
}
