

let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  stroke(255);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  background(0, 25);

  translate(width / 2, height / 2);

  // responsiveness properties and mapping the motion of the circle to trig waves
  let minDimension = min(width, height);

  strokeWeight(minDimension * 0.015);

  let radius = minDimension * 0.15;
  let x = cos(angle) * radius;
  let y = sin(angle) * radius/2;

  circle(x, y, radius * y/30);
circle(x, y, radius * x/30);
  angle += 0.02;
}
