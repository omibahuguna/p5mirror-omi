let bubble;

function setup() {
  createCanvas(200, 200);
  bubble = new Bubble();
}

function draw() {
  background(0);
  bubble.move();
  bubble.display();
}

class Bubble {

  constructor() {
  this.x = random(0, width);
  this.y = random(0, height);
  }

  display() {
    stroke(255);
    noFill();
    circle(this.x, this.y, 24);
  }

  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
}