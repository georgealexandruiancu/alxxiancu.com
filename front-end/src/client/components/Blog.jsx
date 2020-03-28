import React, { Component } from "react";

import { Carousel } from 'react-responsive-carousel';

import Divider from "./divider";

class Blog extends Component {
	constructor() {
		super();
		this.state = {};
	}

	componentDidMount () {
		this.setState({
			vw: Math.max(
				document.documentElement.clientWidth,
				window.innerWidth || 0
			)
		});
		window.addEventListener("resize", () => {
			this.setState({
				vw: Math.max(
					document.documentElement.clientWidth,
					window.innerWidth || 0
				)
			});
		});
	}

	componentWillUnmount () {
		window.removeEventListener('resize');
	}

	render() {
		return (
			<div className="blog-wrapper  js-section-slide" data-slide="4">
				<div className="o-title-section">Blog</div>
				<Divider />
				<div className="blog-container">
					<Carousel
						showArrows={false}
						emulateTouch
						centerMode
						centerSlidePercentage={this.state.vw > 1112 ? 50 : 100}
						showStatus={false}
						showThumbs={false}
						showIndicators={false}
					>
						<div className="blog-slide">
							<img src={require("../../assets/test1.jpg")} />
							<div className="blog-slide__wrapper  is-active">
								<div className="blog-slide__title">
									2b || !2b Web Developer in
									Romaniaasdasdasdasdadadasdasdasdasdsasdasdasdasdadadadasdasdasdadasdasdasdasd
								</div>
								<div className="blog-slide__button  o-button">
									View post
								</div>
							</div>
						</div>
						<div className="blog-slide">
							<img src={require("../../assets/test1.jpg")} />
							<div className="blog-slide__wrapper  is-active">
								<div className="blog-slide__title">
									2b || !2b Web Developer in Romania
								</div>
							</div>
						</div>
						<div className="blog-slide">
							<img src={require("../../assets/test1.jpg")} />
							<div className="blog-slide__wrapper  is-active">
								<div className="blog-slide__title">
									2b || !2b Web Developer in Romania
								</div>
							</div>
						</div>
					</Carousel>
				</div>
			</div>
		);
	}
}

export default Blog;