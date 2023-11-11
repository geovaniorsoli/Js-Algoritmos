function ContarFruta(e){
    e.preventDefault()

    const Nome = document.querySelector("#Fruta").value 
    const Quantidade = document.querySelector("#Quantidade").value
    const Resposta = document.querySelector('#Respostah2')

    let Fruta = ''

    for(let i = 1; i <= Quantidade; i++){
        if(i % 2 == 0){
            Fruta += `${Nome} `
        }
        else{
            Fruta += ` - `
        }
    }

    Resposta.innerText = Fruta
}

document.getElementById('Form').addEventListener('submit', ContarFruta)