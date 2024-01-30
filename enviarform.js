// Funçao para envio do formulário
const handLeSubmit = (event) => {            
    event.preventDefault();
    addLoading();

    const nome = document.querySelector('input[name=nome]').value;
    const email = document.querySelector('input[name=email]').value;
    const telefone = document.querySelector('input[name=telefone]').value;
    const mensagem = document.querySelector('textarea[name=mensagem]').value;
    
    
    fetch('https://api.sheetmonkey.io/form/rZ24P1Qev944WXkaHqYPao', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email, telefone, mensagem }),
    }).then(() => removeLoading());
}

document.querySelector('form').addEventListener('submit', handLeSubmit)

