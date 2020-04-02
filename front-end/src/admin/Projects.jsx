import React, { Component } from "react";
import axios from "axios";

import { FaWindowClose } from "react-icons/fa";

import AdminNavigation from "./components/Navigation";

import "../styles/pages/AdminDashboard.css";

class AdminProjects extends Component {
	constructor() {
		super();
		this.state = {
			addPost: {
				title: "",
				photo: "",
				shortDescription: ""
			},
		};

		this.handleAddTitleAndPath = this.handleAddTitleAndPath.bind(this);
		this.handleAddPhoto = this.handleAddPhoto.bind(this);
		this.handleAddShortDescription = this.handleAddShortDescription.bind(this);
	}

	componentDidMount() {
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

	_appendToPage() {
		if (this.state.projects) {
			let arr = [];

			this.state.projects.forEach((item, index) => {
				arr.push(
					<div
						key={index}
						className="container__col-xl-2  container__col-lg-2  container__col-md-4  container__col-12"
					>
						<div className="admin-projects__card">
							<div className="admin-projects__card-image">
								<img src={item.photo} alt="" />
							</div>
							<div className="admin-projects__title-card">
								{item.title}
							</div>
							<div className="admin-projects__card-actions">
								<button
									className="o-button  o-button--danger  o-button--xs"
									onClick={() => this.deleteItem(item.id)}
								>
									Delete
								</button>
							</div>
						</div>
					</div>
				);
			});

			return arr;
		}
	}


	postNewProject() {
		axios
			.post("http://localhost:3000/projects/add", {
				photo: this.state.addPost.photo,
				description: this.state.addPost.shortDescription,
				title: this.state.addPost.title
			})
			.then(response => {
				if (response.status === 200) {
					alert("Post saved!");
					this.toggleModalAdd();
					this._getAllPosts();
				} else {
					alert("Is a problem with saving");
				}
			})
			.catch(err => {
				console.log(err);
			});
	}

	toggleModalAdd() {
		this.setState({
			addPost: {
				title: "",
				path: "",
				photo: "",
				shortDescription: "",
				tags: "",
				body: ""
			}
		});

		var modalAdd = document.getElementsByClassName("js-add-project")[0];
		modalAdd.classList.toggle("is-active");
	}

	deleteItem(id) {
		var instance = axios.create({
			withCredentials: true
		});

		instance
			.delete("http://localhost:3000/projects/delete", {
				data: {
					id: id
				}
			})
			.then(response => {
				if (response.status === 200) {
					this._getAllPosts();
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
			<>
				<AdminNavigation />

				<div className="admin-wrapper">
					<h1>PROJECTS</h1>
					<button
						className="o-button o-button--good"
						onClick={() => this.toggleModalAdd()}
					>
						Add Projects
					</button>
					<div
						className="container--fluid"
						style={{ maxWidth: 80 + "%" }}
					>
						<div className="container__row">
							{this._appendToPage()}
						</div>
					</div>
				</div>

				<div className="admin-projects-modal  js-add-project">
					<div className="title">Add Project</div>
					<div className="form-container">
						<div
							className="close-button-modal"
							onClick={() => this.toggleModalAdd()}
						>
							<FaWindowClose />
						</div>
						<div className="container">
							<div className="container__row">
								<div className="container__col-xl-6  container__col-lg-6  container__col-md-6  container__col-6  form-container__holder">
									<label>Title</label>
									<input
										type="text"
										onChange={this.handleAddTitleAndPath}
										value={this.state.addPost.title}
									/>
								</div>

								<div className="container__col-xl-6  container__col-lg-6  container__col-md-6  container__col-6  form-container__holder">
									<label>Photo</label>
									<input
										type="text"
										onChange={this.handleAddPhoto}
										style={{ maxWidth: 75 + "%" }}
										value={this.state.addPost.photo}
									/>
									<a href="/admin/storage" target="_blank">
										<button className="o-button  o-button--xs">
											Copy Image Link
										</button>
									</a>
								</div>

								<div className="container__col-xl-12  container__col-lg-12  container__col-md-12  container__col-12  form-container__holder">
									<label>Short description</label>
									<input
										type="text"
										onChange={
											this.handleAddShortDescription
										}
										value={
											this.state.addPost.shortDescription
										}
									/>
								</div>


								<div className="container__col-xl-12  container__col-lg-12  container__col-md-12  container__col-12  form-container__holder">
									<button
										className="o-button  o-button--danger  o-button--save"
										onClick={() => this.postNewProject()}
									>
										SAVE POST
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}

	handleAddTitleAndPath(e) {
		this.setState({
			addPost: {
				...this.state.addPost,
				title: e.target.value
			}
		});
	}

	handleAddPhoto(e) {
		this.setState({
			addPost: {
				...this.state.addPost,
				photo: e.target.value
			}
		});
	}

	handleAddShortDescription(e) {
		this.setState({
			addPost: {
				...this.state.addPost,
				shortDescription: e.target.value
			}
		});
	}

}

export default AdminProjects;
