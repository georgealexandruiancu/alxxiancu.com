import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import axios from "axios";

import HomepageClient from "./client/pages/HomepageClient";
import HomepageMentenanta from "./client/pages/HomepageMentenanta";

import AdminLogin from "./admin/Login";
import AdminDashboard from "./admin/Dashboard";
import AdminPersonal from "./admin/Personal";
import AdminProjects from "./admin/Projects";
import AdminBlog from "./admin/Blog";
import AdminMail from "./admin/Mail";
import AdminStorage from "./admin/Storage";

import "./styles/style.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isAdmin: ""
		};
	}

	componentDidMount() {
		var instance = axios.create({
			withCredentials: true
		});

		instance.get("http://localhost:3000/whoami").then(response => {
			if (response.data.logged) {
				this.setState({isAdmin: true});
			} else {
				this.setState({isAdmin: false});
			}
		});
	}

	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route exact path="/" component={HomepageClient} />
						<Route exact path="/mentenanta" component={HomepageMentenanta} />

						{ this.state.isAdmin ?
							<>
								<Route exact path="/admin" component={AdminDashboard} />
								<Route path="/admin/personal" component={AdminPersonal} />
								<Route path="/admin/projects" component={AdminProjects} />
								<Route path="/admin/blog" component={AdminBlog} />
								<Route path="/admin/mail" component={AdminMail} />
								<Route path="/admin/storage" component={AdminStorage} />
							</>
							:
							<Route exact path="/admin" component={AdminLogin} />
						}

					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
