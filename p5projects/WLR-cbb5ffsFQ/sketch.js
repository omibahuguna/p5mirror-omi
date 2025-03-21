function setup() {
  createCanvas(200, 200);
  pixelDensity(1);
}

function draw() {
  background(220);
  for (let x = 0; x <= 200; x++) {
    for (let y = 0; y <= 200; y++) {
      stroke("red");
      point(x, y);
    }
  }
}
