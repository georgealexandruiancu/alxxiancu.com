import React, { Component } from "react";

import Divider from "./divider";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class Minituts extends Component {

	constructor() {
		super();
		this.state = {
			instaPosts: ""
		};
	}

	async componentDidMount () {
		this.setState({instaPosts: await this.getInstagramData()}, () => {console.log(this.state)});
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
		window.removeEventListener("resize");
	}

	async getInstagramData() {
		let response = await fetch(
			`https://www.instagram.com/graphql/query/?query_hash=472f257a40c653c64c666ce877d59d2b&variables={"id":"507714531","first":"15"}`
		);

		let data = await response.json();

		let array = [];

		await data.data.user.edge_owner_to_timeline_media.edges.map((item, index) => {
			if (item.node.edge_media_to_caption.edges[0]) {
				if (item.node.edge_media_to_caption.edges[0].node.text.includes("<MiniTuts")) {
					array.push({
						id: index,
						photo: item.node.display_url,
						likes: item.node.edge_media_preview_like.count,
						description: item.node.edge_media_to_caption.edges[0] ? item.node.edge_media_to_caption.edges[0].node.text : ""
					});
				}
			}
		});

		return array;
	}

	pushCarouselItems() {
		if (!this.state.instaPosts.length) {
			return (
				<h1 className="minituts--nocontent">
					No 🍌 joined this section 🙈
				</h1>
			)
		}

		if (this.state.instaPosts !== "") {
			var slides = [];
			this.state.instaPosts.map((item, index) => {
				slides.push(
					<div className="post-slide">
						<img src={item.photo} />
						<div className="post-slide__wrapper  is-active">
							<div className="post-slide__likes">{item.likes}</div>
							<div className="post-slide__descriptiom">{item.description}</div>
							<div className="post-slide__button  o-button">
								View post
							</div>
						</div>
					</div>
				);
			});

			return slides;
		}
	}

	render() {
		return (
			<>
				<div
					className="minituts-wrapper  js-section-slide"
					data-slide="3"
				>
					<div className="o-title-section">Mini Tutorials</div>
					<Divider />
					<div className="minituts-container">
						<Carousel
							showArrows={false}
							emulateTouch
							centerMode
							centerSlidePercentage={
								this.state.vw > 1112 ? 25 : 100
							}
							showStatus={false}
							showThumbs={false}
							showIndicators={false}
						>
							{this.state.instaPosts.length ? this.pushCarouselItems() : ""}
						</Carousel>
						{!this.state.instaPosts.length ? this.pushCarouselItems() : ""}
					</div>
				</div>
			</>
		);
	}
}

export default Minituts;