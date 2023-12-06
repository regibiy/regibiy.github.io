//swall alert
const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", () => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "This feature is currently unavailable!",
    footer: 'but you still can contact me via <span class="text-primary font-bold">social media.</span>',
  });
});
// hamburger
const hamburger = document.querySelector("#hamburger");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  const navMenu = document.querySelector("#navMenu");
  navMenu.classList.toggle("hidden");
});
//navbar fixed
window.onscroll = () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop; //jarak dari posisi header ke top
  const toTop = document.querySelector("#toTop");
  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    header.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.add("hidden");
    header.classList.remove("flex");
  }
};
//click outside hamburger
window.addEventListener("click", (e) => {
  if (e.target !== hamburger && e.target !== navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});
//darkmode toggle
const darkToggle = document.querySelector("#darkToggle");
const html = document.querySelector("html");
darkToggle.addEventListener("click", () => {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});
//adjust toggle based on theme
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
