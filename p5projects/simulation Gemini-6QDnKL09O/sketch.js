let binaries = [];
let cols = 15;
let spacing;
let font;

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
      binaries[i].push(new Binary(i));
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

class Binary {
  constructor(col) {
    this.value = random([0, 1]);
    this.col = col;
    this.xpos = this.col * spacing + spacing / 2;
    this.ypos = random(-height, 0);
    this.speedY = random(2, 12);
    this.stringIndex = 0; // To track position within the string
  }

  fall() {
    this.ypos += this.speedY;
    if (random() < 0.05) {
      this.value = (this.value + 1) % 2;
    }
    this.stringIndex++;
  }

  display() {
    // glow
    drawingContext.shadowColor = color(0, 255, 0, 200);
    drawingContext.shadowBlur = 20;

    // map speed to size  & size to alpha
    let sizeFactor = map(this.speedY, 2, 12, 20, 50);
    let alphaValue = map(sizeFactor, 20, 50, 20, 255);

    // calculate brightness based on position in the string
    let brightnessFactor = 1 - this.stringIndex / binaries[this.col].length;
    this.fill = color(0, 255 * brightnessFactor, 0, alphaValue);

    fill(this.fill);
    textSize(sizeFactor);
    textAlign(CENTER, CENTER);
    text(this.value, this.xpos, this.ypos);
  }
}