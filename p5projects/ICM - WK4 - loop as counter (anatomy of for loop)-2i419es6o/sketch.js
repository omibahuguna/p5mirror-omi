/*
Assumptions about counting:
1. Starting point, Start at 1
2. Change by 1, and this change is constant
3. Direction of counting, increase
4. Stopping point?
5. Count in our native language
6. Rate of counting
*/

function setup() {
  createCanvas(400, 400);
  
  // Parts of a for loop
  // 1. Starting point
  // 2. Stopping point
  // 3. Amount of change (positive or negative)
  
   
}

function draw() {
  background(220);
 
 for (let counter = 0; counter < 1000; counter += 1) {
    // console.log(counter)
    let numx = int(random(0, 400));
    let numy = int(random(0,400));
    let sizex = int(random(20, 100))
    let sizey = int(random(20, 100))
    let colR = int (random (0, 255))
      let colG = int (random (0, 255))
      let colB = int (random (0, 255))
      
    noStroke ()
    fill (colR, colG, colB, colG)
    rect (numx, numy, sizex, sizey)
    

  }

  
}
  
  
  
  
  
  