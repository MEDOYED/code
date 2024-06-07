class PriorityQueue {
  constructor() {
      this.queue = [];
  }

  enqueue(node, priority) {
      this.queue.push({node, priority});
      this.sort();
  }

  dequeue() {
      return this.queue.shift();
  }

  sort() {
      this.queue.sort((a, b) => a.priority - b.priority);
  }
}

function shortestPath(graph, startNode, endNode) {
  let distances = {};
  let previous = {};
  let path = [];
  let nodes = new PriorityQueue();

  for (let node in graph) {
      if (node === startNode) {
          distances[node] = 0;
          nodes.enqueue(node, 0);
      } else {
          distances[node] = Infinity;
          nodes.enqueue(node, Infinity);
      }
      previous[node] = null;
  }

  let smallest;
  while (nodes.queue.length) {
      smallest = nodes.dequeue().node;
      if (smallest === endNode) {
          while (previous[smallest]) {
              path.push(smallest);
              smallest = previous[smallest];
          }
          break;
      }

      if (smallest || distances[smallest] !== Infinity) {
          for (let neighbor in graph[smallest]) {
              let distance = distances[smallest] + graph[smallest][neighbor];

              if (distance < distances[neighbor]) {
                  distances[neighbor] = distance;
                  previous[neighbor] = smallest;
                  nodes.enqueue(neighbor, distance);
              }
          }
      }
  }
  return smallest ? path.concat(smallest).reverse() : [];
}

let graph = {
  A: {B: 1, C: 4},
  B: {A: 1, D: 2, E: 5},
  C: {A: 4, F: 3},
  D: {B: 2, G: 2},
  E: {B: 5, G: 1},
  F: {C: 3, G: 2},
  G: {D: 2, E: 1, F: 2}
};

console.log(shortestPath(graph, 'A', 'G')); 