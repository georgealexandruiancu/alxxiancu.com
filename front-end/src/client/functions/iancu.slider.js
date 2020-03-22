 export const changeSlide = (idSlide, classSelector) => {
	removeStyleForAll(classSelector);
	var elementToChange = document.querySelector("." + classSelector + "[data-index='" + idSlide + "']");

	elementToChange.childNodes.forEach((item) => {
		if (item.classList.contains("slider-item__square")) {
			item.classList.add("slider-item__square--active");
		}

		if (item.classList.contains("slider-item__title")) {
			item.classList.add("slider-item__title--active");
		}
	})
}

function removeStyleForAll (classSelector) {
	var sliderElements = document.getElementsByClassName(classSelector);

	Array.prototype.forEach.call(sliderElements, (slideItem) => {
		slideItem.childNodes.forEach((item) => {
			if (item.classList.contains("slider-item__square")) {
				item.classList.remove("slider-item__square--active");
			}

			if (item.classList.contains("slider-item__title")) {
				item.classList.remove("slider-item__title--active");
			}
		})
	})
}

export const scrollToElement = (idSlide) => {
	var elementToSlide = document.querySelector(
		".js-section-slide[data-slide='" + idSlide + "']"
	);
	// console.log(elementToSlide);
	elementToSlide.scrollIntoView();
}

export const reachElement = () => {
	var classSelector = 'js-section-slide';

	var elementTarget = document.getElementsByClassName(classSelector)[0];

	if ( window.scrollY > elementTarget.offsetTop / 2 ) {
		changeSlide(elementTarget.dataset.slide, 'js-slider-item');
	} else if(window.scrollY < 150 ) {
		changeSlide(0, 'js-slider-item');
	}
}
