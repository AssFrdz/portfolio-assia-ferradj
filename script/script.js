//menu
var hamburger_button = document.getElementById("hamburger_button");
var menu = document.querySelector("nav ul")
hamburger_button.addEventListener("click", () => {
    if (menu.style.display === "none" || menu.style.display === "") {
        hamburger_button.src = "assets/icon/cross.svg"
        menu.style.display = "block";
        menu.classList.add("hamburger_menu");
    } else {
        hamburger_button.src = "assets/icon/bars.svg"
        menu.style.display = "none";
        menu.classList.remove("hamburger_menu");
    }
});

