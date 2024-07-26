import { Link } from "react-router-dom";

const Navbar = ({ toggleNav, SetToggleNav }) => {
	return (
		<nav
			className="absolute lg:static w-full lg:w-fit top-full left-0 bg-gray-900 block transition-all duration-200 dropdown z-30"
			style={{
				clipPath: toggleNav && "polygon(0 0,100% 0, 100% 100%,0 100%)",
			}}
		>
			<ul className="flex lg:gap-10 flex-col lg:flex-row p-2 lg:p-0 divide-y divide-gray-200 lg:divide-y-0">
				<Link
					to={"/"}
					className="font-semibold text-gray-200  hover:text-gray-50 capitalize hover:pl-3 transition-all lg:hover:pl-0 duration-200 py-4 lg:py-0 "
					onClick={() => SetToggleNav(false)}
				>
					Home
				</Link>

				<Link
					to={"/posts"}
					className="font-semibold text-gray-200  hover:text-gray-50 capitalize hover:pl-3 transition-all lg:hover:pl-0 duration-200 py-4 lg:py-0"
					onClick={() => SetToggleNav(false)}
				>
					Posts
				</Link>
				<Link
					to={"/create-post"}
					className="font-semibold text-gray-200  hover:text-gray-50 capitalize hover:pl-3 transition-all lg:hover:pl-0 duration-200 py-4 lg:py-0"
					onClick={() => SetToggleNav(false)}
				>
					Create post
				</Link>
				<Link
					to={"/dashboard"}
					className="font-semibold text-gray-200  hover:text-gray-50 capitalize hover:pl-3 transition-all lg:hover:pl-0 duration-200 py-4 lg:py-0"
					onClick={() => SetToggleNav(false)}
				>
					dashboard
				</Link>
			</ul>
		</nav>
	);
};

export default Navbar;
