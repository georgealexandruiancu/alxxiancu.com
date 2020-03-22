import React, { Component } from "react";

import Navigation from "../components/Navigation";
import Slider from "../components/Slider";
import BackgroundHome from '../components/BackgroundHome';
import Aboutme from '../components/Aboutme';

import * as UI from "../functions/iancu.slider";

import "../../styles/pages/HomepageClient.css";

class HomepageClient extends Component {
	constructor() {
		super();
		this.state = {};
	}

	componentDidMount() {
		window.addEventListener('scroll', UI.reachElement);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', UI.reachElement);
	}

	render() {
		return (
			<>
				<Navigation />
				<Slider />
				<BackgroundHome />
				<Aboutme />
			</>
		);
	}
}

export default HomepageClient;