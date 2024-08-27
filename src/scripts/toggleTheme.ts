const lightThemeToggle = document.getElementById("light-theme-toggle");
const darkThemeToggle = document.getElementById("dark-theme-toggle");
const systemThemeToggle = document.getElementById("system-theme-toggle");

const setDarkTheme = () =>
  document.documentElement.setAttribute("data-theme", "dracula");
const setLightTheme = () =>
  document.documentElement.setAttribute("data-theme", "light");
const setThemeFromSystem = () => {
  if (globalThis.matchMedia("(prefers-color-scheme: dark)").matches) {
    setDarkTheme();
  } else {
    setLightTheme();
  }
};

// Default button settings
if (!("theme" in localStorage)) {
  setThemeFromSystem();
} else if (localStorage.theme === "dark") {
  setDarkTheme();
} else {
  setLightTheme();
}

lightThemeToggle?.addEventListener("change", () => {
  localStorage.setItem("theme", "light");
  setLightTheme();
});
darkThemeToggle?.addEventListener("change", () => {
  localStorage.setItem("theme", "dark");
  setDarkTheme();
});
systemThemeToggle?.addEventListener("change", () => {
  localStorage.removeItem("theme");
  setThemeFromSystem();
  console.log("theme reset to system");
});
