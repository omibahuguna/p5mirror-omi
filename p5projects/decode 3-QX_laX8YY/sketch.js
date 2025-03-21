/*
Inspired by Frieder Nake's ER56 / 264 (1963) and Vera Molnár's Du Cycle: Segments et leurs Croisements No. 9 (1973)
*/

let startX;
let startY;
let endX;
let endY;

let seed = 1;

let img;

function preload() {
  img = loadImage("cat.png");
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke("red");
  strokeWeight(5);
}

function draw() {
  background(0);
  // randomSeed(seed)
  image(img, random (width/ 2 - 115, width / 2-120), random (height / 2 - 40, height/2 - 50))
  for (let i = 0; i < 50; i++) {
    
    startX = width/2
    startY = height/2+100;

    if (random(10) < 1) {
      let amount = random(-30, 30);
      endX += amount;
      endY = startY + amount;
    } else {
      let amount = random(-30, 30);
      endY += amount;
      endX = startX + amount;
    }
    
    line(startX, startY, endX, endY);
  }
frameRate (8)

}


// function mousePressed() {
//   seed = random(1000);
// }