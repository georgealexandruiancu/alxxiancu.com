import React, { Component } from "react";

class divider extends Component {
	constructor() {
		super();
		this.state = {};
	}

	componentDidMount () {

	}

	render() {
		return (
			<div className="o-divider">
				<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 9.66">
					<title>Divider Alex Iancu</title>
					<path class="cls-svg" d="M1,7.16c5.44,0,5.44,7.67,10.88,7.67s5.44-7.67,10.88-7.67,5.45,7.67,10.89,7.67,5.44-7.67,10.89-7.67S50,14.83,55.43,14.83s5.44-7.67,10.89-7.67,5.44,7.67,10.88,7.67,5.45-7.67,10.9-7.67,5.45,7.67,10.9,7.67" transform="translate(0 -6.16)"/>
				</svg>
			</div>
		);
	}

}

export default divider;