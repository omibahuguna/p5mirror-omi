let totalPositions = 10;
let positionStep = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  fill(180, 50, 20);
  noStroke();
}

function draw() {
  background(0, 5);

  translate(width / 2, height / 2);

  let angle = (360 / totalPositions) * positionStep;
  
  rotate(angle);

  let minDimension = min(width, height);
  let diam = minDimension * 0.02;
  circle(diam*2, 0, diam);

  // function to draw the circle at the points on the angle
  if (frameCount % 5 === 0) {
    positionStep++;
    if (positionStep >= totalPositions) {
      positionStep = 0;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}
