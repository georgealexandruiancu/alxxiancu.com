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
					<div className="background-lines  js-section-slide" data-slide="0">
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
					<div className="background-text">
						one 🍌... two 🍌... <br/>
						you found a web developer 🙊
					</div>
					<img
						src={require('../../assets/bg-main.png')}
						alt="Alex Iancu"
					/>
				</div>
			</>
		);
	}
}

export default BackgroundHome;