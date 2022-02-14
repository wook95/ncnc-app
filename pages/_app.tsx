import type { AppProps } from 'next/app';
import { useState } from 'react';

import Layout from '@/components/layout';

import '@/styles/_globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Layout drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
