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
					className="contact-wrapper  js-section-slide"
					data-slide="5"
				>
					<div className="o-title-section">Contact</div>
					<Divider />

					<div className="container">
						<div className="container__row">
							<div className="container__col-12  contact-container">
								<a href="https://www.linkedin.com/in/georgealexandruiancu/" target="_blank">
									<FaLinkedin />
								</a>
								<a href="https://github.com/georgealexandruiancu" target="_blank">
									<FaGithubAlt />
								</a>
								<a href="https://www.instagram.com/alxxiancu/" target="_blank">
									<FaInstagram />
								</a>
								<a href="https://www.facebook.com/alxxiancu" target="_blank">
									<FaFacebookSquare />
								</a>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Contact;