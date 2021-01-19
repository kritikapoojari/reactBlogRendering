import { Link, withRouter } from "react-router-dom";
import styles from "../styles/header.module.css";

function Header(props) {
	const backward = () => {
		props.history.goBack();
	};
	const forward = () => {
		props.history.goForward();
	};

	return (
		<nav>
			<ul>
				<li>
					<Link to="/">
						<img
							className={styles["logo"]}
							src="https://osu-wams-blogs-uploads.s3.amazonaws.com/blogs.dir/2961/files/2019/01/Blog-Logo.png"
							alt="logo"
						/>
					</Link>
				</li>
				{props.location.pathname === "/" ? (
					<h1>HOME</h1>
				) : (
					<>
						<li className={styles["links"]}>
							<Link to="/">HOME</Link>
						</li>
						<li className={styles["links"]}>
							<button className={styles["button"]} onClick={backward}>
								{
									<img
										src="https://img.icons8.com/flat_round/64/000000/rewind.png"
										alt="backward"
									/>
								}
							</button>
							<button className={styles["button"]} onClick={forward}>
								{
									<img
										src="https://img.icons8.com/flat_round/64/000000/fast-forward.png"
										alt="forward"
									/>
								}
							</button>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
}

export default withRouter(Header);
