/*
Inspired by Colette and Charles J. Bangert's Complex Intersecting Line (1976) and Roman Verostko's Sketch (1987)
*/

let startX;
let startY;
let endX;
let endY;

let num = 0;
let total = 1000;

let tx = 0;
let ty = 500;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255, 1);
  strokeWeight(3);
  getStartPoint();
  getEndPoint();
}

function draw() {
  for (num = 0; num < total; num++) {
    line(startX, startY, endX, endY);
    startX = endX;
    startY = endY;
    getEndPoint();
  }
  // frameRate(12)
}


function getStartPoint() {
  startX = map(noise(tx), 0, 1, 0, width);
  startY = map(noise(ty), 0, 1, 0, height);
}

function getEndPoint() {
  endX = map(noise(tx), 0, 1, 0, width);
  endY = map(noise(ty), 0, 1, 0, height);

  tx += 0.0001;
  ty += 0.0001;
}