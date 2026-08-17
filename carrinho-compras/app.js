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
    const container = document.createElement("div");
    container.className = "container";

    container.appendChild(montarHeader());

    const main = document.createElement("div");
    main.className = "main";
    main.appendChild(montarSecaoProdutos());
    main.appendChild(montarSecaoCarrinho());

    container.appendChild(main);
    app.appendChild(container);
}

function montarHeader() {
    const header = document.createElement("header");
    header.className = "header";

    const logo = document.createElement("span");
    logo.className = "logo";
    logo.textContent = "🛒";

    const titulo = document.createElement("h1");
    titulo.textContent = "MINHA LOJA";

    header.appendChild(logo);
    header.appendChild(titulo);
    return header;
}

function montarSecaoProdutos() {
    const section = document.createElement("section");
    section.className = "produtos-section";

    const grid = document.createElement("div");
    grid.className = "produtos-grid";

    produtos.forEach((produto) => {
        grid.appendChild(montarCardProduto(produto));
    });

    section.appendChild(grid);
    return section;
}

function montarCardProduto(produto) {
    const card = document.createElement("div");
    card.className = "produto-card";

    const img = document.createElement("img");
    img.src = produto.imagem;
    img.alt = produto.nome;

    const nome = document.createElement("div");
    nome.className = "produto-nome";
    nome.textContent = produto.nome;

    const preco = document.createElement("div");
    preco.className = "produto-preco";
    preco.textContent = `R$ ${produto.preco}`;

    const botao = document.createElement("button");
    botao.className = "btn-adicionar";
    botao.textContent = "Adicionar ao carrinho";
    botao.addEventListener("click", () => adicionarAoCarrinho(produto));

    card.appendChild(img);
    card.appendChild(nome);
    card.appendChild(preco);
    card.appendChild(botao);

    return card;
}

function montarSecaoCarrinho() {
    const section = document.createElement("section");
    section.className = "carrinho-section";
    section.id = "carrinho-section";

    const titulo = document.createElement("h2");
    titulo.textContent = "CARRINHO";
    titulo.style.marginBottom = "16px";

    const lista = document.createElement("div");
    lista.className = "carrinho-lista";
    lista.id = "carrinho-lista";

    const totalBox = document.createElement("div");
    totalBox.className = "carrinho-total";
    totalBox.innerHTML = `<span>VALOR TOTAL</span><span id="carrinho-total-valor">R$ 0,00</span>`;

    section.appendChild(titulo);
    section.appendChild(lista);
    section.appendChild(totalBox);

    return section;
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
    const lista = document.getElementById("carrinho-lista");
    lista.innerHTML = "";

    if (carrinho.length === 0) {
        const vazio = document.createElement("p");
        vazio.className = "carrinho-vazio";
        vazio.textContent = "Nenhum produto adicionado ainda.";
        lista.appendChild(vazio);
    } else {
        carrinho.forEach((produto, index) => {
            const item = document.createElement("div");
            item.className = "carrinho-item";

            const info = document.createElement("div");
            info.className = "info-item";

            const nome = document.createElement("span");
            nome.className = "item-nome";
            nome.textContent = produto.nome;

            const preco = document.createElement("span");
            preco.className = "item-preco";
            preco.textContent = `R$ ${produto.preco}`;

            info.appendChild(nome);
            info.appendChild(preco);

            const btnRemover = document.createElement("button");
            btnRemover.className = "btn-remover";
            btnRemover.textContent = "×";
            btnRemover.title = "Remover do carrinho";
            btnRemover.addEventListener("click", () => removerDoCarrinho(index));

            item.appendChild(info);
            item.appendChild(btnRemover);

            lista.appendChild(item);
        });
    }

    const total = carrinho.reduce((soma, p) => soma + precoParaNumero(p.preco), 0);
    document.getElementById("carrinho-total-valor").textContent = `R$ ${formatarMoeda(total)}`;
}

montarLayout();
renderizarCarrinho();
