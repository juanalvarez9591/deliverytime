import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/menu" component={Menu} />
				<Route exact path="/checkout" component={Checkout} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
