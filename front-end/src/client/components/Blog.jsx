import React, { Component } from "react";
import axios from "axios";

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

		this._getAllPosts();
	}

	componentWillUnmount () {
		window.removeEventListener('resize');
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
						blog: response.data
					},
					() => console.log(this.state)
				);
			})
			.catch(err => {
				console.log(err);
			});
	}

	_pushPosts() {
		if (this.state.blog) {
			let arr = [];

			this.state.blog.forEach((item, index) => {
				if (index < 9) {
					arr.push(
						<>
							<div className="blog-slide">
								<img src={item.photo} />
								<div className="blog-slide__wrapper  is-active">
									<div className="blog-slide__title">
										{item.title}
									</div>
								</div>
								<div className="blog-slide__button  o-button">
									View post
								</div>
							</div>
						</>
					);
				}
			})

			return arr;
		}
	}

	render() {
		return (
			<div className="blog-wrapper  js-section-slide" data-slide="4">
				<div className="o-title-section">Blog</div>
				<Divider />
				<div className="blog-container">
					{this.state.blog ?
						<Carousel
							showArrows={false}
							emulateTouch
							centerMode
							centerSlidePercentage={this.state.vw > 1112 ? 25 : 100}
							showStatus={false}
							showThumbs={false}
							showIndicators={false}
						>
							{this._pushPosts()}
						</Carousel>
						:
						<></>
					}
				</div>
			</div>
		);
	}
}

export default Blog;