import React, { Component } from "react";

import Navigation from "../components/Navigation";
import Slider from "../components/Slider";
import BackgroundHome from '../components/BackgroundHome';

import "../../styles/pages/HomepageClient.css";

class HomepageClient extends Component {

	constructor() {
		super();
		this.state = {};

	}

	render() {
		return (
			<>
				<Navigation />
				<Slider />
				<BackgroundHome />
			</>
		);
	}
}

export default HomepageClient;