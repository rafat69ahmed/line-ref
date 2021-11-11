import logo from "./logo.svg";
import "./App.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import "antd/dist/antd.css";
import AppLayout from "./component/layout/appLayout";
import Product from './component/page/product'
import CarReturn from '../src/component/page/carReturn'
import HomePage from '../src/component/page/homePage'
import Booking from "./component/page/booking";

function App() {
	return (
		<Router>
			<div>
				<Switch>
					<AppLayout>
						<Route path="/" exact>
							<Product />
						</Route>
						<Route path="/booking" exact>
							<Booking />
						</Route>
						<Route path="/car-return" exact>
							<CarReturn />
						</Route>
					</AppLayout>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
