let video;
let handpose;
let predictions = [];
let isPinching = false;

function setup() {
  createCanvas(640, 480);
  
  // Start capturing video from the webcam
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  // Load the handpose model and set up the prediction callback
  handpose = ml5.handpose(video, modelReady);
  handpose.on('predict', gotHand);
}

function modelReady() {
  console.log("Handpose model loaded.");
}

function gotHand(results) {
  // Update the predictions with results from handpose model
  predictions = results;
}

function draw() {
  background(200);

  // Flip the video feed horizontally to mirror it
  push();
  translate(width, 0);
  scale(-1, 1);
  image(video, 0, 0, width, height);
  pop();

  // Draw any detected keypoints and check for a pinch
  drawKeypoints();
  checkPinch();
}

// Draw keypoints for visual feedback
function drawKeypoints() {
  for (let i = 0; i < predictions.length; i++) {
    const prediction = predictions[i];
    for (let j = 0; j < prediction.landmarks.length; j++) {
      const keypoint = prediction.landmarks[j];
      fill(0, 255, 0);
      noStroke();
      ellipse(keypoint[0], keypoint[1], 10, 10);
    }
  }
}

// Check if a pinch gesture is occurring
function checkPinch() {
  if (predictions.length > 0) {
    const hand = predictions[0];
    const thumbTip = hand.landmarks[4];
    const indexTip = hand.landmarks[8];
    
    // Calculate the distance between thumb and index finger
    let d = dist(thumbTip[0], thumbTip[1], indexTip[0], indexTip[1]);
    
    if (d < 30) {
      if (!isPinching) {
        isPinching = true;
        onPinch();
      }
    } else {
      isPinching = false;
    }
  }
}

// Define what happens during a pinch
function onPinch() {
  // Example: Change background color on pinch
  background(random(255), random(255), random(255));
}
