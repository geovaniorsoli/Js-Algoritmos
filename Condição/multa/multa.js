function Velocidade(e){
    e.preventDefault();
    const VelocidadePermitida = document.querySelector('#VelocidadePermitida').value 
    const VelocidadeConduzida = document.querySelector('#VelocidadeConduzida').value
    const VelocidadeAcima = VelocidadeConduzida - VelocidadePermitida
    const Limite = (VelocidadeAcima * 0.5) + VelocidadePermitida
    const Mostrarh2 = document.querySelector('#Multah2')

    if(Limite = VelocidadePermitida){
        Mostrarh2.innerText = `não Tomou multa `
    }
    else{
        Mostrarh2.innerText = ` tomou Multa`
    }
}

document.getElementById('Form').addEventListener('submit', Velocidade)