import "../styles/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NEXT AUTH</title>
        <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
      </Head>
      <SessionProvider>
      <Header />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
