let binaries = [];
let cols = 50; // Increase the number of columns
let spacing;
let font;
const charSet = "*";

function preload() {
  font = loadFont("novamono.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  spacing = width / cols; // Adjust spacing for more columns

  for (let i = 0; i < cols; i++) {
    binaries.push([]);
  }
}

function draw() {
  background("black");

  for (let i = 0; i < cols; i++) {
   if (random() < 0.03) { 
  binaries[i].push(new BinaryString(i));
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
    this.chars = [];
    this.col = col;
    this.xpos = this.col * spacing + spacing / 2;
    this.ypos = random(-height, 0);
    this.speedY = random(6, 10);
    this.stringLength = floor(random(3, 8));

    for (let i = 0; i < this.stringLength; i++) {
      this.chars.push(charSet[floor(random(charSet.length))]);
    }
  }

  fall() {
    this.ypos += this.speedY;

    for (let i = 0; i < this.chars.length; i++) {
      if (random() < 0.08) {
        this.chars[i] = charSet[floor(random(charSet.length))];
      }
    }
  }

display() {
  let sizeFactor = map(this.speedY, 6, 10, 50, 60);
  let alphaValue = map(sizeFactor, 50, 60, 20, 255);

  for (let i = 0; i < this.chars.length; i++) {
    let brightnessFactor = pow(i / this.chars.length, 1);
    fill(0, 255 * brightnessFactor, 0, alphaValue);

    // Set glow parameters based on brightness
    drawingContext.shadowColor = color(0, 255 * brightnessFactor, 0, 255); // Adjust alpha for glow intensity
    drawingContext.shadowBlur = sizeFactor * brightnessFactor * 0.5; // Adjust blur based on size and brightness

    textSize(sizeFactor);
    textAlign(CENTER, CENTER);
    text(this.chars[i], this.xpos, this.ypos + i * sizeFactor);

   
    drawingContext.shadowColor = color(0, 0, 0, 0);
    drawingContext.shadowBlur = 0;
  }
}

}

