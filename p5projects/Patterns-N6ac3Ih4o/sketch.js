function setup() {
  createCanvas(600, 600);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(255);
  fill(0);
  let s = 10;


  for (let x = 0; x < width; x += s) {
    for (let y = 0; y < height; y += s) {
      let size = random ( 8, 11);
      rect(x + s / 2, y + s / 2, size);
    }
  }
}
