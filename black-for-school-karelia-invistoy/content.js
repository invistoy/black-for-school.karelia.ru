console.log("Content script запущен!");

// Функция для загрузки CSS
function loadCSS(file) {
    let link = document.createElement("link");
    link.href = chrome.runtime.getURL(file);
    link.type = "text/css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
}

// Проверяем сохранённую тему
chrome.storage.local.get("theme", (data) => {
    console.log("Текущая тема:", data.theme);
    if (data.theme === "dark") {
        loadCSS("styles/dark.css");
    }
});

// Следим за изменением темы
chrome.storage.onChanged.addListener((changes) => {
    if (changes.theme) {
        if (changes.theme.newValue === "dark") {
            loadCSS("styles/dark.css");
        } else {
            location.reload(); // Перезагружаем страницу для сброса стилей
        }
    }
});
