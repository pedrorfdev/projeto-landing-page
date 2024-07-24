var Leonardo = window.document.getElementById("leonardo");
var Samantha = window.document.getElementById("samantha");
var Bruna = window.document.getElementById("bruna");

var setaDireita = window.document.getElementById("seta-direita");
var setaEsquerda = window.document.getElementById("seta-esquerda");

function RolarParaDireita() {
  setaEsquerda.style = "display: flex; margin-top: 55px";
  setaDireita.style = "display: none";

  Leonardo.style = "display: none";
  Bruna.style = "display: flex";
}

function RolarParaEsquerda() {
  setaDireita.style = "display: flex";
  setaEsquerda.style = "display: none";

  Leonardo.style = "display: flex";
  Bruna.style = "display: none";
}
