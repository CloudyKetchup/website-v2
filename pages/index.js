import Head from 'next/head'

import Landing from "../src/components/Landing";
import Navbar from "../src/components/Navbar";
import Profile from "../src/components/Profile";
import Skills from "../src/components/sections/Skills";
import Footer from "../src/components/Footer";

const Separator = () => (
  <div className="flex bg-white w-full" style={{ height: "2px" }}>
    <div className="m-auto bg-gray-700 h-full w-96"/>
  </div>
);

const Intro = () => (
  <section className="bg-white w-screen p-10 md:p-20 shadow-inner">
    <div className="flex-1 md:flex h-full justify-center content-middle m-auto content-middle space-x-0 md:space-x-24 space-y-20 md:space-y-0 pb-20 md:pb-none">
      <div className="mt-auto mb-auto flex h-full w-full md:max-w-sm" >
        <p className="m-auto mb-auto text-4xl font-bold tracking-wide break-word">
          <span className="pl-10 md:pl-0"/> Hi, my name is Maxim, I'm a Frontend developer
          focusing on the creation of modern websites and single page applications with
          <span className="text-blue-400"> React</span>. <br/>
          Trying to build the web which we all deserve.
        </p>
      </div> 
      <div className="m-auto h-full w-full md:max-w-sm p-0">
        <div className="m-auto max-w-sm">
          <Profile/>
        </div>
      </div>
     </div>
  </section>
);

const Experience = () => (
  <section className="bg-white p-10 md:p-20 space-y-20 shadow-inner">
    <div className="max-w-4xl mx-auto space-y-4">
      <div className="text-center md:text-left space-y-10">
        <div className="flex">
          <h1 className="text-2xl font-bold m-auto md:m-unset">Commercial Experience</h1>
        </div>
        <div className="flex-1 md:flex space-x-0 md:space-x-2 pl-10">
          <h2 className="text-xl font-bold">Frontend Developer, <a href="https://relatedata.com">Relate Data</a>:</h2>
          <h2 className="text-xl text-gray-400 font-bold">Sep 2020 - Feb 2021</h2>
        </div>
      </div>
      <div>
        <p className="text-2xl font-md">
          <span className="pl-10"/>Working in a cyber security startup, I was responsible for the development from scratch of a big data platform and the final deployment
          to the cloud.
          <br/><span className="pl-10"/>My responsibilities included development, planning and maintenance of complex UI components, such as graphs, rich tables and charts.
          Closely worked with the backend engrinners to ensure the consistency and the best possible model for the data handled by the frontend.
          And some devops stuff, such as creation and configuration of the VPS.
        </p>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="h-full w-full overflow-x-hidden">
      <Head>
        <title>Maxim Dodon</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet"/>
      </Head>
      <Navbar title="Maxim Dodon" />
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
