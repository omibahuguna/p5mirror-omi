let columns = [];
let cols;
let spacing;

function preload() {
  font = loadFont("novamono.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);  // Full-screen canvas
  textFont(font);
  spacing = 20;  // Adjust the spacing as per desired density
  cols = floor(width / spacing);  // Calculate number of columns
  for (let i = 0; i < cols; i++) {
    columns.push(new Stream(i * spacing));  // Each column has a new Stream
  }
}

function draw() {
  background(0, 150);  // Dark background with slight opacity for trailing effect
  
  columns.forEach((stream) => {
    stream.render();
  });
}

// Resize canvas dynamically when window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  cols = floor(width / spacing);
  columns = [];
  for (let i = 0; i < cols; i++) {
    columns.push(new Stream(i * spacing));
  }
}

class Symbol {
  constructor(x, y, speed, first) {
    this.x = x;
    this.y = y;
    this.value = floor(random(0, 2)); // 0 or 1
    this.speed = speed;
    this.first = first;  // If this is the first character in the stream
    this.switchInterval = round(random(10, 30));  // Lower frequency of change
  }

  // Occasionally change between 0 and 1
  setToRandomSymbol() {
    if (frameCount % this.switchInterval == 0) {
      this.value = floor(random(0, 2));
    }
  }

  // Move symbol down the screen
  rain() {
    this.y = (this.y >= height) ? 0 : this.y + this.speed;
    this.setToRandomSymbol(); // Change symbol occasionally
  }

  // Display symbol with brighter color for the first character
  display() {
    fill(0, 255, 70, this.first ? 255 : 180);  // Brighter for the first symbol
    text(this.value, this.x, this.y);
  }
}

class Stream {
  constructor(x) {
    this.symbols = [];
    this.totalSymbols = floor(random(5, 30));  // Length of the stream
    this.speed = random(5, 10);  // Falling speed
    this.x = x;
    this.generateSymbols();
  }

  // Generate symbols with decreasing brightness
  generateSymbols() {
    let y = random(-1000, 0);  // Start off-screen for staggered effect
    for (let i = 0; i < this.totalSymbols; i++) {
      const first = i == 0;  // Mark the first symbol for brightness
      const symbol = new Symbol(this.x, y, this.speed, first);
      this.symbols.push(symbol);
      y -= spacing;  // Position each symbol above the previous one
    }
  }

  // Render each symbol in the stream
  render() {
    this.symbols.forEach((symbol) => {
      symbol.display();
      symbol.rain();
    });
  }
}
