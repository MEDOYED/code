// Вернемся к исследованию кошек Женей и Юлей. На этот раз они хотят преобразовать возраст кошек в человеческий возраст и вычислить средний возраст кошек в своем исследовании.
// Создайте функцию getAverageHumanAge, которая принимает массив возрастов кошек (catAges) и выполняет следующие действия по порядку:

// 1. Рассчитывает человеческий возраст по следующей формуле: если возраст кошки <= 2 года, человеческий возраст = возраст кошки * 10. Если кошке больше 2 лет, человеческий возраст = возраст кошки * 7.
// 2. Исключает всех кошек младше 18 человеческих лет.
// 3. Возвращает средний человеческий возраст для всех взрослых кошек.

// Вызовите функцию для обоих наборов тестовых данных.
// Тестовые данные:
// 1: [7 , 3, 2, 4, 1, 15, 8, 1, 9, 2]
// 2: [1, 16, 12, 4, 5, 1, 3, 11, 7, 2]

// const catsAges2 = [1, 16, 12, 4, 5, 1, 3, 11, 7, 2];
// const catsAges1 = [7, 3, 2, 4, 1, 15, 8, 1, 9, 2];

// 1. Рассчитывает человеческий возраст по следующей формуле: если возраст кошки <= 2 года, человеческий возраст = возраст кошки * 10. Если кошке больше 2 лет, человеческий возраст = возраст кошки * 7.
// const getHumanAge = function (arr) {
//   const humanAge = arr.map(function (i) {
//     if (i <= 2) {
//       return i * 10;
//     } else {
//       return i * 7;
//     }
//   });
//   return humanAge;
// };
// console.log(getHumanAge(catsAges1));
// console.log(getHumanAge(catsAges2));

// // 2. Исключает всех кошек младше 18 человеческих лет.
// const more18YearsCatsAges1 = getHumanAge(catsAges1).filter(function (i) {
//   return i >= 18;
// });

// console.log(more18YearsCatsAges1);

// const more18YearsCatsAges2 = getHumanAge(catsAges2).filter(function (i) {
//   return i >= 18;
// });

// console.log(more18YearsCatsAges2);

// // 3. Возвращает средний человеческий возраст для всех взрослых кошек.

// const getAverageHumanAge = function(arr) {
//   const total = arr.reduce(function(acc, item) {
//     return acc + item
//   }, 0);
//   return total / arr.length;
// }
// console.log(getAverageHumanAge(more18YearsCatsAges1));
// console.log(getAverageHumanAge(more18YearsCatsAges2));

// const getAverageHumanAge = function (catsAges) {
//   const humanAges = catsAges.map(catAge =>
//     catAge <= 2 ? catAge * 10 : catAge * 7,
//   );
//   const adultCats = humanAges.filter(humanAge => humanAge >= 18);
//   const averageHumanAge =
//     adultCats.reduce((acc, catAge) => acc + catAge, 0) / adultCats.length;
//   return averageHumanAge;
// };

// const averageHumanAge1 = getAverageHumanAge([1, 16, 12, 4, 5, 1, 3, 11, 7, 2]);
// const averageHumanAge2 = getAverageHumanAge([7, 3, 2, 4, 1, 15, 8, 1, 9, 2]);

// console.log(averageHumanAge1);
// console.log(averageHumanAge2);

// Перепишите функцию getAverageHumanAge из Задания 2, но на этот раз как стрелочную функцию и с использованием method chaining.
// Тестовые данные:
// 1: [7 , 3, 2, 4, 1, 15, 8, 1, 9, 2]
// 2: [1, 16, 12, 4, 5, 1, 3, 11, 7, 2]

const getAverageHumanAge = catsAges => catsAges
    .map(catAge => (catAge <= 2 ? catAge * 10 : catAge * 7))
    .filter(humanAge => humanAge >= 18)
    .reduce((acc, catAge, index, arr) => acc + catAge / arr.length, 0);

const averageHumanAge1 = getAverageHumanAge([7, 3, 2, 4, 1, 15, 8, 1, 9, 2]);
const averageHumanAge2 = getAverageHumanAge([1, 16, 12, 4, 5, 1, 3, 11, 7, 2]);

console.log(averageHumanAge1);
console.log(averageHumanAge2);
