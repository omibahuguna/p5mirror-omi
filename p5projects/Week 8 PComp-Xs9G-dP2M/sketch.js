// variables for the circle to be drawn:
let locH = 200, locV = 150;
let circleColor = 255;

// variable to hold an instance of the p5.webserial library:
const serial = new p5.WebSerial();
 
// HTML button object:
let portButton;
let inData;                      // for incoming serial data
let outData;                     // for outgoing data
 
function setup() {
  createCanvas(400, 300);          // make the canvas
  // check to see if serial is available:
  if (!navigator.serial) {
    alert("WebSerial is not supported in this browser. Try Chrome or MS Edge.");
  }
  // if serial is available, add connect/disconnect listeners:
  navigator.serial.addEventListener("connect", portConnect);
  navigator.serial.addEventListener("disconnect", portDisconnect);
  // check for any ports that are available:
  serial.getPorts();
  // if there's no port chosen, choose one:
  serial.on("noport", makePortButton);
  // open whatever port is available:
  serial.on("portavailable", openPort);
  // handle serial errors:
  serial.on("requesterror", portError);
  // handle any incoming serial data:
  serial.on("data", serialEvent);
  serial.on("close", makePortButton);
}

function draw() {
  background(0);               // black background
  fill(circleColor);           // fill depends on the button
  ellipse(locH, locV, 50, 50); // draw the circle
}
 
// if there's no port selected, 
// make a port select button appear:
function makePortButton() {
  // create and position a port chooser button:
  portButton = createButton('choose port');
  portButton.position(10, 10);
  // give the port button a mousepressed handler:
  portButton.mousePressed(choosePort);
}
 
// make the port selector window appear:
function choosePort() {
  serial.requestPort();
}
 
// open the selected port, and make the port 
// button invisible:
function openPort() {
  serial.open({ baudRate: 9600 }).then(initiateSerial);
  if (portButton) portButton.hide();
}
 
function initiateSerial() {
   console.log("port open");
   // send a byte to start the microcontroller sending:
   serial.print("x");
}
 
// read any incoming data as a byte:
function serialEvent() {
  var inString = serial.readStringUntil("\r\n");
  if (inString) {
    console.log("Received data:", inString);
    if (inString !== "hello") {
      var sensors = split(inString, ",");
      if (sensors.length > 2) {
        locH = map(sensors[0], 0, 1023, 0, width);
        locV = map(sensors[1], 0, 1023, 0, height);
        circleColor = 255 - sensors[2] * 255;
        serial.print('x');
      }
    }
  }
}
 
function portError(err) {
  alert("Serial port error: " + err);
}
 
function portConnect() {
  console.log("port connected");
  serial.getPorts();
}
 
function portDisconnect() {
  serial.close();
  console.log("port disconnected");
}
