let bugs = ["herman","fran","stevie"]; //

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  let tempBug = new Bug(random(width), random(height)); //make a new bug, store it in a temp veriable
  bugs.push*(tempBug); //add that new bug to bugs array
  console.log(bugs);
}

function draw() {
  //move the bug 
  background("#ffffffff")
 
  for(let i=0; i<bugs.length;i++){
    //starts repeating at 0
    //repeat the following code
    //incrementing i by one with each loop
    //and ending at the length of the bugs array
    bugs[i].move();
    bugs[i].display();
  }

  if(prevS != second()){
    presS = second(); //resets the second timer
    let tempBug = new Bug(random(width), random(height)); //make a new bug, store it in a temp veriable
    bugs.push*(tempBug); //add that new bug to bugs array
  }

  if(second() == 0){
    bugs = []; //clear the array
    
  }

}

function mousePressed(){
  let tempBug = new Bug(mouseX, mouseY); //make new bug in mouse position
  bugs.push(tempBug);

}

class Bug {
  constructor(x,y){
      //copying over parameters that have been passed through the "new bug()"
      // so that they are attached to our new "bug" instance
      this.x=x; 
      this.y=y;
  }

  move(){
    this.x=this.x+(random(-4,4));
    this.y=this.y+(random(-4,4));
  }

  display(){
    push();
    translate(x,y);
    line(0,3,15,3);
    line(0,-3,10,-3);
    line(0,0,10,0);
    line(0,-3,-10,-3);
    line(0,0,-10,0);
    circle(0,3,-10,3);
    pop();
  }

}