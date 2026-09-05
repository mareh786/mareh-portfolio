```javascript
// =========================
// Current year
// =========================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// =========================
// Mobile navigation
// =========================

const menuButton = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        const isOpen =
            navLinks.classList.toggle("mobile-open");

        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
    });


    // Close menu after clicking a navigation link

    document
        .querySelectorAll(".nav-links a")
        .forEach((link) => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("mobile-open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });
}


// =========================
// Navbar shadow
// =========================

const navbar = document.querySelector(".navbar");

if (navbar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {

            navbar.style.boxShadow =
                "0 10px 40px rgba(0, 0, 0, 0.25)";

        } else {

            navbar.style.boxShadow = "none";

        }

    });

}
```
