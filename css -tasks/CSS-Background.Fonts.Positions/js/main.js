const bars = document.querySelector(".menu .bars i");
const menu = document.querySelector(".menu ul");

bars.addEventListener("click", () => {
    menu.classList.toggle("active");
});