// Centralized Translations and Language Management Script for GGE Alliance (Server 199)

const translations = {
    en: {
        navHome: "Home / War Room",
        navRoster: "Alliance Roster",
        navHeroes: "Hero Roster",
        navEvents: "Alliance Events ▼",
        navRules: "Alliance Laws",
        navLinks: "Intel & Links",
        cageFight: "Cage Fight",
        terminalSiege: "Terminal Siege"
    },
    tr: {
        navHome: "Ana Sayfa / Savaş Odası",
        navRoster: "İttifak Kadrosu",
        navHeroes: "Kahraman Kadrosu",
        navEvents: "İttifak Etkinlikleri ▼",
        navRules: "İttifak Kanunları",
        navLinks: "İstihbarat ve Bağlantılar",
        cageFight: "Kafes Dövüşü",
        terminalSiege: "Terminal Kuşatması"
    },
    es: {
        navHome: "Inicio / Sala de Guerra",
        navRoster: "Lista de la Alianza",
        navHeroes: "Lista de Héroes",
        navEvents: "Eventos de la Alianza ▼",
        navRules: "Leyes de la Alianza",
        navLinks: "Información y Enlaces",
        cageFight: "Combate en Jaula",
        terminalSiege: "Asedio Terminal"
    },
    fr: {
        navHome: "Accueil / Salle de Guerre",
        navRoster: "Liste de l'Alliance",
        navHeroes: "Liste des Héros",
        navEvents: "Événements de l'Alliance ▼",
        navRules: "Lois de l'Alliance",
        navLinks: "Infos et Liens",
        cageFight: "Combat en Cage",
        terminalSiege: "Siège du Terminal"
    },
    de: {
        navHome: "Startseite / Kriegszimmer",
        navRoster: "Allianz-Roster",
        navHeroes: "Helden-Roster",
        navEvents: "Allianz-Ereignisse ▼",
        navRules: "Allianz-Gesetze",
        navLinks: "Intel & Links",
        cageFight: "Käfigkampf",
        terminalSiege: "Terminal-Belagerung"
    },
    it: {
        navHome: "Home / Sala Guerra",
        navRoster: "Roster Alleanza",
        navHeroes: "Roster Eroi",
        navEvents: "Eventi Alleanza ▼",
        navRules: "Leggi dell'Alleanza",
        navLinks: "Intel & Link",
        cageFight: "Combattimento in Gabbia",
        terminalSiege: "Assedio al Terminale"
    },
    ko: {
        navHome: "홈 / 전쟁 룸",
        navRoster: "연맹 명단",
        navHeroes: "영웅 명단",
        navEvents: "연맹 이벤트 ▼",
        navRules: "연맹 규칙",
        navLinks: "정보 및 링크",
        cageFight: "케이지 파이트",
        terminalSiege: "터미널 시즈"
    },
    la: {
        navHome: "Domus / Cubiculum Belli",
        navRoster: "Societas Aliae",
        navHeroes: "Heroica Aliae",
        navEvents: "Eventa Societatis ▼",
        navRules: "Leges Societatis",
        navLinks: "Intel & Nexus",
        cageFight: "Pugna Caveae",
        terminalSiege: "Obsidio Terminalis"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // Build Language Selector Dropdown Dynamically
    const container = document.getElementById("languageSelectorContainer");
    if (container) {
        const select = document.createElement("select");
        select.id = "languageSelector";
        select.style.background = "#1a1a1a";
        select.style.color = "#fff";
        select.style.border = "1px solid rgba(255,204,0,0.4)";
        select.style.padding = "4px 8px";
        select.style.borderRadius = "4px";
        select.style.cursor = "pointer";

        const languages = {
            en: "English",
            tr: "Türkçe",
            es: "Español",
            fr: "Français",
            de: "Deutsch",
            it: "Italiano",
            ko: "한국어",
            la: "Latina"
        };

        for (const [code, name] of Object.entries(languages)) {
            const option = document.createElement("option");
            option.value = code;
            option.textContent = name;
            select.appendChild(option);
        }

        // Check LocalStorage or default to English
        const savedLang = localStorage.getItem("gg_lang") || "en";
        select.value = savedLang;
        setLanguage(savedLang);

        select.addEventListener("change", (e) => {
            const chosenLang = e.target.value;
            localStorage.setItem("gg_lang", chosenLang);
            setLanguage(chosenLang);
        });

        container.appendChild(select);
    }
});

function setLanguage(lang) {
    const translationTable = translations[lang];
    if (!translationTable) return;

    for (const [id, text] of Object.entries(translationTable)) {
        const element = document.getElementById(id);
        if (element) {
            if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
                element.placeholder = text;
            } else {
                // Preserve trailing icons if present like ▼
                if (element.innerHTML.includes("▼") && !text.includes("▼")) {
                    element.innerHTML = text + " ▼";
                } else {
                    element.innerHTML = text;
                }
            }
        }
    }
}
