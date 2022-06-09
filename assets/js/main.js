console.log("Seja bem vindo ao site Gabriel Corrêa Fiusa");

const temporestantedevida = 2100
const anoAtual = 2022

console.log("O tempo restante da minha vida é: ")
console.log(temporestantedevida - anoAtual);
console.log("Anos");

// Função recarrega página

const btn = document.querySelector("#refresh")

btn.addEventListener('click', () => {
	location.reload()
})