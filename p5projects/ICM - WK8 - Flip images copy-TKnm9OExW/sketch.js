/*
Image credit: Kira auf der Heide on Upsplash
https://unsplash.com/@kadh?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
*/

let pic;
let w, h;

function preload() {
  pic = loadImage("woodenmodel.jpg");
}

function setup() {
  createCanvas(pic.width, pic.height);
  w = pic.width / 2;
  h = pic.height / 2;
}

function draw() {
  background(220);

  // original
  image(pic, 0, 0, w, h);

  // flip over vertical axis
  push();
  translate(width, 0);
  scale(-1, 1);
  image(pic, 0, 0, w, h);
  pop();

  // flip over horizontal axis
  push();
  translate(0, height);
  scale(1, -1);
  image(pic, 0, 0, w, h);
  pop();

  // flip over horizontal and vertical axes
  push();
  translate(width, height);
  scale(-1, -1);
  image(pic, 0, 0, w, h);
  pop();
}
