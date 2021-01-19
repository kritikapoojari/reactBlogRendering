import { Link } from "react-router-dom";
import styles from "../styles/blogs.module.css";
function Blogs(blog) {
	return (
		<div className={styles["blog"]}>
			<img src={blog.imageUrl} alt="BlogImage" />
			<p>
				<Link to={`blog/${blog.id}`}>{blog.title}</Link>
			</p>
			<p> By:{blog.author}</p>
		</div>
	);
}

export default Blogs;
