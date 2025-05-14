document.getElementById('telegramButton').onclick = function() {
    window.location.href = 'https://t.me/warp_1_1_1_1';
}

document.getElementById('DonationAlertsButton').onclick = function() {
    window.location.href = 'https://pay.cloudtips.ru/p/209310e4';
}

document.getElementById('BoostyNewButton').onclick = function() {
    window.location.href = 'https://boosty.to/warphelp/donate';
}

document.getElementById('BoostyButton').onclick = function() {
    const newButtons = document.getElementById('newButtons');

    if (newButtons.classList.contains('show')) {
        // Если блок видим, скрываем его с анимацией
        newButtons.classList.remove('show');
        setTimeout(() => {
            this.style.display = 'block'; // Показываем кнопку BoostyButton
        }, 500); // Задержка должна соответствовать длительности анимации
    } else {
        // Если блок скрыт, показываем его с анимацией
        this.style.display = 'none';
        newButtons.classList.add('show');

        // Добавляем задержку перед прокруткой
        setTimeout(() => {
            // Прокручиваем страницу до самого низа
            window.scrollTo({
                top: document.body.scrollHeight, // Прокручиваем до конца страницы
                behavior: 'smooth' // Плавная прокрутка
            });
        }, 300); // Увеличиваем задержку до 500 мс
    }
};

document.getElementById('githubButton').onclick = function() {
    window.location.href = 'https://docs.google.com/document/d/1DX4X7t7V4QasQJYbps5D1yNtsK7tqsouSMJH2w4AMOY';
}

document.getElementById('warpButton').onclick = function() {
    window.location.href = 'https://generator-warp.vercel.app/';
}

document.getElementById('protonButton').onclick = function() {
    window.location.href = 'https://protontestguide.github.io/ProtonVPN-Converter/';
}

document.getElementById('clashButton').onclick = function() {
    window.location.href = 'https://dikozimpact.github.io/clash-convertor/';
}
