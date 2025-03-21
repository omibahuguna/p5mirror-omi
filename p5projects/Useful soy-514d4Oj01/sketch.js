let binaries = [];
let cols = 12;
let spacing;

function preload() {
  font = loadFont("novamono.ttf");
}

function setup() {
  createCanvas(700, 700);
  textFont(font);
  spacing = width / cols;
}

function draw() {
  background("black");

  // Add new binaries every frame
  for (let j = 0; j < 6; j++) {
    binaries.push(new Binary());
  }

  // Update and display each binary object
  for (let i = binaries.length - 1; i >= 0; i--) {
    binaries[i].display();
    binaries[i].fall();

    if (binaries[i].ypos > height) {
      binaries.splice(i, 1); // Remove binaries that fall off the screen
    }
  }
}

class Binary {
  constructor() {
    this.value = random([0, 1]); // Start with 0 or 1
    this.col = floor(random(cols)); // Random column
    this.xpos = this.col * spacing + spacing / 2; // Position in column
    this.ypos = 0;
    this.speedY = random(2, 12); // Falling speed
    this.timeToToggle = floor(random(10, 30)); // Time to toggle value
    this.framesPassed = 0; // Keep track of frames passed
  }

  fall() {
    this.ypos += this.speedY;
    this.framesPassed++;

    // Toggle between 1 and 0 after a certain number of frames
    if (this.framesPassed >= this.timeToToggle) {
      this.value = this.value === 1 ? 0 : 1; // Toggle between 1 and 0
      this.framesPassed = 0; // Reset frame counter
    }
  }

  display() {
    // Glow effect
    drawingContext.shadowColor = color(0, 255, 0, 200);
    drawingContext.shadowBlur = 20;
    

    // Map speed to size and alpha
    let sizeFactor = map(this.speedY, 2, 12, 20, 50);
    let alphaValue = map(sizeFactor, 20, 50, 20, 255);
    this.fill = color(0, 255, 0, alphaValue);

    fill(this.fill);
    textSize(sizeFactor);
    textAlign(CENTER, CENTER);
    text(this.value, this.xpos, this.ypos); // Draw binary number
  }
}
