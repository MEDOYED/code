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

// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

// console.log(transactions.includes(50));
// console.log(transactions.includes(10));

// .some()

// const hasWithdrawals = transactions.some(trans => trans < 0);
// console.log(hasWithdrawals);

// const hasWithdrawalsOver5000 = transactions.some(trans => trans < -5000);
// console.log(hasWithdrawalsOver5000);

// .every()

// console.log(transactions.every(trans => trans < 0));
// console.log(transactions.every(trans => Math.abs(trans) > 20));

// ==========================================================================================================================
// ==========================================================================================================================
// ==========================================================================================================================

// Методи .flat(), .flatMap()

// const someArray =

// console.log(someArray.flat());

// const someDeeperArray = [[1, [4, 6]], [[4, 7], 3], 1, 2, 3];

// console.log(someDeeperArray.flat());

// console.log(someDeeperArray.flat(2));

// const account1 = {
//   userName: 'Cecil Ireland',
//   transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
//   interest: 1.5,
//   pin: 1111,
// };

// const account2 = {
//   userName: 'Amani Salt',
//   transactions: [2000, 6400, -1350, -70, -210, -2000, 5500, -30],
//   interest: 1.3,
//   pin: 2222,
// };

// const account3 = {
//   userName: 'Corey Martinez',
//   transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
//   interest: 0.8,
//   pin: 3333,
// };

// const account4 = {
//   userName: 'Kamile Searle',
//   transactions: [530, 1300, 500, 40, 190],
//   interest: 1,
//   pin: 4444,
// };

// const account5 = {
//   userName: 'Oliver Avila',
//   transactions: [630, 800, 300, 50, 120],
//   interest: 1.1,
//   pin: 5555,
// };

// const accounts = [account1, account2, account3, account4, account5];

// const allTransactionArrays = accounts.map(acc => acc.transactions);

// console.log(allTransactionArrays);

// const allTransactions = allTransactionArrays.flat();
// console.log(allTransactions);

// const bankBalance = allTransactions.reduce((acc, trans) => acc + trans, 0);

// console.log(bankBalance);

// const bankBalance1 = accounts
// .map(acc => acc.transactions)
// .flat()
// .reduce((acc, trans) => acc + trans, 0);
// console.log(bankBalance1);

// const bankBalance2 = accounts
// .flatMap(acc => acc.transactions)
// .reduce((acc, trans) => acc + trans, 0);
// console.log(bankBalance2);

// Сортировка масивов

// Strings

// const names = ['john', 'sara', 'augustin', 'steve'];

// console.log(names.sort());

// Numbers

const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

// transactions.sort((x, y) => {
//   if (x > y) {
//     return 1;
//   }
//   if (x < y) {
//     return -1;
//   }
// });

transactions.sort((x, y) => y - x);

console.log(transactions);