const nome = document.getElementById('nome');
const formulario = document.getElementById('form');

formulario.addEventListener('submit', (e) => {

    if (nome.value.length <= 10) {
        nome.value = '';
        nome.placeholder = "Digite o nome completo!"
        e.preventDefault();
    };
});
