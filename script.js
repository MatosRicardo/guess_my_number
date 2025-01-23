"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "Sem número!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Acertou!";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Muito alto!";
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Muito baixo!";
  }
});
