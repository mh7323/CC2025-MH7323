let drunks = []
let drunkAmount = 50;
// square brackets is array


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100,170,150);
  colorMode(HSB);

  for(let i = 0; i<drunkAmount;i++){
    let drunkD = random(10,100);
    let drunkSpeed = random(1,7);
    let drunkHue = random(0,60);
    drunks(i)=new Drunk(width/2,height/2,drunkD,drunkSpeed,drunkHue);
  }
}

function draw() {
  for(let i=0;i<drunks.length;i++){
    drunks[i].move();
    drunks[i].drawDrunks();
  }

}

class Drunk { //class declares a new type of object
  constructor(x,y,diameter,speed,hue){
    this.x = x;
    this.y =y;
    this.hue =hue;
    this.speed = speed;
    this.diamater = diameter;
    this.opacity=random(0,1);
  }
  move(){ // you can declare functions or methods like this 
    this.x=this.x+random(-this.speed,this.speed);
    this.y=this.y+random(-this.speed,this.speed);

  }
  drawDrunk(){
    fill(this.hue,70,100,opacity);
    circle(this.x,this.y,this.diamater);
  }

}
