/*
Composition based on A Larger Whole by Mariel Lindsey
www.mariellindsey.com

Part 1: Organize the portrait into functions
Part 2: Make at least one function that takes arguments. 
Call this function as many times as you need to.
Part 3: Look for a pattern or patterns and use a loop
*/

function setup() {
  createCanvas(400, 360);
}

function draw() {
  background(240);

  fill(180, 100);
  
  
  head();
  eyes();
  pupils(110);
  brows(90, 195);
  nose();
  mouth();
  jaw();
  torso();
}

function mouth() {
  strokeWeight(3);
  line(150, 245, 190, 250);
  line(155, 260, 190, 250);
}

function nose() {
  strokeWeight(1);
  triangle(120, 225, 190, 100, 190, 225);
}

function jaw() {
  strokeWeight(1);
  arc(175, 200, 175, 175, 0, HALF_PI, PIE);
}

function torso() {
  strokeWeight(2);
  triangle(160, height, 263, 202, 263, height);
}

function brows(left, right) {
  strokeWeight(1);
  line(left, 65, 100, 45);
  line(left + 10, 65, 110, 45);
  line(left + 20, 65, 120, 45);
  line(left + 30, 65, 130, 45);

  line(right, 85, 205, 65);
  line(right + 10, 85, 215, 65);
  line(right + 20, 85, 225, 65);
  line(right + 30, 85, 235, 65);
}

function head() {
  strokeWeight(2);
  circle(200, 100, 150);
}

function eyes() {
  strokeWeight(2);
  ellipse(100, 80, 40, 20);
  strokeWeight(1);
  ellipse(210, 100, 40, 20);
}

function pupils(x) {
  strokeWeight(3);
  point(x, x - 30);
  point(x + 110, x - 10);
}
