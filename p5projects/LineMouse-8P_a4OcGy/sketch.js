let canvas = 400
function setup() {
  createCanvas(canvas, canvas);
}

function draw() {
  background(0);
  
  for (let x = canvas; x >= 0; x -= canvas/10){
    stroke ("white")
line (x, 0, mouseX, mouseY)
}
}