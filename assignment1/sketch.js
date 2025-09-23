let mainrect; 
let xbound;
function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
    mainrect = windowHeight/19 // sets the main rectangle thickness to windowHeight/19
    xbound = windowWidth-100 // sets the bounds of the artwork's x axis 

    background("rgba(214, 242, 243, 1)"); // sets the background color

    //RECT 1: create the top-most rectangle 
    fill("#2d6a4f");
    noStroke();
    rect(50, 50, xbound, mainrect); //enables the rectangle to be scaled by anchoring and making dimensions based on width and height

    //rect 5 bottom left quadrant
    fill("#081c15");
    noStroke();
    rect(50,(windowHeight/2)-50+mainrect, windowWidth*0.30-50,windowHeight/2.6)
    //coordinates made in reference to rect 4 and rect 1 as this rect is touching rect 4 and the bounds are where rect 1 starts
    //mnade in this part of the sequence to make it under rect 2

    //RECT 2: create the bottom-most rectangle 
    fill("#2d6a4f");
    noStroke();
    rect(50,windowHeight-100, xbound, mainrect); //makes rectangle sticky to bottom

    //RECT 3: create off-centre vertical rectangle
    fill("#40916c");
    noStroke();
    rect((windowWidth/2),(mainrect)+50, mainrect, (windowHeight-100)-(mainrect+50)); //uses dimensions of rect 1 and 2 
    // x is half of width, y is mainrect + px, width is mainrect, and length is the x of bottom rect - the length from top to 7 of this rectangle

    // shape 3 top right quadrant
    noFill();
    stroke("#1b4332");
    beginShape();
    vertex(((windowWidth/2)+mainrect+40),200); //top left of trapezoid, within the horizontal boundaries of cross 2
    vertex(((windowWidth/2)+mainrect+90),200); // top right of trapezoid within the horizontal bounds of cross 2
    vertex(((windowWidth/2)+mainrect+140),(windowHeight/2)-50); // bottom right touching rect 4 
    vertex(((windowWidth/2)+mainrect+90),(windowHeight/2)-50); // bottom left touching rect and has the same x axis as the top right
    endShape(CLOSE);
    //the pixel width of the trapezoid is 50, so that is why the + gaps are 50
    // placed this high in the order to put it behind rect 4


    //RECT 4: create horizontol rectangle in center
    fill("#40916c");
    noStroke();
    rect(windowWidth*0.30, (windowHeight/2)-50,(50+xbound-windowWidth*0.3), mainrect);
    // setting the left of the rectangle to the 0.3 of the canvas width and the right to touch the same x axis as top and bottom rectangle

    //SHAPE 1: create trapezoid next to center horizontal rectangle // NOT EXACTLY ACCURATE
    fill("#40916c");
    noStroke();
    beginShape();
    vertex(windowWidth*0.2,(windowHeight/2)-75); // top left
    vertex(windowWidth*0.3,(windowHeight/2)-50); // top right touching rect 4
    vertex(windowWidth*0.3,((windowHeight/2)-50)+mainrect); // bottom right touching rect 4
    vertex(windowWidth/6.5,(windowHeight/2)-50); // bottom left
    endShape(CLOSE);

    //SHAPE 2: create trapezoid touching shape 1 and rect 1 in top left quadrant
    fill("#081c15");
    noStroke();
    beginShape();
    vertex(windowWidth*0.2,(windowHeight/2)-75); // bottom left same as shape 1
    vertex((windowWidth*0.2)+60, (mainrect+50)); // top right
    vertex(((windowWidth*0.2)+60)-mainrect, (mainrect+50)); //top left
    vertex((windowWidth*0.2)-30, ((windowHeight/2)-75)-25); //bottom right
    endShape(CLOSE);
    // shape 2 uses windowWidth*0.2 as anchor to maintain shape, taking measurement from shape 1 because shape 1 and 2 touch

    //circle 1 top left quadrant
    stroke("#95d5b2");
    noFill();
    strokeWeight(2);
    circle(windowWidth/2.6, windowHeight/3, windowWidth*0.2); //positions circle in the top right quadrant

    //cross 1 top left quadrant
    stroke("#40916c");
    noFill();
    strokeWeight(2);
    line(50,mainrect+100,130,mainrect+100); //horizontal line, y axis is responsive
    line(90,mainrect+60,90,mainrect+140); // vertical line, x axis is anchored
    
    //cross 2 top right quandrant
    stroke("#40916c");
    noFill();
    strokeWeight(2);
    line(windowWidth/1.6,mainrect+90,(windowWidth/1.6)+80,mainrect+90); //horizontal line, y axis is responsive
    line((windowWidth/1.6)+40, 50+mainrect, (windowWidth/1.6)+40,mainrect+130); // vertical line, x axis is anchored

    //circle 2 top left quadrant
    stroke("#40916c");
    noFill();
    strokeWeight(2);
    circle(windowWidth/1.25, mainrect+130, windowWidth*0.13); //positions circle in the top left quadrant almost toucing cross 2 and shape 3
    // y is the same as bottom of cross 2

    //shape 4 trapezoid in bottom left quadrant
    fill("#95d5b2");
    noStroke();
    beginShape();
    vertex(windowWidth*0.30,windowHeight/1.5); //top left in relation to x of rect 5
    vertex(windowWidth*0.30+50,windowHeight/1.5); //top right
    vertex((windowWidth/2),windowHeight-100); //bottom right in relation to x of rect 3 and y of rect 2
    vertex((windowWidth/2)-50,windowHeight-100); //bottom left in relation to y of rect 2
    endShape(CLOSE);
    // used rect 2,3, and 5 to place this trapezoid in between them while touching; made so that it remains touching regardless of canvas

    //shape 5 trapezoid in bottom left quadrant within rect 5
    stroke("#ffffffff");
    noFill();
    strokeWeight(2);
    beginShape();
    vertex((windowWidth*0.30)-50, ((windowHeight/2)+mainrect+20)); //top left in relation to rect 5's y - 50
    vertex(windowWidth*0.30-10, ((windowHeight/2)+mainrect+20)); // top right in relation to rect 5's y - 50
    vertex(50+50, windowHeight-170); // bottom right in relation to rect 2's y+50
    vertex(50+10, windowHeight-170); // bottom left in relation to rect 2's y+50
    endShape(CLOSE);
    // trapezoid within rect 5, using rect 5 and rect 2 as markers as the trapezoid is just the x and y coordinates of rect 2 and 5 but reduced to be within bounds

    //cross 3.1 line within rect 5 in bottom left quadrant
    stroke("#d8f3dc");
    noFill();
    strokeWeight(2);
    line(windowWidth/7,(windowHeight/2)+mainrect+40, windowWidth*0.30,((windowHeight/2)+mainrect)+40);  
    //created a line that touches the right side of rect 5, thus using its x value, the line's y values are in relation to rect 5's y value + 70

    // cross 3.2 cross in bottom left qudrant touching cross 3.1
    stroke("#40916c");
    noFill();
    strokeWeight(2);
    line(windowWidth*0.30,((windowHeight/2)+mainrect)+40, windowWidth/2-10,((windowHeight/2)+mainrect)+40); // horizontal line in relation to rect 5's y axis reduced
    line(windowWidth*0.30+60,(windowHeight/2)+mainrect+70, windowWidth*0.30+60,(windowHeight/2)+mainrect+10); // vertical line in line with shape 4's top right x axis
    // created a cross that touches cross 3.1, and has the vertical line in line with the x axis of shape 4

    // rect 6 vertical rectangle in bottom right quadrant
    fill("#74c69d");
    noStroke();
    rect((windowWidth/1.4), (windowHeight/2)+mainrect-20, mainrect/2, windowHeight/2-150);
    //rectangle made half the width of the regular rectangles, and is placed in relation to the x of cross 2 and y of cross 3.2 but more

    // rect 7 horizontal rectangle in bottom right quadrant
    fill("#74c69d");
    noStroke();
    beginShape();
    vertex((windowWidth/1.4), ((windowHeight/2)+mainrect)+40); //top left touching rect 6
    vertex(windowWidth-50,((windowHeight/2)+mainrect)+40); // top right touching right bounds
    vertex(windowWidth-50,((windowHeight/2)+mainrect)+40+(mainrect/2)); // bottom right touching right bounds
    vertex((windowWidth/1.4), ((windowHeight/2)+mainrect)+40+(mainrect/2)); // bottom left touching rect 6
    endShape();
    // i used shape instead of rectangle to ensure the right side of the rectangle always touches the right bound using coordinates

    
    //shape 6 trapezoid in bottom right quadrant
    fill("#74c69d");
    noStroke();
    beginShape();
    vertex(windowWidth/2+mainrect,windowHeight/1.8); //bottom left touching rect 3
    vertex((windowWidth/1.4), ((windowHeight/2)+mainrect)+40+mainrect/2); // bottom right touching rect 7
    vertex((windowWidth/1.4), ((windowHeight/2)+mainrect)+40); // top right touching rect 7
    vertex(windowWidth/2+mainrect,windowHeight/1.8-mainrect/2); // top left touching rect 3
    endShape();
    // trapezoid that is touching rect 7 and rect 3, thus using their x and y axis along with the thickness of mainrect/2

    // cross 4 bottom right quadrant
    stroke("#081c15");
    noFill();
    strokeWeight(2);
    line(windowWidth/1.2,(windowHeight/2)-50+mainrect, windowWidth/1.2, windowHeight-150); //vertical line touching rect 4, in relation to its y axis
    line((windowWidth/1.5),((windowHeight/2)+mainrect)+10, xbound+50, ((windowHeight/2)+mainrect)+10); //horizontal line touching right bounds, in relation to its x axis

    // most issues i had in scaling down, where the shapes gets squashed regardless of the formulas i enter, because i can only edit from either width or height perspective, not both
    // scaling up seems to be smooth 


    console.log(mouseX/width + " " + mouseY/height); // to find the px or % of stuff

}
