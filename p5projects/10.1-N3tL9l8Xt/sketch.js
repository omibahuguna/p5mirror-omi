let mic;

function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0);
  let vol = mic.getLevel();

  let size = map(vol, 0.0001, 0.1, 30, 300);
  console.log(size, vol);

  if (size > 150) {
    background(random(0, 255), random(0, 255), random(0, 255));
  }

  noStroke();
  rectMode(CENTER);
  fill("red");
  rect(width / 2, height / 2, size);
}
