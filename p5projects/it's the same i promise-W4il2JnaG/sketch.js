let rowHeight;

function setup() {
  createCanvas(600, 600);
  noStroke();
  rowHeight = height / 3;
}

function draw() {
  
  if (mouseIsPressed) {
    background(150, 80);
  } else {
    background(150, 80);
  }
  
  let x = mouseX;
  let y = mouseX;
  
  fill(255, 150);
  circle(x, height / 2, y);

  let inverseX = width - mouseX;
  let inverseY = height - mouseY;

  fill(0, 150);
  circle(inverseX, height / 2, inverseY);

  if (mouseX < rowHeight) {
    fill(20, 150);
    rect(0, 0, width, rowHeight);
  } else if (mouseY < rowHeight * 2) {
    fill(80, 150);
    rect(0, rowHeight, width, rowHeight);
  } else {
    fill(140, 150);
    rect(0, rowHeight * 2, width, rowHeight);
  }
}