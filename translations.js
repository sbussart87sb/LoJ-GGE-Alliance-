const translations = {
    en: {
        warRoom: "War Room",
        allianceRoster: "Alliance Roster",
        heroRoster: "Hero Roster",
        events: "Events",
        cageFight: "Cage Fight Strategy",
        terminalSiege: "Terminal Siege Strategy",
        allianceLaws: "Alliance Laws",
        intelLinks: "Intel & Links"
    },
    de: { // Swapped to Magyar (Hungarian)
        warRoom: "Harciszoba",
        allianceRoster: "Szövetségi Névsor",
        heroRoster: "Hősök Névsor",
        events: "Események",
        cageFight: "Cage Fight Stratégia",
        terminalSiege: "Terminal Siege Stratégia",
        allianceLaws: "Szövetségi Törvények",
        intelLinks: "Hírszerzés és Linkek"
    },
    pl: {
        warRoom: "Sala Operacyjna",
        allianceRoster: "Lista Sojuszu",
        heroRoster: "Lista Bohaterów",
        events: "Wydarzenia",
        cageFight: "Strategia Walki w Klatce",
        terminalSiege: "Strategia Oblężenia Terminalu",
        allianceLaws: "Prawa Sojuszu",
        intelLinks: "Wywiad i Linki"
    },
    tr: {
        warRoom: "Savaş Odası",
        allianceRoster: "İttifak Kadrosu",
        heroRoster: "Kahraman Kadrosu",
        events: "Etkinlikler",
        cageFight: "Kafes Dövüşü Stratejisi",
        terminalSiege: "Terminal Kuşatması Stratejisi",
        allianceLaws: "İttifak Kanunları",
        intelLinks: "İstihbarat ve Bağlantılar"
    },
    es: {
        warRoom: "Sala de Guerra",
        allianceRoster: "Lista de Alianza",
        heroRoster: "Lista de Héroes",
        events: "Eventos",
        cageFight: "Estrategia de Pelea en Jaula",
        terminalSiege: "Estrategia de Asedio Terminal",
        allianceLaws: "Leyes de la Alianza",
        intelLinks: "Inteligencia y Enlaces"
    },
    fr: {
        warRoom: "Salle de Guerre",
        allianceRoster: "Liste de l'Alliance",
        heroRoster: "Liste des Héros",
        events: "Événements",
        cageFight: "Stratégie de Combat en Cage",
        terminalSiege: "Stratégie de Siège du Terminal",
        allianceLaws: "Lois de l'Alliance",
        intelLinks: "Renseignements et Liens"
    },
    it: {
        warRoom: "Sala di Guerra",
        allianceRoster: "Roster dell'Alleanza",
        heroRoster: "Roster Eroi",
        events: "Eventi",
        cageFight: "Strategia Combattimento in Gabbia",
        terminalSiege: "Strategia Assedio Terminale",
        allianceLaws: "Leggi dell'Alleanza",
        intelLinks: "Intelligence e Link"
    },
    ko: {
        warRoom: "전쟁 룸",
        allianceRoster: "연맹 명단",
        heroRoster: "영웅 명단",
        events: "이벤트",
        cageFight: "케이지 파이트 전략",
        terminalSiege: "터미널 시즈 전략",
        allianceLaws: "연맹 법규",
        intelLinks: "정보 및 링크"
    },
    la: {
        warRoom: "Tablinum Belli",
        allianceRoster: "Index Societatis",
        heroRoster: "Index Heroum",
        events: "Res Gestae",
        cageFight: "Consilium Pugnae in Cavea",
        terminalSiege: "Consilium Obsidionis Terminalis",
        allianceLaws: "Leges Societatis",
        intelLinks: "Intellegentia et Nexus"
    }
};

// Function to update page text based on selected language
function changeLanguage(lang) {
    if (!translations[lang]) return;
    
    // Update elements safely if they exist on the current page
    const elements = {
        'nav-war-room': translations[lang].warRoom,
        'nav-alliance-roster': translations[lang].allianceRoster,
        'nav-hero-roster': translations[lang].heroRoster,
        'nav-events': translations[lang].events,
        'nav-cage-fight': translations[lang].cageFight,
        'nav-terminal-siege': translations[lang].terminalSiege,
        'nav-alliance-laws': translations[lang].allianceLaws,
        'nav-intel-links': translations[lang].intelLinks
    };

    for (const [id, text] of Object.entries(elements)) {
        const el = document.getElementById(id);
        if (el) el.innerText = text;
    }
}
