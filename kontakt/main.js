let toggle = function() {
  let toggledMenu = document.getElementById("navbar"),
    hamburger = document.getElementById("hamburger");
  if (toggledMenu.classList.contains("nav--active")) {
    toggledMenu.classList.remove("nav--active");
    hamburger.classList.remove("hamburger--active");
  } else {
    toggledMenu.classList.add("nav--active");
    hamburger.classList.add("hamburger--active");
  }
}
let closing = function() {
  let toggledMenu = document.getElementById("navbar"),
    hamburger = document.getElementById("hamburger");
  toggledMenu.classList.remove("nav--active");
  hamburger.classList.remove("hamburger--active");
}
let hide = function() {
  let toggledMenu = document.getElementById("navbar"),
  hamburger = document.getElementById("hamburger");
  if (toggledMenu.classList.contains("nav--active")) {
    toggledMenu.classList.remove("nav--active");
    hamburger.classList.remove("hamburger--active");
  } else {
    return
  }
}

let hamburger = document.getElementById("hamburger"),
lastLi = document.getElementById("lastLi"),
navbar = document.getElementById("navbar");

hamburger.addEventListener("click", toggle);
lastLi.addEventListener("click", closing);
navbar.addEventListener("click", closing);


