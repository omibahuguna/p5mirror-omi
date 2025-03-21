// I set up the canvas in a 4:3 aspect ratio for a balanced frame
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background("#ff3c00");

  // A color i often use in my artwork serves as the background. I thought layering each element with some personal meaning would be apt.
  noStroke();
  fill("#bc48c0");
  quad(100, 100, 160, 500, 500, 500, 600, 100);

  // I designed my eyes to be looking in different places to try to find some relief
  fill("#ffff");
  circle(150, 200, 120);
  fill("#000000");
  circle(150, 170, 50);

  fill("#ffff");
  circle(500, 200, 100);
  fill("#000000");
  circle(500, 200, 50);

  // I create some elements to flesh out the face
  ellipse(300, 400, 200, 100);

  fill("#1d3b0f");
  triangle(400, 300, 350, 150, 300, 300);

  fill("#54105a");
  triangle(400, 200, 100, 20, 86, 75);

  // Finally, I added some typography to really nail the idea on the head.]
  noStroke();
  fill("#000000");
  textSize(50);
  text("SCATTERED", 400, 300);
  textSize(50);
  text("SCATTERED", 420, 340);
  
}
