import { Layout } from '../layouts';
import { SSRProvider } from '@react-aria/ssr';
import { OverlayProvider } from '@react-aria/overlays';

import '../../styles/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <OverlayProvider style={{ height: '100%', width: '100%' }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </OverlayProvider>
    </SSRProvider>
  );
}

export default MyApp;
