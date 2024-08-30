'use strict';

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['CNY', 'Chinese yuan'],
// ]);

// //////////////////////////////////////////////////////////////////////////////////

// .slice()

// console.log(letters.slice(2));
// console.log(letters.slice(2, 5));
// console.log(letters.slice(-3));

// .splice()

// letters.splice(1, 4);  // ['a', 'f']
// letters.splice(1, 4);  // ['a', 'b']
// letters.splice(1, 3);

// let letters1 = ['a', 'b', 'c', 'd', 'e', 'f'];
// let letters2 = ['g', 'h', 'i'];

// // reverse()

// // console.log(letters.reverse());

// console.log(letters1.concat(letters2));

// console.log(letters1);

// for (const transaction of transactions) {
//   if (transaction > 0) {
//     console.log(`${transaction} was deposited`);
//   } else {
//     console.log(`${Math.abs(transaction)} was withdrew`);
//   }
// }

// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

// transactions.forEach(function (transaction, index) {
//   if (transaction > 0) {
//     console.log(`Transaction № ${index + 1}: ${transaction} was deposited`);
//   } else {
//     console.log(`Transaction № ${index + 1}: ${Math.abs(transaction)} was withdrew`);
//   }
// });

// for each з Map і Set

// Map

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['CNY', 'Chinese yuan'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(key, value);
// });

// console.log('---------------------');

// // Set
// const uniqueCurrencies = new Set(['USD', 'EUR', 'CNY', 'CNY']);
// console.log(uniqueCurrencies);
// uniqueCurrencies.forEach(function (value, _, set) {
//   console.log(`${value}: ${value}`);
//   console.log(set);
// });

// ========================================================================================================================
// ========================================================================================================================
// ========================================================================================================================

// Методи .some() && .every()

const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

// console.log(transactions.includes(50));
// console.log(transactions.includes(10));

// .some()

// const hasWithdrawals = transactions.some(trans => trans < 0);
// console.log(hasWithdrawals);

// const hasWithdrawalsOver5000 = transactions.some(trans => trans < -5000);
// console.log(hasWithdrawalsOver5000);

// .every()


console.log(transactions.every(trans => trans < 0));
console.log(transactions.every(trans => Math.abs(trans) > 20));
