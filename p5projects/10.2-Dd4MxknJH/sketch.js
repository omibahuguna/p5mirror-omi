let beat;
let mic;

function preload() {
  beat = loadSound("BEAT.mp3");
}

function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background (0)
let vol = mic.getLevel();

  let size = map(vol, 0.0001, 0.05, 30, 300);
  console.log(size);

  if (size > 50) {
    background(random(0, 255), random(0, 255), random(0, 255));
  }

  noStroke();
  rectMode(CENTER);
  fill("red");
  rect(width / 2, height / 2, size);
  
    fill(0);
  circle(width / 2, height / 2 - 4, size/2);
    circle(width / 2, height / 2 + 10, size/4);
}


function mousePressed() {
  if (beat.isPlaying()) {
    beat.pause();
  } else {
    beat.play();
  }
}
