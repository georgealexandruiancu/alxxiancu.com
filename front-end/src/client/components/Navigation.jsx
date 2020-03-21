import React, { Component } from "react";

import * as UI from "../functions/iancu.navigation";

class Navigation extends Component {

	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<>
				<div className="navigation-wrapper">
					<div className="navigation-container">
						<div className="navigation-title">
							Alxxiancu
							<div className="navigation-divider"></div>
						</div>
						<div className="navigation-bars  js-nav" onClick={() => UI.toggleNavigation()}>
							<div className="navigation-bars__item"></div>
							<div className="navigation-bars__item"></div>
							<div className="navigation-bars__item"></div>
						</div>
					</div>
				</div>

				<div className="navigation-full__wrapper  js-nav-full  u-hide">
					<div className="navigation-bars  js-nav-active" onClick={() => UI.toggleNavigation()}>
						<div className="navigation-bars__item"></div>
						<div className="navigation-bars__item"></div>
						<div className="navigation-bars__item"></div>
					</div>
					<div className="navigation-full__container">
						<div className="navigation-full__item  navigation-full__item--active">
							01. Home
						</div>
						<div className="navigation-full__item">
							02. About me
						</div>
						<div className="navigation-full__item">
							03. Projects
						</div>
						<div className="navigation-full__item">
							04. Mini Tuts
						</div>
						<div className="navigation-full__item">
							05. Blog
						</div>
						<div className="navigation-full__item">
							06. Contact
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Navigation;