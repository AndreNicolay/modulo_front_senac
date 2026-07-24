// 1
// const texto = "Paralelepipedo"
// const listaDeLetras = []

// for (let i = 0; i < texto.length; i++) {
//     listaDeLetras.push(texto[i])
// }

// console.log(listaDeLetras)

// 2
// const arrayPalavras = ['Sexta', 'feira', 'é', 'feriado', 'e', 'os', 'guri', 'tão', 'como']
// let fraseFinal = ""

// for (let i = 0; i < arrayPalavras.length; i++) {
//     fraseFinal += arrayPalavras[i]

//     if (i < arrayPalavras.length - 1) {
//         fraseFinal += " "
//     }
// }

// console.log(fraseFinal)

// 3
const numeros = [5, 4, 7, 10, 17, 22]

let menor = numeros[0]
let maior = numeros[0]

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] < menor) {
        menor = numeros[i]
    }

    if (numeros[i] > maior) {
        maior = numeros[i]
    }
}

const resultado = [menor, maior]

console.log(resultado)