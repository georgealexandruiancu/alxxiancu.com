export const toggleNavigation = () => {
	var menu = document.getElementsByClassName("js-nav")[0];
	var menuFull = document.getElementsByClassName("js-nav-full")[0];


	if (menu.classList.contains("js-nav-active")) {
		menu.classList.remove("js-nav-active");
	}
	else {
		menu.classList.add("js-nav-active");
	}

	if (menuFull.classList.contains("u-hide")) {
		menuFull.classList.remove("u-hide");
	}
	else {
		menuFull.classList.add("u-hide");
	}
}
