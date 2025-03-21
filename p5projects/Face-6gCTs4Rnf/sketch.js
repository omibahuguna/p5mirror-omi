function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(220);
  ears (100,200)
  ears (300,200)
  face();
  eye(150, 150);
  eye(250, 150);
  nose();
  mouth();
}

function face() {
  rect(width / 2, height / 2, 200, 300);
}

function eye(x, y) {
  ellipse(x, y, 30, 20);
}

function nose() {
  rect(width / 2, 200, 20, 80); 
}

function mouth() {
  // Draw an ellipse for the mouth
  ellipse(width / 2, 300, 80, 30);
}

function ears (x, y) {
  ellipse(x, y, 30, 100);
}