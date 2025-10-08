let circled = 25;


//x axis cosine variables 
let circlex = 0;
let thetax = 0;
let radiusx = 120;

//y axis
let circley = 0;
let thetay = 0;
let radiusy = 120;

function setup() {
  createCanvas(windowWidth, windowHeight);
  circlex = width/2;
  circley = height/2;

}

function draw() {
    let r=map(second(),0,60,0,width);

    radiusx =r;
    radiusy = r;
    background(0,30);
    strokeWeight(2);

    circlex = cos(radians(thetax))*radiusx; 
    thetax++; //++ means add to existing avr
    translate(width/2,height/2);
    textSize(30);
    text(day(),0,0); //gives calendar day
    text(hour(),0,30); //gives hour
    text(minute(),0,60); //gives minute
    text(second(),0,90); //gives second

    noFill();
    stroke("red");
    circle(circlex, 0,25);

    stroke("green");
    circley = sin(radians(thetay))*radiusy;
    circle(0,circley,circled);
    thetay++;

    stroke(225);
    circle(circlex,circley,circled);

    for(let i=0; i<12; i++){
        let theta = i*(360/12);
        //let radiusx = mouseX;
        //let radiusy = mouseY;
        let x = cos(radians(theta))*radiusx;
        let y = sin(radians(theta))*radiusy;
        //circle (x,y,circled);
        text(i,x,y);
    }
}
