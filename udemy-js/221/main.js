'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const max = new Person('Max', 2005);
console.log(max);

console.log(max instanceof Person); // перевіряє чи є max екземпляром класу Person
