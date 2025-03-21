/*
Inspired and based on @b2renger's Noise et coordonnees polaires:
https://github.com/b2renger/p5js-designing-interactive-patterns?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp#noise-et-coordonnees-polaires

Coding Train video 3.4 Polar Coordinates (don't worry about vectors):
https://thecodingtrain.com/tracks/the-nature-of-code-2/noc/3-angles/4-polar-coordinates
*/

let tx = 0;
let ty = 1000;
let tz = 2000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("pink");
  stroke(180, 20, 0, 50);
  strokeWeight(1);
}

function draw() {
  
  let angle = noise(tx) * TWO_PI * 2;
 
  let minDimension = min(width, height)
  let radius = noise(tx, ty, tz) * minDimension/2;
  
  let x = tan (angle) * radius + minDimension/2;
  let y = cos (angle) * radius + minDimension/4;
  
  line(x, y, width/2, height/2);
  
  tx += 0.009;
  ty -= 0.0005;
  tz -= 0.009;
  
 fill (200, 50, 0)
  circle (width/2, height/2, 50)
  
  push ()
  noStroke()
  fill ("blue")
  rect (0, width/2-30, width)
  pop ()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}
