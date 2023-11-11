function CalcularDesconto(e){
    e.preventDefault()
    const NomeMedicamento = document.querySelector('#Nome').value
    const PrecoMedicamento = document.querySelector('#Preco').value
    const Arredondar = Number(Math.floor(PrecoMedicamento))
    const CalcularDesconto = Arredondar * 2 

    const MostrarResultado = document.querySelector('#Resultadoh1')
   MostrarResultado.innerText = `Ao comprar 2 ${NomeMedicamento} remedios vc paga ${CalcularDesconto}`
}

document.getElementById('Form').addEventListener('submit', CalcularDesconto)