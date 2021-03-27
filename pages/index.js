import Head from 'next/head'

import Landing from "../src/components/Landing";
import Intro from "../src/components/sections/Intro";
import Experience from "../src/components/sections/Experience";
import Skills from "../src/components/sections/Skills";
import Footer from "../src/components/Footer";
import Separator from "../src/components/Separator";
import Projects from "../src/components/Projects";

export default function Home() {
  return (
    <div className="h-full w-full overflow-x-hidden">
      <Head>
        <title>Maxim Dodon</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet"/>
      </Head>
      <div className="h-full">
        <Landing />
        <Intro />
        <Separator />
        <Experience />
        <Separator />
        <Skills />
        <Footer/>
      </div>
    </div>
  )
}
