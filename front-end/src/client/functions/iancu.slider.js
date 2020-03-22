 export const changeSlide = (idSlide, selector) => {
	removeStyleForAll(selector);
	var elementToChange = document.querySelector("[data-index-slide='" + idSlide + "']");

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
		"[data-slide='" + idSlide + "']"
	);
	console.log(elementToSlide);
	elementToSlide.scrollIntoView();
}

function removeAllActiveNavItems () {
	var navItems = document.getElementsByClassName("js-nav-slide");

	Array.prototype.forEach.call(navItems, (navItem) => {
		navItem.classList.remove("navigation-full__item--active");
	});
}

function selectActiveNavItem (element) {
	removeAllActiveNavItems();

	element.classList.add("navigation-full__item--active");
}

export const reachElement = () => {
	const config = {
		root: null, // setting root to null sets it to viewport
		rootMargin: '0px',
		threshold: 1
	};
	let observer = new IntersectionObserver( function (entries) {
		entries.forEach( function (entry) {
			const { isIntersecting, intersectionRatio } = entry;
			if (isIntersecting === true || intersectionRatio > 0.7) {

				changeSlide(entry.target.dataset.slide, "js-slider-item");
				selectActiveNavItem(document.querySelector(".js-nav-slide[data-nav-slide='"+entry.target.dataset.slide+"']"));

				observer.unobserve(entry.target);
			}
		});
	}, config);

	const domElements = document.querySelectorAll(".js-section-slide");
	domElements.forEach(domElem => {
		observer.observe(domElem);
	});
}
