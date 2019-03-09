/* jQuery Load in of Info for the top of Portfolio */
$().ready($("#top .info").fadeIn(3500));

/* Mobile Menu Toggle */
const mobileMenu = document.querySelector(".mobile-menu");
const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", () => mobileMenu.classList.toggle("active"));



