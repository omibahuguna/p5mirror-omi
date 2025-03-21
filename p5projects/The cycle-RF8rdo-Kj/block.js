class Block {
  constructor(c1, c2, c3, x, y, h) {
    this.c1 = c1;
    this.c2 = c2;
    this.c3 = c3;
    this.x = x;
    this.y = y;
    this.h = h;

    this.d = 5;
  }

  display() {
    let x = mouseX;
    this.blockColor(0, this.x, this.y, this.h, this.c1, this.c2, this.c3);
    this.blockColor(this.x, width+10, this.y, this.h, this.c1, this.c2, this.c3);
  }

  move() {
    if (this.x > width || this.x < 0) {
      this.d *= -1;
    }
    this.x += this.d;
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

