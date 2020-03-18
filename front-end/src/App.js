import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import HomepageClient from "./client/components/Homepage";
import HomepageMentenanta from "./client/components/HomepageMentenanta";


import "./styles/style.css";

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route exact path="/" component={HomepageMentenanta} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
