// Objeto con traducciones
const translations = {
    en: {
        // Navbar
        home: "Home",
        language: "EN",
        english: "English",
        spanish: "Spanish",

        // Projects
        project1Title: "Vail Of Ruination",
        project1Description: "Explore a labyrinthine dungeon filled with enemies in this unique, procedurally generated prototype. Created for learning purposes with a third-person camera.",
        platformTitle: "Platform:",
        genreTitle: "Genre:",
        engineTitle: "Engine:",
        viewProjectBtn: "View Project",

        project2Title: "The Lynx Game",
        project2Description: "The game is a skill and puzzle game. This game is a prototype created for learning purposes, specifically as a project for a university course.",
        platform2Title: "Platform:",
        genre2Title: "Genre:",
        engine2Title: "Engine:",
        viewProject2Btn: "View Project",

        project3Title: "Argia",
        project3Description: "It's an exploration game. This game is a prototype created for learning purposes, specifically as a project for a university course.",
        platform3Title: "Platform:",
        genre3Title: "Genre:",
        engine3Title: "Engine:",
        viewProject3Btn: "View Project",

        project4Title: "Infinity Adventures",
        project4Description: "Adventure Madness is a 2D platformer game. This game is a prototype created for learning purposes, specifically as a project for a university course.",
        platform4Title: "Platform:",
        genre4Title: "Genre:",
        engine4Title: "Engine:",
        viewProject4Btn: "View Project",

        project5Title: "Adventure Madness",
        project5Description: "Adventure Madness is a 2D platformer game. This game is a prototype created for learning purposes, specifically as a project for a university course.",
        platform5Title: "Platform:",
        genre5Title: "Genre:",
        engine5Title: "Engine:",
        viewProject5Btn: "View Project",

        // Footer
        footerText: "&copy; 2025 Hermeteus (Francisco Fernandez). All rights reserved.",
    },
    es: {
        // Navbar
        home: "Inicio",
        language: "ES",
        english: "English",
        spanish: "Español",

        // Projects
        project1Title: "Vail Of Ruination",
        project1Description: "Explora un laberinto lleno de enemigos en este prototipo único y generado proceduralmente. Creado con fines educativos utilizando una cámara en tercera persona.",
        platformTitle: "Plataforma:",
        genreTitle: "Género:",
        engineTitle: "Motor:",
        viewProjectBtn: "Ver Proyecto",

        project2Title: "The Lynx Game",
        project2Description: "El juego es un juego de habilidad y rompecabezas. Este juego es un prototipo creado con fines educativos, específicamente como un proyecto para un curso universitario.",
        platform2Title: "Plataforma:",
        genre2Title: "Género:",
        engine2Title: "Motor:",
        viewProject2Btn: "Ver Proyecto",

        project3Title: "Argia",
        project3Description: "Es un juego de exploración. Este juego es un prototipo creado con fines educativos, específicamente como un proyecto para un curso universitario.",
        platform3Title: "Plataforma:",
        genre3Title: "Género:",
        engine3Title: "Motor:",
        viewProject3Btn: "Ver Proyecto",

        project4Title: "Infinite Adventures",
        project4Description: "Adventure Madness es un juego de plataformas 2D. Este juego es un prototipo creado con fines educativos, específicamente como un proyecto para un curso universitario.",
        platform4Title: "Plataforma:",
        genre4Title: "Género:",
        engine4Title: "Motor:",
        viewProject4Btn: "Ver Proyecto",

        project5Title: "Adventure Madness",
        project5Description: "Adventure Madness es un juego de plataformas 2D. Este juego es un prototipo creado con fines educativos, específicamente como un proyecto para un curso universitario.",
        platform5Title: "Plataforma:",
        genre5Title: "Género:",
        engine5Title: "Motor:",
        viewProject5Btn: "Ver Proyecto",

        // Footer
        footerText: "&copy; 2025 Hermeteus (Francisco Fernandez). Todos los derechos reservados.",
    }
};

// Cambia el idioma y guarda en localStorage
function switchLanguage(language) {
    localStorage.setItem("selectedLanguage", language);
    applyLanguage(language);
}

// Aplica las traducciones
function applyLanguage(language) {
    // Navbar
    document.getElementById('home-link').textContent = translations[language].home;
    document.querySelector('#languageDropdown').textContent = translations[language].language;

    // Language dropdown
    const languageItems = document.querySelectorAll('.dropdown-item');
    languageItems[0].textContent = translations[language].english;
    languageItems[1].textContent = translations[language].spanish;

    // Projects
    document.getElementById('project1-title').textContent = translations[language].project1Title;
    document.getElementById('project1-description').textContent = translations[language].project1Description;
    document.getElementById('platform-title').textContent = translations[language].platformTitle;
    document.getElementById('genre-title').textContent = translations[language].genreTitle;
    document.getElementById('engine-title').textContent = translations[language].engineTitle;
    document.getElementById('view-project-btn').textContent = translations[language].viewProjectBtn;

    document.getElementById('project2-title').textContent = translations[language].project2Title;
    document.getElementById('project2-description').textContent = translations[language].project2Description;
    document.getElementById('platform2-title').textContent = translations[language].platform2Title;
    document.getElementById('genre2-title').textContent = translations[language].genre2Title;
    document.getElementById('engine2-title').textContent = translations[language].engine2Title;
    document.getElementById('view-project2-btn').textContent = translations[language].viewProject2Btn;

    document.getElementById('project3-title').textContent = translations[language].project3Title;
    document.getElementById('project3-description').textContent = translations[language].project3Description;
    document.getElementById('platform3-title').textContent = translations[language].platform3Title;
    document.getElementById('genre3-title').textContent = translations[language].genre3Title;
    document.getElementById('engine3-title').textContent = translations[language].engine3Title;
    document.getElementById('view-project3-btn').textContent = translations[language].viewProject3Btn;

    document.getElementById('project4-title').textContent = translations[language].project4Title;
    document.getElementById('project4-description').textContent = translations[language].project4Description;
    document.getElementById('platform4-title').textContent = translations[language].platform4Title;
    document.getElementById('genre4-title').textContent = translations[language].genre4Title;
    document.getElementById('engine4-title').textContent = translations[language].engine4Title;
    document.getElementById('view-project4-btn').textContent = translations[language].viewProject4Btn;

    document.getElementById('project5-title').textContent = translations[language].project5Title;
    document.getElementById('project5-description').textContent = translations[language].project5Description;
    document.getElementById('platform5-title').textContent = translations[language].platform5Title;
    document.getElementById('genre5-title').textContent = translations[language].genre5Title;
    document.getElementById('engine5-title').textContent = translations[language].engine5Title;
    document.getElementById('view-project5-btn').textContent = translations[language].viewProject5Btn;

    // Footer
    document.getElementById('footer-text').innerHTML = translations[language].footerText;

    // Cambiar bandera en el dropdown
    document.getElementById('languageDropdown').innerHTML = 
        `<i class="flag-icon flag-icon-${language === 'es' ? 'es' : 'us'}"></i> ${language.toUpperCase()}`;
}

// Cargar idioma guardado
document.addEventListener("DOMContentLoaded", function () {
    const savedLang = localStorage.getItem("selectedLanguage") || "en";
    applyLanguage(savedLang);
});
