let bubbles = [];

function setup() {
  createCanvas(200, 200);
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    bubbles.push(new Bubble(x, y));
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
}


class Bubble {
  constructor (x, y) {
    this.x = x;
    this.y = y;
    this.col = color(255, 100);
  }

  display() {
    stroke(255);
    fill(this.col);
    circle(this.x, this.y, 24);
  }

  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
  
  clicked(mx, my) {
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < 12) {
      this.col = color(0, random(255), random(100, 255));
    }
  }
}