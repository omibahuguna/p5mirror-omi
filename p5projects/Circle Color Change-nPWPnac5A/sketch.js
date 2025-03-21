function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle (width/2, height/2, 300)
  
  if (dist (mouseX, mouseY, width/2, height/2 ) < 150) {
fill (0)
}
  else {fill (255)}
}