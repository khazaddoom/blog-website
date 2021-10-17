const menuHandler = document.getElementById("menu");
const mainMenu = document.getElementById("main-menu");
const mainContent = document.getElementById("main-content");
const body = document.getElementById("desktop-full")
const desktopMenu = document.getElementById("desktop-hamburger-menu");

menuHandler.addEventListener("click", function() {
    mainMenu.classList.toggle("hide")
    mainMenu.style.width = "80%";
})

body.addEventListener("click", function() {
    mainMenu.classList.toggle("hide")
})

desktopMenu.addEventListener("click", function() {
    mainMenu.style.display = "none !important";
})