function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon span");
    menu.classList.toggle("open");
    icon.classList.toggle("open");    
}