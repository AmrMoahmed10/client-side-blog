import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
