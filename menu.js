const hamMenu = document.querySelector(".navbar-toggler");
const offScreenMenu = document.querySelector(".navbar-collapse");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});

