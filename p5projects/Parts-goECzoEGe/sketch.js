let img;
let strips = [];
let cols = 1; 
let rows = 20; 
let stripWidth, stripHeight;

function preload() {
    img = loadImage("parts.png");
}

function setup() {

  createCanvas(img.width, img.height);
  

  stripWidth = width / cols;
  stripHeight = height / rows;
  
  
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let strip = img.get(x * stripWidth, y * stripHeight, stripWidth, stripHeight);
      strips.push(strip);
    }
  }
  
  frameRate(12);
  // saveGif('parts.gif', 5);
}

function draw() {
  background(220);
  
  let shuffledStrips = shuffle(strips);
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let index = x + y * cols;
      image(shuffledStrips[index], x * stripWidth, y * stripHeight);
    }
  }
}
