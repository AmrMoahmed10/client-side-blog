import PostList from "../../components/posts/PostList";
import "./home.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { Link } from "react-router-dom";
import { categories, posts } from "../../../dummyData";

const Home = () => {
	return (
		<section className="home">
			<div className="home-hero-header">
				<div className="home-hero-header-layout">
					<h1 className="home-title">Welcome to Blog</h1>
				</div>
			</div>
			<div className="home-latest-post">Latest Posts</div>
			<div className="home-container">
				<PostList posts={posts} />
				<Sidebar categories={categories} />
			</div>
			<div className="home-see-posts-link">
				<Link to="/posts" className="home-link">
					See All Posts
				</Link>
			</div>
		</section>
	);
};

export default Home;
