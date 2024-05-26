'use strict';

const player = document.querySelector('.player');
const player0 = document.querySelector('.player--0');
const playerActive = document.querySelector('.player--active');
const name = document.querySelector('.name');
const name0 = document.querySelector('#name--0');
const score = document.querySelector('.score');
const score0Element = document.querySelector('#score--0');
const current = document.querySelector('.current');
const currentAll = document.querySelectorAll('.current');
const currentLabel = document.querySelector('.current-label');
const currentScore = document.querySelector('.current-score');
const current0 = document.querySelector('#current--0');
const player1 = document.querySelector('.player--1');
const name1 = document.querySelector('#name--1');
const score1Element = document.querySelector('#score--1');
const current1 = document.querySelector('#current--1');
const dice = document.querySelector('.dice');
const btn = document.querySelector('.btn');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const win0 = document.querySelector('.win--0');
const win1 = document.querySelector('.win--1');
const win = document.querySelector('.win');

score0Element.textContent = 0;
score1Element.textContent = 0;
dice.classList.add('hidden');
current0.textContent = 0;
current1.textContent = 0;

let randomNumber;

btnRoll.addEventListener('click', function () {
  randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log(randomNumber);

  // random dise
  if (randomNumber === 1) {
    dice.src = './dice1.png';
  } else if (randomNumber === 2) {
    dice.src = './dice2.png';
  } else if (randomNumber === 3) {
    dice.src = './dice3.png';
  } else if (randomNumber === 4) {
    dice.src = './dice4.png';
  } else if (randomNumber === 5) {
    dice.src = './dice5.png';
  } else if (randomNumber === 6) {
    dice.src = './dice6.png';
  }

  if (player.classList.contains('player--active')) {
    if (randomNumber === 1) {
      current0.textContent = 0;
      dice.classList.remove('hidden');
      player0.classList.remove('player--active');
      player1.classList.add('player--active');
    } else {
      current0.textContent =
        Number(current0.textContent) + Number(randomNumber);
      dice.classList.remove('hidden');
    }
  } else {
    if (randomNumber === 1) {
      current1.textContent = 0;
      dice.classList.remove('hidden');
      player1.classList.remove('player--active');
      player0.classList.add('player--active');
    } else {
      current1.textContent =
        Number(current1.textContent) + Number(randomNumber);
      dice.classList.remove('hidden');
    }
  }
});

// залишити
btnHold.addEventListener('click', function () {
  if (player0.classList.contains('player--active')) {
    score0Element.textContent =
      Number(score0Element.textContent) + Number(current0.textContent);
    console.log(score0Element.textContent);
    if (score0Element.textContent >= 100) {
      player.classList.add('player-won');
    } else {
      player0.classList.remove('player--active');
      player1.classList.add('player--active');
    }
    current0.textContent = 0;
  } else if (player1.classList.contains('player--active')) {
    score1Element.textContent =
      Number(score1Element.textContent) + Number(current1.textContent);
    console.log(score1Element.textContent);
    if (score1Element.textContent >= 100) {
      player1.classList.add('player-won');
    } else {
      player1.classList.remove('player--active');
      player0.classList.add('player--active');
    }
    current1.textContent = 0;
  }
});

// player won
btnHold.addEventListener('click', function () {
  if (player0.classList.contains('player-won')) {
    dice.classList.add('hidden');
    currentAll.forEach(function (current) {
      current.classList.add('hidden');
    });
    btnRoll.classList.add('hidden');
    btnHold.classList.add('hidden');
    win0.classList.remove('hidden');
  } else if (player1.classList.contains('player-won')) {
    dice.classList.add('hidden');
    currentAll.forEach(function (current) {
      current.classList.add('hidden');
    });
    btnRoll.classList.add('hidden');
    btnHold.classList.add('hidden');
    win1.classList.remove('hidden');
  }
});

// reset game
btnNew.addEventListener('click', function () {
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  currentAll.forEach(function (e) {
    e.classList.remove('hidden');
  });
  btnRoll.classList.remove('hidden');
  btnHold.classList.remove('hidden');
  win0.classList.add('hidden');
  win1.classList.add('hidden');
  dice.classList.add('hidden');
  player0.classList.remove('player-won')
  player1.classList.remove('player-won')
  player0.classList.add('player--active')
  player1.classList.remove('player--active')
});
