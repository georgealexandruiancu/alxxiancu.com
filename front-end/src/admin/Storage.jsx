import React, { Component } from "react";

import AdminNavigation from "./components/Navigation";

import axios, { post } from "axios";

import "../styles/pages/AdminDashboard.css";

class AdminStorage extends Component {
	constructor() {
		super();
		this.state = {
			file: null
		};
		this.onChange = this.onChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.fileUpload = this.fileUpload.bind(this);
	}

	componentDidMount() {
		this.getStorageItems();
	}

	getStorageItems() {
		var instance = axios.create({
			withCredentials: true
		});

		instance
			.get("http://localhost:3000/storage")
			.then(response => {
				this.setState({
					storageItems: response.data
				});
			})
			.catch(err => {
				console.log(err);
			});
	}

	pushStorageItems() {
		if (this.state.storageItems) {
			let items = [];
			this.state.storageItems.map((item, index) => {
				items.push(
					<div className="container__col-xl-2  container__col-lg-2  container__col-md-4  container__col-12">
						<div className="admin-storage__card">
							<div className="admin-storage__card-image">
								<img src={item.path} alt="" />
							</div>
							<div className="admin-storage__card-actions">
								<button
									className="o-button  o-button--danger  o-button--xs"
									onClick={() =>
										this.deleteItem(item.id, item.path)
									}
								>
									Delete
								</button>
								<button
									className="o-button  o-button--good  o-button--xs"
									onClick={() => this.makeCopy(item.id)}
								>
									Copy Link
								</button>
								<input
									type="text"
									defaultValue={
										process.env.REACT_APP_API_POINT +
										item.path
									}
									data-copy-id={item.id}
									readOnly
								/>
							</div>
						</div>
					</div>
				);
			});

			return items;
		}
	}

	makeCopy(id) {
		var copyText = document.querySelector("[data-copy-id='" + id + "']");

		copyText.select();
		copyText.setSelectionRange(0, 99999);

		document.execCommand("copy");
		alert("You have copied: " + copyText.value);
	}

	deleteItem(id, path) {

		let fileName = path.split("/")[2];

		var instance = axios.create({
			withCredentials: true
		});

		instance
			.delete("http://localhost:3000/storage/delete",
			{
				data:{
					id: id,
					filename: fileName
				}
			})
			.then((response) => {
				if (response.status === 200) {
					this.getStorageItems();
				}
				else {
					console.log(response);
				}
			})
			.catch((err) => {
				console.log(err);
			})
	}

	onFormSubmit(e) {
		this.fileUpload(this.state.file)
			.then(response => {})
			.catch(err => {
				console.log(err);
			});
	}

	fileUpload(file) {
		const url = "http://localhost:3000/storage/uploadfiles";
		const formData = new FormData();
		formData.append("myFiles", file);
		const config = {
			headers: {
				"content-type": "multipart/form-data"
			}
		};
		return post(url, formData, config);
	}

	onChange(e) {
		this.setState({ file: e.target.files[0] });
	}

	render() {
		return (
			<>
				<AdminNavigation />

				<div className="admin-wrapper">
					<h1>STORAGE</h1>
					<div className="admin-storage-form">
						<form onSubmit={this.onFormSubmit}>
							Select Files:{" "}
							<input
								type="file"
								name="myFiles"
								onChange={this.onChange}
								defaultValue={this.state.file}
							/>
							<input type="submit" value="Upload your files" />
						</form>
					</div>

					<div className="admin-storage">
						<div
							className="container--fluid"
							style={{ maxWidth: 80 + "%" }}
						>
							<div className="container__row">
								{this.pushStorageItems()}
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default AdminStorage;
