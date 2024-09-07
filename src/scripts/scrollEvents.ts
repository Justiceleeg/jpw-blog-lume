const navBar = document.getElementById("nav-bar");

globalThis.addEventListener("scroll", () => {
	if (globalThis.scrollY <= 0 && navBar?.classList.contains("border-b")) {
		navBar?.classList.remove("border-b");
	} else if (
		globalThis.scrollY > 0 &&
		!navBar?.classList.contains("border-b")
	) {
		navBar?.classList.add("border-b");
	}
});
