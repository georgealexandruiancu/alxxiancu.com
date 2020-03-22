export const activateBlogSlider = () => {
	var blogContainer = document.getElementsByClassName("js-blog-container")[0];
	blogContainer.onscroll = function (e) {
		setTimeout(function () {
			const config = {
				root: null, // setting root to null sets it to viewport
				rootMargin: '0px',
				threshold: [1.0],
				delay: 200
			};
			let observer = new IntersectionObserver(function (entries) {
				entries.forEach(function (entry) {
					const { isIntersecting, intersectionRatio } = entry;
					if (isIntersecting === true || intersectionRatio > 0) {
						if (entry.intersectionRatio > 0.99) {
							removeActiveClass();
							entry.target.classList.add("blog-card--active");
							makeTitleActive(entry.target.dataset.blogslide);
						}
						observer.unobserve(entry.target);
					}
				});
			}, config);

			const domElements = document.querySelectorAll(".js-blog-slide");
			domElements.forEach(domElem => {
				observer.observe(domElem);
			});
		}, 400);
	}
}

export const goToSlide = (idSlide) => {
	removeActiveClass();
	makeTitleActive(idSlide);
	makeSlideActive(idSlide);
}

function removeActiveClass() {
	const mainElements = document.querySelectorAll(".js-blog-slide");
	const titleElements = document.querySelectorAll(".js-blog-title-child");

	mainElements.forEach(elem => {
		elem.classList.remove("blog-card--active");
	});

	titleElements.forEach(elem => {
		elem.classList.remove("blog-title--active");
	});
}

function makeTitleActive (id) {
	var elem = document.querySelector(".js-blog-title-child[data-blogtitle='" + id + "']");
	var elemScroll = elem.offsetTop;

	elem.classList.add("blog-title--active");
	document.querySelector(".js-blog-titles").scrollTop = elemScroll;
}

function makeSlideActive (id) {
	var elem = document.querySelector(".js-blog-slide[data-blogslide='" + id + "']");
	var containerBlogSlide = document.querySelector(".js-blog-container")
	var elementOffset = elem.offsetLeft;

	elem.classList.add("blog-title--active");
	containerBlogSlide.scrollLeft = elementOffset - 100;
}