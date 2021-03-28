import Navbar from "../src/components/Navbar";

import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
 
export default function MyApp({ Component, pageProps, credentials }) {

  return (
    <>
      <Navbar title="Maxim Dodon" credentials={pageProps.credentials} />
      <Component {...pageProps} />
    </>
  );
}

export async function getStaticProps() {
  const credentials = require("../assets/credentials.json");

  return {
    props: {
      credentials
    }
  };
}