// Parts of a for loop
// 1. Starting point
// 2. Stopping point
// 3. Amount of change (positive or negative)

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(225);

  let colWidth = width /100;

  // original code from last week

  for (let x = 0; x <= width; x += colWidth) {
    if (mouseX > x && mouseX <= x + colWidth) {
      
      noStroke();
      fill(x);
      rect(x, 0, colWidth, height);
    }
  }

  // "  if (mouseX < colWidth * 1) {
  //     rect(colWidth * 0, 0, colWidth * 1, height);

  //   } else if (mouseX < colWidth * 2) {
  //     rect(colWidth * 1, 0, colWidth, height);

  //   } else if (mouseX < colWidth * 3) {
  //     rect(colWidth * 2, 0, colWidth, height);

  //   } else {
  //     rect(colWidth * 3, 0, colWidth, height);
  //   }"
}
