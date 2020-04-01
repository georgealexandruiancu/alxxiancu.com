import React, { Component } from "react";
import axios from "axios";

import * as UI from "../functions/iancu.createHeight";

import { MdTimelapse, MdFreeBreakfast } from 'react-icons/md';
import { AiFillProject } from 'react-icons/ai';


class Aboutme extends Component {

	constructor() {
		super();
		this.state = {
			personalCv: {
				file: "",
				title: ""
			},
			personalInformation: {
				description: "",
				profileImage: "",
				location: ""
			},
			personalEducation: ""
		};
	}

	componentDidMount () {
		UI.createHeightForSection("js-create-height");

		// GET INFORMATION DATA
		this._getPersonalInformation();
		this._getPersonalCv();
		this._getPersonalEducation();
		this._getPersonalLanguages();
	}

	_getPersonalInformation () {

		var instance = axios.create({
			withCredentials: true
		});

		instance
			.get("http://localhost:3000/personal/get/information")
			.then(response => {
				this.setState(
					{
						personalInformation: {
							description: response.data[0].description,
							profileImage: response.data[0].profile_image,
							location: response.data[0].location
						}
					},
					() => console.log(this.state)
				);
			})
			.catch(err => {
				console.log(err);
			});

	}

	_getPersonalCv () {

		var instance = axios.create({
			withCredentials: true
		});

		instance
			.get("http://localhost:3000/personal/get/cv")
			.then(response => {
				this.setState(
					{
						personalCv: {
							file: response.data[0].file,
							title: response.data[0].title
						}
					},
					() => console.log(this.state)
				);
			})
			.catch(err => {
				console.log(err);
			});

	}

	_getPersonalEducation() {

		var instance = axios.create({
			withCredentials: true
		});

		instance
			.get("http://localhost:3000/personal/get/education")
			.then(response => {
				this.setState(
					{
						personalEducation: response.data
					},
					() => console.log(this.state)
				);
			})
			.catch(err => {
				console.log(err);
			});

	}

	_pushPersonalEducation() {
		if (this.state.personalEducation) {
			let arr = [];

			this.state.personalEducation.forEach((item, index) => {
				if(index % 2 == 0) {
					arr.push(
						<div className="container__col-xl-6  container__col-lg-6  container__col-md-6  container__col-6  aboutme-feature">
							<div className="aboutme-card__content--description">
								<div className="title  title--alt">
									0{index + 1}.
							</div>
								<div className="title-placeholder">
									{item.position}
								</div>
								<div className="content">
									{item.date_start}-{item.date_end} |{' '}
									<b>{item.title}</b>
								</div>
							</div>
						</div>
					);
				}
				else {
					arr.push(
						<div className="container__col-xl-6  container__col-lg-6  container__col-md-6  container__col-6  aboutme-feature  aboutme-feature--alt">
							<div className="aboutme-card__content--description">
								<div className="title  title--alt">
									0{index + 1}.
							</div>
								<div className="title-placeholder">
									{item.position}
								</div>
								<div className="content">
									{item.date_start}-{item.date_end} |{' '}
									<b>{item.title}</b>
								</div>
							</div>
						</div>
					);
				}
				
			})

			return arr;
		}
	}

	_getPersonalLanguages() {
		var instance = axios.create({
			withCredentials: true
		});

		instance
			.get("http://localhost:3000/personal/get/languages")
			.then(response => {
				this.setState(
					{
						personalLanguages: response.data
					},
					() => console.log(this.state)
				);
			})
			.catch(err => {
				console.log(err);
			});
	}

	_pushPersonalLanguagesFirst() {
		if (this.state.personalLanguages) {
			let arr = [];

			this.state.personalLanguages.forEach((item, index) => {
				if (index < this.state.personalLanguages.length / 2){
					arr.push(
						<div className="content">
							{item.title}
					</div>
					);
				}
				
			})
			return arr;
		}
	}
	_pushPersonalLanguagesSecond() {
		if (this.state.personalLanguages) {
			let arr = [];

			this.state.personalLanguages.forEach((item, index) => {
				if (index >= this.state.personalLanguages.length / 2) {
					arr.push(
						<div className="content">
							{item.title}
					</div>
					);
				}

			})
			return arr;
		}
	}
	render() {
		return (
			<>
				<div className="aboutme-wrapper  js-create-height  js-section-slide" data-slide="1">
					<div className="container">
						<div className="container__row">
							<div className="container__col-xl-6  container__col-lg-6  container__col-md-6  container__col-12  aboutme-container">
								<div className="aboutme-card">
									<div className="aboutme-card__title">
										Personal Information
									</div>
									<div className="container--fluid  aboutme-card__content">
										<div className="container__row">
											<div className="container__col-xl-4  container__col-lg-4  container__col-md-4  container__col-12">
												<div className="aboutme-card__content--image">
													<img
														src={this.state.personalInformation.profileImage}
														alt={this.state.personalInformation.location}
													/>
												</div>
											</div>
											<div className="container__col-xl-7  container__col-lg-7  container__col-md-7  container__col-12">
												<div className="aboutme-card__content--description">
													<div className="title">
														{this.state.personalInformation.location}
													</div>
													<div className="content">
														{this.state.personalInformation.description}
													</div>
												</div>
											</div>
										</div>
										<div className="container__row">
											<div className="container__col-xl-12  container__col-lg-12  container__col-md-12  container__col-12">
												<div className="aboutme-card__content--features">
													<div className="container--fluid">
														<div className="container__row">
															<div className="container__col-xl-4  container__col-lg-4  container__col-md-12  container__col-12  aboutme-card__content--features-item">
																<div className="bubble-icon">
																	<MdFreeBreakfast />
																</div>
																<div className="feature-content">
																	Freelance{' '}
																	<br />
																	Available
																</div>
															</div>
															<div className="container__col-xl-4  container__col-lg-4  container__col-md-12  container__col-12  aboutme-card__content--features-item">
																<div className="bubble-icon">
																	<AiFillProject />
																</div>
																<div className="feature-content">
																	10+ Projects
																	Completed
																</div>
															</div>
															<div className="container__col-xl-4  container__col-lg-4  container__col-md-12  container__col-12  aboutme-card__content--features-item">
																<div className="bubble-icon">
																	<MdTimelapse />
																</div>
																<div className="feature-content">
																	5+ Years Job
																	Experience
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="container__col-xl-6  container__col-lg-6  container__col-md-6  container__col-12  aboutme-container">
								<div className="aboutme-card">
									<div className="aboutme-card__title">
										Service
									</div>
									<div className="container--fluid  aboutme-card__content">
										<div className="container__row">
											<div className="container__col-xl-6  container__col-ld-6  container__col-md-12  container__col-12">
												<div className="aboutme-card__content--description">
													<div className="title  title--alt">
														01.
													</div>
													<div className="title-placeholder">
														Web Design
													</div>
													<div className="content">
														Lorem ipsum dolor sit
														amet consectetur,
														adipisicing elit. Eaque
														accusamus fuga aut
														corporis temporibus
														saepe.
													</div>
												</div>
											</div>
											<div className="container__col-xl-6  container__col-ld-6  container__col-md-12  container__col-12">
												<div className="aboutme-card__content--description">
													<div className="title  title--alt">
														02.
													</div>
													<div className="title-placeholder">
														Web Development
													</div>
													<div className="content">
														Lorem ipsum dolor sit
														amet consectetur,
														adipisicing elit. Eaque
														accusamus fuga aut
														corporis temporibus
														saepe.
													</div>
												</div>
											</div>
											<div className="container__col-xl-6  container__col-ld-6  container__col-md-12  container__col-12">
												<div className="aboutme-card__content--description">
													<div className="title  title--alt">
														03.
													</div>
													<div className="title-placeholder">
														Photography
													</div>
													<div className="content">
														Lorem ipsum dolor sit
														amet consectetur,
														adipisicing elit. Eaque
														accusamus fuga aut
														corporis temporibus
														saepe.
													</div>
												</div>
											</div>
											<div className="container__col-xl-6  container__col-ld-6  container__col-md-12  container__col-12">
												<div className="aboutme-card__content--description">
													<div className="title  title--alt">
														04.
													</div>
													<div className="title-placeholder">
														App Development
													</div>
													<div className="content">
														Lorem ipsum dolor sit
														amet consectetur,
														adipisicing elit. Eaque
														accusamus fuga aut
														corporis temporibus
														saepe.
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="container__row">
							<div className="container__col-xl-6  container__col-lg-6  container__col-md-6  container__col-12  aboutme-container">
								<div className="aboutme-card">
									<div className="aboutme-card__title">
										Experience & Education
									</div>
									<div className="container--fluid">
										<div className="container__row">
											{this._pushPersonalEducation()}
										</div>
									</div>
								</div>
							</div>
							<div className="container__col-xl-6  container__col-lg-6  container__col-md-6  container__col-12  aboutme-container">
								<div className="aboutme-card">
									<div className="aboutme-card__title">
										Favorites Languages & Technology &
										Frameworks
									</div>
									<div className="container--fluid">
										<div className="container__row">
											<div className="container__col-xl-6  container__col-lg-6  container__col-md-6  container__col-12">
												<div className="aboutme-card__content--description  aboutme-card__content--description-alt">
													{this._pushPersonalLanguagesFirst()}
												</div>
											</div>
											<div className="container__col-xl-6  container__col-lg-6  container__col-md-6  container__col-12">
												<div className="aboutme-card__content--description  aboutme-card__content--description-alt">
													{this._pushPersonalLanguagesSecond()}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Aboutme;