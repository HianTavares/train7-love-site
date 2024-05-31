document.getElementById('yes').addEventListener('mousedown', function() {
    setTimeout(function() {
        document.getElementById('yes').style.backgroundImage = "url('imagens/digital-azul.png')";
        document.getElementById('green-button').style.display = "block";
    }, 2000);
});

document.getElementById('green-button').addEventListener('click', function() {
    window.location.href = "/train7-love-site/finally/finally.html"; // Substitua "outra_pagina.html" pelo URL da página desejada
});
