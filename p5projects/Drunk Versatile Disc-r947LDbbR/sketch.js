let dvdImage,
  x,
  y,
  xOffset,
  yOffset,
  xDir = 1,
  yDir = 1,
  bgColor,
  colors = ["#e1a5a5", "#9f99c3", "#5e1111", "#34a569", "#8f3d90"];

const noiseScale = 0.01;

function preload() {
  dvdImage = loadImage("dvd.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = (width - dvdImage.width) / 2;
  y = (height - dvdImage.height) / 2;
  xOffset = random(1000);
  yOffset = random(1000);
  bgColor = random(colors);
}

function draw() {
  background(bgColor);

  x += (noise(xOffset)- 0.5) * 20 * xDir; // - 0.5 for back and forth motion 
  y += (noise(yOffset) - 0.5) * 20 * yDir;
  xOffset += noiseScale;
  yOffset += noiseScale;

  if (x <= 0 || x + dvdImage.width >= width) {
    xDir *= -1; 
    bgColor = random(colors);
  }

  if (y <= 0 || y + dvdImage.height >= height) {
    yDir *= -1;
    bgColor = random(colors); 
  }

  image(dvdImage, x, y);
}
