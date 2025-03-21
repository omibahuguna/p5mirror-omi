// Welcome to The Volunteer: A text-based game inspired by the 1962 film, La Jetée — check it out.

let currentScene;
let font;

function preload() {
  font = loadFont("RETROTECH.ttf");
}

// setting the canvas up to begin with scene1 and loading a custom font
function setup() {
  createCanvas(600, 600);
  currentScene = Scene1; // Start with the first scene
  textFont(font);
}

// in the draw function, I want to color the background red, and have the "current scene" play. The current scene will change based on the player's choices.
function draw() {
  background("black");
  currentScene();

  // mentioning here that the player must press the key corresponding to their choices to proceed here. Unfortunately, the keyIsPressed function registers can register one press as multiple. To counteract that, I had to change the keys that were required to be pressed for each scene.
  push();
  fill("brown");
  textSize(12);
  textAlign(CENTER);
  text("PRESS THE CORRESPONDING KEY TO PROCEED", width / 2, 580);
  pop();

  // the name of the game
  push();
  fill("blue");
  textSize(50);
  textAlign(CENTER);
  text("THE VOLUNTEER", width / 2, 60);
  pop();
}

// what follows below, is a series of scenes, the logic and lines for which were written up beforehand.
function Scene1() {
  fill("white");
  textSize(20);

  text("You are 10. You just watched a man get shot and die.", 50, 100);
  text("A memory from before the war: a sunny day at", 50, 120);
  text("the pier with your parents. There is a woman", 50, 140);
  text("wearing a blue scarf, planes flying overhead,", 50, 160);
  text("and ice-cream.", 50, 180);
  text("You wake up.", 50, 220);

  push();
  fill("orange");
  textSize(30);
  text("1: NEXT", 50, 500);
  pop();

  if (keyIsPressed) {
    if (key === "1") {
      currentScene = Scene2;
    }
  }
}
function Scene2() {
  textSize(20);
  text("The echoes of World War 3 reverberate 25 years", 50, 100);
  text("after it began. Did it even end? The lines are blurred.", 50, 120);
  text("The sky is stained with fallout; human life only", 50, 140);
  text("survives underground: in The Underworld.", 50, 160);

  text("Here, you are approached by: The Doctor.", 50, 200);
  text("Contrary to his reputation, he looks harmless.", 50, 220);
  text("He claims to have found a way back", 50, 240);
  text("to what once was. His team has", 50, 260);
  text("been monitoring your dreams.", 50, 280);
  text("You are a vivid dreamer.", 50, 320);
  text("You would make the perfect volunteer.", 50, 340);

  push();
  fill("orange");
  textSize(30);
  text("2: VOLUNTEER", 50, 500);
  text("3: DECLINE", 50, 530);
  pop();

  if (keyIsPressed) {
    if (key === "2") {
      currentScene = Scene3;
    } else if (key === "3") {
      currentScene = Scene4;
    }
  }
}

function Scene3() {
  textSize(20);
  text("You reach a medical facility.", 50, 100);
  text("Wires trace paths across your skull.", 50, 120);
  text("You get drowsy. Drowsier. You are dead asleep.", 50, 140);

  text("You wake up in a memory:", 50, 180);
  text("a beautiful sunny day at the pier.", 50, 200);
  text("You see the planes, the ice-cream, the woman.", 50, 220);
  text("Are you really back here? You walk towards her,", 50, 260);
  text("but The Doctor drags you back.", 50, 280);
  text("This time, you are somewhere else.", 50, 320);
  text("She is here too.", 50, 340);

  push();
  fill("orange");
  textSize(30);
  text("4: TALK TO THE WOMAN", 50, 500);
  text("5: FIND YOUR WAY BACK", 50, 530);
  pop();

  if (keyIsPressed) {
    if (key === "4") {
      currentScene = Scene5;
    } else if (key === "5") {
      currentScene = Scene6;
    }
  }
}

function Scene4() {
  textSize(20);
  text("One thing about The Doctor you should", 50, 100);
  text("have known is that NO was never an option.", 50, 120);
  text("You rush towards the door but", 50, 140);
  text("the guard's baton puts you to sleep.", 50, 160);

  text("You ARE the volunteer.", 50, 200);
  text("The guard drags your unconscious body.", 50, 220);

  push();
  fill("orange");
  textSize(30);
  text("v: VOLUNTEER", 50, 500);
  pop();

  if (keyIsPressed) {
    if (key === "v") {
      currentScene = Scene3;
    }
  }
}

function Scene5() {
  textSize(20);
  text("You approach the woman, she turns to you.", 50, 100);
  text("She meets your gaze with a familiar smile.", 50, 120);
  text("You walk side by side and continue talking.", 50, 140);
  text("You have known each other forever...", 50, 160);

  text("But the moment is fleeting,", 50, 200);
  text("and you are yanked back to the facility.", 50, 220);

  push();
  fill("orange");
  textSize(30);
  text("8: WHAT IS HAPPENING?", 50, 500);
  text("9: BACK OUT", 50, 530);
  pop();

  if (keyIsPressed) {
    if (key === "8") {
      currentScene = Scene8;
    } else if (key === "9") {
      currentScene = Scene7;
    }
  }
}

function Scene6() {
  textSize(20);
  text("The world before the war...", 50, 100);
  text("Surely this cannot be real.", 50, 120);
  text("You must be dreaming.", 50, 140);
  text("How could you possibly know if you are not?", 50, 160);

  text("What has the Doctor done to you?", 50, 200);

  push();
  fill("orange");
  textSize(30);
  text("q: ACCEPT YOUR FATE", 50, 500);
  text("w: RUN", 50, 530);
  pop();

  if (keyIsPressed) {
    if (key === "q") {
      currentScene = Scene10;
    } else if (key === "w") {
      currentScene = Scene9;
    }
  }
}

function Scene7() {
  textSize(20);
  text("You awaken in a cold sweat.", 50, 100);
  text("You don't want to do this anymore.", 50, 120);
  text("The Doctor is cold, unwavering.", 50, 140);
  text("He tells you that you were sent back in time.", 50, 160);
  text("A precursor to your true mission:", 50, 180);
  text("A plea to the future.", 50, 200);

  text("We look to our progeny for help.", 50, 240);
  text("You are ready for the future.", 50, 260);

  text("Before you know it, you are in another time:", 50, 300);
  text("An alien time with alien people.", 50, 320);
  text("They know why you are here.", 50, 340);

  push();
  fill("orange");
  textSize(30);
  text("e: ASK THEM FOR HELP", 50, 500);
  text("r: ASK TO GO BACK TO THE PIER", 50, 530);
  pop();

  if (keyIsPressed) {
    if (key === "e") {
      currentScene = Scene14;
    } else if (key === "r") {
      currentScene = Scene15;
    }
  }
}

function Scene8() {
  textSize(20);
  text("You demand answers.", 50, 100);
  text("What has The Doctor done to you?", 50, 120);
  text("He tells you that you were sent back in time.", 50, 140);
  text("A precursor to your true mission:", 50, 160);
  text("A plea to the future.", 50, 180);

  text("We look to our progeny for help.", 50, 220);
  text("You are ready for the future.", 50, 240);
  text("Reality warps and you are hurled into an alien time.", 50, 260);
  text("You are greeted by future humans.", 50, 280);

  push();
  fill("orange");
  textSize(30);
  text("t: ASK THEM FOR HELP", 50, 500);
  text("b: ASK TO BE BACK AT THE PIER", 50, 530);
  pop();

  if (keyIsPressed) {
    if (key === "t") {
      currentScene = Scene14;
    } else if (key === "b") {
      currentScene = EndScene;
    }
  }
}

function Scene9() {
  textSize(20);
  text("In your panic, you begin to run.", 50, 100);
  text("Your heart races and you fall to the ground.", 50, 120);
  text("You wake up in the facility. You demand answers.", 50, 140);
  text("What has The Doctor done to you?", 50, 160);
  text("He tells you that you were sent back in time.", 50, 200);
  text("A precursor to your true mission:", 50, 220);
  text("A plea to the future.", 50, 240);

  text("We look to our progeny for help.", 50, 260);
  text("You know what you must do.", 50, 300);

  push();
  fill("orange");
  textSize(30);
  text("u: TAKE ME TO THE FUTURE", 50, 500);
  pop();

  if (keyIsPressed) {
    if (key === "u") {
      currentScene = Scene11;
    }
  }
}

function Scene10() {
  textSize(20);
  text("Snap out of it!", 50, 100);
  text("You are here for a reason.", 50, 120);
  text("Humanity depends on you.", 50, 140);
  text("Get it together!", 50, 160);

  push();
  fill("orange");
  textSize(30);
  text("i: TALK TO THE WOMAN", 50, 500);
  pop();

  if (keyIsPressed) {
    if (key === "i") {
      currentScene = Scene5;
    }
  }
}

function Scene11() {
  textSize(20);
  text("You are afraid of what the past represents.", 50, 100);
  text("Its allure is a poison.", 50, 120);
  text("You do not want to go back.", 50, 140);
  text("You must save what is left.", 50, 160);

  text("The Doctor smirks as he prepares the machine.", 50, 180);
  text("You plunge into the unknown.", 50, 200);

  text("Welcome to the future, Volunteer.", 50, 240);
  text("Future people greet you.", 50, 260);

  push();
  fill("orange");
  textSize(30);
  text("o: ASK THEM FOR HELP", 50, 500);
  pop();

  if (keyIsPressed) {
    if (key === "o") {
      currentScene = Scene14;
    }
  }
}

function Scene14() {
  textSize(20);
  text("You have made it to the future.", 50, 100);
  text("You remind them of their past:", 50, 120);
  text("Your present.", 50, 140);
  text("They offer to help. But they warn you:", 50, 160);
  text("Upon your return,", 50, 180);
  text("The Doctor will have you killed.", 50, 200);

  text("They offer you safe haven in their time.", 50, 240);
  text("You ask to be sent back to the pier instead.", 50, 260);

  push();
  fill("orange");
  textSize(30);
  text("a: GO TO THE PIER", 50, 500);
  pop();

  if (keyIsPressed) {
    if (key === "a") {
      currentScene = EndScene;
    }
  }
}

function Scene15() {
  textSize(20);
  text("People in the future have extraordinary ability.", 50, 100);
  text("Your heart pulls you to the pier.", 50, 120);
  text("You ask them to send you there. They agree.", 50, 140);

  push();
  fill("orange");
  textSize(30);
  text("s: GO TO THE PIER", 50, 500);
  pop();

  if (keyIsPressed) {
    if (key === "s") {
      currentScene = EndScene;
    }
  }
}

function EndScene() {
  textSize(20);
  text("You wake up in a memory:", 50, 100);
  text("a beautiful sunny day at the pier.", 50, 120);
  text("You see the planes, the ice-cream, the woman.", 50, 140);

  text("As you reach for her,", 50, 180);
  text("a sharp crack pierces the air, pain erupts in your back.", 50, 200);
  text("Your legs disappear.", 50, 220);
  text("As you kiss the ground, you turn to see", 50, 240);
  text("a smoking gun. The Doctor's assassin.", 50, 260);
  text("A 10 year old watches in horror.", 50, 280);
  text("You turn to look for the woman.", 50, 320);
  text("Her blue scarf falls to the ground.", 50, 340);
  text("All you see is blue. Now all you see is black.", 50, 360);

  push();
  fill("orange");
  textSize(30);
  text("d: GO TO SLEEP", 50, 500);
  pop();

  if (keyIsPressed) {
    if (key === "d") {
      currentScene = Scene1;
    }
  }
}
