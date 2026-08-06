// GGE Alliance Server 199 - Left Banner Navigation & Translation Core

document.addEventListener("DOMContentLoaded", () => {
    // Inject Left Flag Banner Navigation into every page
    const bannerContainer = document.getElementById("leftBannerContainer");
    if (bannerContainer) {
        bannerContainer.innerHTML = `
            <div class="alliance-banner">
                <div class="alliance-shield">
                    <div style="font-size: 28px;">🛡️</div>
                    <h2 id="bannerTitle">GGE</h2>
                    <span id="bannerServer">Server 199</span>
                </div>

                <div class="banner-nav">
                    <a href="index.html" id="navHome">🏠 War Room</a>
                    <a href="roster.html" id="navRoster">🛡️ Alliance Roster</a>
                    <a href="hero.html" id="navHeroes">⚔️ Hero Roster</a>
                    
                    <div class="banner-dropdown">
                        <button class="banner-dropdown-btn" id="navEvents">📅 Events ▼</button>
                        <div class="banner-dropdown-content">
                            <a href="cage-fight.html" id="cageFight">🥊 Cage Fight</a>
                            <a href="terminal-siege.html" id="terminalSiege">🛡️ Terminal Siege</a>
                        </div>
                    </div>

                    <a href="rules.html" id="navRules">📜 Alliance Laws</a>
                    <a href="links.html" id="navLinks">🔗 Intel & Links</a>
                </div>

                <div class="banner-footer">
                    <div id="languageSelectorContainer"></div>
                    <div id="liveTime">Time: Loading...</div>
                </div>
            </div>
        `;
    }

    // Dropdown toggle logic for events in the side banner
    const eventBtn = document.querySelector(".banner-dropdown-btn");
    const eventContent = document.querySelector(".banner-dropdown-content");
    if (eventBtn && eventContent) {
        eventBtn.addEventListener("click", () => {
            eventContent.classList.toggle("show");
        });
    }

    // Build Language Selector Dropdown
    const langContainer = document.getElementById("languageSelectorContainer");
    if (langContainer) {
        const select = document.createElement("select");
        select.id = "languageSelector";

        const languages = {
            en: "English",
            de: "Deutsch",
            pl: "Polski",
            tr: "Türkçe",
            es: "Español",
            fr: "Français",
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

        const savedLang = localStorage.getItem("gg_lang") || "en";
        select.value = savedLang;
        setLanguage(savedLang);

        select.addEventListener("change", (e) => {
            const chosenLang = e.target.value;
            localStorage.setItem("gg_lang", chosenLang);
            setLanguage(chosenLang);
        });

        langContainer.appendChild(select);
    }

    // Live Server Clock
    function updateClock() {
        const timeEl = document.getElementById("liveTime");
        if (timeEl) {
            const now = new Date();
            timeEl.textContent = "UTC: " + now.toUTCString().slice(17, 25);
        }
    }
    setInterval(updateClock, 1000);
    updateClock();
});

// Translation Dictionary
const translations = {
    en: {
        bannerServer: "Server 199",
        navHome: "🏠 War Room",
        navRoster: "🛡️ Alliance Roster",
        navHeroes: "⚔️ Hero Roster",
        navEvents: "📅 Events ▼",
        cageFight: "🥊 Cage Fight",
        terminalSiege: "🛡️ Terminal Siege",
        navRules: "📜 Alliance Laws",
        navLinks: "🔗 Intel & Links"
    },
    de: {
        bannerServer: "Server 199",
        navHome: "🏠 Kriegszimmer",
        navRoster: "🛡️ Allianz-Roster",
        navHeroes: "⚔️ Helden-Roster",
        navEvents: "📅 Ereignisse ▼",
        cageFight: "🥊 Käfigkampf",
        terminalSiege: "🛡️ Terminal-Belagerung",
        navRules: "📜 Allianzgesetze",
        navLinks: "🔗 Intel & Links"
    },
    pl: {
        bannerServer: "Serwer 199",
        navHome: "🏠 Sala Gier",
        navRoster: "🛡️ Skład Sojuszu",
        navHeroes: "⚔️ Lista Bohaterów",
        navEvents: "📅 Wydarzenia ▼",
        cageFight: "🥊 Walka w Klatce",
        terminalSiege: "🛡️ Oblężenie Terminalu",
        navRules: "📜 Zasady Sojuszu",
        navLinks: "🔗 Intel i Linki"
    },
    tr: {
        bannerServer: "Sunucu 199",
        navHome: "🏠 Savaş Odası",
        navRoster: "🛡️ İttifak Kadrosu",
        navHeroes: "⚔️ Kahraman Kadrosu",
        navEvents: "📅 Etkinlikler ▼",
        cageFight: "🥊 Kafes Dövüşü",
        terminalSiege: "🛡️ Terminal Kuşatması",
        navRules: "📜 İttifak Kanunları",
        navLinks: "🔗 İstihbarat"
    },
    es: {
        bannerServer: "Servidor 199",
        navHome: "🏠 Sala de Guerra",
        navRoster: "🛡️ Lista de la Alianza",
        navHeroes: "⚔️ Lista de Héroes",
        navEvents: "📅 Eventos ▼",
        cageFight: "🥊 Combate en Jaula",
        terminalSiege: "🛡️ Asedio Terminal",
        navRules: "📜 Leyes",
        navLinks: "🔗 Enlaces"
    },
    fr: {
        bannerServer: "Serveur 199",
        navHome: "🏠 Salle de Guerre",
        navRoster: "🛡️ Liste de l'Alliance",
        navHeroes: "⚔️ Liste des Héros",
        navEvents: "📅 Événements ▼",
        cageFight: "🥊 Combat en Cage",
        terminalSiege: "🛡️ Siège du Terminal",
        navRules: "📜 Lois",
        navLinks: "🔗 Infos & Liens"
    },
    it: {
        bannerServer: "Server 199",
        navHome: "🏠 Sala Guerra",
        navRoster: "🛡️ Roster Alleanza",
        navHeroes: "⚔️ Roster Eroi",
        navEvents: "📅 Eventi ▼",
        cageFight: "🥊 Combattimento",
        terminalSiege: "🛡️ Assedio",
        navRules: "📜 Leggi",
        navLinks: "🔗 Link"
    },
    ko: {
        bannerServer: "서버 199",
        navHome: "🏠 전쟁 룸",
        navRoster: "🛡️ 연맹 명단",
        navHeroes: "⚔️ 영웅 명단",
        navEvents: "📅 이벤트 ▼",
        cageFight: "🥊 케이지 파이트",
        terminalSiege: "🛡️ 터미널 시즈",
        navRules: "📜 연맹 규칙",
        navLinks: "🔗 링크"
    },
    la: {
        bannerServer: "Servitor 199",
        navHome: "🏠 Cubiculum Belli",
        navRoster: "🛡️ Societas Aliae",
        navHeroes: "⚔️ Heroica Aliae",
        navEvents: "📅 Eventa ▼",
        cageFight: "🥊 Pugna Caveae",
        terminalSiege: "🛡️ Obsidio Terminalis",
        navRules: "📜 Leges",
        navLinks: "🔗 Nexus"
    }
};

function setLanguage(lang) {
    const translationTable = translations[lang];
    if (!translationTable) return;

    for (const [id, text] of Object.entries(translationTable)) {
        const element = document.getElementById(id);
        if (element) {
            if (element.innerHTML.includes("▼") && !text.includes("▼")) {
                element.innerHTML = text + " ▼";
            } else {
                element.innerHTML = text;
            }
        }
    }
}
