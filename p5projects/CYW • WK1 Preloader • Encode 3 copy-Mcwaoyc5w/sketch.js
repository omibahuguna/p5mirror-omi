let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill ()
  stroke(255);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  blendMode (BLEND)
  background(0);
  blendMode (DIFFERENCE)

  let minDimension = min(width, height);

  // mapping the stroke weight to the tan wave
  let amount = tan(angle)/4 + 1;

  let thickness = minDimension/2 * amount;
  strokeWeight(thickness);
  
  let diam = minDimension/2;
  circle(width / 2, height / 2, diam);
  circle(width / 2 , height / 2, diam/2);
  circle(width / 2 , height / 2, diam/4);
  circle(width / 2 , height / 2, diam/6);
  circle(width / 2 , height / 2, diam/8);
  circle(width / 2 , height / 2, diam/10);

  angle += 0.01;
}
