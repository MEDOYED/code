// Tworzenie tabeli decyzyjnej z 8 obiektami, 4 atrybutami (w tym jednym decyzyjnym)
const tabelaDecyzyjna = [
  { obiekt: 'O1', A1: 1, A2: 'yes', A3: 0.5, decyzja: 'accept' },
  { obiekt: 'O2', A1: 2, A2: 'no', A3: 0.7, decyzja: 'reject' },
  { obiekt: 'O3', A1: 1, A2: 'yes', A3: 0.5, decyzja: 'accept' },
  { obiekt: 'O4', A1: 2, A2: 'no', A3: 0.8, decyzja: 'reject' },
  { obiekt: 'O5', A1: 1, A2: 'no', A3: 0.5, decyzja: 'reject' },
  { obiekt: 'O6', A1: 2, A2: 'yes', A3: 0.7, decyzja: 'accept' },
  { obiekt: 'O7', A1: 1, A2: 'no', A3: 0.8, decyzja: 'reject' },
  { obiekt: 'O8', A1: 2, A2: 'yes', A3: 0.6, decyzja: 'accept' },
];

// Funkcja do znalezienia minimalnych reguł decyzyjnych
function znajdzMinimalneReguly(tabela) {
  const reguly = new Set();

  tabela.forEach(obiekt => {
    if (obiekt.A2 === 'yes') {
      reguly.add('Jeśli A2 = yes, to decyzja = accept');
    } else if (obiekt.A2 === 'no') {
      reguly.add('Jeśli A2 = no, to decyzja = reject');
    }
  });

  return Array.from(reguly);
}

// Wypisanie minimalnych reguł decyzyjnych
const regulyDecyzyjne = znajdzMinimalneReguly(tabelaDecyzyjna);
console.log('Minimalne reguły decyzyjne:');
regulyDecyzyjne.forEach(regula => console.log(regula));
