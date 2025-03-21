let eyeRadius = 9; // Half the width of the eye
let pupilRadius = 6; // Half the width of the pupil

function setup() {
  createCanvas(600, 600);
  background(103, 153, 81);
  strokeWeight(5);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(103, 153, 81); // Clear the background each frame

  // Neck and neckline
  noFill();
  stroke(255);
  rect(300, 400, 56);
  line(275, 410, 325, 410);

  // Head
  stroke(255);
  fill(103,153, 81);
  ellipse(300, 250, 210, 250);

  // Hair
  noFill();
  rect(300, 300, 300, 450, 130, 130, 0, 0);
  fill(103, 153, 81);
  arc(200, 120, 190, 150, 0, 90);
  arc(403, 120, 215, 170, 90, 180);
  noFill();

  // Eyes, nose, and mouth
  fill(255); // Eyes
  ellipse(250, 250, 18, 35); // Left eye
  ellipse(350, 248, 18, 35); // Right eye
  line(304, 230, 300, 270); // Nose
  noFill();
  arc(300, 290, 50, 30, 10, 150); // Mouth

  // Draw pupils
  drawPupil(250, 250);
  drawPupil(350, 248);

  // Body
  fill(103, 153, 81);
  arc(300, 520, 300, 200, 180, 360);

  // Ears and earrings
  arc(190, 270, 30, 40, 70, 275); // Left ear
  arc(410, 270, 30, 40, 265, 110); // Right ear
  stroke(20); // Earring color
  strokeWeight(2);
  noFill();
  arc(190, 295, 25, 25, 40, 260); // Left earring
  arc(410, 295, 25, 25, 270, 140); // Right earring

  // Thought bubbles + p5.js logo
  noStroke();
  fill(139, 181, 121);
  circle(480, 230, 30); // Small bubble
  fill(175, 212, 159);
  circle(520, 190, 45);
  fill(228, 247, 220);
  circle(530, 105, 90); // Large bubble
  fill(245, 17, 97);
  rect(530, 86, 10, 30);
  quad(499, 89.32, 495.9, 98.83, 524.6, 108.1, 527.6, 98.6);
  quad(505.97, 130.7, 514.06, 136.56, 531.69, 112.28, 523.6, 106.42);
  quad(528.97, 112.2, 546.6, 136.57, 554.69, 130.69, 537.1, 106.42);
  quad(532, 98.8, 535.08, 108.22, 563.62, 98.9, 560.6, 89.44);
  square(530, 106, 10); // Cover the middle
}

function drawPupil(cx, cy) {
  let d = dist(mouseX, mouseY, cx, cy);
  let angle = atan2(mouseY - cy, mouseX - cx);
  let pupilX = cx + cos(angle) * (eyeRadius - pupilRadius);
  let pupilY = cy + sin(angle) * (eyeRadius - pupilRadius);

  fill(0); // Pupil color
  ellipse(pupilX, pupilY, pupilRadius * 2, pupilRadius * 2);
}