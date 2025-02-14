// Простые анимации при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".header-title, .header-subtitle");
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });
});