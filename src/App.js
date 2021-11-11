import logo from "./logo.svg";
import "./App.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import "antd/dist/antd.css";
import AppLayout from "./component/layout/appLayout";
import Product from './component/page/product'
import HomePage from '../src/component/page/homePage'

function App() {
	return (
		<Router>
			<div>
				<Switch>
					{/* <Route path="/login" exact>
						<Login />
					</Route>
					<Route path="/register" exact>
						<Register />
					</Route> */}
					<AppLayout>
						<Route path="/" exact>
							{/* <homePage /> */}
							<Product />
						</Route>
						{/* <Route path="/products" exact>
							<Product />
						</Route>
						<Route path="/wishlists" exact>
							<WishList />
						</Route> */}
					</AppLayout>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
