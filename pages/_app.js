import Head from "next/head";
import Notification from '../components/ui/notification'
import Layout from "@/components/layout/layout";
import "../styles/globals.css";
// this file _app.js is global file what goes here will be available on all the pages

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Next Events</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name='description' content="Next.js Events" />
      </Head>
      <Component {...pageProps} />
      <Notification title="Test" message="This is a test" status="pending"/>
    </Layout>
  );
}

export default MyApp;
