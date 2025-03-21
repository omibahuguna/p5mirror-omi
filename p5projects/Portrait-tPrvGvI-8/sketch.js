let video;
let cols = 40;
let colWidth;
let capturedFrames = [];
let currentCol = 0;
let lastCaptureTime = 0;
let captureInterval = 100; // 1/10 second per column


let startTime;
let countdown = 3; // second countdown
let capturing = false; // Flag to control capturing

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  colWidth = width / cols;
  startTime = millis(); // Start countdown
}

function draw() {
  image(video, 0, 0, width, height);
  filter(GRAY);

  let elapsed = millis() - startTime;
  let timeLeft = countdown - floor(elapsed / 1000); // Calculate remaining time

  if (timeLeft > 0) {
    // countdown
    noStroke()
    fill(0, 150); // Semi-transparent background for visibility
    rect(width / 2 - 50, height / 2 - 50, 100, 100, 20);

    fill(255);
    textSize(50);
    textAlign(CENTER, CENTER);
    text(timeLeft, width / 2, height / 2);
  } else if (!capturing) {
    capturing = true;
    lastCaptureTime = millis(); // Start capturing after countdown
  }

  if (capturing && millis() - lastCaptureTime > captureInterval && currentCol < cols) {
    let x = currentCol * colWidth;
    let colImage = video.get(x, 0, colWidth, height);
    colImage.filter(GRAY);

    // colImage.filter(BLUR, 5); 
    
    capturedFrames[currentCol] = colImage;
    lastCaptureTime = millis();
    currentCol++;
  }

  for (let i = 0; i < capturedFrames.length; i++) {
    if (capturedFrames[i]) {
      image(capturedFrames[i], i * colWidth, 0);
    }
  }
}
