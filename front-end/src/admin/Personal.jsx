import React, { Component } from "react";
import axios from "axios";

import AdminNavigation from "./components/Navigation";

import "../styles/pages/AdminDashboard.css";

class AdminPersonal extends Component {
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
			personalEducation: {
				dateStart: "",
				dateEnd: "",
				position: "",
				title: ""
			},
			personalLanguage: ""
		};

		this.handlePersonalCvFile = this.handlePersonalCvFile.bind(this);
		this.handlePersonalCvTitle = this.handlePersonalCvTitle.bind(this);

		this.handlePersonalInformationDescription = this.handlePersonalInformationDescription.bind(this);
		this.handlePersonalInformationLocation = this.handlePersonalInformationLocation.bind(this);
		this.handlePersonalInformationImage = this.handlePersonalInformationImage.bind(this);

		this.handlePersonalLanguage = this.handlePersonalLanguage.bind(this);

		this.handlePersonalEducationDateStart = this.handlePersonalEducationDateStart.bind(this);
		this.handlePersonalEducationDateEnd = this.handlePersonalEducationDateEnd.bind(this);
		this.handlePersonalEducationPosition = this.handlePersonalEducationPosition.bind(this);
		this.handlePersonalEducationTitle = this.handlePersonalEducationTitle.bind(this);
	}

	componentDidMount() {
		this._getPersonalCv();
		this._getPersonalInformation();
		this._getPersonalLanguages();
		this._getPersonalEducation();
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

	UpdatePersonalCv() {
		axios
			.put("http://localhost:3000/personal/update/cv", {
				file: this.state.personalCv.file,
				title: this.state.personalCv.title,
			})
			.then(response => {
				if (response.status === 200) {
					alert("Post saved!");
					this._getPersonalCv();
				} else {
					alert("Is a problem with saving");
				}
			})
			.catch(err => {
				console.log(err);
			})
	}

	_getPersonalInformation() {
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

	UpdatePersonalInformation() {
		axios
			.put("http://localhost:3000/personal/update/information", {
				description: this.state.personalInformation.description,
				profile_image: this.state.personalInformation.profileImage,
				location: this.state.personalInformation.location
			})
			.then(response => {
				if (response.status === 200) {
					alert("Post saved!");
					this._getPersonalCv();
				} else {
					alert("Is a problem with saving");
				}
			})
			.catch(err => {
				console.log(err);
			})
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
						savedPersonalLanguages: response.data
					},
					() => console.log(this.state)
				);
			})
			.catch(err => {
				console.log(err);
			});
	}

	_pushPersonalLanguages() {
		if(this.state.savedPersonalLanguages) {
			let arr = [];

			this.state.savedPersonalLanguages.forEach((item, index) => {
				arr.push(
					<div className="o-border">
						<div className="container--fluid">
							<div className="container__row">
								<div className="container__col-9  form-container__holder">
									{item.title}
								</div>
								<div className="container__col-1  form-container__holder">
									<div className="o-button  o-button--danger  o-button--xs"
										onClick={() => this.DeleteLanguages(item.id)}
									>
										Delete This
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			})

			return arr;
		}
	}

	AddPersonalLanguage() {
		axios
			.post("http://localhost:3000/personal/add/languages", {
				title: this.state.personalLanguage
			})
			.then(response => {
				if (response.status === 200) {
					alert("Post saved!");
					this.setState({ personalLanguage: ""});
					this._getPersonalLanguages();
				} else {
					alert("Is a problem with saving");
				}
			})
			.catch(err => {
				console.log(err);
			})
	}

	DeleteLanguages(id) {
		var instance = axios.create({
			withCredentials: true
		});

		instance
			.delete("http://localhost:3000/personal/delete/languages", {
				data: {
					id: id
				}
			})
			.then(response => {
				if (response.status === 200) {
					this._getPersonalLanguages();
				} else {
					console.log(response);
				}
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
						savedPersonalEducation: response.data
					},
					() => console.log(this.state)
				);
			})
			.catch(err => {
				console.log(err);
			});
	}

	_pushPersonalEducation() {
		if (this.state.savedPersonalEducation) {
			let arr = [];

			this.state.savedPersonalEducation.forEach((item, index) => {
				arr.push(
					<div className="o-border">
						<div className="container--fluid">
							<div className="container__row">
								<div className="container__col-9  form-container__holder">
									{item.title}<br/>

									{item.position}<br />

									{item.date_start}<br />

									{item.date_end}<br />

								</div>
								<div className="container__col-1  form-container__holder">
									<div className="o-button  o-button--danger  o-button--xs"
										onClick={() => this.DeleteEducation(item.id)}
									>
										Delete This
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			})

			return arr;
		}
	}

	AddPersonalEducation() {
		axios
			.post("http://localhost:3000/personal/add/education", {
				date_start: this.state.personalEducation.dateStart,
				date_end: this.state.personalEducation.dateEnd,
				title: this.state.personalEducation.title,
				position: this.state.personalEducation.position
			})
			.then(response => {
				if (response.status === 200) {
					alert("Post saved!");
					this.setState({ personalLanguage: "" });
					this._getPersonalEducation();
				} else {
					alert("Is a problem with saving");
				}
			})
			.catch(err => {
				console.log(err);
			})
	}

	DeleteEducation(id) {
		var instance = axios.create({
			withCredentials: true
		});

		instance
			.delete("http://localhost:3000/personal/delete/education", {
				data: {
					id: id
				}
			})
			.then(response => {
				if (response.status === 200) {
					this._getPersonalEducation();
				} else {
					console.log(response);
				}
			})
			.catch(err => {
				console.log(err);
			});
	}

	render() {
		return (
			<div className="admin">
				<AdminNavigation />

				<div className="admin-wrapper">
					<h1>PERSONAL</h1>

					<div className="container--fluid">
						<div className="container__row">
							<div className="container__col-xl-6 container__col-lg-6 container__col-md-6 container__col-6">
								<div className="container--fluid">
									<div className="container__row  o-holder-group">
										<div className="container__col-12  form-container__holder">
											<h4>UPDATE CV</h4>
										</div>
										<div className="container__col-9  form-container__holder">
											<input type="text" className="o-input" placeholder="CV link file here.. "  
												onChange={this.handlePersonalCvFile}
												value={this.state.personalCv.file}
											/>
										</div>
										<div className="container__col-1  form-container__holder">
											<a href="/admin/storage" target="_blank">
												<div className="o-button  o-button--danger">Copy Link</div>
											</a>
										</div>
										<div className="container__col-12  form-container__holder">
											<input type="text" className="o-input" placeholder="Title here... "
												onChange={this.handlePersonalCvTitle}
												value={this.state.personalCv.title}
											/>
										</div>
										<div className="container__col-12  form-container__holder">
											<button className="o-button  o-button--good" onClick={() => this.UpdatePersonalCv()}>Save Changes</button>
										</div>
									</div>
								</div>
							</div>

							<div className="container__col-xl-6 container__col-lg-6 container__col-md-6 container__col-6">
								<div className="container--fluid">
									<div className="container__row  o-holder-group">
										<div className="container__col-12  form-container__holder">
											<h4>Add Education</h4>
										</div>
										<div className="container__col-12  form-container__holder">
											<input type="text" className="o-input" placeholder="Date start... "
												onChange={this.handlePersonalEducationDateStart}
												value={this.state.personalEducation.dateStart}
											/>
										</div>
										<div className="container__col-12  form-container__holder">
											<input type="text" className="o-input" placeholder="Date end... "
												onChange={this.handlePersonalEducationDateEnd}
												value={this.state.personalEducation.dateEnd}
											/>
										</div>
										<div className="container__col-12  form-container__holder">
											<input type="text" className="o-input" placeholder="Job... "
												onChange={this.handlePersonalEducationTitle}
												value={this.state.personalEducation.title}
											/>
										</div>
										<div className="container__col-12  form-container__holder">
											<input type="text" className="o-input" placeholder="Position... "
												onChange={this.handlePersonalEducationPosition}
												value={this.state.personalEducation.position}
											/>
										</div>
										<div className="container__col-12  form-container__holder">
											<button className="o-button  o-button--good" onClick={() => this.AddPersonalEducation()}>Push</button>
										</div>

										{this._pushPersonalEducation()}
									</div>
								</div>
							</div>
						</div>

						<div className="container__row">
							<div className="container__col-xl-6 container__col-lg-6 container__col-md-6 container__col-6">
								<div className="container--fluid">
									<div className="container__row  o-holder-group">
										<div className="container__col-12  form-container__holder">
											<h4>UPDATE INFORMATION</h4>
										</div>
										<div className="container__col-12  form-container__holder">
											<input type="text" className="o-input" placeholder="Location here... "
												onChange={this.handlePersonalInformationLocation}
												value={this.state.personalInformation.location}
											/>
										</div>
										<div className="container__col-9  form-container__holder">
											<input type="text" className="o-input" placeholder="Profile Image here... "
												onChange={this.handlePersonalInformationImage}
												value={this.state.personalInformation.profileImage}
											/>
										</div>
										<div className="container__col-1  form-container__holder">
											<a href="/admin/storage" target="_blank">
												<div className="o-button  o-button--danger">Copy Link</div>
											</a>
										</div>
										<div className="container__col-12  form-container__holder">
											<input type="text" className="o-input" placeholder="Description here... "
												onChange={this.handlePersonalInformationDescription}
												value={this.state.personalInformation.description}
											/>
										</div>
										<div className="container__col-12  form-container__holder">
											<button className="o-button  o-button--good" onClick={() => this.UpdatePersonalInformation()}>Save Changes</button>
										</div>
									</div>
								</div>
							</div>

							<div className="container__col-xl-6 container__col-lg-6 container__col-md-6 container__col-6">
								<div className="container--fluid">
									<div className="container__row  o-holder-group">
										<div className="container__col-12  form-container__holder">
											<h4>ADD LANGUAGES</h4>
										</div>
										<div className="container__col-12  form-container__holder">
											<input type="text" className="o-input" placeholder="Language here... " 
												onChange={this.handlePersonalLanguage}
												value={this.state.personalLanguage}
											/>
										</div>
										<div className="container__col-12  form-container__holder">
											<button className="o-button  o-button--good" onClick={() => this.AddPersonalLanguage()}>PUSH</button>
										</div>

										{this._pushPersonalLanguages()}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	handlePersonalCvFile(e) {
		this.setState({
			personalCv: {
				...this.state.personalCv,
				file: e.target.value
			}
		});
	}

	handlePersonalCvTitle(e) {
		this.setState({
			personalCv: {
				...this.state.personalCv,
				title: e.target.value
			}
		});
	}

	handlePersonalInformationDescription(e) {
		this.setState({
			personalInformation: {
				...this.state.personalInformation,
				description: e.target.value
			}
		});
	}

	handlePersonalInformationImage(e) {
		this.setState({
			personalInformation: {
				...this.state.personalInformation,
				profileImage: e.target.value
			}
		});
	}

	handlePersonalInformationLocation(e) {
		this.setState({
			personalInformation: {
				...this.state.personalInformation,
				location: e.target.value
			}
		});
	}

	handlePersonalLanguage(e) {
		this.setState({
			personalLanguage: e.target.value
		});
	}

	handlePersonalEducationDateStart(e) {
		this.setState({
			personalEducation: {
				...this.state.personalEducation,
				dateStart: e.target.value
			}
		});
	}

	handlePersonalEducationDateEnd(e) {
		this.setState({
			personalEducation: {
				...this.state.personalEducation,
				dateEnd: e.target.value
			}
		});
	}

	handlePersonalEducationTitle(e) {
		this.setState({
			personalEducation: {
				...this.state.personalEducation,
				title: e.target.value
			}
		});
	}

	handlePersonalEducationPosition(e) {
		this.setState({
			personalEducation: {
				...this.state.personalEducation,
				position: e.target.value
			}
		});
	}
}

export default AdminPersonal;
