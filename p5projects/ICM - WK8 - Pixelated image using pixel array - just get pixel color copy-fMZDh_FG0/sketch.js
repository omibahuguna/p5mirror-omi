// Declare a variable to hold my cat image
let cat;

// Preload function allows us to load data *before* our sketch runs setup()
function preload() {
  // Load my cat image
  cat = loadImage("cat.jpg");
}

function setup() {
  // Make a canvas the size of my cat image
  createCanvas(cat.width, cat.height);
  noStroke();
}

function draw() {
  // background(255);

  // Step 1: Load the pixels[] for the scratch image into memory
  cat.loadPixels();

  // Step 2: Loop through every 10th pixel of cat image
  for (let x = 0; x < cat.width; x += 10) {
    for (let y = 0; y < cat.height; y += 10) {
      // Every pixel in the pixels[] takes up 4 spots
      let i = (x + y * width) * 4;

      // Step 3: Do something with the pixels,
      // just get the color information
      let r = cat.pixels[i + 0];
      let g = cat.pixels[i + 1];
      let b = cat.pixels[i + 2];
      let a = cat.pixels[i + 3];

      // Step 4: Use that color information to draw a shape
      let col = color(r, g, b, a);

      fill(col);
      circle(x, y, 10, 10);
    }
  }

  // Don't need this because we're drawing shapes with the color info from the image
  // cat.updatePixels();
  
  // Don't need this either
  // image(cat, 0, 0)
}
