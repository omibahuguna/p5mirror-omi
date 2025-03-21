// Here, x is defined globally. So it is accessible throughout the entire program  
let x = 200;
function setup() {
  createCanvas(400, 400);
  background(220);

}

function draw() {
  circle(x, 200, 200);
}
