//using https://editor.p5js.org/cap9661/sketches/rUZJWpnCx
//as my starting point


let bulbX, bulbY, blueGlowX, blueGlowY;
let bulbRadius = 30;
let isDraggingBulb = false;
let isDraggingGlow = false;
let vines = [];
let roots = [];
let growthStarted = false;
let startButton;
let trellisTopY;

function setup() {
  createCanvas(600, 800);
  bulbX = width / 2;
  bulbY = height / 8;
  blueGlowX = width / 2;
  blueGlowY = (3 * height) / 4;
  trellisTopY = height / 4; // Define the top of the trellis

  // Create button to start or reset growth
  startButton = createButton('Start Growth');
  startButton.position(20, 20);
  startButton.mousePressed(toggleGrowth);
}

function draw() {
  // Draw upper light blue background
  background(220, 240, 255);
  noStroke();
  fill(220, 240, 255);
  rect(0, 0, width, height / 2);

  // Draw lower black background
  fill(0);
  rect(0, height / 2, width, height / 2);

  // Draw blue glow in the lower half
  fill(0, 0, 255, 50);
  ellipse(blueGlowX, blueGlowY, 200, 200);
    fill(220, 240, 255)
  textAlign(CENTER)
  textSize(12)
  text("water source", blueGlowX, blueGlowY);

  // Draw trellis pattern
  drawTrellis();

  // Draw a white line at the top of the trellis
  stroke(255);
  strokeWeight(4);
 // line(0, height / 2, width, height / 2);
  line(0, height / 4, width, height / 4);

  noStroke()
  // Draw lightbulb glow
  fill(255, 255, 150, 100);
  ellipse(bulbX, bulbY, 100, 100);
 
  

  
  // Draw the string of the lightbulb
  stroke(0);
  strokeWeight(1)
  line(bulbX, 0, bulbX, bulbY - bulbRadius);
  

  // Display vines and roots whether growing or done
  let allVinesFinished = true;
  let allRootsFinished = true;

  for (let i = 0; i < vines.length; i++) {
    if (vines[i].size > 1 && vines[i].y > trellisTopY && growthStarted) {
      vines[i].grow();
      allVinesFinished = false;
    }
    vines[i].display(); // Always display grown segments
  }

  for (let i = 0; i < roots.length; i++) {
    if (roots[i].size > 1 && growthStarted) {
      roots[i].grow();
      allRootsFinished = false;
    }
    roots[i].display(); // Always display grown segments
  }

  // If all vines and roots are finished, change button to "Reset" but keep growth visible
  if (allVinesFinished && allRootsFinished && growthStarted) {
    growthStarted = false;
    startButton.html("Reset");
  }
  
  
  //green line at bottom of trellis
   stroke(34, 139, 34);
  strokeWeight(10);
  line(0, height / 2, width, height / 2);
  //line(0, height / 4, width, height / 4);
}

function toggleGrowth() {
  if (startButton.html() === "Reset") {
    // Reset the canvas, clear vines and roots, and reset button text
    vines = [];
    roots = [];
    startButton.html("Start Growth");
  } else {
    growthStarted = true;
    initializeVinesAndRoots();
    startButton.html("Growing...");
  }
}

function initializeVinesAndRoots() {
  // Reset initial positions and create new vines and roots
  for (let i = 0; i < 30; i++) {
    let x = random(width);
    let y = height / 2;
    vines.push(new Vine(x, y));
    roots.push(new Root(x, y));
  }
}

class Vine {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(8, 12); // Starting size of vine segment
    this.noiseOffsetX = random(100);  // Perlin noise offsets
    this.noiseOffsetY = random(100);
    this.xrandomizer = random(-0.2, 0.2);  // Initial random horizontal movement
    this.yrandomizer = -random(0.2, 0.3);  // Slower upward growth for more overlap
    this.shrinkRate = 0.992;  // Gradual tapering as vine grows
    this.segments = []; // Store each segment as it grows
    this.finished = false; // Track if vine has finished growing
  }

  grow() {
    if (this.size <= 1 || this.y <= trellisTopY) {
      this.finished = true;
      return;
    }

    // Append current position to segments to keep history
    this.segments.push({ x: this.x, y: this.y, size: this.size });

    // Attraction towards the lightbulb for a slight pull
    let lightAttractionX = (bulbX - this.x) / 8000;
    let lightAttractionY = (bulbY - this.y) / 8000;
    this.xrandomizer += lightAttractionX;
    this.yrandomizer += lightAttractionY;

    // Update position using Perlin noise and adjusted direction
    this.x += noise(this.noiseOffsetX) * this.xrandomizer;
    this.y += noise(this.noiseOffsetY) * this.yrandomizer;

    // Increment noise offsets to create smooth movement
    this.noiseOffsetX += 0.01;
    this.noiseOffsetY += 0.01;

    // Taper the vine segment size as it grows
    this.size *= this.shrinkRate;
  }

  display() {
    fill(34, 139, 34, 150); // Green with transparency for vine segments
    noStroke();
    for (let segment of this.segments) {
      ellipse(segment.x, segment.y, segment.size);
    }
  }

  createBranch() {
    if (this.size > 2) {
      let branch = new Vine(this.x, this.y);
      branch.size = this.size * 0.8;
      branch.xrandomizer = this.xrandomizer + random(-0.2, 0.2); // Small angle offset
      branch.yrandomizer = this.yrandomizer * 0.9; // Slightly slower upward growth
      return branch;
    }
    return null;
  }
}

class Root {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(8, 12); // Starting size of root
    this.noiseOffsetX = random(100);  // Perlin noise offsets
    this.noiseOffsetY = random(100);
    this.xrandomizer = random(-0.2, 0.2);  // Initial random direction
    this.yrandomizer = random(0.2, 0.3);  // Slower downward growth for more overlap
    this.shrinkRate = 0.99;
    this.segments = []; // Store each segment as it grows
    this.finished = false; // Track if root has finished growing
  }

  grow() {
    if (this.size <= 1) {
      this.finished = true;
      return;
    }

    // Append current position to segments to keep history
    this.segments.push({ x: this.x, y: this.y, size: this.size });

    // Attraction towards the sun
    let glowAttractionX = (blueGlowX - this.x) / 10000;
    let glowAttractionY = (blueGlowY - this.y) / 10000;
    this.xrandomizer += glowAttractionX;
    this.yrandomizer += glowAttractionY;

    // Update position using Perlin noise and adjusted direction
    this.x += noise(this.noiseOffsetX) * this.xrandomizer;
    this.y += noise(this.noiseOffsetY) * this.yrandomizer;

    // Increment noise offsets
    this.noiseOffsetX += 0.02;
    this.noiseOffsetY += 0.02;

    // Taper the root segment size as it grows
    this.size *= this.shrinkRate;
  }

  display() {
    fill(139, 69, 19, 100); // Brown color with transparency for roots
    noStroke();
    for (let segment of this.segments) {
      ellipse(segment.x, segment.y, segment.size);
    }
  }

  createBranch() {
    if (this.size > 2) {
      let branch = new Root(this.x, this.y);
      branch.size = this.size * 0.8;
      branch.xrandomizer = this.xrandomizer + random(-0.2, 0.2);
      branch.yrandomizer = this.yrandomizer * 1.1; // Slightly faster downward growth
      return branch;
    }
    return null;
  }
}

function drawTrellis() {
  let spacing = 40;  // Adjust spacing to control size of diamonds
  stroke(255, 255, 255); // White with slight transparency
  strokeWeight(4);
  
  let endY = height / 2;
  let startY = endY - height / 4;

  for (let x = -spacing; x < width + spacing; x += spacing) {
    for (let y = startY; y < endY; y += spacing) {
      line(x, y, x + spacing, y + spacing);
      line(x + spacing, y, x, y + spacing);
    }
  }
}

function mousePressed() {
  let dBulb = dist(mouseX, mouseY, bulbX, bulbY);
  if (dBulb < bulbRadius) {
    isDraggingBulb = true;
  }

  let dGlow = dist(mouseX, mouseY, blueGlowX, blueGlowY);
  if (dGlow < 100) {
    isDraggingGlow = true;
  }
}

function mouseDragged() {
  if (isDraggingBulb) {
    bulbX = constrain(mouseX, 0, width);
  }

  if (isDraggingGlow) {
    blueGlowX = constrain(mouseX, 0, width);
    blueGlowY = constrain(mouseY, height / 2, height);
  }
}

function mouseReleased() {
  isDraggingBulb = false;
  isDraggingGlow = false;
}