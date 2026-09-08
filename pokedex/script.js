const API_BASE = "https://pokeapi.co/api/v2/pokemon";
const PAGE_SIZE = 20;

const grid = document.getElementById("grid");
const status = document.getElementById("status");
const pager = document.getElementById("pager");
const pageInfo = document.getElementById("pageInfo");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentPage = 0; // 0-based
let totalCount = 0;

prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage -= 1;
    loadPage(currentPage);
  }
});

nextBtn.addEventListener("click", () => {
  const maxPage = Math.ceil(totalCount / PAGE_SIZE) - 1;
  if (currentPage < maxPage) {
    currentPage += 1;
    loadPage(currentPage);
  }
});

async function loadPage(page) {
  status.hidden = false;
  status.classList.remove("error");
  status.textContent = "Carregando pokémons...";
  pager.hidden = true;
  grid.innerHTML = "";

  const offset = page * PAGE_SIZE;

  try {
    const response = await fetch(`${API_BASE}?limit=${PAGE_SIZE}&offset=${offset}`);
    if (!response.ok) throw new Error("Falha ao buscar lista de pokémons");
    const data = await response.json();

    totalCount = data.count;
    renderGrid(data.results);
    updatePager();

    status.hidden = true;
    pager.hidden = false;
  } catch (err) {
    status.classList.add("error");
    status.textContent = "Não foi possível carregar os pokémons. Tente novamente.";
    console.error(err);
  }
}

function idFromUrl(url) {
  const parts = url.split("/").filter(Boolean);
  return parts[parts.length - 1];
}

function spriteUrl(id) {
  // Caminho corrigido para o diretório exato do official-artwork
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

function renderGrid(results) {
  results.forEach((pokemon) => {
    const id = idFromUrl(pokemon.url);

    const card = document.createElement("button");
    card.type = "button";
    card.className = "card";

    const idLabel = document.createElement("span");
    idLabel.className = "card__id";
    idLabel.textContent = `#${String(id).padStart(3, "0")}`;

    const img = document.createElement("img");
    img.className = "card__img";
    img.src = spriteUrl(id);
    img.alt = pokemon.name;
    img.loading = "lazy";

    const name = document.createElement("span");
    name.className = "card__name";
    name.textContent = pokemon.name;

    card.append(idLabel, img, name);
    card.addEventListener("click", () => goToPokemon(pokemon.name));

    grid.appendChild(card);
  });
}

function goToPokemon(name) {
  // persiste o pokémon selecionado para a tela /pokemon usar (inclusive após refresh)
  localStorage.setItem("pokedex:selected", name);
  window.location.href = `pokemon/index.html?nome=${encodeURIComponent(name)}`;
}

function updatePager() {
  const maxPage = Math.ceil(totalCount / PAGE_SIZE) - 1;
  pageInfo.textContent = `Página ${currentPage + 1} de ${maxPage + 1}`;
  prevBtn.disabled = currentPage <= 0;
  nextBtn.disabled = currentPage >= maxPage;
}

loadPage(currentPage);