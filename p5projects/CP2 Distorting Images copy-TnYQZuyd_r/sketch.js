/*
DISTORTING IMAGES
Jeff Thompson | 2021 | jeffreythompson.org

So far, we've only thought about images in terms of x/y
coordinates, changing or looking at pictures as a grid.
But things can get really interesting if we use start
using sin() and even polar coordinates (which see position
as angle and distance from a central point)!

There are two functions in this demo:
Distort: pushes pixels using sin(), try changing
         the variables below to see their effect
Fisheye: uses polar coordinates and some math to
         do a bunch of different, fun distortions!

BASED ON
Created from examples in 'An Interdisciplinary Introduction
to Image Processing: Pixels, Numbers, and Programs' by
Steven L. Tanimoto (thanks!)

CHALLENGES
1. Experiment with some of the settings for each filter
   and catalog the results – can you start to get a sense
   of how each parameter affects the output?
*/

// settings to control the distort filter
let wavinessX = 10;  // smaller number = fewer repetitions
let wavinessY = 10;
let periodX = 15;  // smaller number = more
let periodY = 15;

let cam;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cam = createCapture(VIDEO);
  cam.size(windowWidth, windowHeight);
  cam.hide();
  noLoop();
}

function draw() {
  cam.loadPixels();

  // run the distort filter on the camera feed
  let distorted = distort(cam, wavinessX, wavinessY, periodX, periodY);

  // display the distorted image
  image(distorted, 0, 0);
}

function distort(input, wavinessX, wavinessY, periodX, periodY) {
  let output = createImage(input.width, input.height);
  input.loadPixels();
  output.loadPixels();
  for (let y = 0; y < input.height; y++) {
    for (let x = 0; x < input.width; x++) {
      let tempX = x + wavinessX * sin(x / periodX);
      let tempY = y + wavinessY * sin(y / periodY);
      let px = input.get(tempX, tempY);
      output.set(x, y, px);
    }
  }
  output.updatePixels();
  return output;
}
