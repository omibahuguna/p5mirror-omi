/*
Inspired by Vera Molnár's Dispersion and simliar works
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255);
noStroke ()
}

function draw() {
  background(0);

  frameRate (8)

  let columnWidth = min(width / 20, height / 20);
  let rowHeight = height / 30;

  for (let x = 0; x < width; x+= columnWidth) {
    for (let y = 0; y < height; y+= rowHeight) {
      y += 20 + random(-20, 20);
      rect(x, y, columnWidth * 0.7, rowHeight * 0.8);   
    }
  }
  
 // noLoop();
}

// function mousePressed() {
//   loop();
// }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
