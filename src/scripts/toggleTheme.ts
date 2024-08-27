const themeIconToggle = document.getElementById("theme-icon-checkbox");
// theme icon toggle is a checkbox (checked attribute == true => sun icon)
const themeIconToggleLabel = document.getElementById(
  "theme-icon-checkbox-label"
);
const lightThemeToggle = document.getElementById("light-theme-toggle");
const darkThemeToggle = document.getElementById("dark-theme-toggle");
const systemThemeToggle = document.getElementById("system-theme-toggle");

const setDarkTheme = (isOnMount?: boolean) => {
  document.documentElement.setAttribute("data-theme", "dracula");
  if (themeIconToggle instanceof HTMLInputElement)
    themeIconToggle.checked = false;
  // necessary bc of loading the default state (moon) icon flash
  if (isOnMount) themeIconToggleLabel?.classList.remove("hidden");
};
const setLightTheme = (isOnMount?: boolean) => {
  document.documentElement.setAttribute("data-theme", "light");
  if (themeIconToggle instanceof HTMLInputElement)
    themeIconToggle.checked = true;
  if (isOnMount) themeIconToggleLabel?.classList.remove("hidden");
};
const setThemeFromSystem = (isOnMount?: boolean) => {
  if (globalThis.matchMedia("(prefers-color-scheme: dark)").matches) {
    setDarkTheme(isOnMount);
  } else {
    setLightTheme(isOnMount);
  }
};

// Default button settings
if (!("theme" in localStorage)) {
  setThemeFromSystem(true);
} else if (localStorage.theme === "dark") {
  setDarkTheme(true);
} else {
  setLightTheme(true);
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
