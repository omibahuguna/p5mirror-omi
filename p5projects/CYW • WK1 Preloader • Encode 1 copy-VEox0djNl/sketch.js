let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  fill(255);
}

function draw() {
  blendMode(BLEND); // this allows the background to remain static, so subsequent blendMode function affects only the shapes being drawn over the background.
  noStroke()
  background(0, 50);
  // blendMode(DIFFERENCE);

  // setting up variables for responsiveness and relative positions and sizes for the s
  let x = width / 2;
  let y = height / 2;

  let minDimension = min(width, height);
  let spacing = minDimension / 25;

  circle(x, y, spacing * 4);

  // triangle(
  //   x - spacing,
  //   y - spacing * 3,
  //   x + spacing,
  //   y + spacing,
  //   x - spacing * 3,
  //   y + spacing
  // );
  
  // the push & pop functions are used in conjunction with the translate function to make sure the change in rotation only affects the square
  push();
  translate(x, y);
  rotate(angle);
  rectMode(CENTER);
  square(0, 0+spacing*4, spacing, spacing*10);
  angle += 1;
  pop();
}
