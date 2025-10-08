let displacement = 0;
let s1;
let s2 = -1; 
let drop;
let theta = 0;
let circley;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 100);
}

//the entire idea of this project is to make a close up of a little
// plant sprout, which will grow every minute, while there is a water droplet that drops on every second
// with the background color changing every hour to simulate day and night
// I was an agricultural sciences major during undergrad and wanted to pay a homage to it

function draw() {
  background("#e5f7f0ff"); // the upper most color
  // backdrop creation earned curve vector from https://www.youtube.com/watch?v=k49-ETawIMk
  // the measurements and scales are random from trail and error
  noStroke();
  fill("#93c7b9ff");
  beginShape();
  // the curves are supposed to look irregular as this is just a gradient for the background
  // used window height and windoe wdith to make it scalable
  vertex(0, windowHeight); // starting vertex
  curveVertex(0, windowHeight - windowHeight); // left most wave
  curveVertex(windowWidth / 6, windowHeight - windowHeight + 20);
  curveVertex(windowWidth / 3, windowHeight - windowHeight + 100);
  curveVertex(windowWidth / 2, windowHeight - windowHeight + 80); // middle wave
  curveVertex((2 * windowWidth) / 3, windowHeight - windowHeight + 150);
  curveVertex((5 * windowWidth) / 5, windowHeight - windowHeight + 50); // right wave (going under)
  curveVertex(windowWidth, windowHeight - windowHeight + 150);
  vertex(windowWidth, windowHeight);
  vertex(0, windowHeight);
  endShape(CLOSE);

  // bg component 4
  fill("#6ea593ff");
  beginShape();
  // the curves are supposed to look irregular as this is just a gradient for the background
  // used window height and windoe wdith to make it scalable
  vertex(0, windowHeight); // starting vertex
  curveVertex(0, windowHeight / 2.5); // left most wave
  curveVertex(windowWidth / 6, windowHeight * 0.2);
  curveVertex(windowWidth / 3, windowHeight / 2.6);
  curveVertex(windowWidth / 2, windowHeight / 3); // middle wave
  curveVertex((2 * windowWidth) / 3, windowHeight / 2.5);
  curveVertex((5 * windowWidth) / 5, windowHeight / 2); // right wave (going under)
  curveVertex(windowWidth, windowHeight * 3);
  vertex(windowWidth, windowHeight);
  vertex(0, windowHeight);
  endShape(CLOSE);

  // bg component 3
  fill("#308774ff");
  beginShape();
  // the curves are supposed to look irregular as this is just a gradient for the background
  // used window height and windoe wdith to make it scalable
  vertex(0, windowHeight); // starting vertex
  curveVertex(0, windowHeight / 2); // left most wave
  curveVertex(windowWidth / 6, windowHeight / 2);
  curveVertex(windowWidth / 3, windowHeight / 2);
  curveVertex(windowWidth / 2, windowHeight - windowHeight / 2 + 100); // middle wave
  curveVertex((2 * windowWidth) / 3, windowHeight / 2);
  curveVertex((5 * windowWidth) / 5, windowHeight / 1.5); // right wave (going under)
  curveVertex(windowWidth, windowHeight / 2);
  vertex(windowWidth, windowHeight);
  vertex(0, windowHeight);
  endShape(CLOSE);

  // bg component 2
  fill("#237c67ff");
  beginShape();
  // the curves are supposed to look irregular as this is just a gradient for the background
  // used window height and windoe wdith to make it scalable
  vertex(0, windowHeight); // starting vertex
  curveVertex(0, windowHeight - windowHeight / 2); // left most wave
  curveVertex(windowWidth / 6, (windowHeight * 3) / 4);
  curveVertex(windowWidth / 3, windowHeight / 1.5);
  curveVertex(windowWidth / 2, windowHeight - windowHeight / 3.5); // middle wave
  curveVertex((2 * windowWidth) / 3, (windowHeight * 3) / 4);
  curveVertex((5 * windowWidth) / 5, (windowHeight * 3) / 4); // right wave (going under)
  curveVertex(windowWidth, (windowHeight * 3) / 2);
  vertex(windowWidth, windowHeight);
  vertex(0, windowHeight);
  endShape(CLOSE);

  // bg component 1 (most front)
  fill("#145d3dff");
  beginShape();
  // the curves are supposed to look irregular as this is just a gradient for the background
  // used window height and windoe wdith to make it scalable
  vertex(0, windowHeight); // starting vertex
  curveVertex(0, (windowHeight * 3) / 4); // left most wave
  curveVertex(windowWidth / 6, windowHeight - windowHeight / 3);
  curveVertex(windowWidth / 3, (windowHeight * 3) / 4);
  curveVertex(windowWidth / 2, windowHeight - windowHeight / 3); // middle wave
  curveVertex((2 * windowWidth) / 3, (windowHeight * 3) / 4);
  curveVertex((5 * windowWidth) / 5, windowHeight); // right wave (going under)
  curveVertex(windowWidth, (windowHeight * 3) / 4);
  vertex(windowWidth, windowHeight);
  vertex(0, windowHeight);
  endShape(CLOSE);

  // made to write the displacement of the plant, to be inputted into the y axis of the plant elements
  let d = map(minute(),0,6000,0,windowHeight-100); // it doesnt stop on the window height and doesnt refresh
  displacement = d;
  
  //plant that grows every day
  // calls functions drawLeaf and drawStem
  drawLeaf(200,windowHeight-200-displacement,radians(60),100); // draws the right leaf, used number instead of scale so that it will always be somewhat towards the left of the screen
  drawLeaf(200,windowHeight - 200-displacement,radians(300),100); // draws the left leaf, used number instead of scale so that it will always be somewhat towards the left of the screen
  drawStem(200, windowHeight - 200-displacement, windowWidth - windowWidth, windowHeight);
  //circlex = cos(radians(thetax))*radiusx; 
    //thetax++; //++ means add to existing avr
  
  circley = cos(radians(180))*20; // need help with this, i dont know how to make the water drop down in a fluid motion
  theta++;
  
  s1 = second();
  if(s1!==s2){ // if the current second is not equals to the previous second
    drop =0; //reset drop to 0
    s2=s1; // resets s2 to the current second
  }
  
  drop += (windowHeight/60) //drops the whole frame per second
  drawWater(200,drop);


  //soil
  // not scalable, wanted it to leveled
  fill("rgba(57, 34, 23, 1)");
  beginShape();
  vertex(0, windowHeight); // starting vertex
  curveVertex(0, windowHeight - 100); // left most wave
  curveVertex(windowWidth / 6, windowHeight - 100);
  curveVertex(windowWidth / 3, windowHeight - 120);
  curveVertex(windowWidth / 2, windowHeight - 100); // middle wave
  curveVertex((2 * windowWidth) / 3, windowHeight - 75);
  curveVertex((5 * windowWidth) / 6, windowHeight - 80); // right wave
  curveVertex(windowWidth, windowHeight - 120);
  vertex(windowWidth, windowHeight);
  vertex(0, windowHeight);
  endShape(CLOSE);

  // soil darker gradient
  fill("rgba(43, 24, 15, 1)");
  beginShape();
  vertex(0, windowHeight); // starting vertex
  curveVertex(0, windowHeight - 90); // left most wave
  curveVertex(windowWidth / 6, windowHeight - 80);
  curveVertex(windowWidth / 3, windowHeight - 100);
  curveVertex(windowWidth / 2, windowHeight - 90); // middle wave
  curveVertex((2 * windowWidth) / 3, windowHeight - 70);
  curveVertex((5 * windowWidth) / 6, windowHeight - 60); // right wave
  curveVertex(windowWidth, windowHeight - 100);
  vertex(windowWidth, windowHeight);
  vertex(0, windowHeight);
  endShape(CLOSE);

  //have the time on the top right corner, taken from lecture
  text(day(),50,50); //gives calendar day
  text(hour(),50,80); //gives hour
  text(minute(),50,110); //gives minute
  text(second(),50,140); //gives second
}

// function of drawing the sprout's leaves using 2 resources
// bezier function: https://p5js.org/reference/p5/bezier/
// used to make smooth lines similar to vectors
// leaf shaping: https://editor.p5js.org/adina_nicola/sketches/9GkR_bySW
// I used this resource to help me with shaping and putting angles on the leaf,
// but integrated my own sizing and variables to fit my needs
function drawLeaf(x, y, angle, length) {
  push();
  translate(x, y); // used to move the leaf according to called function
  rotate(angle); // used to rotate the leaf
  fill("#38c95cff");
  noStroke();
  beginShape();
  vertex(0, 0);
  bezierVertex(20, -length / 2, 30, -length / 2, 0, -length); // uses bezier vertex to make leaves
  bezierVertex(-10, -length / 2, -20, -length / 2, 0, 0);
  endShape();
  pop();
}

// created this function to draw the stem, using x,y and the length
// the stem should be responsive to day()
function drawStem(x1, y1, x2, y2) {
  push();
  translate(x1, y1);
  strokeWeight(5);
  stroke("#38c95cff");
  line(0, 0, x2, y2); // used line instead of rect to make it easier to move x1 and y1 based on minute()
  pop();
}


// created water droplet function similar to stem but without x2 and y2 as those do not exist with circles
function drawWater(x1, y1) { 
  push();
  translate(x1, y1);
  fill("#175ed1ff");
  noStroke();
  circle(0,circley,20)
  pop();

}