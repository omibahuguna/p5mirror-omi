let words = ["ಥ_ಥ", "(ง'̀-'́)ง", "(°ロ°)☝", "(｡◕‿‿◕｡)", "( ͡° ͜ʖ ͡°)", "(ᵔᴥᵔ)", "༼ つ ◕_◕ ༽つ"];

let index = 0;

function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(0);

  fill(255);
  textSize(32);
  text(words[index], 10, 100);
}

function mousePressed() {
  index = index + 1;

  if (index == words.length) {
    index = 0;
  }
}