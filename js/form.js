const nome = document.getElementById('nome');
const formulario = document.getElementById('form');
const TipoDeIngresso = document.getElementById('ingressoTipo');

formulario.addEventListener('submit', (e) => {

    if (nome.value.length <= 10) {
        nome.value = '';
        nome.placeholder = "Digite o nome completo!"
        e.preventDefault();
    };

    sessionStorage.setItem("Nome", nome.value);
    sessionStorage.setItem("ingresso", TipoDeIngresso.value);

});
