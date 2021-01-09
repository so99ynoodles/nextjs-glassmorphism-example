import { Layout } from '../layouts';
import { SSRProvider } from '@react-aria/ssr';
import '../../styles/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  );
}

export default MyApp;
