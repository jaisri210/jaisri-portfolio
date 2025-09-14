//show and hide navbar
const burgerMenu = document.getElementById("burgermenu");
const sideNavbar = document.querySelector(".side-navbar");
const xMark = document.getElementById("xmark");
burgerMenu.addEventListener("click", function () {
  sideNavbar.style.display = "flex";
});
xMark.addEventListener("click", function () {
  sideNavbar.style.display = "none";
});

//click icon page
const email = document.getElementById("email");
const linkedin = document.getElementById("linkedin");
const github = document.getElementById("github");
email.addEventListener("click", function () {
  window.location.href = "mailto:jaisriarangasamy@gmail.com";
});
linkedin.addEventListener("click", function () {
  window.open("https://www.linkedin.com/in/jaisri-a-");
});
github.addEventListener("click", function () {
  window.open("https://github.com/jaisri210");
});
