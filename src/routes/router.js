import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Router() {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/blog/:id" exact component={Detail} />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}
export default Router;
