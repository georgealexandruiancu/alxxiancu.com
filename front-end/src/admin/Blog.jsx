import React, { Component } from "react";
import axios from "axios";

import { Editor } from "@tinymce/tinymce-react";

import { FaWindowClose } from "react-icons/fa";

import AdminNavigation from "./components/Navigation";

import "../styles/pages/AdminDashboard.css";

class AdminDashboard extends Component {
	constructor() {
		super();
		this.state = {
			addPost: {
				title: "",
				path: "",
				photo: "",
				shortDescription: "",
				tags: "",
				body: ""
			},
			editPost: {
				title: "",
				path: "",
				photo: "",
				shortDescription: "",
				tags: "",
				body: "",
				id: ""
			}
		};

		this.handleAddTitleAndPath = this.handleAddTitleAndPath.bind(this);
		this.handleAddPhoto = this.handleAddPhoto.bind(this);
		this.handleAddShortDescription = this.handleAddShortDescription.bind(
			this
		);
		this.handleAddTags = this.handleAddTags.bind(this);

		this.handleEditTitleAndPath = this.handleEditTitleAndPath.bind(this);
		this.handleEditPhoto = this.handleEditPhoto.bind(this);
		this.handleEditShortDescription = this.handleEditShortDescription.bind(
			this
		);
		this.handleEditTags = this.handleEditTags.bind(this);
	}

	componentDidMount() {
		this._getAllPosts();
	}

	_getAllPosts() {
		var instance = axios.create({
			withCredentials: true
		});

		instance
			.get("http://localhost:3000/blog")
			.then(response => {
				this.setState(
					{
						blogPosts: response.data
					},
					() => console.log(this.state)
				);
			})
			.catch(err => {
				console.log(err);
			});
	}

	_appendToPage() {
		if (this.state.blogPosts) {
			let arr = [];

			this.state.blogPosts.forEach((item, index) => {
				arr.push(
					<div
						key={index}
						className="container__col-xl-2  container__col-lg-2  container__col-md-4  container__col-12"
					>
						<div className="admin-blog__card">
							<div className="admin-blog__card-image">
								<img src={item.photo} alt="" />
							</div>
							<div className="admin-blog__title-card">
								{item.title}
							</div>
							<div className="admin-blog__card-actions">
								<button
									className="o-button  o-button--danger  o-button--xs"
									onClick={() => this.deleteItem(item.id)}
								>
									Delete
								</button>
								<button
									className="o-button  o-button--good  o-button--xs"
									onClick={() =>
										this._getPostForEdit(item.id, item.path)
									}
								>
									Edit post
								</button>
							</div>
						</div>
					</div>
				);
			});

			return arr;
		}
	}

	_getPostForEdit(id, path) {
		var instance = axios.create({
			withCredentials: true
		});

		instance
			.get("http://localhost:3000/blog/get-post/" + id + "/" + path)
			.then(response => {
				this.setState(
					{
						editPost: {
							id: response.data[0].id,
							photo: response.data[0].photo,
							shortDescription:
								response.data[0].short_description,
							body: response.data[0].body,
							title: response.data[0].title,
							path: response.data[0].path,
							tags: response.data[0].tags
						}
					},
					() => this.toggleModalEdit()
				);
			})
			.catch(err => {
				console.log(err);
			});
	}

	toggleModalEdit() {
		var modalEdit = document.getElementsByClassName("js-edit-blog")[0];
		modalEdit.classList.toggle("is-active");

		var mceEdit = document.getElementsByClassName("tox-tinymce-aux")[0];
		mceEdit.classList.toggle("is-active");
	}

	savedEditedBlogPost(id) {
		axios
			.put("http://localhost:3000/blog/update", {
				id: id,
				photo: this.state.editPost.photo,
				shortDescription: this.state.editPost.shortDescription,
				body: this.state.editPost.body,
				title: this.state.editPost.title,
				path: this.state.editPost.path,
				tags: this.state.editPost.tags
			})
			.then(response => {
				if (response.status === 200) {
					alert("Post saved!");
					this.toggleModalEdit();
					this._getAllPosts();
				} else {
					alert("Is a problem with saving");
				}
			})
			.catch(err => {
				console.log(err);
			});
	}

	postNewBlog() {
		console.log(this.state.addPost);
		axios
			.post("http://localhost:3000/blog/add", {
				photo: this.state.addPost.photo,
				shortDescription: this.state.addPost.shortDescription,
				body: this.state.addPost.body,
				title: this.state.addPost.title,
				path: this.state.addPost.path,
				tags: this.state.addPost.tags
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

		var modalAdd = document.getElementsByClassName("js-add-blog")[0];
		modalAdd.classList.toggle("is-active");

		var mceEdit = document.getElementsByClassName("tox-tinymce-aux")[0];
		mceEdit.classList.toggle("is-active");
	}

	deleteItem(id) {
		var instance = axios.create({
			withCredentials: true
		});

		instance
			.delete("http://localhost:3000/blog/delete", {
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
					<h1>BLOG</h1>
					<button
						className="o-button o-button--good"
						onClick={() => this.toggleModalAdd()}
					>
						Add Post
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

				<div className="admin-blog-modal  js-add-blog">
					<div className="title">Add Blog Post</div>
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
									<label>Path Will Be</label>
									<input
										type="text"
										disabled
										value={this.state.addPost.path}
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

								<div className="container__col-xl-6  container__col-lg-6  container__col-md-6  container__col-6  form-container__holder">
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
									<label>Add SEO tags</label>
									<input
										type="text"
										onChange={this.handleAddTags}
										value={this.state.addPost.tags}
									/>
								</div>

								<div className="container__col-xl-12  container__col-lg-12  container__col-md-12  container__col-12  form-container__holder">
									<label>Post content</label>
									<Editor
										// initialValue="<p>This is the initial content of the editor</p>"
										value={this.state.addPost.body}
										init={{
											height: 500,
											plugins:
												"print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons",
											menubar:
												"file edit view insert format tools table help",
											toolbar:
												"undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl"
										}}
										onEditorChange={
											this.handleAddEditorChange
										}
									/>
								</div>

								<div className="container__col-xl-12  container__col-lg-12  container__col-md-12  container__col-12  form-container__holder">
									<button
										className="o-button  o-button--danger  o-button--save"
										onClick={() => this.postNewBlog()}
									>
										SAVE POST
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="admin-blog-modal  js-edit-blog">
					<div className="title">Edit Blog Post</div>
					<div className="form-container">
						<div
							className="close-button-modal"
							onClick={() => this.toggleModalEdit()}
						>
							<FaWindowClose />
						</div>
						<div className="container">
							<div className="container__row">
								<div className="container__col-xl-6  container__col-lg-6  container__col-md-6  container__col-6  form-container__holder">
									<label>Title</label>
									<input
										type="text"
										onChange={this.handleEditTitleAndPath}
										value={this.state.editPost.title}
									/>
								</div>

								<div className="container__col-xl-6  container__col-lg-6  container__col-md-6  container__col-6  form-container__holder">
									<label>Path Will Be</label>
									<input
										type="text"
										disabled
										value={this.state.editPost.path}
									/>
								</div>

								<div className="container__col-xl-6  container__col-lg-6  container__col-md-6  container__col-6  form-container__holder">
									<label>Photo</label>
									<input
										type="text"
										onChange={this.handleEditPhoto}
										style={{ maxWidth: 75 + "%" }}
										value={this.state.editPost.photo}
									/>
									<a href="/admin/storage" target="_blank">
										<button className="o-button  o-button--xs">
											Copy Image Link
										</button>
									</a>
								</div>

								<div className="container__col-xl-6  container__col-lg-6  container__col-md-6  container__col-6  form-container__holder">
									<label>Short description</label>
									<input
										type="text"
										onChange={
											this.handleEditShortDescription
										}
										value={
											this.state.editPost.shortDescription
										}
									/>
								</div>

								<div className="container__col-xl-12  container__col-lg-12  container__col-md-12  container__col-12  form-container__holder">
									<label>Add SEO tags</label>
									<input
										type="text"
										onChange={this.handleEditTags}
										value={this.state.editPost.tags}
									/>
								</div>

								<div className="container__col-xl-12  container__col-lg-12  container__col-md-12  container__col-12  form-container__holder">
									<label>Post content</label>
									<Editor
										// initialValue="<p>This is the initial content of the editor</p>"
										value={this.state.editPost.body}
										init={{
											height: 500,
											plugins:
												"print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons",
											menubar:
												"file edit view insert format tools table help",
											toolbar:
												"undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl"
										}}
										onEditorChange={
											this.handleEditEditorChange
										}
									/>
								</div>

								<div className="container__col-xl-12  container__col-lg-12  container__col-md-12  container__col-12  form-container__holder">
									<button
										className="o-button  o-button--danger  o-button--save"
										onClick={() =>
											this.savedEditedBlogPost(
												this.state.editPost.id
											)
										}
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

	handleAddEditorChange = content => {
		this.setState({
			addPost: {
				...this.state.addPost,
				body: content
			}
		});
	};

	handleAddTitleAndPath(e) {
		this.setState({
			addPost: {
				...this.state.addPost,
				title: e.target.value,
				path: e.target.value.replace(/\s+/g, "-").toLowerCase()
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

	handleAddTags(e) {
		this.setState({
			addPost: {
				...this.state.addPost,
				tags: e.target.value
			}
		});
	}

	handleEditEditorChange = content => {
		this.setState({
			editPost: {
				...this.state.editPost,
				body: content
			}
		});
	};

	handleEditTitleAndPath(e) {
		this.setState({
			editPost: {
				...this.state.editPost,
				title: e.target.value,
				path: e.target.value.replace(/\s+/g, "-").toLowerCase()
			}
		});
	}

	handleEditPhoto(e) {
		this.setState({
			editPost: {
				...this.state.editPost,
				photo: e.target.value
			}
		});
	}

	handleEditShortDescription(e) {
		this.setState({
			editPost: {
				...this.state.editPost,
				shortDescription: e.target.value
			}
		});
	}

	handleEditTags(e) {
		this.setState({
			editPost: {
				...this.state.editPost,
				tags: e.target.value
			}
		});
	}
}

export default AdminDashboard;
