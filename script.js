"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let pontos = 20;
let pontuacao = 0;

const atualizarMensagem = (mensagem) => {
  document.querySelector(".message").textContent = mensagem;
};

const atualizarEstiloDerrota = () => {
  atualizarMensagem("Você perdeu!😭");
  document.querySelector(".score").textContent = 0;
  document.querySelector("body").style.backgroundColor = "#ff0000";
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    atualizarMensagem("Sem número!⛔");
  } else if (guess === secretNumber) {
    atualizarMensagem("Acertou!🎉");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (pontos > pontuacao) {
      pontuacao = pontos;
      document.querySelector(".highscore").textContent = pontuacao;
    }
  } else {
    const mensagem = guess > secretNumber ? "Muito alto!📈" : "Muito baixo!📉";
    atualizarMensagem(mensagem);

    pontos > 1
      ? (document.querySelector(".score").textContent = --pontos)
      : atualizarEstiloDerrota();
  }
});
