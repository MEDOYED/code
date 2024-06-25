const input = document.querySelector('.calculator__input');
const btnItem = document.querySelector('.button__item');
const clear = document.querySelector('.button__clear');
const changeSign = document.querySelector('.button__change-sign');
const percent = document.querySelector('.button__percent');
const divide = document.querySelector('.button__divide');
const one = document.querySelector('.button__one');
const two = document.querySelector('.button__two');
const three = document.querySelector('.button__three');
const multiply = document.querySelector('.button__multiply');
const four = document.querySelector('.button__four');
const five = document.querySelector('.button__five');
const six = document.querySelector('.button__six');
const minus = document.querySelector('.button__minus');
const seven = document.querySelector('.button__seven');
const eight = document.querySelector('.button__eight');
const nine = document.querySelector('.button__nine');
const plus = document.querySelector('.button__plus');
const zero = document.querySelector('.button__zero');
const comma = document.querySelector('.button__comma');
const equal = document.querySelector('.button__equal');

input.textContent = 0;
one.textContent = 1;
two.textContent = 2;
three.textContent = 3;
four.textContent = 4;
five.textContent = 5;
six.textContent = 6;
seven.textContent = 7;
eight.textContent = 8;
nine.textContent = 9;
zero.textContent = 0;
percent.textContent = '%';
// multiply.textContent = '/';

const writeInInput = function (e) {
  if (input.textContent == 0) {
    input.textContent = e.textContent;
  } else {
    input.textContent = input.textContent + e.textContent;
  }
};

const buttons = [
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  zero,
  plus,
  minus,
];

buttons.forEach(button => {
  button.addEventListener('click', () => {
    writeInInput(button);
  });
});

equal.addEventListener('click', () => {
  input.textContent = eval(input.textContent);
});

const writeInInputSymbol = function (symbol) {
  if (input.textContent == 0) {
    input.textContent = symbol;
  } else {
    input.textContent = input.textContent + symbol;
  }
};

//   multyply
multiply.addEventListener('click', () => {
  if (input.textContent == 0) {
    input.textContent = '*';
  } else {
    input.textContent = input.textContent + '*';
  }
});

// devide
divide.addEventListener('click', () => {
  if (input.textContent == 0) {
    input.textContent = '/';
  } else {
    input.textContent = input.textContent + '/';
  }
});

// comma
comma.addEventListener('click', () => {
  if (input.textContent == 0) {
    input.textContent = '.';
  } else {
    input.textContent = input.textContent + '.';
  }
});

// AC / buttonClear
clear.addEventListener('click', () => {
  input.textContent = 0;
});

// changeSign
changeSign.addEventListener('click', () => {
  if (input.textContent == 0) {
    input.textContent = 0;
  } else if (input.textContent > 0) {
    input.textContent = '-' + input.textContent;
  } else {
    input.textContent = input.textContent * -1;
  }
});

//percent
percent.addEventListener('click', () => {
  if (input.textContent == 0) {
    input.textContent = '0';
  } else if (
    input.textContent.includes('+') ||
    input.textContent.includes('-') ||
    input.textContent.includes('/') ||
    input.textContent.includes('*')
  ) {
    input.textContent = input.textContent;
  } else {
    input.textContent = eval(input.textContent + '/100');
  }
});
