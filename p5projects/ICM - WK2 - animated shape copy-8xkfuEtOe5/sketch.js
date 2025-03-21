/*
Can you visualize what will happen when this sketch runs? Can you draw it or describe it out loud?
*/

let x = 200;

let y = 200;

let s = 1;

let d = -1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // x, y, size
  circle(x, y, 50);
  x = x + s * d;
  y = y + s;
  s+= .1
}
