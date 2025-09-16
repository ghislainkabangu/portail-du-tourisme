/** @format */

let boutonMenu = document.querySelector(".boutonMenu");
let closeMenu = document.querySelector(".closeMenu");
let mobNav = document.querySelector(".mobNav");
boutonMenu.addEventListener("click", () => {
  mobNav.classList.add("mobNavNewClasse");
});
/*
mobNav.addEventListener("click", () => {
  alert("mobNav");
});
*/
closeMenu.addEventListener("click", () => {
  mobNav.classList.remove("mobNavNewClasse");
});

let link = document.querySelectorAll(".link");
for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", () => {
    mobNav.classList.remove("mobNavNewClasse");
  });
}
