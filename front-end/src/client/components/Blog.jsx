import React, { Component } from "react";

import * as UI from						"../functions/iancu.blogSlider";
class Blog extends Component {
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
				<div className="blog-wrapper  js-section-slide" data-slide="4">
					<div className="blog-titles">
						<div
							className="blog-title  blog-title--active"
							data-blogTitle="0"
						>
							Test 1
						</div>
						<div className="blog-title" data-blogTitle="1">
							Test 2
						</div>
						<div className="blog-title" data-blogTitle="2">
							Test 3
						</div>
						<div className="blog-title" data-blogTitle="3">
							Test 4
						</div>
					</div>
					<div className="blog-container  js-blog-container">
						<div
							className="blog-card  js-blog-slide  blog-card--active"
							data-blog-slide="0"
						>
							<img
								src={require("../../assets/test1.jpg")}
								alt="Test Blog"
							/>
						</div>

						<div
							className="blog-card  js-blog-slide"
							data-blog-slide="1"
						>
							<img
								src={require("../../assets/test1.jpg")}
								alt="Test Blog"
							/>
						</div>

						<div
							className="blog-card  js-blog-slide"
							data-blog-slide="2"
						>
							<img
								src={require("../../assets/test1.jpg")}
								alt="Test Blog"
							/>
						</div>

						<div
							className="blog-card  js-blog-slide"
							data-blog-slide="3"
						>
							<img
								src={require("../../assets/test1.jpg")}
								alt="Test Blog"
							/>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Blog;