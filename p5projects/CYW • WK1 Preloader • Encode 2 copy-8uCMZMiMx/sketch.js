let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // noFill();
  stroke(255);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 80);
  
  
// making the size of the circle responsive to the size of the canvas
  let minDimension = min(width, height);
  
  // proportionately changing stroke weight according to the canvas
  strokeWeight(minDimension * 0.015);

  // establishing starting and ending points for the x position; mapping the x position along those points where the change in values occurs along a sin curve
  let xStart = width * 0.25;
  let xEnd = width * 0.75 ;
  let x = map(tan(angle), -1, 1, xStart, xEnd);
    let x2 = map(sin(angle), -1, 1, xStart, xEnd);
   let x3 = map(cos(angle), -1, 1, xStart, xEnd);
  

  let y = height * 0.5;
  let diam = minDimension * 0.3;

  noStroke()
  rectMode (CENTER)
  circle (x, x2, diam/2);
  circle (x3, y, diam/2);
  fill (50, 100, 255)
 
  
  

// the speed of movement
  angle += 0.05;
}
