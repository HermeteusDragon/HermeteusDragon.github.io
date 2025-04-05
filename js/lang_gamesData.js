// Object containing translations for different languages
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

// Function to switch the language and store the choice in localStorage
function switchLanguage(language) {
    localStorage.setItem("selectedLanguage", language);  // Save the selected language to localStorage
    applyLanguage(language);  // Apply the language to the page
}

// Function to apply the translations to the page
function applyLanguage(language) {
    // Navbar
    document.getElementById('home-link').textContent = translations[language].home;  // Set the 'Home' link text
    document.querySelector('#languageDropdown').textContent = translations[language].language;  // Set the language dropdown text

    // Language dropdown
    const languageItems = document.querySelectorAll('.dropdown-item');  // Get language items
    languageItems[0].textContent = translations[language].english;  // Set the 'English' option text
    languageItems[1].textContent = translations[language].spanish;  // Set the 'Spanish' option text

    // Projects
    document.getElementById('project1-title').textContent = translations[language].project1Title;  // Set title for project 1
    document.getElementById('project1-description').textContent = translations[language].project1Description;  // Set description for project 1
    document.getElementById('platform-title').textContent = translations[language].platformTitle;  // Set platform label
    document.getElementById('genre-title').textContent = translations[language].genreTitle;  // Set genre label
    document.getElementById('engine-title').textContent = translations[language].engineTitle;  // Set engine label
    document.getElementById('view-project-btn').textContent = translations[language].viewProjectBtn;  // Set 'View Project' button text

    document.getElementById('project2-title').textContent = translations[language].project2Title;  // Set title for project 2
    document.getElementById('project2-description').textContent = translations[language].project2Description;  // Set description for project 2
    document.getElementById('platform2-title').textContent = translations[language].platform2Title;  // Set platform label for project 2
    document.getElementById('genre2-title').textContent = translations[language].genre2Title;  // Set genre label for project 2
    document.getElementById('engine2-title').textContent = translations[language].engine2Title;  // Set engine label for project 2
    document.getElementById('view-project2-btn').textContent = translations[language].viewProject2Btn;  // Set 'View Project' button text for project 2

    document.getElementById('project3-title').textContent = translations[language].project3Title;  // Set title for project 3
    document.getElementById('project3-description').textContent = translations[language].project3Description;  // Set description for project 3
    document.getElementById('platform3-title').textContent = translations[language].platform3Title;  // Set platform label for project 3
    document.getElementById('genre3-title').textContent = translations[language].genre3Title;  // Set genre label for project 3
    document.getElementById('engine3-title').textContent = translations[language].engine3Title;  // Set engine label for project 3
    document.getElementById('view-project3-btn').textContent = translations[language].viewProject3Btn;  // Set 'View Project' button text for project 3

    document.getElementById('project4-title').textContent = translations[language].project4Title;  // Set title for project 4
    document.getElementById('project4-description').textContent = translations[language].project4Description;  // Set description for project 4
    document.getElementById('platform4-title').textContent = translations[language].platform4Title;  // Set platform label for project 4
    document.getElementById('genre4-title').textContent = translations[language].genre4Title;  // Set genre label for project 4
    document.getElementById('engine4-title').textContent = translations[language].engine4Title;  // Set engine label for project 4
    document.getElementById('view-project4-btn').textContent = translations[language].viewProject4Btn;  // Set 'View Project' button text for project 4

    document.getElementById('project5-title').textContent = translations[language].project5Title;  // Set title for project 5
    document.getElementById('project5-description').textContent = translations[language].project5Description;  // Set description for project 5
    document.getElementById('platform5-title').textContent = translations[language].platform5Title;  // Set platform label for project 5
    document.getElementById('genre5-title').textContent = translations[language].genre5Title;  // Set genre label for project 5
    document.getElementById('engine5-title').textContent = translations[language].engine5Title;  // Set engine label for project 5
    document.getElementById('view-project5-btn').textContent = translations[language].viewProject5Btn;  // Set 'View Project' button text for project 5

    // Footer
    document.getElementById('footer-text').innerHTML = translations[language].footerText;  // Set footer text

    // Change the flag in the dropdown
    document.getElementById('languageDropdown').innerHTML = 
        `<i class="flag-icon flag-icon-${language === 'es' ? 'es' : 'us'}"></i> ${language.toUpperCase()}`;  // Update the flag and language in dropdown
}

// Load saved language preference on page load
document.addEventListener("DOMContentLoaded", function () {
    const savedLang = localStorage.getItem("selectedLanguage") || "en";  // Load the saved language, default to English
    applyLanguage(savedLang);  // Apply the saved language
});
