let circleSize = 50;
let x1;
let x1speed = 2;
let y1;
let y1speed = 3;

let x2;
let x2speed = 5;
let y2;
let y2speed = 2;

function setup() {
  createCanvas(400, 400);
  x1 = width / 2;
  y1 = height / 2;

 x2 = width / 3;
  y2 = height / 3;
}

function draw() {
  background(220);
  
push ()
  cir1 ()
 bounce1 ()
  pop()
  
  push ()
  cir2 ()
  bounce2 ()
  pop()

  
}

function cir1 () {
circle(x1, y1, circleSize);
}

function bounce1 () {
x1 += x1speed; 
  y1 += y1speed;
  
  if (x1 > width || x1 < 0) {
    x1speed *= -1; 
  }

  if (y1 > height || y1 < 0) {
    y1speed *= -1;
  }
}

function cir2 () {
circle(x2, y2, circleSize);
}

function bounce2 () {
x2 += x2speed; 
  y2 += y2speed;
  
  if (x2 > width || x2 < 0) {
    x2speed *= -1; 
  }

  if (y2 > height || y2 < 0) {
    y2speed *= -1;
  }
}