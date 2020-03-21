import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomepageClient from "./client/components/HomepageClient";
import HomepageMentenanta from "./client/components/HomepageMentenanta";

import "./styles/style.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route exact path="/" component={HomepageClient} />
						<Route exact path="/mentenanta" component={HomepageMentenanta} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
