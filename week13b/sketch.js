// i am using the reference from week 12 and simplifying it and also making the
// physics more similar to what i want to be
// main changes are: making plant sway instead of grow
// and having upwards growth and not downwards

let handX, handY;
let isDraggingBulb = false;
let bulbRadius = 100;
let plant = [];
let planttop;

function setup() {
  //randomSeed(50); // found function online to have my plants be the same everytime instead of random
  createCanvas(windowWidth,windowHeight);
  handX = width / 2;
  handY = height / 8;
  planttop = height;


  // drawing the plants
  initializePlants();
}

function draw() {
  // background
  background("#86f2c2ff")
  noStroke();

  // the sun
  fill("#deec72ff");
  ellipse(handX, handY, 200, 200);


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
  for (let i = 0; i < 70; i++) {
    let x = random(width);
    plants.push(new Plant(x, height));
  }
}

class Plant {
  constructor(x, startY) {
    this.baseX = x;
    this.segments = [];
    this.plantTop = random(200,300);
    
    // Create straight upward vine
    let numSegments = 200;
    let segmentHeight = (startY - this.plantTop) / numSegments;
    
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
      let distanceFactor = 1 / (1 + distance / 500); // the further the plant is the less it is going to respond to the sun
      let swayStrength = heightFactor * distanceFactor * 50;
      
      // the leaning of the plants
      let targetX = segment.baseX + cos(angle) * swayStrength * heightFactor;  // need addition of oscillation to keep movement natural
      let targetY = segment.baseY + sin(angle) * swayStrength * heightFactor * 0.3;  
      segment.x += (targetX - segment.x) * 0.1;
      segment.y += (targetY - segment.y) * 0.1;
    }
  }
}


// enabling the sun to be moved by the mouse to be replaced by palm later
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