import React, { Component } from "react";

import axios from "axios";

class AdminLogin extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: ''
		};

		this.handleEmail = this.handleEmail.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
	}

	componentDidMount () {
		axios.get("http://localhost:3000/whoami")
			.then((response) => {
				console.log(response);
				if (response.data.logged) {
					console.log("You are already logged in");
				}
				else {
					console.log("Please log in");
				}
			});
	}

	handleEmail(event) {
		this.setState({email: event.target.value});
	}

	handlePassword(event) {
		this.setState({password: event.target.value});
	}

	makeLogin() {
		axios
			.post("http://localhost:3000/login/make-owner", {
				email: this.state.email,
				password: this.state.password
			})
			.then(function(response) {
				if (response.status === 200) {
					console.log("ok");
				}
				else if (response.status === 401) {
					console.log("not ok");
				}
			})
			.catch(function(error) {
				if (error) {
					alert("Unable to login, please try again!");
				}
			});
	}

	makeLogout() {
		axios.get("http://localhost:3000/login/die")
			.then(function(response) {
				console.log(response);
			});
	}

	render() {
		return (
			<>
				<input type="text" placeholder="Add your user here.." value={this.state.email} onChange={this.handleEmail}/>
				<input type="password" placeholder="Add your password here.." value={this.state.password} onChange={this.handlePassword}/>
				<button onClick={() => this.makeLogin()}> Login </button>
				<button onClick={() => this.makeLogout()}> logout </button>

			</>
		);
	}
}

export default AdminLogin;
