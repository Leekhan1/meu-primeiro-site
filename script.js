function entrarGuilda() {

  alert("Bem-vindo à Blood Oath ⚔️");

}

function abrirPopup() {

  document.getElementById("popup").style.display = "flex";

}

function fecharPopup() {

  document.getElementById("popup").style.display = "none";

}

function login() {

  let nome = document.getElementById("nomeJogador").value;

  if (nome === "") {

    alert("Digite o nome do personagem!");

    return;

  }

  document.getElementById("login-section").style.display = "none";

  document.getElementById("player-panel").style.display = "block";

  document.getElementById("mensagemJogador").innerText =
    "🔥 Bem-vindo, " + nome;

}

function mostrarSpecs() {

  let classe =
    document.getElementById("classe").value;

  let spec =
    document.getElementById("spec");

  spec.innerHTML = "";

  let specs = [];

  // PALADINO

  if (classe === "Paladino") {

    specs = [
      "🛡️ Protection",
      "⚔️ Retribution",
      "✨ Holy"
    ];

  }

  // GUERREIRO

  else if (classe === "Guerreiro") {

    specs = [
      "🛡️ Protection",
      "⚔️ Fury",
      "⚔️ Arms"
    ];

  }

  // ROGUE

  else if (classe === "Rogue") {

    specs = [
      "⚔️ Assassination",
      "⚔️ Combat",
      "⚔️ Subtlety"
    ];

  }

  // HUNTER

  else if (classe === "Hunter") {

    specs = [
      "🏹 Beast Mastery",
      "🏹 Marksmanship",
      "🏹 Survival"
    ];

  }

  // MAGO

  else if (classe === "Mago") {

    specs = [
      "🔥 Fire",
      "❄️ Frost",
      "✨ Arcane"
    ];

  }

  // WARLOCK

  else if (classe === "Warlock") {

    specs = [
      "🔥 Destruction",
      "☠️ Affliction",
      "👹 Demonology"
    ];

  }

  // PRIEST

  else if (classe === "Priest") {

    specs = [
      "✨ Holy",
      "✨ Discipline",
      "☠️ Shadow"
    ];

  }

  // SHAMAN

  else if (classe === "Shaman") {

    specs = [
      "⚡ Elemental",
      "⚔️ Enhancement",
      "✨ Restoration"
    ];

  }

  // DRUIDA

  else if (classe === "Druida") {

    specs = [
      "🌿 Balance",
      "🛡️ Feral Tank",
      "⚔️ Feral DPS",
      "✨ Restoration"
    ];

  }

  // DK

  else if (classe === "Cavaleiro da Morte") {

    specs = [
      "🩸 Blood",
      "❄️ Frost",
      "☠️ Unholy"
    ];

  }

  // ADICIONAR SPECS

  for (let i = 0; i < specs.length; i++) {

    let option =
      document.createElement("option");

    option.text = specs[i];

    spec.add(option);

  }

}


let raid = [];

function entrarRaid() {

  let nome = document.querySelector('input').value;
  let classe = document.getElementById("classe").value;
  let spec = document.getElementById("spec").value;
  let funcao = document.getElementById("funcao").value;

  if (!nome || classe === "Escolha sua Classe") {
    alert("Preencha os dados!");
    return;
  }

  // limite de raid
  if (raid.length >= 10) {
    alert("Raid lotada! (10/10)");
    return;
  }

  // adiciona jogador
  raid.push({
    nome,
    classe,
    spec,
    funcao
  });

  atualizarRaid();

}

function atualizarRaid() {

  let lista = document.getElementById("listaJogadores");

  lista.innerHTML = "";

  let tank = 0;
  let dps = 0;
  let healer = 0;

  raid.forEach(j => {

    let li = document.createElement("li");

    li.innerText =
      j.nome +
      " | " +
      j.classe +
      " | " +
      j.spec +
      " | " +
      j.funcao;

    lista.appendChild(li);

    if (j.funcao.includes("Tank")) tank++;
    else if (j.funcao.includes("DPS")) dps++;
    else if (j.funcao.includes("Healer")) healer++;

  });

  document.getElementById("countTank").innerText =
    "🛡️ Tanks: " + tank;

  document.getElementById("countDps").innerText =
    "⚔️ DPS: " + dps;

  document.getElementById("countHealer").innerText =
    "✨ Healers: " + healer;

}