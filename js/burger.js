// alert('test')
const btnLines = document.querySelector(".header__burger-lines");
const btnCross = document.querySelector(".header__burger-cross");
const navElement = document.querySelector("nav");
btnLines.addEventListener("click", () => {
  navElement.classList.add("active-menu");
});
btnCross.addEventListener("click", () => {
  navElement.classList.remove("active-menu");
});
