let currentScene;
let font;

function preload() {
  font = loadFont("RETROTECH.ttf");
}

function setup() {
  createCanvas(600, 600);
  currentScene = Scene2; // Start with the first scene
  textFont(font);
}

function draw() {
  background("black");
  Scene2 ();
}

function Scene2() {
   fill ("white")
    textSize(20);
    text("The echoes of World War 3 reverberate 25 years", 50, 100);
    text("after it began. Did it even end? No one really knows.", 50, 120);
    text("The fallout is brutal; human life only survives", 50, 140);
    text("underground: The Underworld.", 50, 160);

    text("You are approached by 'The Doctor.'", 50, 200);
    text("He isn't known to be a nice man.", 50, 220);
    text("He tells you that they've possibly found a way", 50, 240);
    text("to rebuild civilization. His team has", 50, 260);
    text("been monitoring your dreams.", 50, 280);
    text("You are a vivid dreamer.", 50, 300);
    text("You would make the perfect volunteer.", 50, 320);
    
    push();
    fill("orange");
    textSize(30);
    text("1: VOLUNTEER", 50, 500);
    text("2: DECLINE", 50, 550);
    pop ()


  if (keyIsPressed) {
    if (key === '1') {currentScene = Scene3}
  else if (key === '2') {currentScene = Scene4}
  }
}

function Scene3() {
   fill ("white")
    textSize(20);
    text("You reach a medical facility.", 50, 100);
    text("The Doctor hooks your head up to machine.", 50, 120);
    text("You get drowsy. Drowsier. You're dead asleep.", 50, 140);
    

    text("You wake up in a memory: a beautiful sunny day at the pier.", 50, 200);
    text("You see the planes, the ice-cream, the woman.", 50, 220);
    text("The visceral response of your body to this memory wakes you up.", 50, 240);
    text("Before you know it, the Doctor puts you to sleep again.", 50, 260);
    text("This time, you’re somewhere else:", 50, 280);
    text("The woman is here too.", 50, 300);
    
    push();
    fill("orange");
    textSize(30);
    text("1: TALK TO THE WOMAN", 50, 500);
    text("2: FIND YOUR WAY BACK", 50, 550);
    pop ()


  if (keyIsPressed) {
    if (key === '1') {currentScene = Scene5}
  else if (key === '2') {currentScene = Scene6}
  }
}


function Scene4() {
   fill ("white")
    textSize(20);
    text("One thing about The Doctor you should have known", 50, 100);
    text("is that 'no' was never an option.", 50, 120);
    text("You rush towards the door but", 50, 140);
   text("the guard's baton puts you back to sleep.", 50, 160);
    

    text("You are the volunteer.", 50, 200);
    text("The guards drag your unconscious body.", 50, 220);
   
    push();
    fill("orange");
    textSize(30);
    text("1: TALK TO THE WOMAN", 50, 500);
    text("2: FIND YOUR WAY BACK", 50, 550);
    pop ()


  if (keyIsPressed) {
    if (key === '1') {currentScene = Scene5}
  else if (key === '2') {currentScene = Scene6}
  }
}