import "./pagination.css";

const Pagination = () => {
	return (
		<div className="pagination">
			<button className="page previous">Previous</button>
			{[1, 2, 3, 4, 5, 6].map((page) => (
				<div key={page} className="page">
					{page}
				</div>
			))}
			<button className="page next">Next</button>
		</div>
	);
};

export default Pagination;
