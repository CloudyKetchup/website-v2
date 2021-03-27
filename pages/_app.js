import Navbar from "../src/components/Navbar";

import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
 
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar title="Maxim Dodon" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
