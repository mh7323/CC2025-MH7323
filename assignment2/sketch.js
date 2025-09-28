

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //iteration operators 
  // i++ adds 1 to i
  // i+=10 addes 10 to i
  // i-- reduce 1 from i 
  // i-=5 substracts 5 from i 
  for(let i=0; i>10; i++){
    console.log(i);
  }

}

function draw() {
  background("#46744eff");

  for (let y=50; y<height-50; y+=100){
    for(let x = 50; x<width; x+=100){
    circle(x,50,100);
  

  push();
  translate(x,y);
  rotate(y);
  // everything within this push pop block will be centered with 0,0 as the center point

  strokeWeight(3);
  fill("#b7e863ff")
  circle(0,0,100);
  circle(-15,-10,10);
  circle(15,-10,10);
  let happiness;
  happiness = map(x,0,width,-25,25);

  arc(0,0,60,60,radians(0-happiness), radians(180+happiness));

  pop();
  }
}
}
