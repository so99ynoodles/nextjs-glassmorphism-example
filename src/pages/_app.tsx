import React from 'react';
import { Layout } from '../layouts';
// import { SSRProvider } from '@react-aria/ssr';
import { OverlayProvider } from '@react-aria/overlays';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
// import * as gtag from '../utils/analytics/gtag';
// import { useRouter } from 'next/router';

import '../../styles/index.css';
import '../../styles/prism.scss';
import '../../styles/remark.scss';
import { useColorMode } from '../utils/colorMode';

function MyApp({ Component, pageProps }) {
  useColorMode();
  // const router = useRouter();
  // React.useEffect(() => {
  //   if (!gtag.GA_TRACKING_ID) return;

  //   const handleRouteChange = (url: string) => {
  //     gtag.pageview(url);
  //   };

  //   router.events.on('routeChangeComplete', handleRouteChange);
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange);
  //   };
  // }, [router.events]);

  return (
    // <SSRProvider>
    <OverlayProvider style={{ height: '100%', width: '100%' }}>
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </OverlayProvider>
    // </SSRProvider>
  );
}

export default MyApp;
