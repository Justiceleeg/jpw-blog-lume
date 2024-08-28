const navBar = document.querySelector("header");

globalThis.addEventListener("scroll", () => {
  console.log(globalThis.scrollY);
  console.log(navBar?.classList.contains("border-b-2"));
  if (globalThis.scrollY <= 0 && navBar?.classList.contains("border-b-2")) {
    navBar?.classList.remove("border-b-2");
  } else if (
    globalThis.scrollY > 0 &&
    !navBar?.classList.contains("border-b-2")
  ) {
    navBar?.classList.add("border-b-2");
  }
});
