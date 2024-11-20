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
