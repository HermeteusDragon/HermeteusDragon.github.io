document.addEventListener("DOMContentLoaded", function () {
    const heroSection = document.getElementById("home");
    const aboutSection = document.getElementById("about-section");
    const portfolioSection = document.getElementById("portfolio");
    const socialSection = document.getElementById("social");

    const homeLink = document.getElementById("home-link");
    const aboutLink = document.getElementById("about-link");
    const portfolioLink = document.getElementById("portfolio-link");
    const socialLink = document.getElementById("social-link");

    if (heroSection && aboutSection && portfolioSection && socialSection &&
        homeLink && aboutLink && portfolioLink && socialLink) {

        // Función para ocultar todas las secciones
        function hideAllSections() {
            const sections = [heroSection, aboutSection, portfolioSection, socialSection];
            sections.forEach(section => {
                section.classList.remove("fade-in");
                section.classList.add("fade-out");
                setTimeout(() => {
                    section.style.display = "none";
                }, 1000); // Duración de la animación (1s)
            });
        }

        // Función para mostrar una sección
        function showSection(section) {
            section.style.display = "flex"; // o "block" si tu sección no usa Flexbox
            setTimeout(() => {
                section.classList.remove("fade-out");
                section.classList.add("fade-in");
            }, 50); // Tiempo para que comience la animación de aparición
        }

        // Configuración de eventos de los enlaces del navbar
        homeLink.addEventListener("click", function (e) {
            e.preventDefault();
            hideAllSections();
            showSection(heroSection);
        });

        aboutLink.addEventListener("click", function (e) {
            e.preventDefault();
            hideAllSections();
            showSection(aboutSection);
        });

        portfolioLink.addEventListener("click", function (e) {
            e.preventDefault();
            hideAllSections();
            showSection(portfolioSection);
        });

        socialLink.addEventListener("click", function (e) {
            e.preventDefault();
            hideAllSections();
            showSection(socialSection);
        });

        // Al cargar la página, ocultamos todas las secciones y solo mostramos "Home"
        hideAllSections();
        showSection(heroSection); // Aseguramos que "Home" sea la primera sección visible
    } else {
        console.error("Algunos elementos no se encontraron en el DOM.");
    }
});
