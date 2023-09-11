/* ----------------------- Mobile Header ------------------ */
const bar = document.getElementById('bar');
const cerrar = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
}

if (cerrar) {
  cerrar.addEventListener('click', () => {
    nav.classList.remove('active');
  })
}

/* ----------------------- Search Bar ------------------ */
let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let searchBar = document.querySelector(".searchBar");


btn.addEventListener("click", () => {
  searchBar.classList.toggle("active");
  input.focus();
});