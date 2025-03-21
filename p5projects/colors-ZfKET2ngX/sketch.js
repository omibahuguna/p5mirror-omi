let colors = ["RED", "BLUE", "PINK", "GREEN", "YELLOW", "WHITE"];
let textColor = ["red", "blue", "pink", "green", "yellow", "white"];
let num = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  textSize(50);
  textAlign(CENTER);
  fill (textColor[num])
  text(colors[num], width / 2, height / 2);
}

function mouseClicked() {
  num = num + 1;
  
}
