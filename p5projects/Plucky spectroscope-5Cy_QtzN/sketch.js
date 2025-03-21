function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  // 5 concentric circles in the center of the canvas where the ∆ of the diameter is 50 pixels
  circle(200, 200, 250);
  circle(200, 200, 200);
  circle(200, 200, 150);
  circle(200, 200, 100);
  circle(200, 200, 50);
}
