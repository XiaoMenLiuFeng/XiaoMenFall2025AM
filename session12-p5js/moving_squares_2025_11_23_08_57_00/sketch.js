let squares = [];
let speedX = 3;

function setup() {
  createCanvas(720, 400);
  colorMode(HSB);
  textSize(20);
  noLoop();

  let colors = [0, 60, 120, 180, 240]; 

  for (let i = 0; i < 5; i++) {
    squares.push({
      x: i * 140,
      y: height / 2,
      size: 50,
      offset: random(100),
      colorHue: colors[i] 
    });
  }
}

function draw() {
  background(0);

  for (let s of squares) {
    fill(s.colorHue, 90, 90); 
    rect(s.x, s.y + sin(frameCount * 0.1 + s.offset) * 10, s.size, s.size);

    s.x += speedX;
    if (s.x > width + s.size) s.x = -s.size;
  }

  describe('multiple squares moving horizontally with wave vertical float');
}

function mousePressed() {
  if (isLooping()) noLoop(); else loop();
}

function keyPressed() {
  redraw();
}
