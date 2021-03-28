function RoadmapItem({ name, description, img }) {
  return (
    <li key={name} className="flex-1 justify-center content-center space-y-4">
      <div className="flex m-auto space-x-4 w-40">
        <div className="">
          <img src={img} className="h-10 w-10" />
        </div>
        <div className="flex content-middle text-2xl font-bold">
          <h1 className="m-auto">{name}</h1>
        </div>
      </div>
      <div>
        <p className="text-md text-gray-700">{description}</p>
      </div>
    </li>
  );
}

export default function FutureRoadmap({ year, technologies }) {
  return (
    <section className="bg-white w-screen text-center p-5 md:p-20 space-y-10 md:space-y-20 shadow-inner">
      <div className="m-auto space-y-4 mt-10 md:mt-auto">
        <h1 className="text-2xl font-bold">Future roadmap</h1>
        <h2 className="text-xl text-gray-600">Things to learn and improve in {year}</h2>
      </div>
      <div className="flex-1 justify-center m-auto content-center max-w-4xl p-10 md:p-0">
        <ul className="m-auto space-y-10">
          {technologies.map((technology, index) => (
            <RoadmapItem key={index} {...technology}/>
          ))}
        </ul>
      </div>
    </section>
  );
}