const menuHandler = document.getElementById("menu");
const mainMenu = document.getElementById("main-menu");
const mainContent = document.getElementById("main-content");

menuHandler.addEventListener("click", function() {
    mainMenu.classList.toggle("hide")
    mainMenu.style.width = "80%";
})