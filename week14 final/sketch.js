// i am using the reference from week 12 and simplifying it and also making the
// physics more similar to what i want to be
// main changes are: making plant sway instead of grow
// and having upwards growth and not downwards

let handX, handY;
let isDraggingBulb = false;
let bulbRadius = 200;
let plants = [];
let planttop;
let handPose;
let video;
let hands = [];

//ml5js stuff
function preload() {
  handPose = ml5.handPose();
}

function setup() {
  createCanvas(windowWidth,windowHeight);
    // Create the video and hide it (ml5js stuff found from creative code website)
  video = createCapture(VIDEO);
  video.size(windowWidth, windowHeight);
  video.hide();
    // Start detecting hands from the webcam video
  handPose.detectStart(video, gotHands);

  handX = width / 2;
  handY = height / 8;
  planttop = height;


  // drawing the plants
  initializePlants();
}

function draw() {

  image(video, 0, 0, width, height); //draw vid on ccanvas

  //tracking the sun position based on my fingertips
  if (hands.length > 0) {
    let hand = hands[0]; 
    let index = hand.index_finger_tip; 
    if (index) {
      handX = index.x;
      handY = index.y;
    }
  }

  // background
  background("#a6dbf9ff")
  noStroke();

  // the sun
  push();
  fill("#deec72ff");
  drawingContext.shadowBlur = 30;
  drawingContext.shadowColor = color("#deec72ff");
  ellipse(handX, handY, 200, 200);
  pop();


  // plants
  for (let i = 0; i < plants.length; i++) {
    plants[i].sway();
    plants[i].display();
  }

  //soil
  fill("#073219ff")
  rect(0,height-20,width,200)


}

function initializePlants() {
  // Create vines fully grown straight upward at the start
  plants = []; //array
  for (let i = 0; i < 110; i++) { // # of individual plants
    let x = random(width);
    plants.push(new Plant(x, height));
  }
}

class Plant { // the plants
  constructor(x, startY) {
    this.baseX = x;
    this.segments = [];
    this.plantTop = random(500,550);
    
    // straight upward vine
    let numSegments = 150; // plant nodes
    let segmentHeight = (startY - this.plantTop) / numSegments;
    
    // loop to create the plant by adding nodes ontop of each other
    for (let i = 0; i < numSegments; i++) {
      this.segments.push({
        baseX: x,
        baseY: startY - (i * segmentHeight),
        x: x,
        y: startY - (i * segmentHeight),
        size: map(i, 0, numSegments, 12, 3)
      });
    }
  }

  //drawing the multiple segments of the plants
  display() {
    fill("#155a21ff");
    noStroke();
    for (let segment of this.segments) {
      ellipse(segment.x, segment.y, segment.size);
    }
  }

// aiming to make sure swaying is natural 
  sway() {
    for (let i = 0; i < this.segments.length; i++) {
      let segment = this.segments[i];
      
      // using this to calculate the distance of the plant to the sun
      let dx = handX - segment.baseX;  
      let dy = handY - segment.baseY;  
      let distance = dist(segment.baseX, segment.baseY, handX, handY);  // using pythagoras
      let angle = atan2(dy, dx);
      
      let heightFactor = pow(i / this.segments.length, 1); // the higher the segment is the more it will react to the sun
      let distanceFactor = 1 / (1 + distance / 1100); // the further the plant is the less it is going to respond to the sun
      let swayStrength = heightFactor * distanceFactor * 35; // responsiveness of the plant to the sun

      //make the plant grow even more according to the x axis location of the sun
      // added on top of growthamount bcuz growthamount wasn't clear enough
      let horizontalDistance = abs(handX - this.baseX); // ensures values are positive 
      let growBonus = map(horizontalDistance, 0, 200, 1.8, 1.0, true);

      // to make the plants grow when the sun approaches it 
      let growthAmount = distanceFactor * heightFactor * growBonus * 150;

      // to make the plants sway even when not interacted with
      let oscillation = sin(frameCount * 0.02 + segment.baseX * 0.03) * (i / this.segments.length) * 10; //using framecount and segmentbase.x to make the plants sway differently
      
      // the leaning of the plants
      let targetX = segment.baseX + cos(angle) * swayStrength * heightFactor + oscillation;  // need addition of oscillation to keep movement natural
      let targetY = segment.baseY + sin(angle) * swayStrength * heightFactor * 0.3 - growthAmount;  
      segment.x += (targetX - segment.x) * 0.1;
      segment.y += (targetY - segment.y) * 0.1;
    }
  }
}


// enabling the sun to be moved by the mouse to be replaced by finger later
//still putting this here because webcam is laggy and can use mouse to demo
function mousePressed() {
  let dBulb = dist(mouseX, mouseY, handX, handY);
  if (dBulb < bulbRadius) {
    isDraggingBulb = true;
  }
}

function mouseDragged() {
  if (isDraggingBulb) {
    handX = constrain(mouseX, 0, width);
    handY = constrain(mouseY, 0, height);
  }
}

function mouseReleased() {
  isDraggingBulb = false;
}

// Callback function for when handPose outputs data
function gotHands(results) {
  // Save the output to the hands variable
  hands = results;
}