let angleMinute = 0;
let angleHour = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  bg2();
       blendMode (BLEND)
  hands();
  nums();
    blendMode(DIFFERENCE);
  frameRate(4);
  
}

function nums() {
  push();
  textAlign(CENTER);
  textSize(30);

  let colors = [
    random(255),
    random(255),
    random(255),
    random(255),
    random(255),
    random(255),
    random(255),
    random(255),
    random(255),
    random(255),
    random(255),
    random(255),
  ];

  fill(colors[0]);
  text("12", random(180, 220), random(50, 100));

  fill(colors[1]);
  text("1", random(230, 280), random(50, 100));

  fill(colors[2]);
  text("2", random(275, 300), random(100, 150));

  fill(colors[3]);
  text("3", random(300, 350), random(150, 200));

  fill(colors[4]);
  text("4", random(275, 300), random(200, 250));

  fill(colors[5]);
  text("5", random(250, 300), random(250, 300));

  fill(colors[6]);
  text("6", random(200, 250), random(300, 350));

  fill(colors[7]);
  text("7", random(130, 170), random(250, 300));

  fill(colors[8]);
  text("8", random(90, 140), random(240, 260));

  fill(colors[9]);
  text("9", random(100, 50), random(180, 230));

  fill(colors[10]);
  text("10", random(100, 150), random(125, 175));

  fill(colors[11]);
  text("11", random(100, 150), random(50, 100));
  pop();
}

function hands() {
  push();
  noStroke();
  fill("red");


  let pos1 = width / 2;
  let pos2 = height / 2;

  push();
  translate(pos1, pos2);
  rotate(angleMinute);
  rect(0, 0, 80, 3);
  angleMinute += 0.035;
  pop();

  push();
  translate(pos1, pos2);
  rotate(angleHour);
  rect(0, 0, 50, 3);
  angleHour += 0.003;
  pop();

  circle(width / 2, height / 2, 20);
  pop();
}

function bg2() {
  push();
  background(0, 0, 255);
  let origin = height / 2;
  let border = 80;
  let color = 255;
  rectMode(CENTER);
  

  fill(0);
  rect(200, 200, 150, 800);

  stroke(255);
  strokeWeight(10);
  fill(0);
  rect(origin, origin, 250, 250, 30);

  noStroke();
  fill(255);
  rect(330, 200, 20, 40, 5);
  pop();

}
