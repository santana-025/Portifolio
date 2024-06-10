
function maquinaEscrever(texto, elemento, intervalo) {
    var i = 0;
    var efeitoMaquina = setInterval(function () {
        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i);
            i++;
        } else {
            clearInterval(efeitoMaquina);
        }
    }, intervalo);
}

// Chamada da função para o elemento com id 'texto', com intervalo de 100ms
maquinaEscrever("Olá, Eu sou Jorge Santana ", document.getElementById('h1'), 100);
setTimeout(() => {
    maquinaEscrever("Desenvolvedor Fullstack", document.getElementById('h2'), 100);
}, 2500)
