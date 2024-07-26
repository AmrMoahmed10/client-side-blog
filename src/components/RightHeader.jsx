import { Link } from "react-router-dom";

const RightHeader = () => {
	return (
		<Link
			to={"/login"}
			className="bg-slate-50 px-4 py-2 rounded-md text-sm font-semibold hover:bg-slate-200"
		>
			Login
		</Link>
	);
};

export default RightHeader;
