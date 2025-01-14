let training = [];
let ptron;

let count = 0;

const xmin = -400;
const ymin = -100;
const xmax = 400;
const ymax = 100;

function f(x) {
  return 0.5 * x + 1;
}

function setup() {
  createCanvas(700, 700);
  frameRate(60);

  ptron = new Perceptron(3, 0.0001);

  for (let i = 0; i < 2000; i++) {
    const x = random(xmin, xmax);
    const y = random(ymin, ymax);
    const answer = y < f(x) ? -1 : 1;
    training.push(new Trainer(x, y, answer));
  }
}

function drawTargetLine() {
  strokeWeight(4);
  stroke(100);
  const x1 = xmin;
  const y1 = f(x1);
  const x2 = xmax;
  const y2 = f(x2);
  line(x1, y1, x2, y2);
}

function drawPerceptronLine() {
  stroke(0);
  strokeWeight(1);
  const weights = ptron.weights;
  const x1 = xmin;
  const y1 = (-weights[2] - weights[0] * x1) / weights[1];
  const x2 = xmax;
  const y2 = (-weights[2] - weights[0] * x2) / weights[1];
  line(x1, y1, x2, y2);
}

function drawPoints() {
  for (let i = 0; i < count; i++) {
    stroke(0);
    strokeWeight(1);
    fill(0);
    const guess = ptron.feedforward(training[i].inputs);
    if (guess > 0) noFill();

    ellipse(training[i].inputs[0], training[i].inputs[1], 8, 8);
  }
}

function draw() {
  background(255);
  translate(width / 2, height / 2);

  drawTargetLine();
  drawPerceptronLine();

  ptron.train(training[count].inputs, training[count].answer);
  count = (count + 1) % training.length;

  drawPoints();
}

class Perceptron {
  constructor(n, c) {
    this.weights = Array.from({ length: n }, () => random(-1, 1));
    this.c = c;
  }

  train(inputs, desired) {
    const guess = this.feedforward(inputs);
    const error = desired - guess;
    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] += this.c * error * inputs[i];
    }
  }

  feedforward(inputs) {
    const sum = inputs.reduce((acc, val, i) => acc + val * this.weights[i], 0);
    return this.activate(sum);
  }

  activate(sum) {
    return sum > 0 ? 1 : -1;
  }
}

class Trainer {
  constructor(x, y, answer) {
    this.inputs = [x, y, 1];
    this.answer = answer;
  }
}
