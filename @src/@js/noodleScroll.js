document.addEventListener("DOMContentLoaded", function () {
    let scrollAmount = 30; // Задайте количество пикселей для прокрутки (по умолчанию 100)

    function scrollToUserSpecifiedAmount() {
        const noodlesWrapper = document.querySelector(".noodles-wrapper__scrollable");
        if (noodlesWrapper) {
            noodlesWrapper.scrollTop += scrollAmount;
        }
    }
    
    const chatContainer = document.getElementById("chat");
    
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.addedNodes.length > 0) {
                for (let i = 0; i < mutation.addedNodes.length; i++) {
                    const addedNode = mutation.addedNodes[i];
                    if (addedNode.classList && addedNode.classList.contains("chat-line")) {
                        // Вызываем функцию для вертикальной прокрутки
                        scrollToUserSpecifiedAmount();
                    }
                }
            }
        });
    });
    
    observer.observe(chatContainer, { childList: true });
    

observer.observe(chatContainer, { childList: true });

    const noodlesContainer = document.getElementById("noodlesContainer");
    const noodlesContent = document.getElementById("noodlesContent");
    const noodlesHeight = 920; // Высота гусеницы
    
    // Обработчик события прокрутки контейнера "гусеницы"
    noodlesContainer.addEventListener("scroll", function () {
        // Проверяем, достиг ли пользователь конца контента
        if (noodlesContainer.scrollTop + noodlesContainer.clientHeight === noodlesContainer.scrollHeight) {
            // Прокручиваем обратно в начало
            noodlesContainer.scrollTop = 0;
        }
    });
    
});