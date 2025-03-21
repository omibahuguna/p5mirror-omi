/*
Inspired by the classic Windows Mystify screensaver

Based on code translation from Chris DeLeon's Programming in 5 minutes: remaking “Mystify Your Mind” Windows 95-style screensaver effect
https://www.youtube.com/watch?v=-X_A1Hqj-qA
*/

let x1
let y1
let x2
let y2

let noiseOffsetX2
let noiseOffsetY2
let noiseSpeed = 0.005;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke("blue");
  strokeWeight(50);

  noiseOffsetX2 = random (1000)
  noiseOffsetY2 = random (1000)
}

function draw() {
  background(0, 30);

  x2 = noise(noiseOffsetX2) * width;
  y2 = noise(noiseOffsetY2) * height;

  line(x1, y1, x2, y2);

  noiseOffsetX2 += noiseSpeed;
  noiseOffsetY2 += noiseSpeed;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

