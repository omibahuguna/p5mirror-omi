let col;

function setup() {
  createCanvas(600, 400);
  colorMode(HSB);
  col = width / 18;
}

function draw() {
  for (let x = 0; x < 18; x++) {
    fill(x * 20, 100, 100);
    noStroke();
    rect(x * col, 0, col, height);
  }
}
