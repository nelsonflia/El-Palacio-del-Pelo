let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let searchBar = document.querySelector(".searchBar");


btn.addEventListener("click", () => {
  searchBar.classList.toggle("active");
  input.focus();
});