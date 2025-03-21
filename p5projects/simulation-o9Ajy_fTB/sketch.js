let binaries = [];
let cols = 15;
let spacing;

function preload() {
  font = loadFont("novamono.ttf");
}

function setup() {
  createCanvas(1000, 1000);
  textFont(font);
  spacing = width / cols;
}

function draw() {
  background("black");
  
  for (let j = 0; j < 6; j++) {
  binaries.push(new Binary());
  }

  for (let i = 0; i < binaries.length; i += 1) {
    binaries[i].display();
    binaries[i].fall();

    if (binaries[i].ypos > height) {
      binaries.splice(i, 1);
    }
  }
}

class Binary {
  constructor() {
    this.value = random([0, 1]); // 0 or 1
    this.col = floor(random(cols)); // Random columns
    // console.log (this.col)
    this.xpos = this.col * spacing + spacing / 2; // center in columns
    this.ypos = 0;
    this.speedY = random(2, 12); 
  }

  fall() {
    this.ypos += this.speedY;
  }

  display() {
    // glow
    drawingContext.shadowColor = color(0, 255, 0, 200);
    drawingContext.shadowBlur = 20;

    // map speed to size  & size to alpha
    let sizeFactor = map(this.speedY, 2, 12, 20, 50);
    let alphaValue = map(sizeFactor, 20, 50, 20, 255);
    this.fill = color(0, 255, 0, alphaValue);

    fill(this.fill);
    textSize(sizeFactor); // Set text size
    textAlign(CENTER, CENTER);
    text(this.value, this.xpos, this.ypos);
  }
}
