function QuantidadeChinchilas(e){
    e.preventDefault()

    const QuantidadeInicial = document.querySelector("#Quantidade").value 
    const Anos = document.querySelector("#Anos").value 
    const Resposta = document.querySelector("#Respostah2")

    if(QuantidadeInicial < 2 || Anos == 0 || isNaN(QuantidadeInicial) || isNaN(Anos)){
        alert('Dados incorretos presta atencao')
        return
    }

    let Resultado = ''
    let QuantidadeAtual = QuantidadeInicial

    for(let i = 1; i <= Anos; i++){
        Resultado += `Ano ${i}: ${QuantidadeAtual}: Chinchilas\n` 
        QuantidadeAtual *= 3
    }

    Resposta.innerText = Resultado

}

document.getElementById('Form').addEventListener('submit', QuantidadeChinchilas)