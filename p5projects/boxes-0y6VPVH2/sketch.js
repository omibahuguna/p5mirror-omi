// 
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255, 100, 30);

  rectMode(CENTER);
  rect(400, 300, 100, 100);

  line(0, 0, 800, 600);
  line(800, 0, 0, 600);
}
