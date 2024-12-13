// COIN FLIP SIMULATOR

// HTML Variables
let flipBtn = document.getElementById("coin-btn");
let outputEl = document.getElementById("output");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");

let diceBtn = document.getElementById("dice-btn");
let outputDiceEl = document.getElementById("dice-output");

let dice1 = document.getElementById("dice-out1");
let dice2 = document.getElementById("dice-out2");
let dice3 = document.getElementById("dice-out3");
let dice4 = document.getElementById("dice-out4");
let dice5 = document.getElementById("dice-out5");
let dice6 = document.getElementById("dice-out6");

// Count Variuables
let numHeads = 0;
let numTails = 0;

let numDice1 = 0;
let numDice2 = 0;
let numDice3 = 0;
let numDice4 = 0;
let numDice5 = 0;
let numDice6 = 0;

// Button Event Listener

flipBtn.addEventListener("click", btnClicked);
diceBtn.addEventListener("click", diceRoll);

function btnClicked() {
  // Generate a Random NUmber
  let randNum = Math.random();
  console.log(randNum);

  //   Simulate the Coin Flip.

  if (randNum < 0.5) {
    outputEl.innerHTML = "<img src='img/heads.png' />";
    numHeads = numHeads + 1;
    headsEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = "<img src='img/tails.png' />";
    numTails += 1;
    tailsEl.innerHTML = numTails;
  }
}

function diceRoll() {
  let randomNum = Math.random();
  console.log(randomNum);

  if (randomNum <= 1 / 6) {
    outputDiceEl.innerHTML = "<img src='img/1.png' />";
    numDice1 += 1;
    dice1.innerHTML = numDice1;
  } else if (randomNum <= 2 / 6) {
    outputDiceEl.innerHTML = "<img src='img/2.png' />";
    numDice2 += 1;
    dice2.innerHTML = numDice2;
  } else if (randomNum <= 3 / 6) {
    outputDiceEl.innerHTML = "<img src='img/3.png' />";
    numDice3 += 1;
    dice3.innerHTML = numDice3;
  } else if (randomNum <= 4 / 6) {
    outputDiceEl.innerHTML = "<img src='img/4.png' />";
    numDice4 += 1;
    dice4.innerHTML = numDice4;
  } else if (randomNum <= 5 / 6) {
    outputDiceEl.innerHTML = "<img src='img/5.png' />";
    numDice5 += 1;
    dice5.innerHTML = numDice5;
  } else if (randomNum <= 6 / 6) {
    outputDiceEl.innerHTML = "<img src='img/6.png' />";
    numDice6 += 1;
    dice6.innerHTML = numDice6;
  }
}
