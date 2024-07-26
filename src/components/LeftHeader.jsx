import React from "react";
import { IoListOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const LeftHeader = ({ toggleNav, SetToggleNav }) => {
	return (
		<div className="flex gap-3 items-center">
			<div
				className={`uppercase text-2xl font-bold text-gray-200  lg:hidden block cursor-pointer`}
				onClick={() => SetToggleNav((pre) => !pre)}
			>
				<IoListOutline size={35} />
			</div>
			<Link to={"/"} className="uppercase text-2xl font-bold text-gray-200">
				Mora
			</Link>
		</div>
	);
};

export default LeftHeader;
