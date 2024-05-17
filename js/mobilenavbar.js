var mobile_menu_open = false;

function openMobileNavbar() {
    var menu = document.querySelector(".mobile-navbar");
    menu.style.width = "75%";
    mobile_menu_open = true;
}

function closeMobileNavbar() {
    var menu = document.querySelector(".mobile-navbar");
    menu.style.width = "0%";
    mobile_menu_open = false;
}