// 1
const preco = parseInt(prompt("Digite o preço do produto:"));
const percentualDesconto = parseInt(prompt("Digite a porcentagem de desconto:"));

const valorDesconto = preco * (percentualDesconto / 100);
const precoFinal = preco - valorDesconto;

alert("Valor do desconto: " + valorDesconto + "\nValor final a pagar: " + precoFinal);

// 2
const peso = parseFloat(prompt("Digite o seu peso em kg:"));
const alturaCm = parseFloat(prompt("Digite a sua altura em CENTÍMETROS (ex: 175):"));

// Transforma os centímetros em metros para a fórmula (ex: 175 vira 1.75)
const altura = alturaCm / 100;

const imc = peso / (altura * altura);
let categoria = "";

if (imc < 18.5) {
    categoria = "Abaixo do peso normal";
} else if (imc >= 18.5 && imc < 25) {
    categoria = "Normal";
} else if (imc >= 25 && imc < 30) {
    categoria = "Sobrepeso";
} else if (imc >= 30 && imc < 35) {
    categoria = "Obesos: Classe I";
} else if (imc >= 35 && imc < 40) {
    categoria = "Obesos: Classe II";
} else if (imc >= 40) {
    categoria = "Obesos: classe III";
}

alert("Seu IMC é: " + imc + "\nCategoria: " + categoria);

// 3
const numero = parseInt(prompt("Digite um número inteiro:"));

let parOuImpar = "";
if (numero % 2 === 0) {
    parOuImpar = "Par";
} else {
    parOuImpar = "Ímpar";
}

let multiplo = "";
if (numero % 3 === 0 && numero % 5 === 0) {
    multiplo = "Múltiplo de 3 e de 5 ao mesmo tempo";
} else if (numero % 3 === 0) {
    multiplo = "Múltiplo apenas de 3";
} else if (numero % 5 === 0) {
    multiplo = "Múltiplo apenas de 5";
} else {
    multiplo = "Nenhum deles (não é múltiplo de 3 nem de 5)";
}

alert("O número " + numero + " é " + parOuImpar + "\nE ele é: " + multiplo);