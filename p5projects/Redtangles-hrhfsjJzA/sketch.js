function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  let range = width / 4;

  noStroke();
  fill("red");
  if (mouseX < range) {
    rect(0, 0, range, height);
  } else if (mouseX < range * 2) {
    rect(range, 0, range, height);
  } else if (mouseX < range * 3) {
    rect(range * 2, 0, range, height);
  } else {
    rect(range * 3, 0, range, height);
  }
}
