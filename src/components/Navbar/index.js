import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdChangeHistory } from "react-icons/md";

import credentials from "../../../credentials.json";

export default function Navbar({ title }) {
	const [menu, setMenu] 			= useState(false);
	const [visible, setVisible] = useState(true);
	const ref = useRef();

	useEffect(() => {
		if (!ref.current) return;

		const onScroll = () => {
			const { current } = ref;

			const currentScrollPos = window.pageYOffset + 300;

			setVisible(currentScrollPos < window.innerHeight);
		};

		window.addEventListener("scroll", onScroll);

		return () => {
			window.removeEventListener("scroll", onScroll);
		}
	}, [ref.current]);

	const onContact = () => {
		window.scroll({
			top: document.body.scrollHeight + 350,
			behavior: "smooth"
		});
	};

	useEffect(() => {
		if (menu) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}
	}, [menu]);

	return (
		<nav
			className={`${visible ? "navbar" : "hidden-navbar"} bg-white h-24 w-screen flex fixed justify-center fixed z-20 shadow-2xl`}
			ref={ref}
		>
			<div className="flex flex-row-reverse md:flex-row m-auto ml-10 space-x-2">
				<div className="hidden md:block">
					<MdChangeHistory size="1.55em" />
				</div>
				<div>
					<h5 className="text-xl font-bold">{title}</h5>
				</div>
			</div>
			<div className="hidden md:block h-full w-auto pl-10 pr-16">
				<ul className="h-full text-xl font-bold flex content-middle space-x-4">
					<li className="m-auto hover:text-gray-400 cursor-pointer" onClick={onContact}>Contact</li>
					<li className="m-auto hover:text-gray-400 cursor-pointer">
						<a href={credentials.resume} target="_blank">Resume</a>
					</li>
					<li className="m-auto hover:text-gray-400 cursor-pointer">
						<a href={credentials.github} target="_blank">Portfolio</a>
					</li>
				</ul>
			</div>
			<div className="block md:hidden">
				<div className="p-8 cursor-pointer" onClick={() => setMenu(!menu)}>
					<GiHamburgerMenu size="2em" />
				</div>
			</div>
			{menu && (
				<div className="block md:hidden shadow-inner overflow-hidden fixed bg-white w-screen top-24 z-40" style={{ height: "calc(100vh - 92px)" }}>
					<div className="h-full flex text-center justify-center content-middle">
						<ul className="m-auto text-2xl font-bold space-y-20 inline-block align-middle">
							<li
								className="m-auto hover:text-gray-400 cursor-pointer"
								onClick={() => {
									onContact();
									setMenu(false);
								}}
							>
								Contact
							</li>
							<li className="m-auto hover:text-gray-400 cursor-pointer">
								<a href={credentials.resume} target="_blank">Resume</a>
							</li>
							<li className="m-auto hover:text-gray-400 cursor-pointer">
								<a href={credentials.github} target="_blank">Portfolio</a>
							</li>
						</ul>
					</div>
				</div>
			)}	
		</nav>
	);
};