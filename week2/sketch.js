let middle = width/2;
let center = height/2;

function setup() { //runs once at the start
  createCanvas(windowWidth, windowHeight);  
  // createCanvas is function that creates a canvas for p5js sketch to draw
  // into. uses height and width, windowWidth and windowHeight to set the size
  // to the full size of the browser window. 
  background(255,210,0); // make background yellow-gold color
}

function draw() { // runs in a loop after setup
  
  stroke(0,0,205);
  strokeWeight(10)
  noFill();
  triangle (middle-50,center+50,center-50); 
  // make a triangle stroke to the left of the center circle, 
  // but still touching the circle

  fill(255);
  circle(middle,center,100);
  // filled white circle in the center of the canvas

  stroke(0,0,0);
  strokeWeight(10);
  noFill();
  arc(middle, center+20, 100, 100, PI / 4, -PI / 4);
  //make a pacman-like arc to the right of the center circle by 50 pixels
}
