/*
Inspired by "rectangular forms" by the Belfort Group
Published in Computer Graphics and Art, 1976, Vol. 1, No. 3 	
*/

let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(50);
  cellSize = min(width / 10, height / 10);

  for (let x = 0; x < width; x += cellSize) {
    for (let y = 0; y < height; y += cellSize) {
      
      let chance = random(1);

      if (chance < 0.5) {
        fill(0);
      square(x, y, cellSize, 20);
      } else {
        fill(0);
        square(x, y, cellSize, 50);
      }
 
    }
  }
  noLoop();
}

function mousePressed() {
  loop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
