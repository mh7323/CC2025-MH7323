/*
 * p5.mapper
 * https://github.com/jdeboi/p5.mapper
 *
 * Jenna deBoisblanc
 * jdeboi.com
 *
 */

let pMapper;
let quadLeft, quadRight; // my quad surfaces

let scarl3NoisePosition = 0;
let scarl3speed = 0.01;

let movementX1; 
let movementY1; 
let movementX2; 
let movementY2; 
let movementX3; 
let movementY3; 
let mattspeed = 0.008;
let ghost1 = 100;
let ghost2 = 100;
let ghost3 = 100;

let ynGrad_w = 400, ynGrad_h = 400;
let ynGrad_phase = 0;      
let ynGrad_speed = 0.02;



function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  // create mapper object
  pMapper = createProjectionMapper(this);
  pMapper.load("map.json");

  // create "quads" for each surface of your projection
  quad1 = pMapper.createQuadMap(400, 400);
  quad2 = pMapper.createQuadMap(400, 400);
  quad3 = pMapper.createQuadMap(400, 400);
  quad4 = pMapper.createQuadMap(400, 400);


}

function draw() {
  background(0);

  // display each of the projection surfaces in draw
  quad1.displaySketch(scarlett);
  quad2.displaySketch(matt);
  quad3.displaySketch(yichen);
}



function scarlett(pg){ // "pg" refers to each canvas "instance"
  pg.clear();
  pg.push();


  pg.angleMode(DEGREES);
  pg.rectMode(CENTER);
  pg.colorMode(HSB);

  let noiseVal1 = noise(scarl3NoisePosition);
  let noiseVal2 = noise(scarl3NoisePosition + 100);

  // using noise to create a smooth transitioning red background
  let colorVal = map(noiseVal1, 0, 1, 80, 100);
  pg.background(0, 100, colorVal);

  // --- draw a dense striped pattern for background ---

  // rotate it smoothly using milli()
  let rotation = (millis() / 50000) * 360;

  for (let i = -300; i < 300; i += 6) {
    pg.push();
    pg.translate(200, 200);
    pg.rotate(rotation);
    pg.strokeWeight(1);
    pg.fill(0);
    pg.rect(i, 0, 2, 600);
    pg.pop();
  }

  // increment noise position for smooth animation
  scarl3NoisePosition += scarl3speed;

  // --- drawing the breathing circle ---

  // map noise value to a scale factor for the circle
  let scale = map(noiseVal2, 0, 1, 1, 2.5);

  pg.push();

  pg.translate(200, 200);

  pg.stroke(0);
  pg.noFill();

  // draw concentric circles (rings)
  // the stroke weight gets smaller as size increases
  for (let i = 10; i < 300; i += 8) {
    pg.strokeWeight(6 - i / 60);
    pg.circle(0, 0, i * scale);
  }
  pg.pop();


  // ends here
  pg.pop();
}

function matt(pg){


  pg.clear();
  pg.push();
  pg.background("#271e1eff");
  pg.angleMode(RADIANS);
  pg.colorMode(HSB);
  pg.noStroke();


  movementX1 = random(100); 
	movementY1 = random(100);

  movementX2 = random(100); 
  movementY2 = random(100); 

  movementX3 = random(100); 
	movementY3 = random(100);

  // xpos and ypos is used to generate x and y positions
  //based on the noise
  // the bounds of 400 is used so it does not go out of frame
	let xPos1 = map(noise(movementX1), 0, 1, 0,400);
  let yPos1 = map(noise(movementY1), 0, 1, 0,400);

  let xPos2 = map(noise(movementX2), 0, 1, 0,400);
  let yPos2 = map(noise(movementY2), 0, 1, 0,400);
	
  let xPos3 = map(noise(movementX3), 0, 1, 0,400);
  let yPos3 = map(noise(movementY3), 0, 1, 0,400);
	
	let hue1 = map(xPos1,0,360,0,255);
	let saturation1 = map(yPos1,0,ghost1,0,255);

  let hue2 = map(xPos2,0,360,0,255);
	let saturation2 = map(yPos2,0,ghost2,0,255);

	let hue3 = map(xPos3,0,360,0,255);
	let saturation3 = map(yPos3,0,ghost3,0,255);
	

  //ghost 1
    pg.push(); // isolate the translate
    pg.translate(xPos1,yPos1);

    
    pg.fill(hue1, saturation1, 255,170);
    pg.noStroke();
    pg.arc(0,0,ghost1,ghost1,PI,0,CHORD); //upper part of pacman ghost
  
	
    pg.noStroke();
    pg.beginShape();
    pg.vertex(-ghost1/2,0); // left line
    pg.vertex(-ghost1/2, ghost1/2);
    pg.vertex(-ghost1/4,ghost1/3);
    pg.vertex(0,ghost1/2); // center feet
    pg.vertex(ghost1/4,ghost1/3);
    pg.vertex(ghost1/2, ghost1/2);  
    pg.vertex(ghost1/2,0); // right line
    pg.endShape();
    

    pg.fill("white");
    pg.noStroke();
    pg.ellipse(-ghost1/4+2,0,30,40); // white of the eyes
    pg.ellipse(ghost1/4+2,0,30,40);
    
    pg.fill("#000000");
    pg.ellipse(-ghost1/4+4,2,20,30); // black of the eyes
    pg.ellipse(ghost1/4+4,2,20,30); 

    movementX1+=mattspeed;
	  movementY1+=mattspeed;

    pg.pop();

    //ghost 2
    pg.push(); // isolate the translate
    pg.translate(xPos2,yPos2);
    pg.fill(hue2, saturation2, 255,0.5);
    pg.noStroke();
    pg.arc(0,0,ghost2,ghost2,PI,0,CHORD); //upper part of pacman ghost
  
	
    pg.noStroke();
    pg.beginShape();
    pg.vertex(-ghost2/2,0); // left line
    pg.vertex(-ghost2/2, ghost2/2);
    pg.vertex(-ghost2/4,ghost2/3);
    pg.vertex(0,ghost2/2); // center feet
    pg.vertex(ghost2/4,ghost2/3);
    pg.vertex(ghost2/2, ghost2/2);  
    pg.vertex(ghost2/2,0); // right line
    pg.endShape();
    

    pg.fill("white");
    pg.noStroke();
    pg.ellipse(-ghost2/4+2,0,30,40); // white of the eyes
    pg.ellipse(ghost2/4+2,0,30,40);
    
    pg.fill("#000000");
    pg.ellipse(-ghost2/4+4,2,20,30); // black of the eyes
    pg.ellipse(ghost2/4+4,2,20,30); 

    movementX2+=mattspeed;
	  movementY2+=mattspeed;

    pg.pop();

    //ghost 3
    pg.push(); // isolate the translate
    pg.translate(xPos3,yPos3);
    pg.fill(hue3, saturation3, 255,0.5);
    pg.noStroke();
    pg.arc(0,0,ghost3,ghost3,PI,0,CHORD); //upper part of pacman ghost
  
	
    pg.noStroke();
    pg.beginShape();
    pg.vertex(-ghost3/2,0); // left line
    pg.vertex(-ghost3/2, ghost3/2);
    pg.vertex(-ghost3/4,ghost3/3);
    pg.vertex(0,ghost3/2); // center feet
    pg.vertex(ghost3/4,ghost3/3);
    pg.vertex(ghost3/2, ghost3/2);  
    pg.vertex(ghost3/2,0); // right line
    pg.endShape();

    pg.fill("white");
    pg.noStroke();
    pg.ellipse(-ghost3/4+2,0,30,40); // white of the eyes
    pg.ellipse(ghost3/4+2,0,30,40);
    
    pg.fill("#000000");
    pg.ellipse(-ghost3/4+4,2,20,30); // black of the eyes
    pg.ellipse(ghost3/4+4,2,20,30); 

    movementX3+=mattspeed;
	  movementY3+=mattspeed;
    

    pg.pop();
    pg.pop();

}

function yichen(pg){ 
  pg.clear();
  pg.push();
  
  pg.colorMode(HSB, 360, 100, 100, 100);
  pg.noStroke();

  let hueA = 22;  // deeper orange
  let hueB = 35;  // golden orange

  // Convert phase to a vertical scroll fraction
  let scroll = ynGrad_phase * 0.15; // smaller = slower travel

  for (let y = 0; y < pg.height; y++) {
    let t = (y / pg.height) - scroll; 
    t = (t % 1 + 1) % 1; // keep in [0,1]

    let cyc0 = 0.5 - 0.5 * cos(2 * PI * t);
    let cyc1 = 0.5 - 0.5 * cos(2 * PI * (t + 0.2));

    let h = lerp(hueA, hueB, cyc0);
    let s = 90;
    let b = lerp(60, 100, cyc1);

    pg.fill(h, s, b, 100);
    pg.rect(0, y, pg.width, 1); // fill full width of the quad
  }

  ynGrad_phase += ynGrad_speed;
  pg.pop();
}



function keyPressed() { // keypressed toggles different modes
  switch (key) {
    case "c":
      pMapper.toggleCalibration();
      break;
    case "f":
      let fs = fullscreen();
      fullscreen(!fs);
      break;
    case "l":
      pMapper.load("map.json");
      break;

    case "s":
      pMapper.save("map.json");
      break;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}