function Calcular(e){
    e.preventDefault()

    const nome = document.querySelector('#Nome').value
    const valor = document.querySelector('#Valor').value
    const ValorComDesconto = Math.floor(valor * 0.5)
    const ValorSemDesconto = Math.floor(valor * 3)
    const total = (valor * 2) + ValorComDesconto
    const Exbir = document.querySelector('#Mostrarh2')
    Exbir.innerText = `Ao Comprar 3 Produtos o 3º saira com 50% de desconto: `

    const ExibirProduto = document.querySelector('#Produtoh1')
    ExibirProduto.innerText = nome

    const ExbirSemDesconto = document.querySelector('#TotalSemDesconto')
    ExbirSemDesconto.innerText = `Total sem desconto: ${ValorSemDesconto}`

    const ExibirDesconto = document.querySelector('#TotalDesconto')
    ExibirDesconto.innerText = `Total com desconto: ${ValorComDesconto}`

    const ExibirTotal = document.querySelector('#totalh3')
    ExibirTotal.innerText = `Total: ${total}`
}

document.getElementById("form").addEventListener('submit', Calcular)