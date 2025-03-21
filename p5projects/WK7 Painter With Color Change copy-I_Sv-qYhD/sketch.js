function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  noStroke();
  ellipse(mouseX, mouseY, 50);
}

function mouseClicked() {
  let r = random(255);
  let g = random(255);
  let b = random(255);
  fill(r, g, b);
}
