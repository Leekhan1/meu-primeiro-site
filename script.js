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