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

// AJAX form sending
const form = document.getElementById("contact-form");

if (form) { // Check if there is a form on the page
    form.addEventListener("submit", function(event) {
        event.preventDefault();  // Cancel standard form submission

        const formData = new FormData(form);

        fetch("http://127.0.0.1:5000/send_email", { // Sending data to Flask
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Wiadomość wysłana!");
                form.reset();
            } else {
                alert("Błąd podczas wysyłania wiadomości.");
            }
        })
        .catch(error => console.error("Error:", error));
    });
}