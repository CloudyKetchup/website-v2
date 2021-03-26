import credentials from "../../../credentials.json";

import { AiTwotoneMail, AiOutlineGithub, AiTwotonePhone } from "react-icons/ai";
import { MdChangeHistory } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="bg-gray-100 shadow-inner">
			<div className="h-full flex-1 md:flex justify-center content-middle p-5 pt-20 pb-20 md:p-20 max-w-4xl m-auto space-y-8 md:space-y-0">
				<div className="m-auto flex-1 w-3/6 space-y-2 text-center pr-unset md:pr-24">
					<div>
						<MdChangeHistory className="m-auto" size="5em" color="gray"/>
					</div>
					<div>
						<h1 className="text-2xl md:text-basic">Maxim Dodon</h1>
					</div>
				</div>
				<div className="m-10 md:m-auto pl-unset md:pl-28 w-3/6">
					<ul className="space-y-4 text-2xl md:text-basic">
						<li className="flex space-x-6">
							<div className="flex content-middle">
								<AiTwotoneMail className="m-auto"/>
							</div>
							<span>{credentials.email}</span>
						</li>
						<li className="flex space-x-6">
							<div className="flex content-middle">
								<AiTwotonePhone className="m-auto"/>
							</div>
							<span>{credentials.mobileNumber}</span>
						</li>
						<li className="flex space-x-6 hover:text-gray-400">
							<div className="flex content-middle">
								<FaLinkedinIn className="m-auto"/>
							</div>
							<a className="underline" href={credentials.linkedIn} target="_blank">Linkedin</a>
						</li>
						<li className="flex space-x-6 hover:text-gray-400">
							<div className="flex content-middle">
								<AiOutlineGithub className="m-auto"/>
							</div>
							<a className="underline" href={credentials.github} target="_blank">Github</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};