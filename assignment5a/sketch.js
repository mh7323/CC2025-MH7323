let x = 0;
let y = 0;
let targetX = 0;
let targetY = 0;

function setup() {
    createCanvas(400, 400);
    //position of object within the bounds of the frame
    targetX = random(0, 400);
    targetY = random(0, 400);
}

function draw() {
    background("#6c1c1cff");
    noFill();
    stroke(255);
    strokeWeight(2);
    rectMode(CENTER);
    circle(x, y, 50, 50);
    
    
    // use lerp to generate the movmement starting from 0 to the location 
    x = lerp(x, targetX, 0.05);
    y = lerp(y, targetY, 0.05);
    
    let d = dist(x, y, targetX, targetY); // checking the location of the square
    if (d < 1) { //if the location is new, this would make it move to another location automatically without having to move using mouse
        targetX = random(50, width - 50);
        targetY = random(50, height - 50);
    }
}