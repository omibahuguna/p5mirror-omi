let balls = [];

function setup() {
  createCanvas(400, 400);


  for (let i = 0; i < 20; i++) {
    let ball = new Ball(random(width), random(height));
    balls.push(ball);
  }
  console.log(balls);
}

function draw() {
  background(220);

  for (let i = 0; i < balls.length; i++) {
    balls[i].displayBall();
    balls[i].moveBall();
    balls[i].bounceBall();
  }
  
}

function mousePressed () {
for (let i = 0; i < balls.length; i++) {
  if (balls[i].clicked(mouseX, mouseY)) {
balls.splice(i, 1)}
}
}
  

class Ball {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 30;
    this.xspeed = random(1, 4);
    this.yspeed = random(1, 4);
  }
  
  clicked (px,py) {
let d = dist(px, py, this.x, this.y)
if (d < this.size) {
  return true
  // console.log ("ball clicked")
}
    else {
      return false
    }
}


  displayBall() {
    fill(0);
    circle(this.x, this.y, this.size);
  }


  moveBall() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  bounceBall() {
    if (this.x > width || this.x < 0) {
      this.xspeed *= -1;
    }

    if (this.y > height || this.y < 0) {
      this.yspeed *= -1;
    }
  }
}
