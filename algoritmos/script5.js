// // 1
// const numeros = [10, 20, 30, 40, 50, 60]
// const numerosMultiplicados = []

// for(let i = 0; i < numeros.length; i++) {
//     numerosMultiplicados.push(numeros[i] * i)
// }

// console.log(numerosMultiplicados);

// // 2
// const palavras = ['tecnologia', 'apresentar', 'programar', 'cozinhar']
// const palavraInvertida = []

// for (let i = palavras.length - 1; i >= 0; i--) {
//     palavraInvertida.push(palavras[i])
// }

// console.log(palavraInvertida)

// 3
// const palavras = ["abacate", "banana", "Amora", "uva", "abacaxi", "morango"];
// const palavrasComA = [];

// for (let i = 0; i < palavras.length; i++) {
//     if (palavras[i][0].toLowerCase() === 'a') {
//         palavrasComA.push(palavras[i]);
//     }
// }

// console.log(palavrasComA);

// // 4
// const numeros = [2, 3, 5, 8, 10, 15, 21];
// const arrayTransformado = [];

// for (let i = 0; i < numeros.length; i++) {
//     let num = numeros[i];
    
//     if (num % 5 === 0) {
//         arrayTransformado.push("xazam");
//     } else if (num % 2 === 0) {
//         arrayTransformado.push("par");
//     } else {
//         arrayTransformado.push("impar");
//     }
// }

// console.log(arrayTransformado); 

// 5
// const numeros = [10, 20, 30, 40]
// let somaTotal = 0

// for (let i = 0; i < numeros.length; i++) {
//     somaTotal += numeros[i]
// }

// console.log(somaTotal)

// 6
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numerosPares = []

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        numerosPares.push(numeros[i])
    }
}

console.log(numerosPares)