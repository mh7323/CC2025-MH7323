

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  //iteration operators 
  // i++ adds 1 to i
  // i+=10 addes 10 to i
  // i-- reduce 1 from i 
  // i-=5 substracts 5 from i 
  //for(let i=0; i>10; i++){
    //console.log(i);
  }



function draw() {
  background("#181927ff"); 
  let pacman; 
  pacman = 50; // the size that pacman will be

  let xgap;
  xgap = 2; // the gap in between each pacman x axis
  let ygap
  ygap = 2 // the gap in between each pacman y axis 

  // creating the variables
  let mouthclose;
  let hue;
  let sat;

  //pacman 
  for(let y = pacman; y < height; y += pacman+ygap){ // sets the shapes on the y axis with a 20px gap
    for(let x = pacman; x < width; x += pacman+xgap){ // sets the shapes on the x axis with a 20px gap

    mouthclose = map(y, 0, height, PI/6, PI/3); //sets the rate at which the mouths open progressively

    if (mouseX > x - pacman/2 &&
      mouseX < x + pacman/2 &&
      mouseY > y - pacman/2 &&
      mouseY < y + pacman/2) {
        mouthclose = PI/100; //the boundaries of the mouse interaction is pacman/2, redefines mouthclose to close the mouth when mouse is hovering
    } else if (mouseX > x - pacman*1.5 &&
      mouseX < x + pacman*1.5 &&
      mouseY > y - pacman*1.5 &&
      mouseY < y + pacman*1.5) {
        mouthclose = PI/10 // makes the pacman surrounding the mouse hover slighty close their mouth into PI/10
      }

     
    hue = map(y, 0, height, 60, 10); // decreasing the hue value
    sat = map(y,0,height, 100,255); //increasing saturation decreasing  

    fill(hue,sat,255); //fills with the hue and sat and sets the boundary to 255
    stroke(0); //stroke color black
    strokeWeight(3); //stroke 3

    push(); // to not affect the rest of the canvas and not make the translate build on each other
    translate(x,y); // moves the pacman away from origin to x,y based on the for loop 
    arc(0,0,pacman,pacman, mouthclose, 2*PI-mouthclose, PIE) // pacman shape
    pop();  
      
    }
  } 

  //ghost cursor

  let ghost;
  ghost = 45;

  push(); // isolate the translate
  translate(mouseX,mouseY); // follows mouse
  fill("#ce2bd9ff");
  noStroke();
  arc(0,0,ghost,ghost,PI,0,CHORD); //upper part of pacman ghost
  
  noStroke();
  beginShape();
  vertex(-ghost/2,0); // left line
  vertex(-ghost/2, ghost/2);
  vertex(-ghost/4,ghost/3);
  vertex(0,ghost/2); // center feet
  vertex(ghost/4,ghost/3);
  vertex(ghost/2, ghost/2);  
  vertex(ghost/2,0); // right line
  endShape();
  //had to use division instead of addition to make it more scalable incase of change to ghost size
  //removed stroke to make the ghost shape cleaner

  fill("white");
  noStroke();
  ellipse(-ghost/4+2,0,10,20); // white of the eyes
  ellipse(ghost/4+2,0,10,20);
  
  fill("#000000");
  ellipse(-ghost/4+4,2,8,12); // black of the eyes
  ellipse(ghost/4+4,2,8,12); 
  pop();



}


// template made in class:
//  for (let y=50; y<height-50; y+=100){
//    for(let x = 50; x<width; x+=100){
//    circle(x,50,100);
  

//  push();
//  translate(x,y);
//  rotate(y);
  // everything within this push pop block will be centered with 0,0 as the center point

//  strokeWeight(3);
//  fill("#b7e863ff")
//  circle(0,0,100);
//  circle(-15,-10,10);
//  circle(15,-10,10);
//  let happiness;
//  happiness = map(x,0,width,-25,25);

//  arc(0,0,60,60,radians(0-happiness), radians(180+happiness));

//  pop();
//  }
//}}
