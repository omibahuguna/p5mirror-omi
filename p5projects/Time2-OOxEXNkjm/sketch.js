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

  let colors = Array.from({ length: 12 }, () => random(255));
  let positions = [
    { text: "12", x: random(180, 220), y: random(50, 100) },
    { text: "1", x: random(230, 280), y: random(50, 100) },
    { text: "2", x: random(275, 300), y: random(100, 150) },
    { text: "3", x: random(300, 350), y: random(150, 200) },
    { text: "4", x: random(275, 300), y: random(200, 250) },
    { text: "5", x: random(250, 300), y: random(250, 300) },
    { text: "6", x: random(200, 250), y: random(300, 350) },
    { text: "7", x: random(130, 170), y: random(250, 300) },
    { text: "8", x: random(90, 140), y: random(240, 260) },
    { text: "9", x: random(100, 50), y: random(180, 230) },
    { text: "10", x: random(100, 150), y: random(125, 175) },
    { text: "11", x: random(100, 150), y: random(50, 100) },
  ];

  positions.forEach((pos, index) => {
    fill(colors[index]);
    text(pos.text, pos.x, pos.y);
  });

  pop();
}

function hands() {
  push();
  noStroke();
  fill("red");

  let pos1 = width / 2;
  let pos2 = height / 2;

  drawHand(pos1, pos2, angleMinute, 80);
  angleMinute += 0.035;

  drawHand(pos1, pos2, angleHour, 50);
  angleHour += 0.003;

  circle(width / 2, height / 2, 20);
  pop();
}

function drawHand(x, y, angle, length) {
  push();
  translate(x, y);
  rotate(angle);
  rect(0, 0, length, 3);
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
