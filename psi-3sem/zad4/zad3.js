function simulatedAnnealing(
  objectiveFunction,
  initialSolution,
  temperature,
  coolingRate,
  maxIterations,
) {
  let currentSolution = initialSolution;
  let currentScore = objectiveFunction(currentSolution);
  let bestSolution = currentSolution;
  let bestScore = currentScore;

  for (let i = 0; i < maxIterations; i++) {
    // Generowanie nowego rozwiązania (sąsiedniego)
    let newSolution = generateNeighbor(currentSolution);
    let newScore = objectiveFunction(newSolution);

    // Obliczanie zmiany wyniku
    let delta = newScore - currentScore;

    // Akceptacja nowego rozwiązania z pewnym prawdopodobieństwem zależnym od temperatury
    if (delta < 0 || Math.exp(-delta / temperature) > Math.random()) {
      currentSolution = newSolution;
      currentScore = newScore;
    }

    // Aktualizacja najlepszego znalezionego rozwiązania
    if (currentScore < bestScore) {
      bestSolution = currentSolution;
      bestScore = currentScore;
    }

    // Obniżenie temperatury
    temperature *= coolingRate;
  }

  return bestSolution;
}

function generateNeighbor(solution) {
  // Generowanie sąsiedniego rozwiązania poprzez losową modyfikację jednego elementu
  let newSolution = [...solution];
  let index = Math.floor(Math.random() * solution.length);
  newSolution[index] += Math.random() * 2 - 1; // Dodanie losowej wartości
  return newSolution;
}

// Funkcja celu (minimalizacja funkcji kwadratowej)
function objectiveFunction(solution) {
  return solution.reduce((sum, x) => sum + x * x, 0);
}

// Wykonanie algorytmu
let initialSolution = [5, 5, 5];
let temperature = 100;
let coolingRate = 0.95;
let maxIterations = 1000;

let result = simulatedAnnealing(
  objectiveFunction,
  initialSolution,
  temperature,
  coolingRate,
  maxIterations,
);

// Wypisanie najlepszego rozwiązania
console.log('Najlepsze znalezione rozwiązanie:', result);
