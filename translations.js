const translations = {
    en: {
        warRoom: "War Room",
        allianceRoster: "Alliance Roster",
        heroRoster: "Hero Roster",
        events: "Events",
        cageFight: "Cage Fight Strategy",
        terminalSiege: "Terminal Siege Strategy",
        alliancelaws: "Alliance Laws",
        intelLinks: "Intel & Links"
    },
    de: { // German (Deutsch)
        warRoom: "Kriegsraum",
        allianceRoster: "Allianz-Mitglieder",
        heroRoster: "Helden-Liste",
        events: "Ereignisse",
        cageFight: "Käfigkampf-Strategie",
        terminalSiege: "Terminal-Belagerungs-Strategie",
        alliancelaws: "Allianzgesetze",
        intelLinks: "Informationen & Links"
    },
    ar: { // Arabic (العربية)
        warRoom: "غرفة الحرب",
        allianceRoster: "قائمة التحالف",
        heroRoster: "قائمة الأبطال",
        events: "الفعاليات",
        cageFight: "استراتيجية قتال القفص",
        terminalSiege: "استراتيجية حصار المحطة",
        alliancelaws: "قوانين التحالف",
        intelLinks: "معلومات وروابط"
    },
    hu: {
        warRoom: "Harciszoba",
        allianceRoster: "Szövetségi Névsor",
        heroRoster: "Hősök Névsor",
        events: "Események",
        cageFight: "Cage Fight Stratégia",
        terminalSiege: "Terminal Siege Stratégia",
        alliancelaws: "Szövetségi Törvények",
        intelLinks: "Infók és Linkek"
    },
    pl: {
        warRoom: "Pokój Wojny",
        allianceRoster: "Skład Sojuszu",
        heroRoster: "Lista Bohaterów",
        events: "Wydarzenia",
        cageFight: "Strategia Walki w Klatce",
        terminalSiege: "Strategia Oblężenia Terminala",
        alliancelaws: "Prawo Sojuszu",
        intelLinks: "Informacje i Linki"
    },
    tr: {
        warRoom: "Savaş Odası",
        allianceRoster: "İttifak Listesi",
        heroRoster: "Kahraman Listesi",
        events: "Etkinlikler",
        cageFight: "Kafes Dövüşü Stratejisi",
        terminalSiege: "Terminal Kuşatması Stratejisi",
        alliancelaws: "İttifak Kuralları",
        intelLinks: "Bilgi ve Bağlantılar"
    },
    es: {
        warRoom: "Sala de Guerra",
        allianceRoster: "Lista de la Alianza",
        heroRoster: "Lista de Héroes",
        events: "Eventos",
        cageFight: "Estrategia de Pelea de Jaula",
        terminalSiege: "Estrategia de Asedio de Terminal",
        alliancelaws: "Leyes de la Alianza",
        intelLinks: "Información y Enlaces"
    },
    fr: {
        warRoom: "Salle de Guerre",
        allianceRoster: "Liste de l'Alliance",
        heroRoster: "Liste des Héros",
        events: "Événements",
        cageFight: "Stratégie de Combat en Cage",
        terminalSiege: "Stratégie de Siège du Terminal",
        alliancelaws: "Lois de l'Alliance",
        intelLinks: "Infos et Liens"
    },
    it: {
        warRoom: "Sala di Guerra",
        allianceRoster: "Roster dell'Alleanza",
        heroRoster: "Roster Eroi",
        events: "Eventi",
        cageFight: "Strategia Combattimento in Gabbia",
        terminalSiege: "Strategia Assedio Terminale",
        alliancelaws: "Leggi dell'Alleanza",
        intelLinks: "Informazioni e Link"
    },
    ko: {
        warRoom: "전쟁 룸",
        allianceRoster: "연맹 명단",
        heroRoster: "영웅 명단",
        events: "이벤트",
        cageFight: "케이지 파이트 전략",
        terminalSiege: "터미널 공성 전략",
        alliancelaws: "연맹 법률",
        intelLinks: "인텔 및 링크"
    },
    la: {
        warRoom: "Conclave Belli",
        allianceRoster: "Index Societatis",
        heroRoster: "Index Heroum",
        events: "Eventus",
        cageFight: "Strategia Pugnae Caveae",
        terminalSiege: "Strategia Obsidionis Terminalis",
        alliancelaws: "Leges Societatis",
        intelLinks: "Intellegentia et Nexus"
    }
};

// Global Language Handler with persistent storage (remembers user selection via localStorage)
function changeLanguage(lang) {
    localStorage.setItem('gge_preferred_lang', lang);
    applyTranslations(lang);
}

function applyTranslations(lang) {
    const t = translations[lang] || translations['en'];
    
    // Translate navigation links across your pages
    const mapping = {
        'nav-war-room': 'warRoom',
        'nav-alliance-roster': 'allianceRoster',
        'nav-hero-roster': 'heroRoster',
        'nav-events': 'events',
        'nav-alliance-laws': 'alliancelaws',
        'nav-intel-links': 'intelLinks'
    };

    for (const [id, key] of Object.entries(mapping)) {
        const el = document.getElementById(id);
        if (el && t[key]) {
            el.innerHTML = el.innerHTML.includes('🏠') ? `🏠 ${t[key]}` :
                           el.innerHTML.includes('🛡️') ? `🛡️ ${t[key]}` :
                           el.innerHTML.includes('⚔️') ? `⚔️ ${t[key]}` :
                           el.innerHTML.includes('📅') ? `📅 ${t[key]}` :
                           el.innerHTML.includes('📜') ? `📜 ${t[key]}` :
                           el.innerHTML.includes('🌐') ? `🌐 ${t[key]}` : t[key];
        }
    }
}

// Auto-load saved language preference instantly when any page loads
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('gge_preferred_lang') || 'en';
    const selectEl = document.getElementById('languageSelect');
    if (selectEl) {
        selectEl.value = savedLang;
    }
    applyTranslations(savedLang);
});
