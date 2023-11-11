function calculaIdade() {
    const dataNascimento = new Date(document.getElementById('dataNascimento').value);

    if (!dataNascimento || dataNascimento >= new Date()) {
        alert("Insira uma data de nascimento válida.");
        return;
    }

    setInterval(() => {
        const agora = new Date();
        const diffMilissegundos = agora.getTime() - dataNascimento.getTime();
        const diffSegundos = Math.floor(diffMilissegundos / 1000);
        const diffMinutos = Math.floor(diffSegundos / 60);
        const diffHoras = Math.floor(diffMinutos / 60);
        const diffDias = Math.floor(diffHoras / 24);

        let diffMeses = agora.getMonth() - dataNascimento.getMonth() + (12 * (agora.getFullYear() - dataNascimento.getFullYear()));
        if (agora.getDate() < dataNascimento.getDate()) {
            diffMeses--;
        }

        const diffAnos = agora.getFullYear() - dataNascimento.getFullYear() - (agora.getMonth() < dataNascimento.getMonth() || (agora.getMonth() === dataNascimento.getMonth() && agora.getDate() < dataNascimento.getDate()) ? 1 : 0);

        document.getElementById('resultado').innerHTML = `
            <div>Anos: ${diffAnos}</div>
            <div>Meses: ${diffMeses}</div>
            <div>Dias: ${diffDias}</div>
            <div>Horas: ${diffHoras}</div>
            <div>Minutos: ${diffMinutos}</div>
            <div>Segundos: ${diffSegundos}</div>
            <div>Milissegundos: ${diffMilissegundos}</div>
        `;
    }, 100); 
}