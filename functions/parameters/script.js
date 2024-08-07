'use strict';

// const bookings = [];

// const makeBooking = function (flightNum, passangersNum = 1, price = 20 * passangersNum) {
//   // установка параметров по умолчанию Before ES6
//   // passangersNum = passangersNum || 1;
//   // price = price || 20;

//   const booking = {
//     flightNum,
//     passangersNum,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// makeBooking('QE123');
// makeBooking('TU295', 4, 290);
// makeBooking('NI123',undefined , 400)

// const flightNumber = 'BV238';
// const passanger11234 = {
//   firstName: 'Jack',
//   lastName: 'Brown',
//   passpord: 23435,
// };

// const checkIn = function (flight, passanger) {
//   flight = 'bv238';
//   passanger.firstName = passanger.firstName.toLowerCase();
//   passanger.lastName = passanger.lastName.toLowerCase();

//   if (passanger.passpord === 23435) {
//     alert('Welcome to the board');
//   } else {
//     alert('Incorect passport!');
//   }
// };

// const flight = flightNumber;
// const passanger = passanger11234;

// checkIn(flightNumber, passanger11234);
// console.log(passanger11234);
// console.log(flightNumber);

// // ======================

// const changePassportNumber = function(person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// }

// changePassportNumber(passanger11234);
// checkIn(flightNumber, passanger11234);

// ===============================================================================

// функції, що приймають callback фунції

// const removeSpaces = function (text) {
//   return text.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (text) {
//   const [first, ...others] = text.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // функція вищого порядку ||  Hight-Order function
// const converter = function (str, func) {
//   console.log(`The converted text: ${str}`);
//   console.log(`The converted text: ${func(str)}`);

//   console.log(`Converted by: ${func.name}`);
// };

// converter('Hello to everyone', upperFirstWord);
// converter('Hello to everyone', removeSpaces);

// // callback functions are very common in js
// const twice = num => console.log(num * 2);

// [1, 2, 3].forEach(twice);

// ================================================================================

//  функції, що повертають функції

// const greet = function (greetingText) {
//   return function (name) {
//     console.log(`${greetingText} ${name}!`);
//   };
// };

// // greet () =>
// // const greet = greetingText => name => console.log(`${greetingText} ${name}!`);

// const hi = greet('Hi');
// hi('Maks');
// hi('Jack');

// greet('hello')('Liu');

// ======================================================================================
// методи call() и apply()

// const book = function (flightNumber, passengerName) {
//   console.log(
//     `${passengerName} has booked a ticket on ${this.airlineName} flight ${this.iataCode}${flightNumber}`,
//   );
//   this.bookings.push({
//     flight: `${this.iataCode}${flightNumber}`,
//     passengerName,
//   });
// };

const airline1 = {
  airlineName: 'SkyUp',
  iataCode: 'SU',
  bookings: [],
  book(flightNumber, passengerName) {
    console.log(
      `${passengerName} has booked a ticket on ${this.airlineName} flight ${this.iataCode}${flightNumber}`,
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNumber}`,
      passengerName,
    });
  },
};

// airline1.book(346, 'Jim Green');
// airline1.book(635, 'Michael Jordan');

// console.log(airline1);

const airline2 = {
  airlineName: 'EuroFlights',
  iataCode: 'EF',
  bookings: [],
};

const book = airline1.book;

// book(345, 'Linda Wiliams');

// book.call(airline2, 345, 'Linda Wilams');
// console.log(airline2);

// book.call(airline1, 123, 'Bob Smith');
// console.log(airline1);

const bookAirline2 = book.bind(airline2);
bookAirline2(45, 'John Doe');
console.log(airline2);

const airline3 = {
  airlineName: 'USFlights',
  iataCode: 'USF',
  bookings: [],
};

const bookAirline3 = book.bind(airline3);
bookAirline3(11, 'Marta Jonson');
console.log(airline3);

// Partial application
const getPersontage = (totalValue, value) => value / totalValue*100;
console.log(`${getPersontage(20, 23789)}%`);

const getPersontage23789 = getPersontage.bind(null, 23789);
console.log(getPersontage23789(100));