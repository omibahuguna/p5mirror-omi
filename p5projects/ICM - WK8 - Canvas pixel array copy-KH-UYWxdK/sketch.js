function setup() {
  createCanvas(400, 400);
  pixelDensity(1);

  // Drawing a shape
  // for (let x = 0; x < width; x+= 2)  {
  //   for (let y = 0 ; y < height; y+= 2) {
  //     stroke(255, 0, 0)
  //     point(x, y)
  //   }
  // }

  // Working with canvas pixels
  // Part 1: Load up pixels
  loadPixels();
  console.log(pixels.length);

  // Part 2: Do something with them
  for (let x = 0; x < width; x += 1) {
    for (let y = 0; y < height; y += 1) {
      
      // Method 1
      // set(x, y, [255, 0, 0, 127])
      
      // Method 2
      let index = (x + y * width) * 4
      pixels[index + 0] = 255 // r
      pixels[index + 1] = 0 // g
      pixels[index + 2] = 0 // b
      pixels[index + 3] = 255 // a
    }
  }

  // Part 3: Save our changes
  updatePixels();
}

function draw() {}
