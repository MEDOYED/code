// 'use strict';

function getAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    let info = `${firstName} is ${age}, born in ${birthYear}`;
    console.log(info);

    if (age >= 18) {
      var isAdult = true;
      const firstName = 'John';
      const adult = `${firstName} is adult`;
      console.log(adult);

      function sum(a, b) {
        return a + b;
      }
      console.log(sum(1, 3));

      info = 'New info';
    }
    console.log(info);
    console.log(isAdult);
  }

  printAge();
  // console.log(isAdult);   ReferenceError:
  return age;
}

const firstName = 'YouRa';
getAge(2005);
