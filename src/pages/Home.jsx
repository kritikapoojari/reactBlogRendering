import { Component } from "react";
import { data } from "../helpers/data";
import Blogs from "../components/Blogs";
import "../styles/home.css";

class Home extends Component {
	state = {
		blogsList: [],
	};
	async componentDidMount() {
		const blogData = await data()
			.then((data) => data)
			.catch((err) => err);
		this.setState({ blogsList: blogData.data[0] });
	}

	render() {
		return (
			<div className="blog">
				{this.state.blogsList.map((blog) => {
					return <Blogs key={blog.id} {...blog} />;
				})}
			</div>
		);
	}
}

export default Home;
