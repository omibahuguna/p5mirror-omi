    let video;
let bodyPose;
let poses = [];

let cols = 160;
let colWidth;
let capturedFrames = [];
let currentCol = 0;
let lastCaptureTime = 0;
let captureInterval = 1; //ms
let capturing = false;
let captureDirection = 1;
let triggered = false;

function preload() {
  bodyPose = ml5.bodyPose({ flipped: true });
}

function setup() {
  createCanvas(1600, 1200);
  colWidth = width / cols;

  video = createCapture(VIDEO);
  video.size(1600, 1200);
  video.hide();

  bodyPose.detectStart(video, gotPoses);
}

function draw() {
  // Draw flipped video feed
  push();
  translate(width, 0);
  scale(-1, 1);
  image(video, 0, 0, width, height);
  pop();

  // Capture columns when triggered
  if (
    capturing && millis() - lastCaptureTime > captureInterval && currentCol < cols && currentCol >= 0
  ) { let x = width - (currentCol + 1) * colWidth;
    let colImage = createImage(colWidth, height);
    colImage.copy(video, x, 0, colWidth, height, 0, 0, colWidth, height);

    // Flip pixels inside the column
    colImage.loadPixels();
    for (let y = 0; y < colImage.height; y++) {
      for (let i = 0; i < colWidth / 2; i++) {
        let leftIdx = 4 * (y * colWidth + i);
        let rightIdx = 4 * (y * colWidth + (colWidth - i - 1));
        for (let k = 0; k < 4; k++) {
          let temp = colImage.pixels[leftIdx + k];
          colImage.pixels[leftIdx + k] = colImage.pixels[rightIdx + k];
          colImage.pixels[rightIdx + k] = temp;
        }
      }
    }
    colImage.updatePixels();

    capturedFrames[currentCol] = colImage;
    lastCaptureTime = millis();
    currentCol += captureDirection;
  }

  // Draw captured columns over the video
  for (let i = 0; i < capturedFrames.length; i++) {
    if (capturedFrames[i]) {
      image(capturedFrames[i], i * colWidth, 0);
    }
  }
}

function gotPoses(results) {
  poses = results;
  if (!triggered && poses.length > 0) {
    for (let i = 0; i < poses.length; i++) {
      let pose = poses[i];
      for (let j = 0; j < pose.keypoints.length; j++) {
        let keypoint = pose.keypoints[j];
        if (keypoint.confidence > 0.1) {
          let section = getSection(keypoint.x);
          if (section === 'left') {
            currentCol = 0;
            captureDirection = 1;
          } else if (section === 'right') {
            currentCol = cols - 1;
            captureDirection = -1;
          } else {
            return;
          }
          capturing = true;
          triggered = true;
          lastCaptureTime = millis();
          break;
        }
      }
      if (triggered) break;
    }
  }
}

function getSection(x) {
  if (x < width / 3) return 'left';
  if (x > (2 * width) / 3) return 'right';
  return 'center';
}
