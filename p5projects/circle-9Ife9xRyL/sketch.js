function setup() {
  createCanvas(400, 400);
}

function draw() {
    let bg = map(mouseX, 0, 400, 0, 255)
  background (bg);
  
  noFill ()
  circle (mouseX, mouseY, 50)
  

}