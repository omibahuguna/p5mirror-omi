let x = 200;
let y = 200;
let speedX = 5;
let speedY = 8;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("orange");

  noStroke();
  fill (map(x, 25, 375, 0, 255));
  circle(x, y, 50);
  x += speedX;
  y += speedY;

  if (x >= 375 || x <= 25) {
    speedX = -speedX;
  }
  if (y >= 375 || y <= 25) {
    speedY = -speedY;
  }

}
