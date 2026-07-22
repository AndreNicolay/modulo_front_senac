// 1
function simularEmprestimo() {
    let valor = parseFloat(prompt("Digite o valor desejado do empréstimo: R$ "));
    let parcelas = parseInt(prompt("Digite o número de parcelas: "));
    let juros = parseFloat(prompt("Digite a taxa de juros mensais (%): "));

    while (juros < 5.0) {
        alert("Erro: Os juros mensais não podem ser menores do que 5% ao mês.");
        juros = parseFloat(prompt("Digite novamente a taxa de juros mensais (%): "));
    }

    let jurosDecimal = juros / 100;
    let valorFinal = valor * Math.pow((1 + jurosDecimal), parcelas);
    let valorParcela = valorFinal / parcelas;

    console.log("\n--- RESULTADO DA SIMULAÇÃO ---");
    console.log(`Valor final do empréstimo: R$ ${valorFinal.toFixed(2)}`);
    console.log(`Valor de cada parcela: R$ ${valorParcela.toFixed(2)}`);
    console.log(`Número de parcelas: ${parcelas}`);
}

// 2
function analisarPalavra() {
    let palavra = prompt("Digite uma palavra: ");
    
    let tamanho = palavra.length;
    
    const vogaisValidas = "aeiouáéíóúãõâêîôû";
    let numVogais = 0;
    let palavraMinuscula = palavra.toLowerCase();
    
    for (let letra of palavraMinuscula) {
        if (vogaisValidas.includes(letra)) {
            numVogais++;
        }
    }
            
    let palavraInvertida = "";
    for (let i = palavra.length - 1; i >= 0; i--) {
        palavraInvertida += palavra[i];
    }

    console.log("\n--- ANÁLISE DA PALAVRA ---");
    console.log(`Tamanho da palavra: ${tamanho} caracteres`);
    console.log(`Número de vogais: ${numVogais}`);
    console.log(`Palavra invertida: ${palavraInvertida}`);
}

// 3
function formatarFrase() {
    let frase = prompt("Digite uma frase: ");
    let fraseFormatada = "";

    for (let i = 0; i < frase.length; i++) {
        if (i % 2 === 0) {
            fraseFormatada += frase[i].toUpperCase();
        } else {
            fraseFormatada += frase[i].toLowerCase();
        }
    }

    console.log("\n--- FRASE FORMATADA ---");
    console.log(fraseFormatada);
}
