const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-bar");
const overlay = document.querySelector(".overlay");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  overlay.classList.remove("active");
});

for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    overlay.classList.remove("active");
  });
}
