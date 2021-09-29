const navMenu = document.querySelector("#nav-menu");
const hamburger = document.querySelector("#hamburger");
const allNavLinks = document.querySelectorAll(".nav__link");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
});

function clickLinkAction() {
  const mobileMenu = document.querySelector("#nav-menu");
  mobileMenu.classList.remove("show-menu");
}
allNavLinks.forEach((link) => link.addEventListener("click", clickLinkAction));

const btnScrollTop = document.querySelector(".myBtn");

function scrollFunction() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    btnScrollTop.style.display = "block";
  } else {
    btnScrollTop.style.display = "none";
  }
}

btnScrollTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

function progressBar() {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
window.onscroll = function () {
  progressBar();
  scrollFunction();
};
