function setup() {
  createCanvas(600, 600);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(255);
  fill(0);
  let gap = 10; 
  
  for (let x = 0; x < width; x += gap) {
    for (let y = 0; y < height; y += gap) {
      let noiseValue = noise(x, y, frameCount * 0.05);
      let s = map(noiseValue, 0, 1, 8, 11);
      rect(x + gap / 2, y + gap / 2, s);
    }
  }
}