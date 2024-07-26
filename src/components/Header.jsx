import { useState } from "react";
import { Link } from "react-router-dom";
import { IoListOutline } from "react-icons/io5";
import LeftHeader from "./LeftHeader";
import Navbar from "./Navbar";
import RightHeader from "./RightHeader";

const Header = () => {
	const [toggleNav, SetToggleNav] = useState(false);
	return (
		<header className=" bg-gray-900 relative px-2">
			<div className="container flex justify-between py-3 mx-auto items-center">
				<LeftHeader toggleNav={toggleNav} SetToggleNav={SetToggleNav} />
				<Navbar toggleNav={toggleNav} SetToggleNav={SetToggleNav} />
				<RightHeader />
			</div>
		</header>
	);
};

export default Header;
