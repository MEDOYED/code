function hanoi(n, fromRod, toRod, auxRod) {
  if (n === 1) {
    console.log(`Przenieś dysk 1 z ${fromRod} na ${toRod}`);
    return;
  }
  hanoi(n - 1, fromRod, auxRod, toRod);
  console.log(`Przenieś dysk ${n} z ${fromRod} na ${toRod}`);
  hanoi(n - 1, auxRod, toRod, fromRod);
}

const numberOfDisks = 4;
hanoi(numberOfDisks, 'A', 'C', 'B');
