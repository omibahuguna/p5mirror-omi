let video;
let cols = 80;
let colWidth;
let capturedFrames = [];
let currentCol = 0;
let lastCaptureTime = 0;
let captureInterval = 50; // 1/10 second per column
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
  // Create a graphics buffer for the mirrored video
  let mirroredVideo = createGraphics(width, height);
  mirroredVideo.push();
  mirroredVideo.translate(width, 0);
  mirroredVideo.scale(-1, 1);
  mirroredVideo.image(video, 0, 0, width, height);
  mirroredVideo.filter(GRAY);
  mirroredVideo.pop();
  
  // Display the mirrored video
  image(mirroredVideo, 0, 0);
  
  let elapsed = millis() - startTime;
  let timeLeft = countdown - floor(elapsed / 1000); // Calculate remaining time
  
  if (timeLeft > 0) {
    // countdown
    noStroke();
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
    // Capture from the mirrored video
    let x = currentCol * colWidth;
    let colImage = mirroredVideo.get(x, 0, colWidth, height);
    
    capturedFrames[currentCol] = colImage;
    lastCaptureTime = millis();
    currentCol++;
  }
  
  // Draw the captured frames
  for (let i = 0; i < capturedFrames.length; i++) {
    if (capturedFrames[i]) {
      image(capturedFrames[i], i * colWidth, 0);
    }
  }
}