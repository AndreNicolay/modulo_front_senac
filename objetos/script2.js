import { produtos } from "./data.js";

// 4 - Recebe um texto e retorna os itens que possuem esse texto no nome
function search(texto = '') {
    return produtos.filter(produto =>
        produto.nome.toLowerCase().includes(texto.toLowerCase())
    );
}

// Teste - só uma busca por vez
console.log(search(""));