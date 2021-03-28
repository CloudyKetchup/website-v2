import Head from 'next/head';

import Navbar from "../src/components/Navbar";
import Landing from "../src/components/Landing";
import Intro from "../src/components/sections/Intro";
import Experience from "../src/components/sections/Experience";
import Skills from "../src/components/sections/Skills";
import Footer from "../src/components/Footer";
import FutureRoadmap from '../src/components/sections/FutureRoadmap';

export default function Home({ skills, credentials, roadmap }) {
  return (
    <div className="h-full w-full overflow-x-hidden">
      <Head>
        <title>Maxim Dodon</title>
        <meta name="description" content="Create the web which we all deserve"/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet"/>
      </Head>
      <Navbar title="Maxim Dodon" credentials={credentials} />
      <div className="h-full">
        <Landing />
        <Intro />
        <Experience />
        <Skills skills={skills} />
        <FutureRoadmap year={roadmap.year} technologies={roadmap.technologies} />
        <Footer credentials={credentials} />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const skills      = require("../assets/skills.json");
  const credentials = require("../assets/credentials.json");
  const roadmap     = require("../assets/roadmap.json");

  return {
    props: {
      skills,
      credentials,
      roadmap
    }
  };
}