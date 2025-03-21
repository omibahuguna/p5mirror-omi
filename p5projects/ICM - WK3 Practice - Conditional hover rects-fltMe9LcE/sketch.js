/*
File > Duplicate to save a copy in your account.

Finish this sketch by writing more conditional statements so that when your mouse moves around the canvas a different square (rect) lights up. If your mouse is in the top left quadrant, draw a square there. If it's in the top right quadrant, draw a different color square there. If it's in the bottom left, a different color square, and in the bottom right, yet another different color square. What does the && mean?
*/

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // top left
  if (mouseX < width / 2 && mouseY < height / 2) {
    fill("yellow");
    rect(0, 0, width / 2, height / 2);
  }

  // top right
  else if (mouseX > width / 2 && mouseY < height / 2) {
    fill("orange");
    rect(width / 2, 0, width / 2, height / 2);
  }

  // bottom left
  else if (mouseX < width / 2 && mouseY > height / 2) {
    fill("brown");
    rect(0, height / 2, width / 2, height / 2);
  }

  // bottom right
  else {
    fill("red");
    rect(height / 2, width / 2, height / 2);
  }
}
