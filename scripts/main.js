// Back to Top
const backToTopBTN = document.getElementById("back-to-top-btn");

function backToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
backToTopBTN.addEventListener("click", backToTop);

function scrollFunction() {
	let buttonVisibility = backToTopBTN.classList;
	let height = document.body.scrollHeight;

	if ( document.body.scrollTop > ( height / 3 ) || document.documentElement.scrollTop > ( height / 3 ) ) {
		if ( buttonVisibility.contains("d-none") ) { buttonVisibility.remove("d-none") }
	} else {
		if ( !buttonVisibility.contains("d-none") ) { buttonVisibility.add("d-none") }
	}
};
window.onscroll = function () {
	scrollFunction();
};