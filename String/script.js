function Conversor(mode){
    const maintxt = document.querySelector('#Texto').value 
    let resultado = ''

    if(mode == 'upper'){
        resultado = maintxt.toUpperCase()
    } else if (mode == 'lower'){
        resultado = maintxt.toLowerCase()

    }
    document.querySelector('#show').value = resultado;

}