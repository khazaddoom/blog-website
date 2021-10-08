const menuHandler = document.getElementById("menu");
const mainMenu = document.getElementById("main-menu");
menuHandler.addEventListener("click", function() {
    mainMenu.classList.toggle("hide")
})