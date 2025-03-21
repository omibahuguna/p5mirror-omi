let binaries = [];
let cols = 15;
let spacing;
let font;
const charSet = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"; // Character set for random selection

function preload() {
  font = loadFont("novamono.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  spacing = width / cols;

  for (let i = 0; i < cols; i++) {
    binaries.push([]);
  }
}

function draw() {
  background("black");

  for (let i = 0; i < binaries.length; i++) {
    if (random() < 0.1) {
      binaries[i].push(new BinaryString(i)); // Create a new string
    }

    for (let j = 0; j < binaries[i].length; j++) {
      binaries[i][j].display();
      binaries[i][j].fall();

      if (binaries[i][j].ypos > height) {
        binaries[i].splice(j, 1);
      }
    }
  }
}

class BinaryString {
  constructor(col) {
    this.chars = []; // Array to hold characters
    this.col = col;
    this.xpos = this.col * spacing + spacing / 2;
    this.ypos = random(-height, 0);
    this.speedY = random(2, 12);
    this.stringLength = floor(random(3, 8)); // Random string length

    // Generate random characters
    for (let i = 0; i < this.stringLength; i++) {
      this.chars.push(charSet[floor(random(charSet.length))]);
    }
  }

  fall() {
    this.ypos += this.speedY;
  }

  display() {
    // glow
    // drawingContext.shadowColor = color(0, 255, 0, 200);
    // drawingContext.shadowBlur = 20;

    // map speed to size  & size to alpha
    let sizeFactor = map(this.speedY, 2, 12, 20, 50);
    let alphaValue = map(sizeFactor, 20, 50, 20, 255);

    // Loop through characters and adjust brightness
    for (let i = 0; i < this.chars.length; i++) {
      let brightnessFactor = 1 - i / this.chars.length;
      fill(color(0, 255 * brightnessFactor, 0, alphaValue));
      textSize(sizeFactor);
      textAlign(CENTER, CENTER);
      text(this.chars[i], this.xpos, this.ypos + i * sizeFactor); // Adjust y position for each character
    }
  }
}
