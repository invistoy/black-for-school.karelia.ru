document.getElementById("lightTheme").addEventListener("click", () => {
    chrome.storage.local.set({ theme: "light" }, () => {
        console.log("Светлая тема активирована");
    });
});

document.getElementById("darkTheme").addEventListener("click", () => {
    chrome.storage.local.set({ theme: "dark" }, () => {
        console.log("Тёмная тема активирована");
    });
});
