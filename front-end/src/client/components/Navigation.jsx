import React, { Component } from "react";

class Navigation extends Component {

	constructor() {
		super();
		this.state = {};

	}

	render() {
		return (
			<div className="navigation-wrapper">
				<div className="navigation-container">
					<div className="navigation-title">
						Alxxiancu
						<div className="navigation-divider"></div>
					</div>
					<div className="navigation-bars  js-nav-bars">
						<div className="navigation-bars__item"></div>
						<div className="navigation-bars__item"></div>
						<div className="navigation-bars__item"></div>
					</div>
				</div>
			</div>
		);
	}
}

export default Navigation;