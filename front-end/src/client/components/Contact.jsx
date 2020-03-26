import React, { Component } from "react";

import Divider from "./divider";

class Contact extends Component {

	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<>
				<div
					className="contact-wrapper  js-section-slide"
					data-slide="5"
				>
					<div className="o-title-section">Contact</div>
					<Divider />
				</div>
			</>
		);
	}
}

export default Contact;