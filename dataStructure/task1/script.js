const game = {
  team1: 'REAL MADRID',
  team2: 'BARCELONA',
  players: [
    [
      'Courtois',
      'Vazquez',
      'Militao',
      'Nacho',
      'Mendy',
      'Casemiro',
      'Valverde',
      'Modrich',
      'Kroos',
      'Vinicius',
      'Benzema',
    ],
    [
      'Stegen',
      'Mingueza',
      'Araujo',
      'Lenglet',
      'Dest',
      'Busquets',
      'Jong',
      'Alba',
      'Messi',
      'Pedri',
      'Dembele',
    ],
  ],
  score: '2:1',
  scored: ['Kroos', 'Benzema', 'Mingueza'],
  date: 'Apr 10th, 2021',
  odds: {
    team1: 1.48,
    draw: 2.53,
    team2: 4.25,
  },
};

// 1. Create separate arrays with players for each team (variables players1 and players2).

const [players1, players2] = game.players
console.log(players1);
console.log(players2);

// 2. The first player in each of these arrays is the goalkeeper and the rest are the field players. For REAL MADRID (team1) create one variable (goalkeeper) with the name of the goalkeeper and one array (fieldPlayers) with all the remaining 10 field players.

// Перший гравець у кожному з цих масивів - воротар, а решта - польові гравці. Для REAL MADRID (team1) створіть одну змінну (goalkeeper) з ім'ям воротаря і один масив (fieldPlayers) з усіма іншими 10 польовими гравцями.

// const team1 = [...players1];
const [goalkeeper, ...fieldPlayers] = players1;
console.log(goalkeeper, fieldPlayers);

// 3. Create an array allPlayers containing all players from both teams (22 players).

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. REAL MADRID (team1) used 5 substitute players during the game. Create a new array (players1Total) containing all original players of team1 as well as ‘Marcelo’, 'Isco', 'Asensio', ‘Diaz' and 'Odriozola'.

const players1Total = [...players1, 'Marcelo', 'Isco', 'Asensio', 'Diaz', 'Odrizola'];
console.log(players1Total);

// Based on the game.odds object, create one variable for each odd (called team1, draw and team2).
const {team1, draw, team2} = game.odds;
console.log(team1);
console.log(draw);
console.log(team2);

// 6. A write function printGoals that takes an arbitrary number of player names (NOT an array) and prints each one to the console along with the total number of goals scored (the number of player names passed to the function).

// 6. Функція запису printGoals, яка приймає довільну кількість імен гравців (НЕ масив) і виводить кожне з них на консоль разом із загальною кількістю забитих голів (кількість імен гравців, переданих у функцію).



// 7. The team with the lower odds will win more likely. Print to the console which team is more likely to win, WITHOUT using an if / else or ternary operator.
// Test data for 6.: First use 'Mingueza', 'Messi', 'Modrich' and 'Nacho' players. Then call the function again with the players from game.scored.

// 7. Команда з меншим коефіцієнтом виграє з більшою ймовірністю. Виведіть у консоль, яка команда має більше шансів на перемогу, БЕЗ використання операторів if / else або тернарних операторів.
// Тестові дані для 6: Спочатку введіть гравців 'Mingueza', 'Messi', 'Modrich' та 'Nacho'. Потім викличте функцію ще раз з гравцями з game.scored.