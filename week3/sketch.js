//variable declaration:
// "let" is a keyword to declare a variable
// this one below is is storing the number 125

//below are GLOBAL variables accessible by all the code
let mattscircle; //variable to store circle size

function setup() { //runs once at startup
  createCanvas(400,400); //sets a 400x400 canvas
  mattscircle = width*0.25; // sets mattscircle variable in relation to width
}

function draw() {

  console.log(mouseX/width + " " + mouseY/height); // to find the px or % of stuff

  // grey scale color is denoted as a number 0-255
  // three values: R G B mixture
  // background(127,0,0);

  // can use name of color like "black" or "olive"
  // background("aquamarine")

  //can format rbg colors as strings - it gives a color selector
  background("rgba(146, 196, 169, 1)");

  noStroke();
  fill("#195140ff")
  rect(0,0,width/2, height/2) //square in the top left corner
  rect(width/2,height/2,width,height) //square in bottom right corner

  //stroke and fill change color of drawn shapes
  stroke("rgba(255, 255, 255, 1)");
  fill("rgba(62, 79, 210, 1)");

  strokeWeight(5);
  //nostroke(); gets rif of streke completely
  //nofill(); gets rid of fill completely 

  // circle is x,y,diameter
  circle(200,100,mattscircle);

  //setting a new fill for my rectangle
  fill("rgba(58, 178, 56, 1)");

  //rect parameters are x (top left),y (topleft), width, height)
  rect(100,150,100,50);

  // x,y of cneter, then width and height
  ellipse(240,90,20,30)

  //line connect 2 x,y coords
  line(250,130,230,130)

  //to draw complex polygons (more than 2 coords)
  beginShape();
  vertex(100,120); // left most
  vertex(200,100); // top right
  vertex(200,150); // bottom most
  endShape(CLOSE);

  //can use width and height to position object relative to the page
  // colors can also be denoted with hex codes
  fill("#5b16b5ff");
  //circle((width/2),height*0.75,mattscircle);

  //ellipse(mouseX,mouseY,mouseY/4,mouseX*0.25);

  //arcs are like ellipses but they have 2 extra parameters
  //start and end which are in radians 
  // convert degree to radians using radians() function
  // CHORD at the end to close the lines, PIE to close it like a pie
  arc(width/2,height*0.75,100,100,radians(30),radians(330),PIE);



}
