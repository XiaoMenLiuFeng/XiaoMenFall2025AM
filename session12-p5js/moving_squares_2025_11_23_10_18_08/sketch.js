
let squares = [];
let speedX = 3;

function setup() {
  createCanvas(720, 400);
  textSize(20);
  noLoop();

  let colors = [
    [255, 0, 0],    
    [0, 255, 0],    
    [0, 0, 255],    
    [255, 255, 0],  
    [255, 0, 255]  
  ];

  for (let i = 0; i < 5; i++) {
    squares.push({
      x: i * 140,
      y: height / 2,
      size: 50,
      offset: random(100),
      color: colors[i]
    });
  }
}

function draw() {
  background(0); 

  for (let s of squares) {
    fill(s.color[0], s.color[1], s.color[2]); 
    rect(s.x, s.y + sin(frameCount * 0.1 + s.offset) * 10, s.size, s.size);

    s.x += speedX;
    if (s.x > width + s.size) s.x = -s.size;
  }
}

function mousePressed() {
  if (isLooping()) noLoop();
  else loop();
}

function keyPressed() {
  redraw();
}


