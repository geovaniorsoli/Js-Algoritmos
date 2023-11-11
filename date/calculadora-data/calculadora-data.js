function Calculadora() {
    const data1Value = document.querySelector('#data01').value;
    const data2Value = document.querySelector('#data02').value;

    if (data1Value === "" || data2Value === ""){
        alert("Preencha todos os campos");
        return;
    }

    const data1 = new Date(data1Value);
    const data2 = new Date(data2Value);

    const difftempo = data2.getTime() - data1.getTime();
    const diffdia = difftempo / (1000 * 3600 * 24);

    let diffmes = (data2.getFullYear() - data1.getFullYear()) * 12;
    diffmes -= data1.getMonth();
    diffmes += data2.getMonth();

    const diffano = Math.floor(diffmes / 12);

    document.getElementById('show').textContent = `A diferença é de ${diffano} anos, ${diffmes % 12} meses e ${Math.round(diffdia)} dias.`;
}