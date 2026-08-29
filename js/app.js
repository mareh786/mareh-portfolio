// ===============================
// CURRENT YEAR
// ===============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ===============================
// MOBILE MENU
// ===============================

const menuButton = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");


menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// Close menu after clicking a navigation link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.3)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


// ===============================
// FADE-IN ANIMATION
// ===============================

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


document
    .querySelectorAll(
        ".skill-card, .project-card, .stat-card, .timeline-item, .learning-item"
    )
    .forEach(element => {

        element.classList.add("hidden");

        observer.observe(element);

    });