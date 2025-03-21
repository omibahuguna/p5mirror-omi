function setup() {
  createCanvas(600, 600);
  background(0);
}

function mouseClicked() {
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);
  fill(r, g, b);
  
  let bg = random (0,255)
}

function draw() {
  
  rectMode(CENTER);
  noStroke();
  rect(mouseX, mouseY, 30);
}
