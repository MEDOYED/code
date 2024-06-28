'use strict';

// function getAge(birthYear) {
//   const age = 2024 - birthYear;

//   function printAge() {
//     let info = `${firstName} is ${age}, born in ${birthYear}`;
//     console.log(info);

//     if (age >= 18) {
//       var isAdult = true;
//       const firstName = 'John';
//       const adult = `${firstName} is adult`;
//       console.log(adult);

//       function sum(a, b) {
//         return a + b;
//       }
//       console.log(sum(1, 3));

//       info = 'New info';
//     }
//     console.log(info);
//     console.log(isAdult);
//   }

//   printAge();
//   // console.log(isAdult);   ReferenceError:
//   return age;
// }

// const firstName = 'YouRa';
// getAge(2005);

//Hoisting

// Variables hoisting
// console.log(firstName);
// console.log(job);
// console.log(birthYear);

// var firstName = 'Maks';
// let job = 'Programmer';
// const birthYear = '2005';

// // function hoisting

// console.log(declarationSum(1, 3));

// function declarationSum(a, b) {
//   return a + b;
// }

// const expresionSum = function (a, b) {
//   return a + b;
// };

// const arrowFunction = (a, b) => a + b;

// //Exapmle

// let isUserValid = true;

// if (!isUserValid) {
//   deleteUser();
// }

// function deleteUser() {
//   console.log('User is deleted');
// }

// var a = 1;
// let b = 2;
// const c = 3;

// console.log(a === window.a);
// console.log(b === window.b);
// console.log(c === window.c);

// // ======================================================================

// //this keyword

// // console.log(this);

// const getAge = function (birthYear) {
//   console.log(2021 - birthYear);
//   console.log(this);
// };

// getAge(2000);

// const getAgeArr = birthYear => {
//   console.log(2021 - birthYear);
//   console.log(this);
// };

// getAgeArr(2000);

// const user187 = {
//   birthYear: 1974,
//   getAge: function () {
//     console.log(this);
//     console.log(2021 - this.birthYear);
//   },
// };

// user187.getAge();

// const user188  = {
//   birthYear: 2002,
// };

// user188.getAge = user187.getAge;
// user188.getAge();

// // console.log(user188);

//Regular vs ARROW FUNCTION

// var firstName = 'Maks';

// const user187 = {
//   firstName: 'YouRa',
//   birthYear: 1974,
//   getAge: function () {
//     console.log(this);
//     console.log(2021 - this.birthYear);

//     const self = this; // self of that

//     const isAdult = function () {
//       console.log(self);
//       console.log(2021 - self.birthYear >= 18);
//     };
//     isAdult();
//   },
//   sayGreeting: function () {
//     // console.log(this);
//     console.log(`Hello, I'm ${this.firstName}`);
//   },
// };

// user187.sayGreeting();

// let a = 1;
// let b = a;
// a = 2;
// console.log(a);
// console.log(b);

// const x = {
//   foo: 'bar',
//   a: 1,
// };

// const y = x;
// y.a = 2;

// console.log('Object x:', x);
// console.log('Object y:', y);


let lastName = 'Brown';
let oldLastName = lastName;
lastName = 'White';
console.log(lastName, oldLastName);

const jane = {
  firstName: 'Jane',
  lastName: 'Brown',
  age: 21,
}

const marriedJane = jane;
marriedJane.lastName = 'White';
console.log('Jane: ', jane);
console.log('Married Jane: ', marriedJane);

//objects copying 

const sara = {
  firstName: 'Sara',
  lastName: 'Brown',
  age: 25,
  familyMembers: ['Jack', 'Bob', 'Greta'],
}

const saraCopy = Object.assign({}, sara);
saraCopy.lastName = 'White';
saraCopy.familyMembers.push('Bill', 'Marta');

console.log('Sara: ', sara);
console.log('Married Sara: ', saraCopy);
