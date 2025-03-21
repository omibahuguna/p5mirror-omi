
function setup() {
  createCanvas(400, 400);
  background(220);

}

function draw() {
  // Here, x is defined locally, so it is accessible within the draw block  
let x = 200;
  circle(x, 200, 200);
}
