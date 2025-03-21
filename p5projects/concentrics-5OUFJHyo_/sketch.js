function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (i = 300; i >= 30; i-= 30) {
    fill(i-30);
    ellipse(width/2, height/2, i);
  }
}


