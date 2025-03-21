let c1, c2, c3;
let blocks = [];

let num = 20;

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);

  c1 = color("#f71818");
  c2 = color("#ef77eb");
  c3 = color("#white");
  
  let x = width/num;
  let h = height/num;
  
  for (let i=0; i <num; i++){
blocks[i] = new Block (c1, c2, c3, x*i,h*i, h)
}
}

function draw() {
  background(220);
  for (let i=0; i <num; i++){
  blocks[i].display ();
    blocks[i].move ();
  }
}
