// Universal Auto-Translation Script for GGE Server 199
const translations = {
    en: {
        "War Room": "War Room",
        "Roster": "Roster",
        "Hero": "Hero",
        "Events": "Events",
        "Cage Fight": "Cage Fight",
        "Terminal Siege": "Terminal Siege",
        "Rules": "Rules",
        "Links": "Links",
        "GGE Server 199 - Alliance Command": "GGE Server 199 - Alliance Command",
        "Welcome to the official command center.": "Welcome to the official command center."
    },
    pl: {
        "War Room": "Pokój Wojny",
        "Roster": "Kader",
        "Hero": "Bohater",
        "Events": "Wydarzenia",
        "Cage Fight": "Käfigkampf",
        "Terminal Siege": "Terminal Siege",
        "Rules": "Zasady",
        "Links": "Linki",
        "GGE Server 199 - Alliance Command": "Sojusz GGE Server 199",
        "Welcome to the official command center.": "Witamy w oficjalnym centrum dowodzenia."
    },
    de: {
        "War Room": "Kriegsraum",
        "Roster": "Kader",
        "Hero": "Held",
        "Events": "Ereignisse",
        "Cage Fight": "Käfigkampf",
        "Terminal Siege": "Terminal-Belagerung",
        "Rules": "Regeln",
        "Links": "Links",
        "GGE Server 199 - Alliance Command": "GGE Server 199 - Allianz-Befehl",
        "Welcome to the official command center.": "Willkommen im offiziellen Kommandozentrum."
    },
    ar: {
        "War Room": "غرفة الحرب",
        "Roster": "القائمة",
        "Hero": "البطل",
        "Events": "الأحداث",
        "Cage Fight": "قتال القفص",
        "Terminal Siege": "حصار المحطة",
        "Rules": "القواعد",
        "Links": "الروابط",
        "GGE Server 199 - Alliance Command": "تحالف GGE الخادم 199",
        "Welcome to the official command center.": "مرحبًا بك في مركز القيادة الرسمي."
    },
    el: {
        "War Room": "Δωμάτιο Πολέμου",
        "Roster": "Κατάλογος",
        "Hero": "Ήρωας",
        "Events": "Εκδηλώσεις",
        "Cage Fight": "Καβγάς Κλουβιού",
        "Terminal Siege": "Πολιορκία Τερματικού",
        "Rules": "Κανόνες",
        "Links": "Σύνδεσμοι",
        "GGE Server 199 - Alliance Command": "Συμμαχία GGE Server 199",
        "Welcome to the official command center.": "Καλώς ορίσατε στο επίσημο κέντρο διοίκησης."
    }
};

function translatePage(lang) {
    const langData = translations[lang];
    if (!langData) return;

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while (node = walker.nextNode()) {
        let text = node.nodeValue.trim();
        if (langData[text]) {
            node.nodeValue = node.nodeValue.replace(text, langData[text]);
        }
    }
}

function changeLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    location.reload();
}

window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    const selector = document.getElementById('languageSelect');
    if (selector) {
        selector.value = savedLang;
    }
    if (savedLang !== 'en') {
        translatePage(savedLang);
    }
});
