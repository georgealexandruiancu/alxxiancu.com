import React, { Component } from "react";

import * as UI from "../functions/iancu.slider";

class Slider extends Component {

	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<>
				<div className="slider-wrapper">
					<div className="slider-container">

						<div className="slider-item  js-slider-item" data-index="0" onClick={() => {UI.changeSlide("0", "js-slider-item"); UI.scrollToElement("0");} }>
							<div className="slider-item__square   slider-item__square--active"></div>
							<div className="slider-item__title  slider-item__title--active">
								01. Home
							</div>
						</div>

						<div className="slider-item  js-slider-item" data-index="1" onClick={() => {UI.changeSlide("1", "js-slider-item"); UI.scrollToElement("1")}}>
							<div className="slider-item__square"></div>
							<div className="slider-item__title">
								02. About me
							</div>
						</div>

						<div className="slider-item  js-slider-item" data-index="2" onClick={() => {UI.changeSlide("2", "js-slider-item"); UI.scrollToElement("2")}}>
							<div className="slider-item__square"></div>
							<div className="slider-item__title">
								03. Projects
							</div>
						</div>

						<div className="slider-item  js-slider-item" data-index="3" onClick={() => {UI.changeSlide("3", "js-slider-item"); UI.scrollToElement("3")}}>
							<div className="slider-item__square"></div>
							<div className="slider-item__title">
								04. Mini Tuts
							</div>
						</div>

						<div className="slider-item  js-slider-item" data-index="4" onClick={() => {UI.changeSlide("4", "js-slider-item"); UI.scrollToElement("4")}}>
							<div className="slider-item__square"></div>
							<div className="slider-item__title">
								05. Blog
							</div>
						</div>

						<div className="slider-item  js-slider-item" data-index="5" onClick={() => {UI.changeSlide("5", "js-slider-item"); UI.scrollToElement("5")}}>
							<div className="slider-item__square"></div>
							<div className="slider-item__title">
								06. Contact
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Slider;