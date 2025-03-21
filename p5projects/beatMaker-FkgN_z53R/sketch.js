let sounds = [];
let grid = [];
let cols = 16; // 4 bars x 4 beats
let rows = 8; // tracks
let cellSize;
let currentBeat = 0;
let bpm = 120;
let interval;
let lastTime = 0;

function preload() {
  sounds = [
    loadSound('Sounds/kick.mp3'),
    loadSound('Sounds/snare.mp3'),
    loadSound('Sounds/hi hat 1.mp3'),
    loadSound('Sounds/hi hat 2.mp3'),
    loadSound('Sounds/bass f.mp3'),
     loadSound('Sounds/bass e.mp3'),
        loadSound('Sounds/bass d.mp3'),
    loadSound('Sounds/bass c.mp3'),
  ];
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellSize = min(width / cols, height / rows);
  interval = 60000 / bpm / 4;

  for (let i = 0; i < rows; i++) {
    grid[i] = [];
    for (let j = 0; j < cols; j++) {
      grid[i][j] = false;
    }
  }
}

function draw() {
  background(30);
  drawGrid();
  playSounds();

  // loop tracker
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      fill(0, 200, 255, 50);
      stroke(30);
      strokeWeight(3);
      rect(currentBeat * cellSize, i * cellSize, cellSize, cellSize, 10);
    }
  }
}

function drawGrid() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j]) {
        // active cell
        fill(255, 75, 0);
      } else if (j % 4 === 0) {
        // first beat
        fill(100);
        // rest of the three beats
      } else {
        fill(50);
      }
      stroke(30);
      strokeWeight(3);
      rect(j * cellSize, i * cellSize, cellSize, cellSize, 10);
    }
  }
}

function mousePressed() {
  let row = floor(mouseY / cellSize);
  let col = floor(mouseX / cellSize);
  if (row < rows && col < cols) {
    grid[row][col] = !grid[row][col];
}
}

function playSounds() {
  let currentTime = millis();
  if (currentTime - lastTime > interval) {
    for (let i = 0; i < rows; i++) {
      if (grid[i][currentBeat]) {
        // sounds[i].stop();
        sounds[i].play();
      }
    }
    // next beat
    currentBeat = (currentBeat + 1) % cols;
    lastTime = currentTime;
  }
}

