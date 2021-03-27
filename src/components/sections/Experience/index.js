export default function Experience() {
  return (
    <section className="bg-white p-10 md:p-20 space-y-20 shadow-inner">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="text-center md:text-left space-y-10">
          <div className="flex">
            <h1 className="text-2xl font-bold m-auto md:m-unset">Commercial Experience</h1>
          </div>
          <div className="flex-1 md:flex space-x-0 md:space-x-2 pl-10">
            <h2 className="text-xl font-bold">Frontend Developer, Relate Data:</h2>
            <h2 className="text-xl text-gray-400 font-bold">Sep 2020 - Feb 2021</h2>
          </div>
        </div>
        <div>
          <p className="text-2xl font-md">
            <span className="pl-10" />Working in a cyber security startup, I was responsible for the development from scratch of a big data platform and the final deployment
          to the cloud.
          <br /><span className="pl-10" />My responsibilities included development, planning and maintenance of complex UI components, such as graphs, rich tables and charts.
          Closely worked with the backend engrinners to ensure the consistency and the best possible model for the data handled by the frontend.
          And some devops stuff, such as creation and configuration of the VPS.
        </p>
        </div>
      </div>
    </section>
  );
};