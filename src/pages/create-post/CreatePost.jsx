import { useState } from "react";
import "./create-post.css";
import toast from "react-hot-toast";
import { categories } from "../../../dummyData";

const CreatePost = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("");
	const [file, setFile] = useState(null);

	// Form Submit Handler
	const formSubmitHandler = (e) => {
		e.preventDefault();
		if (title.trim() === "") return toast.error("Post Title is required");
		if (category.trim() === "") return toast.error("Post Category is required");
		if (description.trim() === "")
			return toast.error("Post Description is required");
		if (!file) return toast.error("Post Image is required");

		const formData = new FormData();
		formData.append("image", file);
		formData.append("title", title);
		formData.append("description", description);
		formData.append("category", category);
		console.log(formData);
	};

	return (
		<section className="create-post">
			<h1 className="create-post-title">Create New Post</h1>
			<form onSubmit={formSubmitHandler} className="create-post-form">
				<input
					type="text"
					placeholder="Post Title"
					className="create-post-input"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<select
					value={category}
					onChange={(e) => setCategory(e.target.value)}
					className="create-post-input"
				>
					<option disabled value="">
						Select A Category
					</option>
					{categories?.map((category) => (
						<option key={category._id} value={category.title}>
							{category.title}
						</option>
					))}
				</select>
				<textarea
					className="create-post-textarea"
					rows="5"
					placeholder="Post Description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				></textarea>
				<input
					type="file"
					name="file"
					id="file"
					className="create-post-upload"
					onChange={(e) => setFile(e.target.files[0])}
				/>
				<button type="submit" className="create-post-btn">
					Create
				</button>
			</form>
		</section>
	);
};

export default CreatePost;
