let images = []; // Array to store all images
let imagePositions = []; // Array to store positions of all images
let selectedImageIndex = -1; // Track which image is being moved
let handPose;
let video;
let hands = [];
let imagesLoaded = 0;

function preload() {
  handPose = ml5.handPose(); // Load the hand pose detection model
  bg = loadImage("bg.png"); // Load a background image
  
  // Load images named 0.png through 10.png
  for (let i = 0; i <= 10; i++) {
    loadImage(
      `${i}.png`,
      (img) => { // Success callback
        images[i] = img;
        imagesLoaded++;
      }
    );
  }
}

function setup() {
  createCanvas(640, 480); // Create a drawing canvas
  
  video = createCapture(VIDEO); // Start capturing video
  video.size(640, 480); 
  video.hide(); // Hide the video element
  
  handPose.detectStart(video, gotHands); // Start detecting hand poses
  
  // Randomly place images within the canvas
  for (let i = 0; i <= 10; i++) {
    const padding = 50; 
    imagePositions[i] = {
      x: random(padding, width - padding),
      y: random(padding, height - padding),
      isDragging: false
    };
  }
}

function isPointInImage(x, y, imageIndex) {
  if (!images[imageIndex]) return false;
  
  const img = images[imageIndex];
  const pos = imagePositions[imageIndex];
  
  const left = pos.x - img.width / 2;
  const right = pos.x + img.width / 2;
  const top = pos.y - img.height / 2;
  const bottom = pos.y + img.height / 2;
  
  return x >= left && x <= right && y >= top && y <= bottom;
}

function draw() {
  translate(width, 0);
  scale(-1, 1); // Flip horizontally to match video orientation
  image(bg, 0, 0, bg.width, bg.height); 
  
  // Draw images in order (0 through 10)
  for (let i = 0; i <= 10; i++) {
    if (images[i]) {
      image(images[i], imagePositions[i].x - images[i].width / 2, imagePositions[i].y - images[i].height / 2);
    }
  }
  
  if (hands.length > 0) {
    for (let h = 0; h < hands.length; h++) {
      let finger = hands[h].index_finger_tip;
      let thumb = hands[h].thumb_tip;
      
      let centerX = (finger.x + thumb.x) / 2;
      let centerY = (finger.y + thumb.y) / 2;
      let pinchDistance = dist(finger.x, finger.y, thumb.x, thumb.y);
      
      if (pinchDistance < 25) { // Pinching action
        fill(0, 255, 0, 255);
        
        if (selectedImageIndex === -1) {
          // Select an image to move
          for (let i = 10; i >= 0; i--) {
            if (images[i] && isPointInImage(centerX, centerY, i)) {
              selectedImageIndex = i;
              imagePositions[i].dragOffsetX = centerX - imagePositions[i].x;
              imagePositions[i].dragOffsetY = centerY - imagePositions[i].y;
              break;
            }
          }
        } else {
          // Move the selected image
          imagePositions[selectedImageIndex].x = centerX - imagePositions[selectedImageIndex].dragOffsetX;
          imagePositions[selectedImageIndex].y = centerY - imagePositions[selectedImageIndex].dragOffsetY;
        }
      } else { // Release pinch
        fill(0, 255, 0, 127);
        selectedImageIndex = -1;
      }
      
      noStroke();
      circle(centerX, centerY, pinchDistance); // Show the pinch point
      
      if (selectedImageIndex === -1) {
        for (let i = 10; i >= 0; i--) {
          if (images[i] && isPointInImage(centerX, centerY, i)) {
            stroke(0, 255, 0, 100);
            strokeWeight(2);
            noFill();
            rect(
              imagePositions[i].x - images[i].width / 2,
              imagePositions[i].y - images[i].height / 2,
              images[i].width,
              images[i].height
            );
            break;
          }
        }
      }
    }
  }
}

function gotHands(results) {
  hands = results;
}
