import React, { Component } from "react";

import Navigation from 				"../components/Navigation";
import Slider from 					"../components/Slider";
import BackgroundHome from 			"../components/BackgroundHome";
import Aboutme from 				"../components/Aboutme";
import Projects from 				"../components/Projects";
import Minituts from 				"../components/Minituts";
import Blog from 					"../components/Blog";
import Contact from 				"../components/Contact";
import Footer from 				"../components/Footer";

import * as UI from 				"../functions/iancu.slider";

import 								"../../styles/pages/HomepageClient.css";


class HomepageClient extends Component {
	constructor() {
		super();
		this.state = {};
	}

	componentDidMount() {
		window.addEventListener("scroll", UI.reachElement);
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", UI.reachElement);
	}

	render() {
		return (
			<>
				<Navigation />
				<Slider />
				<BackgroundHome />
				<Aboutme />
				<Projects />
				<Minituts />
				<Blog />
				<Contact />
				<Footer />
			</>
		);
	}
}

export default HomepageClient;