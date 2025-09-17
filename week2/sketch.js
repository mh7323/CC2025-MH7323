function setup() { //runs once at the start
  createCanvas(windowWidth, windowHeight);  
  // createCanvas is function that creates a canvas for p5js sketch to draw
  // into. uses height and width, windowWidth and windowHeight to set the size
  // to the full size of the browser window. 
  background(255,210,0); // make background yellow-gold color
}

function draw() { // runs in a loop after setup
  stroke(0,0,205);
  strokeWeight(4)
  noFill();
  triangle((width/2)-50,height/2,80,(height/2)-100,80,(height/2)+100);
  // make a triangle stroke to the left of the center circle, 
  // but still touching the circle

  fill(250);
  noStroke();
  circle(width/2,height/2,200);
  // filled white circle in the center of the canvas

  stroke(210,105,30);
  strokeWeight(5);
  noFill();
  arc((width/2)+150, (height/2), 200, 200, PI / 4, -PI / 4);
  //make a pacman-like arc to the right of the center circle

}
