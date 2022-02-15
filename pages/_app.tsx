import "@/styles/_globals.scss";
import type { AppProps } from "next/app";
import BrandGrid from "@/components/brand/brand-main/index";
import Layout from "@/components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <BrandGrid {...pageProps} />
    </Layout>
  );
}

export default MyApp;
