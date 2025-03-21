/*
Modified from ml5 next-gen example
https://editor.p5js.org/ml5/sketches/c8sl_hGmN
"MoveNet is an ultra fast and accurate model that detects 17 keypoints of a body"
*/



let video;

let bodyPose;
let poses = [];

function preload() {
  // STEP 1 - Load the BodyPose model
  bodyPose = ml5.bodyPose("MoveNet")
}

function setup() {
  createCanvas(640, 480);

  // Create webcam video and hide it
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  // STEP 2 - Start detecting poses from video source
  bodyPose.detectStart(video, gotHumans)
}

// STEP 3 - Callback function for when bodypose outputs data
function gotHumans(results) {
  // Save the output to the poses variable
  poses = results;
}

// STEP 4 - Function to print pose info
function mousePressed(){
  console.log(poses)
}

function draw() {
  // Draw the webcam video
  image(video, 0, 0, width, height);
  
  // STEP 5 - If there are poses, work with specific points
  if (poses.length > 0) {
    for (let i = 0; i < poses.length; i++) {
      let pose = poses[i];
      
      // Check if the keypoints exist
      if (pose.nose) {
        let nose = pose.nose;
        circle(nose.x, nose.y, 30);
      }
      
      if (pose.left_eye) {
        let lE = pose.left_eye;
        circle(lE.x, lE.y, 20);
      }
      
      if (pose.right_eye) {
        let rE = pose.right_eye;
        circle(rE.x, rE.y, 20);
      }
    }
  }
}



