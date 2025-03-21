let x = 0; // variable to establish the starting point for the moving parts of the sketch

function setup() {
  createCanvas(600, 600);
}

function draw() {
  // Day Time
  if (mouseX < 300) {
    background("#94BBEE"); // light blue sky
    noStroke();

    // An eagle behind the Sun for added depth
    textSize(30);
    text("🦅", x, 200);

    // The Sun's glow
    fill(255, 226, 36, 50);
    rect(width / 2, height / 2, 220);
    fill(255, 226, 36, 25);
    rect(width / 2, height / 2, 240);
    fill(255, 226, 36, 10);
    rect(width / 2, height / 2, 260);

    // The Sun
    fill("#FFE224");
    rectMode(CENTER);
    rect(width / 2, height / 2, 200);

    // Eagles
    textSize(30);
    text("🦅", x + 40, 400);
    text("🦅", x - 100, 130);
    text("🦅", x - 100, 300);
    x += 2;

    // Buildings
    fill("#C9631A");
    rectMode(CENTER);
    rect(20, 500, 100, 400);
    rect(100, 500, 100, 200);
    rect(200, 600, 100, 200);
    rect(500, 500, 100, 400);
    rect(400, 600, 100, 200);
    rect(580, 440, 100, 400);

    // Windows
    fill("#8D4C1E");
    rect(100, 500, 30);
    rect(120, 550, 30);
    rect(120, 430, 30);
    rect(40, 550, 30);
    rect(20, 400, 30);
    rect(40, 460, 30);
    rect(180, 560, 30);
    rect(220, 540, 30);
    rect(500, 500, 30);
    rect(480, 550, 30);
    rect(480, 430, 30);
    rect(400, 550, 30);
    rect(550, 400, 30);
    rect(550, 460, 30);
    rect(580, 560, 30);
    rect(570, 300, 30);

    // Night Time
  } else {
    background("#6C368E");
    noStroke();

    // Bat behind the Moon
    textSize(30);
    text("🦇 batman", x, 200);

    // The Moon's Glow
    fill(255, 50);
    rect(width / 2, height / 2, 220);
    fill(255, 25);
    rect(width / 2, height / 2, 240);
    fill(255, 10);
    rect(width / 2, height / 2, 260);

    // The Moon
    fill("white");
    rectMode(CENTER);
    rect(width / 2, height / 2, 200);

    // Bats
    textSize(30);
    text("🦇", x + 40, 400);
    text("🦇", x - 100, 130);
    text("🦇", x - 100, 300);
    x += 2;

    // Buildings
    fill("#C9631A");
    rectMode(CENTER);
    rect(20, 500, 100, 400);
    rect(100, 500, 100, 200);
    rect(200, 600, 100, 200);
    rect(500, 500, 100, 400);
    rect(400, 600, 100, 200);
    rect(580, 440, 100, 400);

    // Windows
    fill("#FFAE00");
    rect(100, 500, 30);
    rect(120, 550, 30);
    rect(120, 430, 30);
    rect(40, 550, 30);
    rect(20, 400, 30);
    rect(40, 460, 30);
    rect(180, 560, 30);
    rect(220, 540, 30);
    rect(500, 500, 30);
    rect(480, 550, 30);
    rect(480, 430, 30);
    rect(400, 550, 30);
    rect(550, 400, 30);
    rect(550, 460, 30);
    rect(580, 560, 30);
    rect(570, 300, 30);
  }
}
