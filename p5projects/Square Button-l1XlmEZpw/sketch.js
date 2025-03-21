let isOn = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  rectMode(CENTER);
  rect(width / 2, height / 2, 200);

  if (isOn == false) {
    noStroke();
    fill(255);
  } else {
    fill(245, 200, 66);
  }
  isOn = mouseX > 100 && mouseX < 300 && mouseY > 100 && mouseY < 300;

  if (
    mouseIsPressed &&
    mouseX > 100 &&
    mouseX < 300 &&
    mouseY > 100 &&
    mouseY < 300
  ) {
    fill(0);
  }
}
