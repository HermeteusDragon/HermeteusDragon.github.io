// Object containing translations for different languages
const translations = {
    en: {
        home: "Home",
        about: "About Me",
        portfolio: "Portfolio",
        social: "Social Networks",
        heroTitle: "Hermeteus Dreamforge",
        heroDescription: "Design, Develop, and Shape Your Dreams",
        footerText: "© 2025 Hermeteus (Francisco Fernandez). All rights reserved.",
        aboutText: `🎮 Student of Game Design and Development | Passionate about creating interactive worlds
        <br><br>
        I am a student in training and a video game enthusiast, always exploring new ways to tell stories and design interactive experiences. Since childhood, video games have been more than just a hobby: they are my inspiration and the path I want to follow.
        <br><br>
        Like a good dragon, I love hoarding knowledge treasures about Game Design, game mechanics, and interactive storytelling. I am constantly learning and looking for opportunities to improve my skills and leave my mark on the industry.
        <br><br>
        🔥 Always ready for new adventures in the world of game development.`,
        portfolioTitle: "Portfolio",
        portfolioDescription: "Discover my game projects below. Click on 'All games' to see them all.",
        allGamesButton: "All games",
    },
    es: {
        home: "Inicio",
        about: "Sobre mí",
        portfolio: "Portafolio",
        social: "Redes Sociales",
        heroTitle: "Hermeteus Dreamforge",
        heroDescription: "Diseña, Desarrolla, y da forma a tus sueños",
        footerText: "© 2025 Hermeteus (Francisco Fernandez). Todos los derechos reservados.",
        aboutText: `🎮 Estudiante de Diseño y Desarrollo de Videojuegos | Apasionado por crear mundos interactivos
        <br><br>
        Soy un estudiante en formación y un entusiasta de los videojuegos, siempre explorando nuevas formas de contar historias y diseñar experiencias interactivas. Desde pequeño, los videojuegos han sido más que un pasatiempo: son mi inspiración y el camino que quiero seguir.
        <br><br>
        Como un buen dragón, me encanta acumular tesoros de conocimiento sobre Game Design, mecánicas de juego y narrativa interactiva. Estoy en constante aprendizaje y busco oportunidades para mejorar mis habilidades y dejar mi huella en la industria.
        <br><br>
        🔥 Siempre listo para nuevas aventuras en el mundo del desarrollo de videojuegos.`,
        portfolioTitle: "Portafolio",
        portfolioDescription: "Descubre mis proyectos de juegos a continuación. Haz clic en 'Todos los juegos' para verlos todos.",
        allGamesButton: "Todos los juegos",
    }
};

// Function to switch the language and store the choice in localStorage
function switchLanguage(language) {
    localStorage.setItem("selectedLanguage", language);  // Save the selected language to localStorage
    applyLanguage(language);  // Apply the language to the page
}

// Function to apply the translations to the page
function applyLanguage(language) {
    document.getElementById('home-link').textContent = translations[language].home;  // Set the 'Home' link text
    document.getElementById('about-link').textContent = translations[language].about;  // Set the 'About Me' link text
    document.getElementById('portfolio-link').textContent = translations[language].portfolio;  // Set the 'Portfolio' link text
    document.getElementById('social-link').textContent = translations[language].social;  // Set the 'Social Networks' link text
    document.getElementById('hero-title').textContent = translations[language].heroTitle;  // Set the hero section title
    document.getElementById('hero-description').textContent = translations[language].heroDescription;  // Set the hero section description
    document.getElementById('footer-text').textContent = translations[language].footerText;  // Set the footer text
    document.querySelector('.about-text').innerHTML = translations[language].aboutText;  // Set the about section content

    // Set the portfolio section title and description
    document.getElementById('portfolio-title').textContent = translations[language].portfolioTitle;
    document.getElementById('portfolio-description').textContent = translations[language].portfolioDescription;

    // Update the text of the 'All games' button
    document.querySelector('a.btn-custom').textContent = translations[language].allGamesButton;

    // Update the language dropdown flag and text
    document.getElementById('languageDropdown').innerHTML = 
        `<i class="flag-icon flag-icon-${language === 'es' ? 'es' : 'us'}"></i> ${language.toUpperCase()}`;
}

// Load the language saved in localStorage when the page is loaded
document.addEventListener("DOMContentLoaded", function () {
    const savedLang = localStorage.getItem("selectedLanguage") || "en";  // Get the saved language, default to 'en'
    applyLanguage(savedLang);  // Apply the saved language to the page
});
