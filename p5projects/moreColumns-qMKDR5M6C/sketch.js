function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  let columns = width /20;

  // original code from last week

  for (let x = 0; x <= width; x += columns) {
    if (mouseX > x && mouseX <= x + columns) {
      
      noStroke();
      fill("red");
      rect(x, 0, columns, height);
    }
  }
}