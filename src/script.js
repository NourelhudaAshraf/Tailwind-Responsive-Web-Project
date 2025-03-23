let themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
let themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
let themeDarkText = document.getElementById("dark-text");
let themeLightText = document.getElementById("light-text");
let menuBarButton = document.getElementById("menu-bar");
let crossIcon = document.getElementById("cross-icon");
let barIcon = document.getElementById("bar-icon");
let verticalNav = document.getElementById("vertical-nav");
let loginObj = document.getElementById("login");

function theme(them) {
  if (them === "light") {
    themeToggleDarkIcon.classList.remove("hidden");
    themeDarkText?.classList.remove("hidden");
    themeToggleLightIcon?.classList.add("hidden");
    themeLightText?.classList.add("hidden");
    document.body.classList.toggle("dark");
  } else {
    themeToggleLightIcon.classList.remove("hidden");
    themeLightText?.classList.remove("hidden");
    themeToggleDarkIcon?.classList.add("hidden");
    themeDarkText?.classList.add("hidden");
    document.body.classList.toggle("dark");
  }
}

themeToggleDarkIcon?.addEventListener("click", () => {
  theme("dark");
});
themeDarkText?.addEventListener("click", () => {
  theme("dark");
});
themeToggleLightIcon?.addEventListener("click", () => {
  theme("light");
});
themeLightText?.addEventListener("click", () => {
  theme("light");
});
menuBarButton?.addEventListener("click", () => {
  verticalNav.classList.toggle("hidden");
  barIcon.classList.toggle("hidden");
  crossIcon.classList.toggle("hidden");
  console.log("hiii");
});

loginObj?.addEventListener("click", () => {
  location.replace("index.html");
});
