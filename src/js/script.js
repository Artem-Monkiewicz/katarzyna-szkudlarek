document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.getElementById("burger-menu");
    const navMenu = document.querySelector("nav ul");

    // Open/close menu when clicking on hamburger menu icon
    burgerMenu.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        burgerMenu.classList.toggle("active"); // Icon animation
    });

    // Close menu when clicking outside menu or hamburger
    document.addEventListener("click", (event) => {
        if (!navMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
            navMenu.classList.remove("show");
        }
    });
});
