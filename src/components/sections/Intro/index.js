import Profile from "../../Profile";

export default function Intro() {
  return (
    <section className="bg-white w-screen p-10 md:p-20 shadow-inner">
      <div className="flex-1 md:flex h-full justify-center content-middle m-auto content-middle space-x-0 md:space-x-24 space-y-20 md:space-y-0 pb-20 md:pb-none">
        <div className="mt-auto mb-auto flex h-full w-full md:max-w-md" >
          <p className="m-auto mb-auto text-2xl font-bold tracking-wide text-center md:text-left break-word">
            <span className="pl-10 md:pl-0" /> Hi, my name is Maxim, I'm a Frontend developer
          focusing on the creation of modern websites and single page web applications with
          <span className="text-blue-400"> React</span>. <br />
          Trying to build the web which we all deserve.
        </p>
        </div>
        <div className="m-auto h-full w-full md:max-w-sm p-0">
          <div className="m-auto max-w-sm">
            <Profile />
          </div>
        </div>
      </div>
    </section>
  );
}