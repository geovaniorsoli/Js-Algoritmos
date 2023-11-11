let dados = [];

document.getElementById('FormPUSH').addEventListener('submit', function (e) {
    e.preventDefault();
    const numero = parseInt(document.getElementById('NumeroPUSH').value, 10);
    if (!isNaN(numero)) {
        dados.push(numero);
        mostrarDados();
    } else {
        alert('Digite um número válido para PUSH.');
    }
});

document.getElementById('FormUNSHIFT').addEventListener('submit', function (e) {
    e.preventDefault();
    const numero = parseInt(document.getElementById('NumeroUNSHIFT').value, 10);
    if (!isNaN(numero)) {
        dados.unshift(numero);
        mostrarDados();
    } else {
        alert('Digite um número válido para UNSHIFT.');
    }
});

document.getElementById('FormPOP').addEventListener('submit', function (e) {
    e.preventDefault();
    dados.pop();
    mostrarDados();
});

document.getElementById('FormSHIFT').addEventListener('submit', function (e) {
    e.preventDefault();
    dados.shift();
    mostrarDados();
});

function mostrarDados() {
    document.getElementById('MostrarDados').innerText = `Dados: [${dados.join(', ')}]`;
}