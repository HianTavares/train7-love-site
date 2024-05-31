let alertShown = false;

function moveButton() {
    if (!alertShown) {
        window.alert('whyyyy, wait..thats mine page, you canot do that --_-- hehe');
        alertShown = true;
    }

    const button = document.getElementById('no');
    const container = document.getElementById('all');
    
    // Dimensões do botão
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    // Dimensões da div #all
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Calcular nova posição aleatória, garantindo que o botão não saia da div #all
    const randomX = Math.random() * (containerWidth - buttonWidth);
    const randomY = Math.random() * (containerHeight - buttonHeight);

    // Aplicar transformação para mover o botão
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}
