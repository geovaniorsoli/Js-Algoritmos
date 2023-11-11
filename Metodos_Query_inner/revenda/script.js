function Revenda(e){
    e.preventDefault()
    const Entrada = document.querySelector('#Preco').value * 0.50
    const Parcela = document.querySelector('#Preco').value * 0.50/12
    const NomeCarro = document.querySelector('#Carro').value
    const Nome = document.querySelector('#Nome')

    Nome.innerText = ` ${NomeCarro} `
    const Parcelah2 = document.querySelector('#Parcelah2')
    Parcelah2.innerText = `12x de ${Parcela}`

    const Precoentrada = document.querySelector('#PrecoEntradah2')
    Precoentrada.innerText = `entrada é de ${Entrada}`
 }

document.getElementById('RevendaVeiculos').addEventListener("submit", Revenda)