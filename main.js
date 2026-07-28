// ===== Данные проектов =====
const projects = [
    {
        name: "Rand-Q",
        description: "Ну типо рандомный поиск",
        lang: ["Tailwind"],
        siteUrl: "https://kievsky332.github.io/Rand-Q/",
        codeUrl: "https://github.com/kievsky332/Rand-Q/"
    },
    {
        name: "chatgpt",
        description: "Ну типо пародия на chatgpt, который в рф не работает",
        lang: ["Tailwind"],
        siteUrl: "https://kievsky332.github.io/chatgpt/",
        codeUrl: "https://github.com/kievsky332/chatgpt/"
    },
    {
        name: "Gemini-tailwind",
        description: "Ну типо пародия на gemini, которая в рф запрещена. Написанная на tailwind",
        lang: ["Tailwind"],
        siteUrl: "https://kievsky332.github.io/Gemini-tailwind/",
        codeUrl: "https://github.com/kievsky332/Gemini-tailwind/"
    },
    {
        name: "new-year-gift",
        description: "Сайт для н/г. Нового года не будет — дед мороз принял ислам!",
        lang: ["Css","Javascript"],
        siteUrl: "https://kievsky332.github.io/new-year-gift",
        codeUrl: "https://github.com/kievsky332/new-year-gift/"
    },
    {
        name: "tired root",
        description: "Новый недо маркет",
        lang: ["Css",'Javascript'],
        siteUrl: "https://kievsky332.github.io/market_luram",
        codeUrl: "https://github.com/kievsky332/market_luram/"
    },
    {
        name: "Smart_House",
        description: "Сайт по индивидуальному проекту",
        lang: ["Css",'Javascript'],
        siteUrl: "https://kievsky332.github.io/Smart_House",
        codeUrl: "https://github.com/kievsky332/Smart_House/"
    },
    {
        name: "Generator_Biography",
        description: "Генерирование ПСЕВДО рандомных данных",
        lang: ["Css",'Javascript'],
        siteUrl: "https://kievsky332.github.io/Generator_Biography",
        codeUrl: "https://github.com/kievsky332/Generator_Biography/"
    },
    {
        name: "Country_Checker",
        description: "Определение страны (хз зачем)",
        lang: ["Css",'Javascript','API'],
        siteUrl: "https://kievsky332.github.io/Country_Checker/",
        codeUrl: "https://github.com/kievsky332/Country_Checker/"
    },
    {
        name: "AI BABUSHKA",
        description: "Переводчик в стиле бабушки (ИИ)",
        lang: ['php','Css','API'],
        siteUrl: "https://luram.sorav.ru/Ai-bubusia/",
        codeUrl: "https://github.com/kievsky332/AI_BABUSHKA/"
    },
    {
        name: "sorav.ru",
        description: "Сайт для отправки эмоций",
        lang: ["php",'Javascript','Tailwind','Css','API'],
        siteUrl: "https://sorav.ru",
        codeUrl: "https://github.com/kievsky332/sorav.ru/"
    },
    {
        name: "sorav.online",
        description: "Сайт для отображения всех сайтов",
        lang: ["Javascript",'Css'],
        siteUrl: "https://sorav.online",
        codeUrl: "https://github.com/kievsky332/sorav.online/"
    },
    {
        name: "Eye_site",
        description: "Моргайте почаще - девиз нашего сайта",
        lang: ["Javascript",'Css'],
        siteUrl: "https://kievsky332.github.io/Eye_site",
        codeUrl: "https://github.com/kievsky332/Eye_site/"
    },
    {
        name: "site-hvpn",
        description: "Просто красивая страница",
        lang: ['Css'],
        siteUrl: "https://kievsky332.github.io/site-hvpn/",
        codeUrl: "https://github.com/kievsky332/site-hvpn/"
    },
    {
        name: "Money_Site",
        description: "Посчитайте сколько вы зарабатываете за минуту/секунду",
        lang: ["Javascript",'Css'],
        siteUrl: "https://kievsky332.github.io/Money_Site/",
        codeUrl: "https://github.com/kievsky332/Money_Site/"
    },
    {
        name: "BuSsite",
        description: "ПРОТОТИП сайта, если вы уснете и пропустите кнопку — вас разбудит громким криком из скримера!",
        lang: ["Javascript",'Css','API'],
        siteUrl: "https://kievsky332.github.io/BuSsite/",
        codeUrl: "https://github.com/kievsky332/BuSsite/"
    },
    {
        name: "Лурам",
        description: "Новый недомессенджер",
        lang: ["Javascript",'Css'],
        siteUrl: "https://kievsky332.github.io/luram-offline",
        codeUrl: "https://github.com/kievsky332/luram-offline/"
    },
    {
        name: "Find a spot",
        description: "Попробуйте найти точку меньше чем за 2 секунды)",
        lang: ["Javascript",'Css'],
        siteUrl: "https://kievsky332.github.io/find-a-spot/",
        codeUrl: "https://github.com/kievsky332/find-a-spot/"
    },
];

// ===== Экранирование HTML (защита от XSS, если данные когда-то станут динамическими) =====
function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
}

// ===== Генерация одной карточки по шаблону =====
function createCard(project) {
    return `
        <!-- ${project.name} -->
        <div class="cards">
            <h1 class="name">${escapeHtml(project.name)}</h1>
            <p class="description">${escapeHtml(project.description)}</p>
            <div class="div-lang">
                <span class="lang">${escapeHtml(project.lang)}</span>
            </div>
            <a href="${project.siteUrl}" target="_blank" class="button">Сайт</a>
            <a href="${project.codeUrl}" target="_blank" class="button2">Исходный код</a>
        </div>
        <!-- ${project.name} -->
    `;
}

// ===== Рендер всех карточек в контейнер =====
function renderCards(containerSelector, data) {
    const container = document.querySelector(containerSelector);
    if (!container) {
        console.error(`Контейнер "${containerSelector}" не найден`);
        return;
    }
    container.innerHTML = data.map(createCard).join("");
}

// Запуск: рендерим все карточки в элемент с id="cards-container"
document.addEventListener("DOMContentLoaded", () => {
    renderCards("#sites", projects);
});
