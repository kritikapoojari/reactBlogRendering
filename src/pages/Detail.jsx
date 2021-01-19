import React, { Component } from "react";
import { data } from "../helpers/data";
import BlogHeading from "../components/BlogHeading";
import BlogImage from "../components/BlogImage";
import BlogContent from "../components/BlogContent";
import AsideSection from "../components/AsideSection";
import styles from "../styles/detail.module.css";

class Detail extends Component {
	state = {
		blog: {},
	};

	async componentDidMount() {
		const blogData = await data(this.props.match.params.id)
			.then((data) => data)
			.catch((err) => err);
		this.setState({ blog: blogData.data[0] });
	}

	async componentWillReceiveProps(nextProps) {
		if (nextProps.match.params.id !== this.props.match.params.id) {
			this.setState({ blog: {} });
			const blogData = await data(nextProps.match.params.id)
				.then((data) => data)
				.catch((data) => data);
			this.setState({ blog: blogData.data[0] });
		}
	}

	render() {
		const { blog } = this.state;
		return (
			<div className={styles["blog"]}>
				<div className={styles["details"]}>
					<BlogImage
						className={styles["image"]}
						imageUrl={blog.imageUrl}
					/>
					<BlogHeading
						className={styles["heading"]}
						title={blog.title}
						author={blog.author}
						imageUrl={blog.imageUrl}
					/>
					<BlogContent
						className={styles["content"]}
						content={blog.content}
					/>
				</div>
				<div className ={styles["links"]}>
					<h3>Related Links</h3>
					{blog.links &&
						blog.links.map((link) => (
							<AsideSection
								key={link.id}
								id={link.id}
								title={link.title}
							/>
						))}
				</div>
			</div>
		);
	}
}
export default Detail;
