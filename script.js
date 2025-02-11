document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".cta-button");
    const aboutSection = document.querySelector("#about-section");

    // Добавление анимации кнопки
    gsap.from(button, { opacity: 0, y: 50, duration: 1, delay: 2 });
    gsap.to(button, { opacity: 1, y: 0, duration: 1, delay: 2 });

    // Событие на кнопку "Пора начать праздновать!"
    button.addEventListener("click", () => {
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });

    // Креативная кнопка с эффектом
    const creativeBtn = document.querySelector(".creative-btn");
    creativeBtn.addEventListener("click", () => {
        gsap.to(creativeBtn, {
            scale: 1.2,
            rotation: 360,
            duration: 1,
            ease: "bounce.out",
            onComplete: () => {
                alert("Вы поздравили себя с Днем Рождения! 🎉");
            },
        });
    });
});
