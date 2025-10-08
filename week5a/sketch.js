let buttonx = 100;
let buttony = 100;
let buttond = 80;
let hovering = false; //boolean variable that tracks whether mouse is hovering over button
let balld = 30;

let r = 0; //hold red amount
let g = 0; //hold green amount
let b = 0; //hold blue amount

let ballx = 0;
let ballspeed = 0.5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0); // if bg is here, theres going to be a cool trailing effect
  // the bg doesn't refresh
  ballx = balld/2;
  
}

function draw() {

  background(r,g,b); // use rbg variables for rbg color
  strokeWeight(1);
  fill(0,255,0); //green fill
  text("x: " + mouseX, "y: " + mouseY, 15,15);
  let distance = dist(mouseX,mouseY,buttonx,buttony);
  text("dist: "+ distance, 15,30);

  stroke(255); //white stroke
  noFill();
  strokeWeight(1);


  if(distance<buttond/2){ //is the distance between the mouse and the center less than the radius
    fill(50); //makes the button have a fill
    hovering = true; //flipped hovering variable
    if(mouseIsPressed){
      strokeWeight(3); // stroke increase when pressed
    }
    ballx = ballx+ballspeed;

  } else {
    hovering = false;
  }
  circle(buttonx,buttony,buttond);

  fill("red");
  noStroke(); 

  if(ballx>width - balld/2 || ballx< balld/2){ //balld.2 to make it bounce on the edge instead of the center of the circle
    ballspeed = -ballspeed;
  }
  
        //below is going to make the ball go totally out of screen after awhile
        //ballx= ballx+ballspeed
        //incrementing ballx by ballspeed, these variables are global and sat at the top
  
  circle(ballx,200,30); //uses ballx for x pos
}

function mousePressed(){ // runs enclosed code once when mouse is pressed down
    if(hovering == true){
      r=random(255);
      g=random(255);
      b=random(255);
      ballspeed = -ballspeed
    }
  }
