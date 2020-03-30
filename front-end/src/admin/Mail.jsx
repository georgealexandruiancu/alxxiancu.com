import React, { Component } from "react";

import AdminNavigation from "./components/Navigation";

import "../styles/pages/AdminDashboard.css";

class AdminDashboard extends Component {
	constructor() {
		super();
		this.state = {};
	}


	render() {
		return (
			<>
				<AdminNavigation />

				<div className="admin-wrapper">
					<h1>MAIL</h1>
				</div>
			</>
		);
	}
}

export default AdminDashboard;
