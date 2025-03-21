let txt = "▒▒▒█ LOADING █▒▒▒ ";

let font;
let randomIndex = 0;

function preload() {
  font = loadFont("ibm.ttf");
}

function setup() {
  createCanvas(550, 550, WEBGL);
  frameRate(12);
}

function draw() {
  
  // camera code
  let eyeX = map(mouseX, 0, width, -1200, 1200);
  let eyeY = map(mouseY, 0, height, -1200, 1200);

  let eyeZ = height / 2.0 / tan((PI * 30.0) / 180.0);
  let centerX = 0;
  let centerY = 0;
  let centerZ = 0;
  let upX = 0;
  let upY = 1;
  let upZ = 0;
  camera(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ);

  background(0);

  for (let i = 0; i < 20; i++) {
    let last = txt[txt.length - 1];
    txt = last + txt;
    txt = txt.substr(0, txt.length - 1);
  }

  
  noStroke();
  textFont(font);
  textSize(20);
  textAlign(CENTER, CENTER);

  for (let i = 0; i < 20; i++) {
    let ch = txt[i];
    // let x = cos(radians(frameCount + i * 10*1.5)) * 200;
    let y = tan (radians(frameCount + i * 10*5)) * 200;
    let z = cos(radians(frameCount + i * 10)) * 400;

    push();
    translate(0, y, z);
    if (i === randomIndex) {
      fill(255, 81, 0);
    } else {
      fill(255);
    }
    text(txt, 0, 0);
    pop();
  }
}
