"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let pontos = 20;
let pontuacao = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "Sem número!⛔";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Acertou!🎉";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (pontos > pontuacao) {
      pontuacao = pontos;
      document.querySelector(".highscore").textContent = pontuacao;
    }
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Muito alto!📈";
    if (pontos > 1) {
      pontos--;
      document.querySelector(".score").textContent = pontos;
    } else {
      document.querySelector(".message").textContent = "Você perdeu!😭";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#ff0000";
    }
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Muito baixo!📉";
    if (pontos > 1) {
      pontos--;
      document.querySelector(".score").textContent = pontos;
    } else {
      document.querySelector(".message").textContent = "Você perdeu!😭";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#ff0000";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  pontos = 20;
  document.querySelector(".score").textContent = pontos;
  document.querySelector(".message").textContent = "Comece a adivinhar...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
