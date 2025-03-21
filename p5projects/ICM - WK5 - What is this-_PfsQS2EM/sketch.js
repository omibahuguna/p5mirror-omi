let userInput;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  strokeWeight(8);
  userInput = createInput();
}

function draw() {
  background(220);
  drawHead();
  drawEyes();
  drawMouth();
  drawPupil(150, 120, 30);
  drawPupil(250, 120, 30);
  let colorInput = userInput.value();
  drawTongue(150, colorInput);

  jail(50, 0, 15, 400);
}

function drawEyes() {
  push ()
  fill ("red")
  ellipse(150, 150, 40, 100);
  ellipse(250, 150, 40, 100);
  pop ()
}

function drawMouth() {
  arc(200, 225, 200, 160, 0, 180, CHORD);
}

function drawPupil(x, y, size) {
  push();
  fill("black");
  circle(x, y, size);
  pop();
}

function drawHead() {
  push();
  fill("yellow");
  circle(200, 200, 300);
  pop();
}

function jail(x, y, w, h) {
  push();
  fill(100);
  rect(x, y, w, h);
  rect(x + 100, y, w, h);
  rect(x + 200, y, w, h);
  rect(x + 300, y, w, h);
  pop();
}

function drawTongue(h, colorInput) {
  push();
  fill(colorInput);
  arc(200, 228, h, 250, 0, 180);
  pop();
}
