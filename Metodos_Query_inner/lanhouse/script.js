function ValorLanHouse(e){
    e.preventDefault()

    const TempoUso = document.querySelector('#Tempo').value 
    const PrecoPmin = document.querySelector('#Preco').value
    const TotalPreco = Math.ceil(TempoUso / 15)

    const ValorFinal = (TotalPreco * PrecoPmin).toFixed(2)

    const MostrarResultado = document.querySelector('#ValorH2')
    MostrarResultado.innerText = `Tem que pagar total de: ${ValorFinal} `
}

document.getElementById('Form').addEventListener('submit', ValorLanHouse)