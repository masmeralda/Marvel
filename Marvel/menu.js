// этот скрипт для того, чтобы менюшки справа и слева не возвращались в самое начало
// и это нихера не работает
document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");

    if (menu) {
        menu.addEventListener("scroll", () => {
            localStorage.setItem("menuScrollTop", menu.scrollTop);
        });

        menu.scrollTop = localStorage.getItem("menuScrollTop") || 0;
    }
});
