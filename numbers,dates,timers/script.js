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
