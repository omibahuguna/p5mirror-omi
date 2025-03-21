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

  for (let x = (cat.width/2)-5; x < (cat.width/2)+5; x += 1) {
    for (let y = 0; y < cat.height; y += 1) {
      let i = (x + y * width) * 4;
      pixels[i + 0] = 0;
      pixels[i + 1] = 0;
      pixels[i + 2] = 255;
      pixels[i + 3] = 255;
    }
  }
  updatePixels();
}
