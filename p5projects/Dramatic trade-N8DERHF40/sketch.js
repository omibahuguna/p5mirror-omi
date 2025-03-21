let copy = [];

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 20; i++) {
    let bounce = new Bounce(random(width), random(height));
    copy.push(bounce);
  }
}

function draw() {
  background(220);

  for (let i = 0; i < copy.length; i++) {
    copy[i].displayBounce();
    copy[i].moveBounce();
    copy[i].bounceBounce();
    copy[i].scaleBounce();
  }
}

class Bounce {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 30;
    this.xspeed = random(1, 5);
    this.yspeed = random(1, 5);
  }

  displayBounce() {
    fill(0);
    textAlign(CENTER);
    textSize(this.size);
    text("BOUNCE", this.x, this.y);
  }

  moveBounce() {
    this.x += this.xspeed;
    this.y -= this.yspeed;
  }

  bounceBounce() {
    if (this.x > width || this.x < 0) {
      this.xspeed *= -1;
    }

    if (this.y > height || this.y < 0) {
      this.yspeed *= -1;
    }
  }


scaleBounce () {
this.size = (this.y)*.3
}
}