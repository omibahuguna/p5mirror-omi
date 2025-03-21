let c1, c2, c3;
let blocks = [];

let num = 20;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);

  c1 = color("#f71818");
  c2 = color("#ef77eb");
  c3 = color("#white");

  let x = width / num;
  let h = height / num;
  
  for (let i = 0; i < num; i++) {
    blocks[i] = new Block(c1, c2, c3, x * i, h * i, h, i);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < num; i++) {
    blocks[i].display();
    blocks[i].move();
  }
}

class Block {
  constructor(c1, c2, c3, x, y, h, index) {
    this.c1 = c1;
    this.c2 = c2;
    this.c3 = c3;
    this.x = x;
    this.y = y;
    this.h = h;
    this.index = index;  // Unique index for each block
  }

  display() {
    this.blockColor(0, this.x, this.y, this.h, this.c1, this.c2, this.c3);
    this.blockColor(this.x, width, this.y, this.h, this.c1, this.c2, this.c3);
  }

  move() {
    let speed = 10;  
    let amplitude = 200;  
    
    this.x = width / 2 + amplitude * sin(frameCount * 0.05 + this.index * 0.5);
  }

  gradientBlock(min, max, y, h, c1, c2) {
    for (let i = min; i <= max; i++) {
      let amt = map(i, min, max, 0, 1);
      let c3 = lerpColor(c1, c2, amt);
      stroke(c3);
      line(i, y, i, y + h);
    }
  }

  blockColor(min, max, y, h, c1, c2, c3) {
    let x = 0.5;
    let range = max - min;
    this.gradientBlock(min, min + x * range, y, h, c1, c2);
    this.gradientBlock(min + x * range, min + max, y, h, c2, c3);
  }
}
