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


if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}


// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const navbar = document.querySelector(".navbar");


if (navbar) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
        } else {
            navbar.style.boxShadow = "none";
        }
    });
}


// ===============================
// FADE-IN ANIMATION
// ===============================

const animatedElements = document.querySelectorAll(
    ".skill-card, .project-card, .stat-card, .timeline-item, .learning-item"
);


if (animatedElements.length) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    animatedElements.forEach((element) => {
        element.classList.add("hidden");
        observer.observe(element);
    });
}