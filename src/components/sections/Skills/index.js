function chunkArray(arr, n) {
  const chunkLength = Math.max(arr.length / n ,1);
  const chunks = [];

  for (let i = 0; i < n; i++) {
    if (chunkLength * (i + 1) <= arr.length) {
    	chunks.push(arr.slice(chunkLength * i, chunkLength * (i+1)));
    }
  }
  return chunks; 
}

function Skill({ name, level, img }) {
	return (
		<div className="mt-2 mb-2 grid gap-2 space-y-2">
			<div className="flex space-x-4">
				<div>
					<img src={img} className="h-10 w-10"/>
				</div>
				<div className="flex content-middle text-2xl font-bold">
					<h1 className="m-auto">{name}</h1>
				</div>
			</div>
			<div>
				<div className="bg-gray-300 w-full h-2 rounded-full">
					<div className="bg-black h-full rounded-full" style={{ width: `${level}%` }}/>
				</div>
			</div>
		</div>
	);
};

export default function Skills({ skills = [] }) {
	const chunks = chunkArray(skills, 2);

	const renderSkills = () => (
		chunks.map((skills, index) => (
			<div key={index} className="ml-auto mr-auto grid gap-4 p-10">
				{skills.map((skill, index) => (
					<Skill key={index} {...skill} />
				))}
			</div>
		))
	);

	const renderEmptySkills = () => (
		<div className="text-center text-gray-400 text-xl font-bold">
			<h1>Some error happened, sorry.</h1>
		</div>
	);

	return (
	  <section className="bg-white text-center w-screen p-5 md:p-20 space-y-10 shadow-inner">
	  	<div className="m-auto">
	  		<h1 className="text-2xl font-bold">Technology Stack</h1>
	  	</div>
	    <div className="m-auto flex-1 md:flex justify-center rounded-md p-15 max-w-4xl">
	    	{chunks.length === 0 ? renderEmptySkills() : renderSkills()}
	    </div>
	  </section>
	);
};