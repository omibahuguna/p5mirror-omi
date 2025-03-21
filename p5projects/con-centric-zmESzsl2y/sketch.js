function setup () {
createCanvas (400, 400); 
}


function draw() {
background (220);
  
let origin = 200
let stroke = 15

for (let size = 250; size >= 50; size -= 50) {
stroke -= 2
strokeWeight (stroke)
circle (origin, origin, size)
}
}