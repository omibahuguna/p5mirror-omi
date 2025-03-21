// https://p5js.org/reference/#/p5.Oscillator

let osc;

function setup() {
  createCanvas(400, 400);

  // Create a new oscillator, 'sine' type is default
  // sine, triangle, sawtooth, square
  osc = new p5.Oscillator("sawtooth")
  
  // Set amplitude (volume) 0-1
  osc.amp(0.5)
}

function draw() {
  background(0);

  // Set the frequency
  // let freqVal  = 440;

  
  // Map the frequency
  let freqValue = map(mouseX, 0, width, 10, 880, true)
  console.log(freqValue)
  osc.freq(freqValue)
}

function mousePressed() {
 // start the oscillator
 osc.start()
}
function mouseReleased() {
  // stop the oscillator
 osc.stop()
}