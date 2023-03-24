const menu = document.querySelector(".header__sidebar");
const lista = document.querySelector(".header__container__lista");

menu.addEventListener("click", () => {
    lista.classList.toggle("active");
    menu.style.display = "none";
});