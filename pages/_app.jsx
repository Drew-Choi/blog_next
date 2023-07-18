import Layout from '../components/Layout';
import '../styles/globals.css';
import NavBar from '../components/NavBar';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Drew</title>
      </Head>
      <NavBar />
      <Layout>
        <Component {...pageProps} pathname={router.pathname} />
      </Layout>
    </>
  );
}
