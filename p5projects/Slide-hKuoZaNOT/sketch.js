let slide = 100;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(209, 227, 255);

  // slider bar
  rectMode(CENTER);
  rect(height / 2, width / 2, 200, 10, 20);

  // slider progress
  push();
  rectMode(CORNER);
  fill(4, 0, 255);
  rect(height / 4, width / 2 - 5, slide - 100, 10, 20);
  pop();

  // button
  push();
  fill(4, 0, 255);
  circle(slide, width / 2, 20);
  pop();

  // changes
  if (
    mouseIsPressed &&
    mouseX > 100 &&
    mouseX < 300 &&
    mouseY > 190 &&
    mouseY < 210
  ) {
    slide = mouseX;
  }
}
