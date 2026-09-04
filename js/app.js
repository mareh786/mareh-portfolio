// Current year

document.getElementById("year").textContent =
    new Date().getFullYear();


// Mobile navigation

const menuButton = document.getElementById("menu-btn");

const navLinks = document.querySelector(".nav-links");


menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("mobile-open");

});


// Close mobile menu when clicking a link

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("mobile-open");

        });

    });


// Navbar shadow while scrolling

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.style.boxShadow =
            "0 10px 40px rgba(0,0,0,0.25)";

    } else {

        navbar.style.boxShadow = "none";

    }

});