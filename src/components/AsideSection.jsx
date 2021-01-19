import { Link } from "react-router-dom";
function AsideSection({ id, title }) {
	return (
		<aside>
			<p id={id}>
				<Link to={`$id`}> - {title}</Link>
			</p>
		</aside>
	);
}
export default AsideSection;
