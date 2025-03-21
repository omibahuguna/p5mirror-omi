function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  let range = width / 10;

  noStroke();
  fill("red");
  if (mouseX < range) {
    rect(0, 0, range, height);
  } else if (mouseX < range * 2) {
    rect(range, 0, range, height);
  } else if (mouseX < range * 3) {
    rect(range * 2, 0, range, height);
  } else if (mouseX < range * 4) {
    rect(range * 3, 0, range, height);
  } else if (mouseX < range * 5) {
    rect(range * 4, 0, range, height);
  } else if (mouseX < range * 6) {
    rect(range * 5, 0, range, height);
  } else if (mouseX < range * 7) {
    rect(range * 6, 0, range, height);
  } else if (mouseX < range * 8) {
    rect(range * 7, 0, range, height);
  } else if (mouseX < range * 9) {
    rect(range * 8, 0, range, height);
  } else {
    rect(range * 9, 0, range, height);
  }
}
