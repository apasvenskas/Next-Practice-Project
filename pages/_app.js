import Head from "next/head";
import Layout from "@/components/layout/layout";
import "../styles/globals.css";
// this file _app.js is global file what goes here will be available on all the pages

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
