import React, { Component } from "react";
import Divider from "./divider";
class Projects extends Component {

	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<>
				<div
					className="projects-wrapper  js-section-slide"
					data-slide="2"
				>
					<div className="o-title-section">Projects</div>
					<Divider />
				</div>
			</>
		);
	}
}

export default Projects;