// Implementacja algorytmu A* (A-star) w JavaScript bez użycia wbudowanych metod

class Node {
  constructor(name, neighbors = [], g = 999999, h = 0) {
    this.name = name; // Nazwa wierzchołka
    this.neighbors = neighbors; // Sąsiedzi wierzchołka z wagami krawędzi
    this.g = g; // Koszt przejścia od punktu początkowego do tego wierzchołka
    this.h = h; // Heurystyka, czyli przewidywany koszt do punktu końcowego
    this.f = this.g + this.h; // Łączny koszt f = g + h
  }
}

function aStar(startNode, endNode) {
  let openSet = [startNode]; // Lista wierzchołków do sprawdzenia
  let closedSet = []; // Lista już odwiedzonych wierzchołków

  startNode.g = 0;
  startNode.f = startNode.h;

  while (openSet.length > 0) {
    // Znalezienie wierzchołka z najmniejszym f bez użycia reduce
    let currentNode = openSet[0];
    for (let i = 1; i < openSet.length; i++) {
      if (openSet[i].f < currentNode.f) {
        currentNode = openSet[i];
      }
    }

    // Sprawdzenie, czy dotarliśmy do węzła końcowego
    if (currentNode === endNode) {
      return reconstructPath(currentNode);
    }

    // Przeniesienie wierzchołka z openSet do closedSet bez filter
    let newOpenSet = [];
    for (let i = 0; i < openSet.length; i++) {
      if (openSet[i] !== currentNode) {
        newOpenSet.push(openSet[i]);
      }
    }
    openSet = newOpenSet;

    closedSet.push(currentNode);

    // Przejście po sąsiadach
    for (let i = 0; i < currentNode.neighbors.length; i++) {
      let neighbor = currentNode.neighbors[i][0];
      let weight = currentNode.neighbors[i][1];

      let isInClosedSet = false;
      for (let j = 0; j < closedSet.length; j++) {
        if (closedSet[j] === neighbor) {
          isInClosedSet = true;
          break;
        }
      }
      if (isInClosedSet) {
        continue; // Pomijamy już odwiedzonych sąsiadów
      }

      let tentativeG = currentNode.g + weight;

      let isInOpenSet = false;
      for (let j = 0; j < openSet.length; j++) {
        if (openSet[j] === neighbor) {
          isInOpenSet = true;
          break;
        }
      }

      if (!isInOpenSet) {
        openSet.push(neighbor);
      } else {
        let skipNeighbor = false;
        for (let j = 0; j < openSet.length; j++) {
          if (openSet[j] === neighbor && tentativeG >= neighbor.g) {
            skipNeighbor = true;
            break;
          }
        }
        if (skipNeighbor) {
          continue;
        }
      }

      // Aktualizacja wartości g, h i f dla sąsiada
      neighbor.g = tentativeG;
      neighbor.f = neighbor.g + neighbor.h;
      neighbor.previous = currentNode;
    }
  }

  return []; // Zwraca pustą ścieżkę, jeśli nie znaleziono rozwiązania
}

function reconstructPath(node) {
  let path = [];
  while (node) {
    path.push(node.name);
    node = node.previous;
  }

  // Odwrócenie ścieżki bez użycia reverse
  let reversedPath = [];
  for (let i = path.length - 1; i >= 0; i--) {
    reversedPath.push(path[i]);
  }

  return reversedPath;
}

// Przykładowy graf
let start = new Node('A', []);
let b = new Node('B', []);
let c = new Node('C', []);
let end = new Node('D', []);

start.neighbors = [
  [b, 1],
  [c, 4],
];
b.neighbors = [[end, 1]];
c.neighbors = [[end, 2]];

// Heurystyka (przykładowe wartości)
start.h = 3;
b.h = 1;
c.h = 2;
end.h = 0;

// Wywołanie algorytmu
let shortestPath = aStar(start, end);
console.log('Najkrótsza ścieżka:', shortestPath);
