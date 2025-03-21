let x = 200;
let y = 200;

let a = 200;
let b = 200;

let p = 200;
let q = 200;

let r = 200;
let s = 200;

let c = 200;
let d = 200;

let e = 200;
let f = 200;

let g = 200;
let h = 200;

let i = 200;
let j = 200;

let speed = 5;
let speed2x = 10

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // part 1 (and part 4)
  // circle moving right
  circle(x, y, 50);
  x += speed2x;

  // part 2
  // circle moving left
  circle(a, b, 50);
  a += -speed;

  // circle moving down
  circle(p, q, 50);
  q += speed;

  // circle moving up
  circle(r, s, 50);
  s += -speed;

  // part 3
  // circle moving bottom right
  circle(c, d, 50);
  c += speed;
  d += speed;

  // circle moving top left
  circle(e, f, 50);
  e += -speed;
  f += -speed;

  // circle moving top right
  circle(g, h, 50);
  g += speed;
  h += -speed;

  // circle moving bottom left
  circle(i, j, 50);
  i += -speed;
  j += speed;
}
