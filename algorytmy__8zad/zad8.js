function makeCharTable(string) {
  let table = Array(256).fill(string.length);
  for (let i = 0; i < string.length - 1; i++) {
    table[string.charCodeAt(i)] = string.length - 1 - i;
  }
  return table;
}

function boyerMooreHorspool(string, pattern) {
  let charTable = makeCharTable(pattern);
  let comparisons = 0;

  for (let i = pattern.length - 1, j; i < string.length; ) {
    for (j = pattern.length - 1; pattern[j] === string[i]; i--, j--) {
      comparisons++;
      if (j === 0) return { index: i, comparisons: comparisons };
    }

    i += Math.max(charTable[string.charCodeAt(i)], pattern.length - j);
    comparisons++;
  }

  return { index: -1, comparisons: comparisons };
}

let string = "mkalichfrosyabodyacka";
let pattern = "bodya";

let result = boyerMooreHorspool(string, pattern);

if (result.index !== -1) {
  console.log(
    `Wzorzec "${pattern}" znaleziony w pozycji ${result.index} w ${string}. Liczba porównań: ${result.comparisons}`
  );
} else {
  console.log(`Nie znaleziono wzorcu. Liczba porównań: ${result.comparisons}`);
}
