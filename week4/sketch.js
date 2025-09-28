

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  //any transformations are reset at the beginning of draw
  background("#eb913dff")
  circle(100,100,100);
  circle(85,90,5);
  circle(115,90,5);
  arc(100,100,60,60,0,PI);

  push();
  rotate(radians(mouseX));
  stroke("white");
  strokeWeight(3);
  line(0,0,100,0);
  pop();

  //push and pop isolate a transformation
  // or anything encolsed within push and pop only applies within that enclosure
  push();

  if(mouseX>width/2 && mouseY>height/2){ //if the test inside the () is met.. 
    fill("pink");
  } else if (mouseX<width/2 && mouseY<height/2){ //otherwise
    fill("orange");
  } else {
    fill ("red"); 
  }

  if(mouseIsPressed == true){
    fill("yellow");
  }

  fill("#17a2b8ff")

  //translate if a transformation function that moves
  //the coordinte matrix according to a new set of coordinates that become the new 0,0
  translate(width/2,height/2);
  let angle;
  // map is a function that scales numbers proportionately (eg if want rotation to only rotate one across the width)
  // parameters are: 
  // 1: input variable to scale
  // 2: low end of input range
  // 3: high end of input range 
  // 4: low end of the output range
  // 5: high end of the output range 
  angle = map(mouseX,0,width,0,360);
  rotate(radians(angle));

  let scaleFactor; // make variable to hold scale amont
  scaleFactor = map(mouseY, 0, height, 0.1, 3)

  // takes a number that affects the size
  // if you supply 2 parameters, it is going to be x y 
  scale(scaleFactor);

  circle(0,0,100);
  circle(-15,-10,5);
  circle(15,-10,5);
  arc(0,0,60,60,0,PI);
  pop();
  
  //text function: text, x, y of top left corner
  text(mouseX + "," + mouseY,5,15)
}
