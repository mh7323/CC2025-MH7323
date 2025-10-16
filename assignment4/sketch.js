let myCupcake = []; //array

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255); 
  for(let i=0;i<myCupcake.length; i++){
    myCupcake[i].display(); //goes through the cupcake array and pulls one out each time
  }
}

function mousePressed(){
  let tempCupcake = new Cupcake(mouseX, mouseY,random(20,60),random(10,80),random(30,70),0,random(100,200),random(10,50)); //places the position of the cupcake at mouse location, and using random variables to alter the size and components of the cupcake
  // the limitations within the random functions are used so that the cupcake shape is still somewhat recognizable
  myCupcake.push(tempCupcake);
}

// the cupcake class is made to provide variable elements
class Cupcake{
  constructor(x,y,basex, basey,topx, topy, frostingsize,cherrysize){
    this.x=x; //position
    this.y=y; //position
    this.basex = basex; // base x and y is made to alter the base of the cupcake's size
    this.basey = basey;
    this.topx = topx; // top x and y is made to alter the top of the cupcake wrapper, there are 4 total (basex,basey,topx,topy) as the cupcake wrapper should form into a trapezoid of some sort
    this.topy = topy;
    this.frostingsize = frostingsize; // this is going to the plugged into the arc function to alter the size of the frosting
    this.cherrysize = cherrysize; // this is going to be plugged into the function circle to alter the size of the cherries
    this.frostingflavor = int(random(5)); // i wanted to include some sort of conditional, so i used this to set a conditional for the color of the frosting, predetermining it to 5 different 'flavors'
  }
  display(){ // this forms the rules to display the actual cupcake
    push();
    translate(this.x,this.y); //i dont need to use mouse x and mouse y again because that has been established above
    noStroke();
    fill("#f2dc8cff");

    // the 4 variables made above is used here to create a trapezoidal shape
    beginShape();
    vertex(-this.topx,this.topy);
    vertex(this.topx,this.topy);
    vertex(this.basex,this.basey);
    vertex(-this.basex,this.basey);
    endShape();
    
    // i used conditionals to make the color of the frosting different as frostingflavor pulls out a number 0-5, so I set different colors corresponding to the different numbers
    if(this.frostingflavor==0){
      fill("#ee88f5ff");
    } else if(this.frostingflavor == 1){
      fill("#5c66f3ff");
    } else if(this.frostingflavor == 2){
      fill("#3c2408ff");
    } else if(this.frostingflavor == 3){
      fill("#adec71ff");
    } else if(this.frostingflavor == 4){
      fill("#f59898ff");
    } else {
      fill("#aa8bf1ff");
    }
    arc(0,this.topy,this.frostingsize,this.frostingsize,PI,0,CHORD);
    
    // this alters the size of the cherry, and i used frostingsize/2 as means so that the cherry would always stay on the frosting regardless of the frostingsize
    fill("#e23314ff");
    circle(0,-this.frostingsize/2,this.cherrysize)
    pop();
  }
}


