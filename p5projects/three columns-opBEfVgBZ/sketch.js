function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  noFill();
  rect(0, height / 3, width, height / 3);

  let section;
  let yPos;

  if (mouseY < height / 3) {
    section = "Top";
    yPos = height / 6 + 10;
  } else if (mouseY < (2 * height) / 3) {
    section = "Middle";
    yPos = height / 2 + 10;
  } else {
    section = "Bottom";
    yPos = (5 * height) / 6 + 10;
  }

  fill(0);
  textSize(40);
  textAlign(CENTER);
  text(section, width / 2, yPos);
}
