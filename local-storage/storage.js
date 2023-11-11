function lembrarnome(e){
    e.preventDefault()

    const nome = document.querySelector("#nome").value
    const h1 = document.querySelector('#nomeh1')

        if(nome.length == 0){
            window.alert('preciso de algo para lembra :/ me diga algo')
            return
        }

        localStorage.setItem('nome', nome)
        h1.innerText = `oi bom dia ${nome}`

    }
    
    document.getElementById('lembrar').addEventListener('click', lembrarnome)

    function carregarnome(){
        const nomesalvo = localStorage.getItem('nome')
        
        if(nomesalvo){
            document.querySelector('#nome').value = nomesalvo
            document.querySelector('#nomeh1').innerText = `oi bom dia ${nomesalvo}`
        }
    }
    window.onload = carregarnome;

    function esquecernome(){
        const nomesalvo = localStorage.getItem('nome')

        if(!nomesalvo){
            window.alert('voce nao pode esquecer de nada pq nao se lembra nada')
            return
        }

        localStorage.removeItem('nome')
        document.querySelector('#nome').value = ''
        document.querySelector('#nomeh1').innerText = ''
    }
    document.getElementById('esquecer').addEventListener('click', esquecernome)