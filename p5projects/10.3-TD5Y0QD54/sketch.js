let beats = [];
let click = 0;
let mic;

function preload() {
  for (let i = 1; i <= 5; i++) {
    let beat = loadSound(`${i}.mp3`);
    beats.push(beat);
  }
}

function setup() {
  createCanvas(400, 400);
    mic = new p5.AudioIn();
  mic.start();
}

function mouseClicked() {
  if (beats[click].isPlaying()) {
    beats[click].pause();
    click++;
  } else {
    beats[click].play();
  }

  if (click > 4) {
    click = 0;
  }
}

function draw() {
 let vol = mic.getLevel();

  let size = map(vol, 0.0001, 0.1, 30, 300);
  console.log(size, vol);

  if (size > 100) {
    background(random(0, 255), random(0, 255), random(0, 255));
  } else {
    background(0);
  }

  noStroke();
  rectMode(CENTER);
  fill("red");
  rect(width / 2, height / 2, size);
}

