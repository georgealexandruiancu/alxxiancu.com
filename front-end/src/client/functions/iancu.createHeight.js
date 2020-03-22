 export const createHeightForSection = (classSelector) => {
	var wrapperChange = document.getElementsByClassName(classSelector)[0];

	var getDeviceHeight = Math.max(
		document.documentElement.clientHeight,
		window.innerHeight || 0
	);

	wrapperChange.style.marginTop = getDeviceHeight + "px";
}
