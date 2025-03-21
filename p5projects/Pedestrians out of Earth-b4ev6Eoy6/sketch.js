function setup() {
  rectMode (CENTER)
  createCanvas(windowWidth, windowHeight);
    noStroke();
}


function draw() {
  blendMode (BLEND)
  background(0);
  // blendMode(DIFFERENCE)
  
   push ()
  fill ("blue")
  circle (width/2, height/2, 300)
        pop ()

  for (let i = 0; i < 30; i++) {
            
    let x = random(width);
    let y = random(height);
    let w = random(30, 100);
    let h = random(30, 100);
    fill(200, 50, 30);
 
    rect(x, y, w, h);
 filter(BLUR, 2)
noLoop ()

   
  }
}

function mousePressed() {
loop ()
}
