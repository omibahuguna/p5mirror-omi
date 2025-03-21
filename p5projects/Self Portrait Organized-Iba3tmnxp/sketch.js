function setup() {
  createCanvas(800, 600);
}

function draw() {
  background("#ff3c00");

  head();
  leftEye();
  rightEye();
  mouth();
  nose();
  brow();

  type(400, 300);
  type(420, 340);
}

function leftEye() {
  fill("#ffff");
  circle(150, 200, 120);
  fill("#000000");
  circle(150, 170, 50);
}

function rightEye() {
  fill("#ffff");
  circle(500, 200, 100);
  fill("#000000");
  circle(500, 200, 50);
}

function head() {
  noStroke();
  fill("#bc48c0");
  quad(100, 100, 160, 500, 500, 500, 600, 100);
}

function mouth() {
  ellipse(300, 400, 200, 100);
}

function nose() {
  fill("#1d3b0f");
  triangle(400, 300, 350, 150, 300, 300);
}

function brow() {
  fill("#54105a");
  triangle(400, 200, 100, 20, 86, 75);
}

function type(x, y) {
  noStroke();
  fill("#000000");
  textSize(50);
  text("SCATTERED", x, y);
}
