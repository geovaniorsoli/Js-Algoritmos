function ParImpar(e){
    e.preventDefault();
    const Numero = document.querySelector('#Numero').value 
    
    if(Numero % 2 == 0){
    const MostrarPar = document.querySelector('#MostrarParh2')
    MostrarPar.innerText = `${Numero} é par para caralho`
    }
    else{
        const MostrarImpar = document.querySelector('#MostrarParh2')
        MostrarImpar.innerText = `${Numero} é impar `
    }

}
document.getElementById('Form').addEventListener('submit', ParImpar)