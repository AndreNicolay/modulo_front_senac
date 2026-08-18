import { produtos } from "./data.js";

const app = document.getElementById("app");

let carrinho = [];

function precoParaNumero(precoStr) {
    return parseFloat(precoStr.replace(/\./g, "").replace(",", "."));
}

function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function montarLayout() {
    app.appendChild(montarHeader());

    const main = document.createElement("div");
    main.className = "main";
    main.appendChild(montarSecaoProdutos());
    main.appendChild(montarSecaoCarrinho());

    app.appendChild(main);
}

function montarHeader() {
    const header = document.createElement("header");

    const titulo = document.createElement("h1");
    titulo.textContent = "Loja de Carros 🛒";

    header.appendChild(titulo);
    return header;
}

function montarSecaoProdutos() {
    const div = document.createElement("div");
    div.className = "produtos";

    produtos.forEach((produto) => {
        div.appendChild(montarCardProduto(produto));
    });

    return div;
}

function montarCardProduto(produto) {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = produto.imagem;
    img.alt = produto.nome;

    const nome = document.createElement("p");
    nome.className = "nome";
    nome.textContent = produto.nome;

    const preco = document.createElement("p");
    preco.className = "preco";
    preco.textContent = `R$ ${produto.preco}`;

    const botao = document.createElement("button");
    botao.className = "btn-add";
    botao.textContent = "Adicionar";
    botao.addEventListener("click", () => adicionarAoCarrinho(produto));

    card.appendChild(img);
    card.appendChild(nome);
    card.appendChild(preco);
    card.appendChild(botao);

    return card;
}

function montarSecaoCarrinho() {
    const div = document.createElement("div");
    div.className = "carrinho";

    const titulo = document.createElement("h2");
    titulo.textContent = "Carrinho";

    const lista = document.createElement("div");
    lista.id = "lista-carrinho";

    const total = document.createElement("p");
    total.className = "total";
    total.innerHTML = `Total: R$ <span id="total">0,00</span>`;

    div.appendChild(titulo);
    div.appendChild(lista);
    div.appendChild(total);

    return div;
}

function adicionarAoCarrinho(produto) {
    carrinho.push(produto);
    renderizarCarrinho();
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    renderizarCarrinho();
}

function renderizarCarrinho() {
    const lista = document.getElementById("lista-carrinho");
    lista.innerHTML = "";

    if (carrinho.length === 0) {
        const vazio = document.createElement("p");
        vazio.textContent = "Carrinho vazio";
        lista.appendChild(vazio);
    } else {
        carrinho.forEach((produto, index) => {
            const item = document.createElement("div");
            item.className = "item-carrinho";

            const span = document.createElement("span");
            span.textContent = `${produto.nome} - R$ ${produto.preco}`;

            const btnRemover = document.createElement("button");
            btnRemover.textContent = "x";
            btnRemover.addEventListener("click", () => removerDoCarrinho(index));

            item.appendChild(span);
            item.appendChild(btnRemover);

            lista.appendChild(item);
        });
    }

    const totalValor = carrinho.reduce((soma, p) => soma + precoParaNumero(p.preco), 0);
    document.getElementById("total").textContent = formatarMoeda(totalValor);
}

montarLayout();
renderizarCarrinho();