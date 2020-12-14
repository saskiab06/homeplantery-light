const toTopBtn = document.getElementById("toTopBtn");
const hamburgerBtn = document.getElementById("hamburger");
const mainNav = document.getElementById("mainNav");
const submitBtn = document.querySelector(".submit-btn");

let mainNavOpened = false;

window.onscroll = function () {
  if (window.scrollY >= 1000) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
};

window.onresize = function () {
  if (window.outerWidth > 650) {
    mainNav.style.display = "flex";
  } else {
    mainNav.style.display = "none";
  }
};

hamburgerBtn.addEventListener("click", function (event) {
  if (!mainNavOpened) {
    mainNav.style.display = "flex";
  } else {
    mainNav.style.display = "none";
  }
  mainNavOpened = !mainNavOpened;
});

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
});

toTopBtn.addEventListener("click", function (event) {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
});
