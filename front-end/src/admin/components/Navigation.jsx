import React, { Component } from "react";

import axios from "axios";

class AdminNavigation extends Component {
	constructor() {
		super();
		this.state = {};
	}


	render() {
		return (
			<>
				<div className="admin-navigation">
					<ul>
						<a href="/admin/personal">
							<li className="admin-navigation__item">Personal</li>
						</a>

						<a href="/admin/projects">
							<li className="admin-navigation__item">Projects</li>
						</a>

						<a href="/admin/blog">
							<li className="admin-navigation__item">Blog</li>
						</a>

						<a href="/admin/mail">
							<li className="admin-navigation__item">Mail</li>
						</a>

						<a href="/admin/storage">
							<li className="admin-navigation__item">Storage</li>
						</a>
						<a>
							<li className="admin-navigation__item">
								<button className="o-button">Logout</button>
							</li>
						</a>
					</ul>
				</div>
			</>
		);
	}
}

export default AdminNavigation;
