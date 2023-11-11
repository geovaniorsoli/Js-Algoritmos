function CalcularVizinhos() {
    const mainNum = Number(prompt("Num: 5"))
    const vizinho1 = mainNum - 1
    const vizinho2 = mainNum + 1
    alert(`os vizinhos do seu numero são: ${mainNum} ${vizinho1} e ${vizinho2} `)
}
document.getElementById('CalcularVizinhos').addEventListener('click', CalcularVizinhos)

function ValorPizzaria(){
    const Valor = Number(prompt("Digite o valor: "))
    const Pessoas = Number(prompt("Quantas pessoas?: "))
    const Total = Valor / Pessoas 
    alert(`O valor total é de ${Valor} sendo para ${Pessoas} assim ficando ${Total} para cada um!`)
}
document.getElementById('ValorPizzaria').addEventListener('click', ValorPizzaria)

function DiferentesValores(){
    const Valor = Number(prompt("Digite o Valor da compra: "))
    const NumParcelas = Number(prompt("digite a quantidade das parcelas: "))
    const aVista = Valor * 0.10
    const totalavista = Valor - aVista
    const Parcela = Valor / NumParcelas
    alert(`O valor da sua compra com  numeros de parcela ${NumParcelas} é de ${Parcela} e avista é ${totalavista}`)
}
document.getElementById('DiferentesValores').addEventListener('click', DiferentesValores)

function MediaNota(){
    const Nota1 = (prompt("digite nota 1: "))
    const Nota2 = (prompt("digite nota2: "))
    const Media = Nota1 / Nota2 

    alert(`Nota1 é ${Nota1} e Nota2 é ${Nota2} sendo assim a media é de ${Media}`)
}

document.getElementById('MediaNota').addEventListener('click', MediaNota)
