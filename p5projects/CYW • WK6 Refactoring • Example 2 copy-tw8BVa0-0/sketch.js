function setup() {
  createCanvas(400, 400);
    rectMode(CENTER);
}

function draw() {
  background(220);
  
  for (let i = 50; i <=300; i+= 50) {
noFill ()
    circle (width/2, height/2, i)
}
  
  if (mouseX < width / 4) {
 fill(255, 150);
  } else if (mouseX < (width / 4) * 3) {
   fill(127, 150);
  } else {
fill(0, 150);
  }
   square(width / 2, height / 2, 300);
}
