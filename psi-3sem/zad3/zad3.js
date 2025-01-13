var training = [];
var ptron;

var count = 0;

var xmin = -400;
var ymin = -100;
var xmax = 400;
var ymax = 100;

function f(x) {
  return 0.4 * x + 1;
}

function setup() {
  createCanvas(640, 360);

  ptron = new Perceptron(3, 0.00001);

  for (var i = 0; i < 2000; i++) {
    var x = random(xmin, xmax);
    var y = random(ymin, ymax);
    var answer = 1;
    if (y < f(x)) answer = -1;
    training.push(new Trainer(x, y, answer));
  }
}

function draw() {
  background(255);
  translate(width / 2, height / 2);

  strokeWeight(4);
  stroke(127);
  var x1 = xmin;
  var y1 = f(x1);
  var x2 = xmax;
  var y2 = f(x2);
  line(x1, y1, x2, y2);

  stroke(0);
  strokeWeight(1);
  var weights = ptron.weights;
  x1 = xmin;
  y1 = (-weights[2] - weights[0] * x1) / weights[1];
  x2 = xmax;
  y2 = (-weights[2] - weights[0] * x2) / weights[1];
  line(x1, y1, x2, y2);

  ptron.train(training[count].inputs, training[count].answer);
  count = (count + 1) % training.length;

  for (var i = 0; i < count; i++) {
    stroke(0);
    strokeWeight(1);
    fill(0);
    var guess = ptron.feedforward(training[i].inputs);
    if (guess > 0) noFill();

    ellipse(training[i].inputs[0], training[i].inputs[1], 8, 8);
  }
}

function Perceptron(n, c) {
  this.weights = [];
  for (var i = 0; i < n; i++) {
    this.weights[i] = random(-1, 1);
  }
  this.c = c;

  this.train = function (inputs, desired) {
    var guess = this.feedforward(inputs);
    var error = desired - guess;
    for (var i = 0; i < this.weights.length; i++) {
      this.weights[i] += this.c * error * inputs[i];
    }
  };

  this.feedforward = function (inputs) {
    var sum = 0;
    for (var i = 0; i < this.weights.length; i++) {
      sum += inputs[i] * this.weights[i];
    }
    return this.activate(sum);
  };

  this.activate = function (sum) {
    if (sum > 0) return 1;
    else return -1;
  };
}

function Trainer(x, y, a) {
  this.inputs = [];
  this.inputs[0] = x;
  this.inputs[1] = y;
  this.inputs[2] = 1;
  this.answer = a;
}
