const ingressoNome = document.getElementById('nomeIngresso');
const ingresso = document.getElementById('tipoDoIngresso');

let nome = sessionStorage.getItem("Nome");
let ingressoSelecionado = sessionStorage.getItem("ingresso");

ingressoNome.innerHTML = nome;
ingresso.innerHTML = ingressoSelecionado;