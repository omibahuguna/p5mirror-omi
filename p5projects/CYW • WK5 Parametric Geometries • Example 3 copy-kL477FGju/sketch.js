/*
Based on Alexander Miller’s video on Recreating Vintage Computer Art with Processing and inspired by John Whitney's work:
https://www.youtube.com/watch?v=LaarVR1AOvs&t=181s
*/

let t = 0;
let numLines = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(10);
  stroke(255);
}

function draw() {
  background(0,50);
  translate(width / 2, height / 2);

  let amplitude = width / 3;

  for (let i = 0; i < numLines; i++) {
    let x1 = sin((t + i) / 10) * amplitude + cos(((t + 1) / 5) * 50);
    let y1 = cos((-t + i) / 10) * amplitude + sin(((t + 1) / 5) * 50);

    let x2 = sin((t + i) / 20) * (amplitude * 2) + cos(t + 1) * 10;
    let y2 = cos((-t + i) / 10) * (amplitude * 2); + sin(((t + 1)) * 50);

    line(x1*mouseX/1000, y1*mouseY/1000, x2, y2);
  }

  t += 0.2;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}
