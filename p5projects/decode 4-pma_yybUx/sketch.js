/*
Inspired by Frieder Nake's Zufälliger Polygonzug – 13/9/65 Nr. 7 (Random Polygon (1965) and A. Michael Noll's Gaussian-Quadratic (1963)
*/

let startX;
let startY;
let endX;
let endY;

let num = 0;
let total = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(200, 50, 0 ,20);
  strokeWeight(2);
  getStartPoint();
  getEndPoint();
}

function draw() {
  for (let num = 0; num < total; num++) {

    line(startX, startY, endX, endY);
    getEndPoint();
    
//     frameRate (10)
  }
}


function getStartPoint() {
  startX = random(10, width - 10);
  startY = random(10, height - 10);
}

function getEndPoint() {
  endX = random(10, width - 10);
  endY = random(10, height - 10);
}