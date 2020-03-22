import React, { Component } from "react";

import * as UI from "../functions/iancu.navigation";

class BackgroundHome extends Component {

	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<>
				<div className="background-wrapper">
					<div className="background-lines">
						<div className="background-line">
							<div className="background-line__glow"></div>
						</div>
						<div className="background-line">
							<div className="background-line__glow"></div>
						</div>
						<div className="background-line">
							<div className="background-line__glow"></div>
						</div>
						<div className="background-line">
							<div className="background-line__glow"></div>
						</div>
						<div className="background-line">
							<div className="background-line__glow"></div>
						</div>
					</div>
					<img
						src={require('../../assets/bg-main.jpg')}
						alt="Alex Iancu"
					/>
				</div>
			</>
		);
	}
}

export default BackgroundHome;