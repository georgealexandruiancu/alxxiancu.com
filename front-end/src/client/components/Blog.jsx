import React, { Component } from "react";

import * as UI from	"../functions/iancu.blogSlider";
class Blog extends Component {
	constructor() {
		super();
		this.state = {};

	}

	componentDidMount () {
		UI.activateBlogSlider();
	}

	render() {
		return (
			<>
				<div className="blog-wrapper  js-section-slide  js-blog-container" data-slide="4">
					<div className="blog-titles  js-blog-titles">
						<div
							className="blog-title  js-blog-title-child  blog-title--active"
							data-blogtitle="0"
							onClick={() => UI.goToSlide("0")}
						>
							Test 1
						</div>
						<div className="blog-title  js-blog-title-child" data-blogtitle="1" onClick={() => UI.goToSlide("1")}>
							Test 2
						</div>
						<div className="blog-title  js-blog-title-child" data-blogtitle="2" onClick={() => UI.goToSlide("2")}>
							Test 3
						</div>
						<div className="blog-title  js-blog-title-child" data-blogtitle="3" onClick={() => UI.goToSlide("3")}>
							Test 4
						</div>
					</div>
					<div className="blog-container  js-blog-container">
						<div
							className="blog-card  js-blog-slide  blog-card--active"
							data-blogslide="0"
							onClick={() => UI.goToSlide("0")}
						>
							<img
								src={require("../../assets/test1.jpg")}
								alt="Test Blog"
							/>
						</div>

						<div
							className="blog-card  js-blog-slide"
							data-blogslide="1"
							onClick={() => UI.goToSlide("1")}
						>
							<img
								src={require("../../assets/test1.jpg")}
								alt="Test Blog"
							/>
						</div>

						<div
							className="blog-card  js-blog-slide"
							data-blogslide="2"
							onClick={() => UI.goToSlide("2")}
						>
							<img
								src={require("../../assets/test1.jpg")}
								alt="Test Blog"
							/>
						</div>

						<div
							className="blog-card  js-blog-slide"
							data-blogslide="3"
							onClick={() => UI.goToSlide("3")}
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