import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
class Blog extends Component {
	constructor() {
		super();
		this.state = {};

	}

	componentDidMount () {
		// UI.activateBlogSlider();
	}

	render() {
		return (
			<div className="blog-wrapper  js-section-slide" data-slide="4">
				<div className="blog-container">
						<Carousel infiniteLoop useKeyboardArrows autoPlay>
							<div>
								<img src={require("../../assets/test1.jpg")} />
							</div>
							<div>
								<img src={require("../../assets/test1.jpg")} />
							</div>
							<div>
								<img src={require("../../assets/test1.jpg")} />
							</div>
						</Carousel>
				</div>
			</div>
		);
	}
}

export default Blog;