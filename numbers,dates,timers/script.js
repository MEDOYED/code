'use strict';

console.log(10 === 10.0); //true

console.log(0.1 + 0.2); //0.300000004
console.log(0.1 + 0.2 === 0.3); //false

//converting strings to numbers
console.log(Number('11')); // число 11
console.log(+'11'); // число 11
console.log('11'); // строчка 11

//parsing numbers from string
console.log(Number.parseInt('20e')); // число 20
console.log(Number.parseInt('20p30o')); // число 20
console.log(Number.parseInt('r20')); // NaN  (строчка має починатись з числа)
console.log(Number.parseInt('20e', 10)); // число 20  (10 - означає 10-тичну систему)
console.log(Number.parseInt('1011e', 2)); // число 11 (10 - означає 2-Їчну систему)
console.log(Number.parseFloat('8.9icc')); // число 8.9 (.parseFloat для числе з плаваючою комою)

// перевірка чи число не безкінечне
console.log(11 / 0); // Infinity
console.log(Number.isFinite(11 / 0)); // false (тому що це число безкінечне)

console.log('-----------');
// перевічка чи є число NaN
console.log(Number.isNaN(Number.parseInt('r20'))); // true

////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('183. Робота с Math');

console.log(Math.sqrt(9)); // 3  (корінь квадратний)
console.log(9 ** 2);

console.log(Math.max(1, 3, 66, '70', 40, '50')); // 70
console.log(Math.min(1, 3, 66, '70', 40, '50')); // 1

console.log(Math.PI);
console.log(Math.PI * Number.parseInt('20px') ** 2);

console.log(Math.random()); // рфндомне число вод 0 до 1
console.log(Math.trunc(Math.random() * 100)); // рандомне ціле число від 0 до 100
console.log(Math.trunc(1.99)); // 1  (обрізає десятчний дроб)
console.log(Math.round(1.99)); // 2  (заокруглює нормально)

console.log(Math.ceil(1.99)); // 2  (заокруглює в більшу сторону)
console.log(Math.ceil(1.39)); // 2  (заокруглює в більшу сторону)

console.log(Math.floor(1.39)); // 1  (заокруглює в меншу сторону)
console.log(Math.floor(1.99)); // 1  (заокруглює в меншу сторону)

console.log(Math.PI.toFixed(2)); // залишаєм 2 знаки після коми

// Оператор залишку

console.log(7 % 3); // 7 / 3 = 2 в ціломі і 1 в залишку. Тому в консолі буде 1
console.log(7 % 4); // В консолі буде 3
console.log(8 % 4); // В консолі буде 3

const isNumberOdd = x => x % 2 != 0;

console.log(isNumberOdd(10));
console.log(isNumberOdd(9));
console.log(isNumberOdd(98));
console.log(isNumberOdd(1));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//BigIng

console.log('------------');

console.log(2 ** 53 - 1); //9007199254740991
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991

console.log(435279247624692562045863274256208n);

console.log(
  435279247624692562045863274256208n * 435279247624692562045863274256208n,
);

const bigNumber = 435279247624692562045863274256208n;
const regulalNumber = 123;

console.log(bigNumber + BigInt(regulalNumber));

console.log(435279247624692562045863274256208n > 12); // true

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// робота з датами

const now = new Date();

console.log(now);

const someDateString = 'Nov 24 2024 15:06:54';
const someDate = new Date(someDateString);
console.log(someDate);

console.log('-----------');

// Unix time started Jan 1 1970
console.log(new Date(0)); // Thu Jan 01 1970 01:00:00 GMT+0100 (Central European Standard Time)

console.log('-----------');

const futureDate = new Date(2222, 1, 13, 11, 28, 59);
console.log(futureDate);

console.log(futureDate.getFullYear()); // 2222
console.log(futureDate.getMonth()); // 1
console.log(futureDate.getDate()); // 13
console.log(futureDate.getDay()); // 3
console.log(futureDate.getHours()); // 11
console.log(futureDate.getMinutes()); // 28
console.log(futureDate.getSeconds()); // 59

console.log(futureDate.toISOString()); // 2222-02-13T10:28:59.000Z  || z=відображає значення як строчку
console.log(futureDate.getTime()); // 7956095339000  ||  скільки мілесекунд пройшло від моменту відліку
console.log(new Date(7956095339000)); // Wed Feb 13 2222 11:28:59 GMT+0100 (Central European Standard Time)

futureDate.setFullYear(2223);
console.log(futureDate);
