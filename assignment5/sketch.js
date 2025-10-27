let movementX1;
let movementY1;
let movementX2;
let movementY2;
let movementX3;
let movementY3;
let speed = 0.008;
let noiseR = 0;
let noiseT = 0;
let ghost1 = 100;
let ghost2 = 100;
let ghost3 = 100;


// i wanted to make opaque ghost moving around using perlin noise
// happy halloween!
// i know i couldve used an array but as i was figuring the perlin noise out,
// the code was getting compelx and since it is only 3 shapes i decided to just multiply the variables by 3
function setup() {
  createCanvas(400, 400);
  colorMode(HSB);

  //movement variables taken from lecture
  // this is to generate noise for perlin noise
  movementX1 = random(100); 
	movementY1 = random(100);

  movementX2 = random(100); 
  movementY2 = random(100); 

  movementX3 = random(100); 
	movementY3 = random(100);
}

function draw() {
  background("#000000");
	
  // xpos and ypos is used to generate x and y positions
  //based on the noise
  // the bounds of 400 is used so it does not go out of frame
	let xPos1 = map(noise(movementX1), 0, 1, 0,400);
  let yPos1 = map(noise(movementY1), 0, 1, 0,400);

  let xPos2 = map(noise(movementX2), 0, 1, 0,400);
  let yPos2 = map(noise(movementY2), 0, 1, 0,400);
	
  let xPos3 = map(noise(movementX3), 0, 1, 0,400);
  let yPos3 = map(noise(movementY3), 0, 1, 0,400);
	
	// i wanted to have the colors be see through and
  // random based on the position, so i used map
  // and the code found in lecture to generate 
  // the hue and saturate based on location
	let hue1 = map(xPos1,0,360,0,255);
	let saturation1 = map(yPos1,0,ghost1,0,255);

  let hue2 = map(xPos2,0,360,0,255);
	let saturation2 = map(yPos2,0,ghost2,0,255);

	let hue3 = map(xPos3,0,360,0,255);
	let saturation3 = map(yPos3,0,ghost3,0,255);
	
	

  //ghost shape imported from my assignment 2
  //ghost 1
    push(); // isolate the translate
    translate(xPos1,yPos1);

    // i filled the ghost with 0.5 opacity so theres a cool
    // see through effect
    // i also inputed the hue and saturation so that it changes
    // color based on location
    // at first i wanted to use random() but i think this way the color change is smoother and more natural
    fill(hue1, saturation1, 255,0.5);
    noStroke();
    arc(0,0,ghost1,ghost1,PI,0,CHORD); //upper part of pacman ghost
  
	
    noStroke();
    beginShape();
    vertex(-ghost1/2,0); // left line
    vertex(-ghost1/2, ghost1/2);
    vertex(-ghost1/4,ghost1/3);
    vertex(0,ghost1/2); // center feet
    vertex(ghost1/4,ghost1/3);
    vertex(ghost1/2, ghost1/2);  
    vertex(ghost1/2,0); // right line
    endShape();
    //had to use division instead of addition to make it more scalable incase of change to ghost size
    //removed stroke to make the ghost shape cleaner

    fill("white");
    noStroke();
    ellipse(-ghost1/4+2,0,30,40); // white of the eyes
    ellipse(ghost1/4+2,0,30,40);
    
    fill("#000000");
    ellipse(-ghost1/4+4,2,20,30); // black of the eyes
    ellipse(ghost1/4+4,2,20,30); 

    // generates the movement of the ghosts
    movementX1+=speed;
	  movementY1+=speed;

    pop();

    //ghost 2
    push(); // isolate the translate
    translate(xPos2,yPos2);
    fill(hue2, saturation2, 255,0.5);
    noStroke();
    arc(0,0,ghost2,ghost2,PI,0,CHORD); //upper part of pacman ghost
  
	
    noStroke();
    beginShape();
    vertex(-ghost2/2,0); // left line
    vertex(-ghost2/2, ghost2/2);
    vertex(-ghost2/4,ghost2/3);
    vertex(0,ghost2/2); // center feet
    vertex(ghost2/4,ghost2/3);
    vertex(ghost2/2, ghost2/2);  
    vertex(ghost2/2,0); // right line
    endShape();
    //had to use division instead of addition to make it more scalable incase of change to ghost size
    //removed stroke to make the ghost shape cleaner

    fill("white");
    noStroke();
    ellipse(-ghost2/4+2,0,30,40); // white of the eyes
    ellipse(ghost2/4+2,0,30,40);
    
    fill("#000000");
    ellipse(-ghost2/4+4,2,20,30); // black of the eyes
    ellipse(ghost2/4+4,2,20,30); 

    movementX2+=speed;
	  movementY2+=speed;

    pop();

    //ghost 3
    push(); // isolate the translate
    translate(xPos3,yPos3);
    fill(hue3, saturation3, 255,0.5);
    noStroke();
    arc(0,0,ghost3,ghost3,PI,0,CHORD); //upper part of pacman ghost
  
	
    noStroke();
    beginShape();
    vertex(-ghost3/2,0); // left line
    vertex(-ghost3/2, ghost3/2);
    vertex(-ghost3/4,ghost3/3);
    vertex(0,ghost3/2); // center feet
    vertex(ghost3/4,ghost3/3);
    vertex(ghost3/2, ghost3/2);  
    vertex(ghost3/2,0); // right line
    endShape();
    //had to use division instead of addition to make it more scalable incase of change to ghost size
    //removed stroke to make the ghost shape cleaner

    fill("white");
    noStroke();
    ellipse(-ghost3/4+2,0,30,40); // white of the eyes
    ellipse(ghost3/4+2,0,30,40);
    
    fill("#000000");
    ellipse(-ghost3/4+4,2,20,30); // black of the eyes
    ellipse(ghost3/4+4,2,20,30); 

    movementX3+=speed;
	  movementY3+=speed;

    pop();

}
