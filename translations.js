// Centralized Translation Script for GGE Server 199
const translations = {
    en: {
        // Navigation Bar items
        navWarRoom: "War Room",
        navRoster: "Roster",
        navHero: "Hero",
        navEvents: "Events",
        navCage: "Cage Fight",
        navTerminal: "Terminal Siege",
        navRules: "Rules",
        navLinks: "Links",
        
        // Footer text
        footerText: "2026 GGE Alliance • Server 199. All rights reserved on the battlefield."
    },
    de: {
        // Navigation Bar items
        navWarRoom: "Kriegsraum",
        navRoster: "Kader",
        navHero: "Held",
        navEvents: "Ereignisse",
        navCage: "Käfigkampf",
        navTerminal: "Terminal-Belagerung",
        navRules: "Regeln",
        navLinks: "Links",
        
        // Footer text
        footerText: "2026 GGE Allianz • Server 199. Alle Rechte auf dem Schlachtfeld vorbehalten."
    },
    ar: {
        // Navigation Bar items
        navWarRoom: "غرفة الحرب",
        navRoster: "القائمة",
        navHero: "البطل",
        navEvents: "الأحداث",
        navCage: "قتال القفص",
        navTerminal: "حصار المحطة",
        navRules: "القواعد",
        navLinks: "الروابط",
        
        // Footer text
        footerText: "2026 تحالف GGE • الخادم 199. جميع الحقوق محفوظة في ساحة المعركة."
    }
};

// Function to handle language switching across pages
function changeLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    
    // Translate standard navigation elements if they have matching keys
    const langData = translations[lang];
    if (!langData) return;

    for (const key in langData) {
        const element = document.getElementById(key);
        if (element) {
            element.innerText = langData[key];
        }
    }
}

// Auto-run on page load to keep the selected language active when clicking links
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    changeLanguage(savedLang);
    
    // Set dropdown value if you have a language selector dropdown
    const selector = document.getElementById('languageSelect');
    if (selector) {
        selector.value = savedLang;
    }
});
