document.addEventListener("DOMContentLoaded", function () {
    const heroSection = document.getElementById("home");
    const aboutSection = document.getElementById("about-section");
    const portfolioSection = document.getElementById("portfolio");
    const socialSection = document.getElementById("social");

    const homeLink = document.getElementById("home-link");
    const aboutLink = document.getElementById("about-link");
    const portfolioLink = document.getElementById("portfolio-link");
    const socialLink = document.getElementById("social-link");

    // Check if all the necessary elements are found in the DOM
    if (heroSection && aboutSection && portfolioSection && socialSection &&
        homeLink && aboutLink && portfolioLink && socialLink) {

        // Function to hide all sections with a fade-out animation
        function hideAllSections() {
            const sections = [heroSection, aboutSection, portfolioSection, socialSection];
            sections.forEach(section => {
                section.classList.remove("fade-in");
                section.classList.add("fade-out");
                setTimeout(() => {
                    section.style.display = "none";
                }, 1000); // Animation duration (1 second)
            });
        }

        // Function to show a specific section with a fade-in animation
        function showSection(section) {
            section.style.display = "flex"; // or "block" if the section doesn't use Flexbox
            setTimeout(() => {
                section.classList.remove("fade-out");
                section.classList.add("fade-in");
            }, 50); // Time before starting the fade-in animation
        }

        // Set up event listeners for the navbar links to navigate between sections
        homeLink.addEventListener("click", function (e) {
            e.preventDefault();
            hideAllSections();  // Hide all sections
            showSection(heroSection);  // Show the home section
        });

        aboutLink.addEventListener("click", function (e) {
            e.preventDefault();
            hideAllSections();  // Hide all sections
            showSection(aboutSection);  // Show the about section
        });

        portfolioLink.addEventListener("click", function (e) {
            e.preventDefault();
            hideAllSections();  // Hide all sections
            showSection(portfolioSection);  // Show the portfolio section
        });

        socialLink.addEventListener("click", function (e) {
            e.preventDefault();
            hideAllSections();  // Hide all sections
            showSection(socialSection);  // Show the social section
        });

        // When the page loads, hide all sections and show only the "Home" section
        hideAllSections();
        showSection(heroSection);  // Ensure "Home" is the first section visible
    } else {
        console.error("Some elements were not found in the DOM.");
    }
});
