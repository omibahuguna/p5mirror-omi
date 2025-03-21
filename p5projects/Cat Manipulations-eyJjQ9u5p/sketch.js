let cat;
let col;

function preload() {
  cat = loadImage("cat.jpg");
}
function setup() {
  pixelDensity(1);
  createCanvas(cat.width, cat.height);
}

function draw() {
  image(cat, 0, 0, cat.width, cat.height);
  loadPixels();

  for (let x = 0; x < cat.width; x += 2) {
    for (let y = 0; y < cat.height; y += 2) {
      let i = (x + y * width) * 4;
      pixels[i + 0] = 0;
      pixels[i + 1] = 255;
      pixels[i + 2] = 0;
      pixels[i + 3] = 255;
    }
  }
  updatePixels();
}
