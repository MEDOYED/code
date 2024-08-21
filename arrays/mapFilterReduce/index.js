// Method map()

// const transactions = [500, 250, -300, 5000, -850, -110, -170, 1100];

// const usdToEuro = 0.86;

// const transactionsEuro = transactions.map(function(trans) {
//   return trans * usdToEuro;
// })

// const transactionsEuro = transactions.map(trans => trans * usdToEuro);

// console.log(transactions);
// console.log('==================');
// console.log(transactionsEuro);

// const transactionsEuro1 = [];

// for (const trans of transactions) {
//   transactionsEuro1.push(trans * usdToEuro);
// }

// console.log(transactionsEuro1);

// const transactionDescription = transactions.map((transaction, index, array) => {
//   let description = '';

//   if (transaction > 0) {
//     description = `Transaction №${index + 1}: ${transaction} was deposited`;
//   } else {
//     description = `Transaction №${index + 1}: ${Math.abs(
//       transaction,
//     )} was withdrew`;
//   }

//   return description;
// });

// const transactionDescription = transactions.map(
//   (transaction, index, array) =>
//     `Transaction №${index + 1}: ${Math.abs(transaction)} was ${
//       transaction > 0 ? 'deposited' : 'withdrew'
//     }`,
// );

// console.log(transactionDescription);

// =========================================================================================================================
// =========================================================================================================================
// =========================================================================================================================

// Method .filter()

// const transactions = [500, 250, -300, 5000, -850, -110, -170, 1100];

// const withdrawals = transactions.filter(function (trans) {
//   return trans < 0;
// });

// console.log(withdrawals);

// const withdrawals1 = [];

// for (const trans of transactions) {
//   if (trans < 1) {
//     withdrawals1.push(trans);
//   }
// }

// console.log(withdrawals1);

// const transactions = [500, 250, -300, 5000, -850, -110, -170, 1100];

// const deposites = transactions.filter(function (trans) {
//   return trans > 0;
// });

// console.log(deposites);

// const deposites = transactions.filter(trans => trans > 0);

// console.log(deposites);

// =========================================================================================================================
// =========================================================================================================================
// =========================================================================================================================

// Method .reduce()

// const transactions = [500, 250, -300, 5000, -850, -110, -170, 1100];

// const balance = transactions.reduce(function (acc, item, index, arr) {
//   return acc + item;
// }, 0);

// console.log(balance);

// let sum = 0;

// for (const trans of transactions) {
//   sum += trans;
// }

// console.log(sum);

// const balance = transactions.reduce((acc, item) => acc + item, 0);

// console.log(balance);

// get minimum value of transactions

// const min = transactions.reduce((acc, trans) => {
//   if (acc < trans) {
//     return acc
//   } else {
//     return trans
//   }
// }, transactions[0]);

// const min = transactions.reduce(
//   (acc, trans) => (acc < trans ? acc : trans),

//   transactions[0],
// );

// console.log(min);

// =========================================================================================================================
// =========================================================================================================================
// =========================================================================================================================

// method Chaining (цепь визовов)

// const transactions = [500, 250, -300, 5000, -850, -110, -170, 1100];

// const totalWithdrawlsEuro = transactions
//   .filter(trans => trans < 0)
//   .map(trans => trans * 0.86)
//   .reduce((acc, trans) => acc + trans, 0);

// console.log(totalWithdrawlsEuro);

// =========================================================================================================================
// =========================================================================================================================
// =========================================================================================================================


const transactions = [500, 250, -300, 5000, -850, -110, -170, 1100];

const firstDeposit = transactions.find(trans => trans > 0);
const firstWithdrawl = transactions.find(trans => trans < 0);
console.log(firstDeposit);
console.log(firstWithdrawl);

const account1 = {
  userName: 'Cecil Ireland',
  transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
  interest: 1.5,
  pin: 1111,
};

const account2 = {
  userName: 'Amani Salt',
  transactions: [2000, 6400, -1350, -70, -210, -2000, 5500, -30],
  interest: 1.3,
  pin: 2222,
};

const account3 = {
  userName: 'Corey Martinez',
  transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
  interest: 0.8,
  pin: 3333,
};

const account4 = {
  userName: 'Kamile Searle',
  transactions: [530, 1300, 500, 40, 190],
  interest: 1,
  pin: 4444,
};

const account5 = {
  userName: 'Oliver Avila',
  transactions: [630, 800, 300, 50, 120],
  interest: 1.1,
  pin: 5555,
};

const accounts = [account1, account2, account3, account4, account5];

const coreyMartinezAccount = accounts.find(account => account.userName === 'Corey Martinez');
console.log(coreyMartinezAccount);

