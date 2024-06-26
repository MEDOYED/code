'use strict';

function getAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    const info = `${firstName} is ${age}, born in ${birthYear}`;
    console.log(info);
  }

  printAge();

  return age;
}

const firstName = 'YouRa';
getAge(2005);
