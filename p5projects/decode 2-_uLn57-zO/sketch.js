/*
Inspired by George Nees' Micro-Innovation Series (1966)
*/

let x;
let y;
let w;
let h;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
fill ("white");
  noStroke();
  // strokeWeight(2);
}

function draw() {
  blendMode (BLEND)
  background("blue");
  // blendMode (DIFFERENCE)

  // 400 rectangles
  for (let i = 0; i < 50; i++) {
    
    // conditional statement using probability to influence the population of tall and short rectangels
      
      w = 5
      h = random(50, 70);
   
    // mapping x & y positions to random positions, containing them within the canvas
    // x = random(w, width - w);
    // y = random(h, height - h);
    x = random (0, width)
    y = random (0, height)
    rect(x, y, w, h);
  }
  
  // noLoop();
  frameRate (8)
}

// clicking to refresh
function mousePressed() {
  loop();
}