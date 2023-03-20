const data = document.getElementById("inputData");
const blocoData = document.getElementById("labelData");

const anoAtual = new Date().getFullYear();
const mesAtual = new Date().getMonth() + 1;
const diaAtual = new Date().getDate();
let ano, mes, dia, idade;

formulario.addEventListener('submit', e => {
    retornaIdade();

    if (idade < 10) {
        e.preventDefault();
        criaMensagem("Não é permitida a entrada de menores de 10 anos");
    }

});

function retornaIdade() {
    ano = data.value.slice(0, 4);
    mes = data.value.slice(5, 7);
    dia = data.value.slice(8, 10);

    if (mesAtual < mes || mesAtual == mes && diaAtual < dia) {
        idade = (anoAtual - ano) - 1;
    } else {
        idade = anoAtual - ano;
    }
}

function criaMensagem(mensagem) {
    let caixaDeErro = document.createElement("p");
    caixaDeErro.classList.add("input-data__mensagem")
    blocoData.appendChild(caixaDeErro);

    caixaDeErro.innerHTML = mensagem;

    setInterval(() => {
        caixaDeErro.remove();
    }, 3000);
}
