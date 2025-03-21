/*
Inspired by Vera Molnár's Du Cycle: “Carrés Non-Concentriques” (1974)
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  blendMode (DIFFERENCE)
  rectMode(CENTER);
  noFill();
  noStroke;
  strokeWeight(2);
  
  let minSize = min(width, height);
  let amount = minSize / 30;

  for (let i = 1; i < amount; i++) {
    let x = random(0 + amount*2, width - amount*2);
    let y = random(0 + amount*2, height - amount*2);
    fill (255)
    square(x, y, amount * i, 30-i); // adding roundness to the squares
  }
}

function draw() {}