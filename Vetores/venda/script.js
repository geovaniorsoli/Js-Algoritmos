let Carros = [];

function CadCarros(e) {
    e.preventDefault();

    const NomeCarro = document.getElementById("NomeCarro").value; 
    const PrecoCarro = parseFloat(document.getElementById("PrecoCarro").value);

    Carros.push({ NomeCarro, PrecoCarro });

    document.getElementById('NomeCarro').value = '';
    document.getElementById('PrecoCarro').value = '';
}

document.getElementById('CadCarros').addEventListener('submit', CadCarros);

document.getElementById('btlistar').addEventListener('click', function () {
    if (Carros.length === 0) {
        alert('Lista vazia');
        return;
    }

    let lista = Carros.reduce((acumulador, carro) => 
        acumulador + `${carro.NomeCarro} - R$: ${carro.PrecoCarro.toFixed(2)}\n`, "");
    document.getElementById("resposta").innerText = `Lista de carros\n${"-".repeat(20)}\n${lista}`;
});

document.getElementById("btfiltrar").addEventListener('click', function () {
    const max = Number(prompt('Qual o valor máximo que deseja pagar?'));
    if (max === 0 || isNaN(max)) {
        alert('Número inválido');
        return;
    }

    const CarrosFiltrados = Carros.filter(carro => carro.PrecoCarro <= max);
    if (CarrosFiltrados.length === 0) {
        alert('Não tem carros cadastrados nessa faixa de preço');
        return;
    }

    let lista = CarrosFiltrados.reduce((acumulador, carro) => 
        acumulador + `${carro.NomeCarro} - R$ ${carro.PrecoCarro.toFixed(2)}\n`, "");
    document.getElementById("resposta").innerText = `Carros até R$ ${max.toFixed(2)}\n${"-".repeat(20)}\n${lista}`;
});
