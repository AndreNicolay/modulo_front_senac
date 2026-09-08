const API_BASE = "https://pokeapi.co/api/v2/pokemon";
const CACHE_KEY = "pokedex:cache";

const status = document.getElementById("status");
const detail = document.getElementById("detail");
const detailId = document.getElementById("detailId");
const detailImg = document.getElementById("detailImg");
const detailName = document.getElementById("detailName");
const detailTypes = document.getElementById("detailTypes");
const statsList = document.getElementById("statsList");

function getRequestedName() {
  const params = new URLSearchParams(window.location.search);
  return params.get("nome") || localStorage.getItem("pokedex:selected");
}

function readCache() {
  try {
    return JSON.parse(localStorage.getItem(CACHE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveToCache(name, data) {
  const cache = readCache();
  cache[name] = data;
  localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
}

function statValue(pokemon, statName) {
  const found = pokemon.stats.find((s) => s.stat.name === statName);
  return found ? found.base_stat : "-";
}

function typeColorVar(typeName) {
  return `var(--type-${typeName})`;
}

async function loadPokemon() {
  const name = getRequestedName();

  if (!name) {
    status.classList.add("error");
    status.textContent = "Nenhum pokémon selecionado. Volte para a home e escolha um.";
    return;
  }

  // guarda o último acessado, mesmo se a página for recarregada diretamente
  localStorage.setItem("pokedex:selected", name);

  const cache = readCache();
  if (cache[name]) {
    render(cache[name]);
    return;
  }

  try {
    const response = await fetch(`${API_BASE}/${name}`);
    if (!response.ok) throw new Error("Pokémon não encontrado");
    const data = await response.json();
    saveToCache(name, data);
    render(data);
  } catch (err) {
    status.classList.add("error");
    status.textContent = "Não foi possível carregar este pokémon.";
    console.error(err);
  }
}

function render(pokemon) {
  status.hidden = true;
  detail.hidden = false;

  const mainType = pokemon.types[0].type.name;
  detail.querySelector(".detail__hero").style.setProperty("--card-accent", typeColorVar(mainType));

  detailId.textContent = `#${String(pokemon.id).padStart(3, "0")}`;
  detailImg.src =
    pokemon.sprites.other?.["official-artwork"]?.front_default || pokemon.sprites.front_default;
  detailImg.alt = pokemon.name;
  detailName.textContent = pokemon.name;

  detailTypes.innerHTML = "";
  pokemon.types.forEach((t) => {
    const badge = document.createElement("span");
    badge.className = "type-badge";
    badge.textContent = t.type.name;
    badge.style.setProperty("--badge-color", typeColorVar(t.type.name));
    detailTypes.appendChild(badge);
  });

  const characteristics = [
    { label: "Altura", value: `${(pokemon.height / 10).toFixed(1)} m` },
    { label: "Peso", value: `${(pokemon.weight / 10).toFixed(1)} kg` },
    { label: "Experiência base", value: pokemon.base_experience ?? "-" },
    { label: "Habilidade principal", value: pokemon.abilities[0]?.ability.name.replace(/-/g, " ") ?? "-" },
    { label: "HP", value: statValue(pokemon, "hp") },
    { label: "Ataque", value: statValue(pokemon, "attack") },
    { label: "Defesa", value: statValue(pokemon, "defense") },
    { label: "Velocidade", value: statValue(pokemon, "speed") },
  ];

  statsList.innerHTML = "";
  characteristics.forEach((c) => {
    const wrapper = document.createElement("div");
    wrapper.className = "stat";

    const dt = document.createElement("dt");
    dt.textContent = c.label;

    const dd = document.createElement("dd");
    dd.textContent = c.value;

    wrapper.append(dt, dd);
    statsList.appendChild(wrapper);
  });
}

loadPokemon();
