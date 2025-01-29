'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties - свойства екземпляра - властивості екземпляру
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const max = new Person('Max', 2005);
console.log(max);

console.log(max instanceof Person); // перевіряє чи є max екземпляром класу Person

console.log('------------');

///////////////////////////////////////////////////////////////////////////
// Прототипи  Prototypes
console.log(Person.prototype);

Person.prototype.printAge = function () {
  console.log(2025 - this.birthYear);
};

max.printAge();

// вивід в консоль прототипа об'єкта

console.log('------------');
console.log(max.__proto__);
console.log(max.__proto__ === Person.prototype);
