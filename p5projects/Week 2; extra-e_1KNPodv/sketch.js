let circleX;
let circleY;

function setup() {
  createCanvas(400, 400);
  circleX = 200;
  circleY = 200;
}

function draw() {
  background(0);

  let trailX = mouseX - circleX;
  let trailY = mouseY - circleY;

  circleX += trailX * 0.05;
  circleY += trailY * 0.05;

  noStroke ()
  fill ("red")
  circle(circleX, circleY, 20);
}
