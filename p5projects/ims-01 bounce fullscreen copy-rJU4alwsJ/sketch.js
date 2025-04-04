// button to go fullscreen
let cols, rows;
let size = 13;
let font;
let threshold = .5;
let angle = 0;

let my = {};

function preload() {
  font = loadFont("ibm.ttf");
}

function setup() {
  my.width = 400;
  my.height = 400;
  my.changeTime = 5.0;
  my.debug = 1;

 
  if (!my.debug) {
    my.width = windowWidth;
    my.height = windowHeight;
  }
  createCanvas(my.width, my.height);
  noStroke();

  setup_fullScreenButton();
  
   cols = width / size;
  rows = height / size;
  textSize(size);
  textAlign(CENTER, CENTER);

}

function draw() {
  background(0);
  angle += .05; 

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = size / 2 + i * size;
      let y = size / 2 + j * size;
      let d = dist(x, y, width / 2, height / 2);
      let path = sin(d - angle)
      fill(155);
      textFont(font);
      if (path > threshold) {
        text("0", x, y);
      } else {
        text(".", x, y);
      }
    }
  }
}

// From
// https://editor.p5js.org/jht1493/sketches/5LgILr8RF

// --
function setup_fullScreenButton() {
  my.fullScreenButton = createButton("?=v7 Full Screen");
  my.fullScreenButton.mousePressed(fullScreen_action);
  my.fullScreenButton.style("font-size:42px");
}

function fullScreen_action() {
  my.fullScreenButton.remove();
  fullscreen(1);
  let delay = 3000;
  setTimeout(ui_present_window, delay);
}

function ui_present_window() {
  resizeCanvas(windowWidth, windowHeight);
  // init_dim();
}

// Respond to window resizing event
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}