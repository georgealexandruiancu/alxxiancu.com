import React, { Component } from "react";

import * as UI from "../functions/iancu.createHeight";

import { MdTimelapse, MdFreeBreakfast } from 'react-icons/md';
import { AiFillProject } from 'react-icons/ai';


class Aboutme extends Component {

	constructor() {
		super();
		this.state = {};
	}

	componentDidMount () {
		UI.createHeightForSection("js-create-height");
	}

	render() {
		return (
			<>
				<div className="aboutme-wrapper  js-create-height  js-section-slide" data-slide="1">
					<div className="container">
						<div className="container__row">
							<div className="container__col-xl-6  continaer__col-lg-6  container__col-md-6  container__col-12  aboutme-container">
								<div className="aboutme-card">
									<div className="aboutme-card__title">
										Personal Information
									</div>
									<div className="container--fluid  aboutme-card__content">
										<div className="container__row">
											<div className="container__col-xl-4  container__col-lg-4  container__col-md-4  container__col-12">
												<div className="aboutme-card__content--image">
													<img
														src={require('../../assets/bg-main.png')}
														alt=""
													/>
												</div>
											</div>
											<div className="container__col-xl-7  container__col-lg-7  container__col-md-7  container__col-12">
												<div className="aboutme-card__content--description">
													<div className="title">
														Brasov, RO
													</div>
													<div className="content">
														Lorem ipsum dolor sit
														amet consectetur
														adipisicing elit. Dolor,
														expedita? Blanditiis
														nesciunt doloribus neque
														odio ullam ad temporibus
														optio, facere,
														aspernatur explicabo eum
														id modi? Ipsum iste
														assumenda quia
														blanditiis.
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
																	5 Years Job
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
							<div className="container__col-xl-6  continaer__col-lg-6  container__col-md-6  container__col-12  aboutme-container">
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
							<div className="container__col-xl-6  continaer__col-lg-6  container__col-md-6  container__col-12  aboutme-container">
								<div className="aboutme-card">
									<div className="aboutme-card__title">
										Experience & Education
									</div>
									<div className="container--fluid">
										<div className="container__row">
											<div className="container__col-xl-6  container__col-lg-6  container__col-md-6  container__col-6  aboutme-feature">
												<div className="aboutme-card__content--description">
													<div className="title  title--alt">
														04.
													</div>
													<div className="title-placeholder">
														App Development
													</div>
													<div className="content">
														2020-2020 |{' '}
														<b>COMPANY</b>
													</div>
												</div>
											</div>
											<div className="container__col-xl-6  container__col-lg-6  container__col-md-6  container__col-6  aboutme-feature  aboutme-feature--alt">
												<div className="aboutme-card__content--description">
													<div className="title  title--alt">
														04.
													</div>
													<div className="title-placeholder">
														App Development
													</div>
													<div className="content">
														2020-2020 |{' '}
														<b>COMPANY</b>
													</div>
												</div>
											</div>
											<div className="container__col-xl-6  container__col-lg-6  container__col-md-6  container__col-6  aboutme-feature">
												<div className="aboutme-card__content--description">
													<div className="title  title--alt">
														04.
													</div>
													<div className="title-placeholder">
														App Development
													</div>
													<div className="content">
														2020-2020 |{' '}
														<b>COMPANY</b>
													</div>
												</div>
											</div>
											<div className="container__col-xl-6  container__col-lg-6  container__col-md-6  container__col-6  aboutme-feature  aboutme-feature--alt">
												<div className="aboutme-card__content--description">
													<div className="title  title--alt">
														04.
													</div>
													<div className="title-placeholder">
														App Development
													</div>
													<div className="content">
														2020-2020 |{' '}
														<b>COMPANY</b>
													</div>
												</div>
											</div>
											<div className="container__col-xl-6  container__col-lg-6  container__col-md-6  container__col-6  aboutme-feature">
												<div className="aboutme-card__content--description">
													<div className="title  title--alt">
														04.
													</div>
													<div className="title-placeholder">
														App Development
													</div>
													<div className="content">
														2020-2020 |{' '}
														<b>COMPANY</b>
													</div>
												</div>
											</div>
											<div className="container__col-xl-6  container__col-lg-6  container__col-md-6  container__col-6  aboutme-feature  aboutme-feature--alt">
												<div className="aboutme-card__content--description">
													<div className="title  title--alt">
														04.
													</div>
													<div className="title-placeholder">
														App Development
													</div>
													<div className="content">
														2020-2020 |{' '}
														<b>COMPANY</b>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="container__col-xl-6  continaer__col-lg-6  container__col-md-6  container__col-12  aboutme-container">
								<div className="aboutme-card">
									<div className="aboutme-card__title">
										Favorites Languages & Technology &
										Frameworks
									</div>
									<div className="container--fluid">
										<div className="container__row">
											<div className="container__col-xl-6  container__col-lg-6  container__col-md-6  container__col-12">
												<div className="aboutme-card__content--description  aboutme-card__content--description-alt">
													<div className="content">
														HTML5 & SCSS
													</div>
													<div className="content">
														JAVASCRIPT
													</div>
													<div className="content">
														React.JS
													</div>
													<div className="content">
														React Native
													</div>
													<div className="content">
														Node.JS
													</div>
													<div className="content">
														C/C++
													</div>
												</div>
											</div>
											<div className="container__col-xl-6  container__col-lg-6  container__col-md-6  container__col-12">
												<div className="aboutme-card__content--description  aboutme-card__content--description-alt">
													<div className="content">
														Photoshop
													</div>
													<div className="content">
														Abode xd
													</div>
													<div className="content">
														Lightroom CC
													</div>
													<div className="content">
														PHP & mysql
													</div>
													<div className="content">
														firebase
													</div>
													<div className="content">
														Python
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
			</>
		);
	}
}

export default Aboutme;