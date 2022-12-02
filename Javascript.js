var NavButton = document.getElementById("NavButton")
var Navbar = document.getElementById("Navbar")
var Menu = document.getElementById("Menu")

Navbar.style.right = "-200px";

NavButton.onclick = function() {
    if (Navbar.style.right == "-200px") {
        Navbar.style.right = "0";
        Menu.src = "image/close.png";
    } else {
        Navbar.style.right = "-200px";
        Menu.src = "image/menu.png";
    }
};