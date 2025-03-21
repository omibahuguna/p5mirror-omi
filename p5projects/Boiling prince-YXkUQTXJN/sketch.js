function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  rectMode(CENTER);
  frameRate(30);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  fill("green");
  
  // Calculate gap to ensure exactly 45,000 units
  let totalUnits = 45000;
  let unitsPerRow = Math.ceil(Math.sqrt(totalUnits * (width / height)));
  let unitsPerCol = Math.ceil(totalUnits / unitsPerRow);
  
  let gapX = width / unitsPerRow;
  let gapY = height / unitsPerCol;
  
  for (let x = 0; x < width; x += gapX) {
    for (let y = 0; y < height; y += gapY) {
      // Use more pronounced noise for visibility
      let noiseValue = noise(x * 0.01, y * 0.01, frameCount * 0.05);
      let size = map(noiseValue, 0, 1, gapX * 0.6, gapX * 0.9);
      
      rect(x + gapX / 2, y + gapY / 2, size);
    }
  }
}