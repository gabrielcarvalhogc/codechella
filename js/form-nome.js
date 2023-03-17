const inputNome = document.getElementById('nome');
const spanNome = document.getElementById('spanNome');
const formulario = document.getElementById('form');

formulario.addEventListener('submit', (e) => {

    if (inputNome.value.length <= 10) {
        inputNome.value = '';
        inputNome.placeholder = "Digite o nome completo!"
        e.preventDefault();
    };
})

