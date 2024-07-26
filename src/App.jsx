import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import CreatePost from "./pages/create-post/CreatePost";
import { Toaster } from "react-hot-toast";
import PostsPage from "./pages/posts-page/PostsPage";
const App = () => {
	return (
		<BrowserRouter>
			<Toaster />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="create-post" element={<CreatePost />} />
					<Route path="posts" element={<PostsPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
