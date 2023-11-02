document.addEventListener("DOMContentLoaded", () => {
    const frm = document.getElementById("Form");
    const bebidaProd = document.getElementById("bebidaProd");
    const pizzaProd = document.getElementById("pizzaProd");
    const descricao = document.getElementById("descricao");
    const itemResp = document.getElementById('itemh2');
    const descricaoResp = document.getElementById('descricaoh4');

    frm.addEventListener('change', (e) => {
        if (e.target.type === 'radio') {
            if (e.target.value === 'pizza') {
                bebidaProd.className = "oculta";
                pizzaProd.className = "exibe";
            } else {
                pizzaProd.className = "oculta";
                bebidaProd.className = "exibe";
            }
        }
    });

    frm.addEventListener('submit', (e) => {
        e.preventDefault();
        let produto = frm.tipo.value === 'pizza' ? pizzaProd.value : bebidaProd.value;
        itemResp.textContent = `Item: ${produto}`;
        descricaoResp.textContent = `Descrição: ${descricao.value}`;
    });
});
