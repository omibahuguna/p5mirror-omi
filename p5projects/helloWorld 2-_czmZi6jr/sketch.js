let video;
let bodyPose;
let poses = [];


let cols = 80; // Number of columns
let colWidth;
let capturedFrames = [];
let currentCol = 0;
let lastCaptureTime = 0;
let captureInterval = 50; // Capture interval (in milliseconds)
let capturing = false;
let captureDirection = 1; // Default direction is left to right
let triggered = false;

function preload() {
  bodyPose = ml5.bodyPose();
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  colWidth = width / cols;
  bodyPose.detectStart(video, gotPoses);
}

function draw() {
  // Display the video on canvas
  image(video, 0, 0, width, height);
  
  // Capture columns
  if (capturing && millis() - lastCaptureTime > captureInterval && currentCol < cols && currentCol >= 0) {
    let x = currentCol * colWidth;
    let colImage = video.get(x, 0, colWidth, height); // Capture column
    capturedFrames[currentCol] = colImage;
    lastCaptureTime = millis();
    currentCol += captureDirection; // Move to the next column in the direction
  }
  
  // Draw the captured frames
  for (let i = 0; i < capturedFrames.length; i++) {
    if (capturedFrames[i]) {
      image(capturedFrames[i], i * colWidth, 0);
    }
  }
}

// Callback function to handle detected poses
function gotPoses(results) {
  poses = results;
  if (!triggered && poses.length > 0) {
    for (let i = 0; i < poses.length; i++) {
      let pose = poses[i];
      for (let j = 0; j < pose.keypoints.length; j++) {
        let keypoint = pose.keypoints[j];
        if (keypoint.confidence > 0.1) {
          let section = getSection(keypoint.x); // Determine which section the keypoint is in
          if (section === 'left') {
            currentCol = 0;
            captureDirection = 1; // Capture from left to right
          } else if (section === 'right') {
            currentCol = cols - 1;
            captureDirection = -1; // Capture from right to left
          } else {
            return; // Ignore if it's in the center
          }
          capturing = true;
          triggered = true; // Trigger the capture process
          lastCaptureTime = millis();
          break;
        }
      }
      if (triggered) break;
    }
  }
}

// Helper function to determine if the keypoint is in the left, center, or right section
function getSection(x) {
  if (x < width / 3) return 'left'; // Left third of the canvas
  if (x > (2 * width) / 3) return 'right'; // Right third of the canvas
  return 'center'; // Center section
}
