import type { AppProps } from "next/app";

import { DrawerContextProvider } from "@/context/DrawerContext";

import Layout from "@/components/layout";
import "@/styles/_globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DrawerContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DrawerContextProvider>
  );
}

export default MyApp;
