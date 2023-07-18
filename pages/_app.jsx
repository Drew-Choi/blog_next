import Layout from '../components/Layout';
import '../styles/globals.css';
import NavBar from '../components/NavBar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
