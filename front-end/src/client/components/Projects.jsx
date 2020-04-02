import React, { Component } from "react";
import axios from "axios";

import Divider from "./divider";
class Projects extends Component {

	constructor() {
		super();
		this.state = {};
	}

	componentDidMount () {
		this._getAllPosts();
	}

	_getAllPosts() {
		var instance = axios.create({
			withCredentials: true
		});

		instance
			.get("http://localhost:3000/projects/get")
			.then(response => {
				this.setState(
					{
						projects: response.data
					},
					() => console.log(this.state)
				);
			})
			.catch(err => {
				console.log(err);
			});
	}

	_pushPosts() {
		if (this.state.projects) {
			let arr = [];

			this.state.projects.forEach((item, index) => {
				if(index < 9){
					arr.push(
						<>
							<div className="container__col-xl-4 container__col-lg-4 container__col-md-6 container__col-12  container__holder-card">
								<div className="projects-card">
									<div className="image">
										<img src={item.photo} alt={item.title} />
									</div>
									<div className="title">
										{item.title}
									</div>
									<div className="description">
										{item.description}
									</div>
								</div>
							</div>
						</>
					);
				}
			})

			return arr;
		}
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

					<div className="container">
						<div className="container__row  container__holder-row">
							{this._pushPosts()}
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Projects;