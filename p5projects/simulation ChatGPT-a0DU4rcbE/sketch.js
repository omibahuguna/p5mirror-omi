let binaries = [];
let cols = 15;
let spacing;

function preload() {
  font = loadFont("novamono.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);  // Full screen canvas
  textFont(font);
  spacing = width / cols;
}

function draw() {
  background("black");
  
  // Continuously generate new binary strings
  for (let j = 0; j < 6; j++) {
    binaries.push(new Binary());
  }

  // Display and update each binary string
  for (let i = binaries.length - 1; i >= 0; i--) {
    binaries[i].display();
    binaries[i].fall();

    // Remove binary string if it falls off the screen
    if (binaries[i].ypos > height + binaries[i].stringLength * binaries[i].sizeFactor) {
      binaries.splice(i, 1);
    }
  }
}

// Resize canvas when window size changes
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  spacing = width / cols;
}

class Binary {
  constructor() {
    this.stringLength = floor(random(5, 15));  // Length of the binary string
    this.values = Array.from({ length: this.stringLength }, () => random([0, 1]));  // Array of 0s and 1s
    this.col = floor(random(cols));  // Random column position
    this.xpos = this.col * spacing + spacing / 2;  // Centered in columns
    this.ypos = random(-1000, 0);  // Random y start for staggered entry
    this.speedY = random(2, 12);  // Falling speed
    this.sizeFactor = map(this.speedY, 2, 12, 20, 50);  // Map speed to text size
  }

  // Simulate falling
  fall() {
    this.ypos += this.speedY;

    // Randomly change binary values to 0 or 1 as they fall
    for (let i = 0; i < this.values.length; i++) {
      if (random(1) < 0.05) {  // Adjust frequency as needed
        this.values[i] = this.values[i] === 0 ? 1 : 0;
      }
    }
  }

  // Display the binary string vertically with a fading trail
  display() {
    drawingContext.shadowColor = color(0, 255, 0, 200);
    drawingContext.shadowBlur = 20;
    textAlign(CENTER, CENTER);

    for (let i = 0; i < this.values.length; i++) {
      // Adjust brightness to create a trail effect
      let alphaValue = map(i, 0, this.values.length, 255, 50);  // Brighter at the top
      fill(0, 255, 0, alphaValue);

      textSize(this.sizeFactor);
      text(this.values[i], this.xpos, this.ypos + i * this.sizeFactor);
    }
  }
}
