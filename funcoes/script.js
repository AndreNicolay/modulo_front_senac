//1

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

function iniciarCalculadora() {
  let numero1 = parseFloat(prompt("Digite o primeiro número:"));
  let operador = prompt("Digite o operador (+, -, *, /):");
  let numero2 = parseFloat(prompt("Digite o segundo número:"));
  
  let resultado;

  if (operador === '+') {
    resultado = somar(numero1, numero2);
  } 
  else if (operador === '-') {
    resultado = subtrair(numero1, numero2);
  } 
  else if (operador === '*') {
    resultado = multiplicar(numero1, numero2);
  } 
  else if (operador === '/') {
    resultado = dividir(numero1, numero2);
  } 
  else {
    resultado = "Operador inválido!";
  }

  alert("O resultado é: " + resultado);
}


iniciarCalculadora();