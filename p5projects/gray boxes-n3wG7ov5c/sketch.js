function setup() {
  createCanvas(600, 600);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(255);
  fill(0);
  let s = 30;


  for (let x = 0; x < width; x += s) {
    for (let y = 0; y < height; y += s) {
      fill (random (0,255))
      rect(x + s / 2, y + s / 2, s);
    }
  }
   noLoop()
}
