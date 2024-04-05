import Head from "next/head";
import Layout from "@/components/layout/layout";
import "../styles/globals.css";
import { NotificationContextProvider } from "@/store/notification-context";
// this file _app.js is global file what goes here will be available on all the pages
// added a global notfication feature

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <title>Next Events</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="description" content="Next.js Events" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
