import { useEffect } from "react";

import { RiArrowDownSLine } from "react-icons/ri";

export default function Landing() {
	const onScroll = () => {
		window.scroll({
			top: window.innerHeight,
			behavior: "smooth"
		});
	};

	return (
		<section className="h-screen w-screen relative">
			<video
				id="landing-video"
				className="filter-brightness object-cover h-full w-full bg-cover bg-no-repeat absolute z-0"
				muted
				loop
				autoPlay
				controls={false}
				src="/videos/tokyo.mp4"
				type="video/mp4"
				disablePictureInPicture
				disableRemotePlayback
			/>
			<div className="flex content-middle h-full w-full absolute z-10 p-16 pt-28">
				<h2 className="m-auto text-white text-4xl font-bold text-wrap">
					Building the web of the future
				</h2>
			</div>
			<button className="outline-none border-none absolute bottom-10 z-30 inset-x-0 m-auto" onClick={onScroll}>
				<RiArrowDownSLine size="3em" color="white" />
			</button>
		</section>
	);
};