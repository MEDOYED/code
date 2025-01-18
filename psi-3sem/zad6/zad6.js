// Funkcja do obliczenia sumy zbiorów
function sumaZbiorow(zbiorA, zbiorB) {
  // Tworzymy nowy zbiór, który zawiera wszystkie elementy z obu zbiorów
  return new Set([...zbiorA, ...zbiorB]);
}

// Funkcja do obliczenia przecięcia zbiorów
function przeciecieZbiorow(zbiorA, zbiorB) {
  // Tworzymy nowy zbiór, który zawiera tylko wspólne elementy
  return new Set([...zbiorA].filter(element => zbiorB.has(element)));
}

// Funkcja do obliczenia iloczynu kartezjańskiego zbiorów
function iloczynZbiorow(zbiorA, zbiorB) {
  // Tworzymy nowy zbiór jako pary elementów z obu zbiorów
  let iloczyn = new Set();
  zbiorA.forEach(a => {
    zbiorB.forEach(b => {
      iloczyn.add([a, b]); // Tworzymy parę [a, b]
    });
  });
  return iloczyn;
}

// Funkcja przynależności dla zbioru rozmytego
function funkcjaPrzynaleznosci(x, a, b) {
  // Jeśli x jest poza granicami, przynależność wynosi 0
  if (x <= a) return 0;
  if (x >= b) return 0;
  // Jeśli x jest w środku, obliczamy wartość przynależności
  return (x - a) / (b - a);
}

// Funkcja do rozmytego podejmowania decyzji
function rozmytePodejmowanieDecyzji(wartosci, granice) {
  let wyniki = [];

  wartosci.forEach(wartosc => {
    let przynaleznosc = funkcjaPrzynaleznosci(wartosc, granice.a, granice.b);
    wyniki.push({ wartosc, przynaleznosc });
  });

  // Sortujemy wyniki według przynależności (od najwyższej do najniższej)
  wyniki.sort((a, b) => b.przynaleznosc - a.przynaleznosc);

  return wyniki;
}

// Przykładowe dane dla operacji na zbiorach
const zbiorA = new Set([1, 2, 3]);
const zbiorB = new Set([3, 4, 5]);

// Wyniki operacji na zbiorach
console.log('Suma zbiorów:', [...sumaZbiorow(zbiorA, zbiorB)]);
console.log('Przecięcie zbiorów:', [...przeciecieZbiorow(zbiorA, zbiorB)]);
console.log('Iloczyn zbiorów:', [...iloczynZbiorow(zbiorA, zbiorB)]);

// Przykładowe dane dla rozmytego podejmowania decyzji
const wartosci = [1, 3, 5, 7, 9]; // Wartości wejściowe
const granice = { a: 2, b: 8 }; // Granice funkcji przynależności

// Rozmyte podejmowanie decyzji
const wynik = rozmytePodejmowanieDecyzji(wartosci, granice);

// Wyświetlenie wyników
console.log('Rozmyte podejmowanie decyzji:');
wynik.forEach(element => {
  console.log(
    `Wartość: ${
      element.wartosc
    }, Przynależność: ${element.przynaleznosc.toFixed(2)}`,
  );
});
