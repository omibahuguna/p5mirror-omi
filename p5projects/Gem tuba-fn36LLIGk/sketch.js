/*
Inspired by Georg Nees' Schotter

Based on a translation from Code as a Creative Medium:
https://github.com/CodeAsCreativeMedium/exercises/blob/main/02_iteration/15_recoding_schotter/schotter_js/schotter_js.js
*/

let angle = 0;
let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
  noStroke()
}

function draw() {
  background(255);
  cellSize = min(width / 10, height / 10);

  for (let y = cellSize; y < height - cellSize; y += cellSize) {
    for (let x = cellSize; x < width - cellSize; x += cellSize) {
      push();
      translate(x + cellSize / 2, y + cellSize / 2);
      rotateAmount = -angle
      rotate(rotateAmount);
      square(-cellSize / 2, -cellSize / 2, cellSize-20);
      pop();
    }
    angle += .7;
  }
  noLoop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  angle = 0;
}