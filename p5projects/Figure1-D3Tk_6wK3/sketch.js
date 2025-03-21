let bg;
let outside;
let within;

let handPose;
let video;
let hands = [];

// Variables to store the last position of the 'within' image
let lastX = -1;
let lastY = -1;

// A variable to track a pinch between thumb and index
let pinch = 0;

function preload() {
  // Load the handPose model
  handPose = ml5.handPose();
  bg = loadImage("bg.png");
  outside = loadImage("outside.png");
  within = loadImage("within.png");
}

function setup() {
  createCanvas(640, 480);
  // Create the webcam video and hide it
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  // Start detecting hands from the webcam video
  handPose.detectStart(video, gotHands);
}

function draw() {
  // Draw the background and outside image
  translate(width, 0);
  scale(-1, 1);
  image(bg, 0, 0, bg.width, bg.height); 
   // Draw the 'outside' image at the center of the canvas
  image(outside, width / 2 - outside.width / 2, height / 2 - outside.height / 2);

   // Flip the canvas horizontally to match webcam orientation

  // If there are hands detected, process them
  if (hands.length > 0) {
    for (let i = 0; i < hands.length; i++) {
      // Get the thumb and index finger tip positions
      let finger = hands[i].index_finger_tip;
      let thumb = hands[i].thumb_tip;

      // Calculate the center of the pinch between the thumb and index finger
      let centerX = (finger.x + thumb.x) / 2;
      let centerY = (finger.y + thumb.y) / 2;

      // Calculate the pinch "distance" between finger and thumb
      let pinchDistance = dist(finger.x, finger.y, thumb.x, thumb.y);

      // If the pinch distance is small, change the color to green (to visualize pinch)
      if (pinchDistance < 25) {
        fill(0, 255, 0, 255);  // Green color when pinching

        // Update the position of the 'within' image only when the circle is green
        lastX = centerX;  // Save the last X position
        lastY = centerY;  // Save the last Y position
      } else {
        fill(0, 0, 255, 255);  // Blue color when not pinching
      }

      noStroke();
      circle(centerX, centerY, pinchDistance);  // Draw a circle at the center of the pinch
    }
  }

  // Draw the 'within' image at the last position where the pinch was detected (green)
  if (lastX !== -1 && lastY !== -1) {
    image(within, lastX - within.width / 2, lastY - within.height / 2);
  }

}

// Callback function for when handPose outputs data
function gotHands(results) {
  // Save the output to the hands variable
  hands = results;
}
