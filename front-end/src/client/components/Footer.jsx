import React, { Component } from "react";
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaGithubAlt } from 'react-icons/fa';

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
					className="footer-wrapper"
				>
					<div className="container">
						<div className="container__row">
							<div className="container__col-12  footer-container">
								This website is create with 🍌by Alex Iancu
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Contact;