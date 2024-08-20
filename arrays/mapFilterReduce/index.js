// Method map()

const transactions = [500, 250, -300, 5000, -850, -110, -170, 1100];

const usdToEuro = 0.86;

// const transactionsEuro = transactions.map(function(trans) {
//   return trans * usdToEuro;
// })

const transactionsEuro = transactions.map(trans => trans * usdToEuro);

console.log(transactions);
console.log('==================');
console.log(transactionsEuro);

const transactionsEuro1 = [];

for (const trans of transactions) {
  transactionsEuro1.push(trans * usdToEuro);
}

console.log(transactionsEuro1);

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

const transactionDescription = transactions.map(
  (transaction, index, array) =>
    `Transaction №${index + 1}: ${Math.abs(transaction)} was ${
      transaction > 0 ? 'deposited' : 'withdrew'
    }`,
);

console.log(transactionDescription);
