function setup() {
  createCanvas(100, 100);
  background(220);
  //   rect(0, 0, 10, 100);
  //   rect(10, 0, 10, 100);
  //   rect(20, 0, 10, 100);
  //   rect(30, 0, 10, 100);
  //   rect(40, 0, 10, 100);
  //   rect(50, 0, 10, 100);
  //   rect(60, 0, 10, 100);
  //   rect(70, 0, 10, 100);
  //   rect(80, 0, 10, 100);
  //   rect(90, 0, 10, 100);
  for (let x = 0; x < width; x += 10) {
    rect(x, 0, 10, 100);
  }
}
