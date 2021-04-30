function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
  
}

function draw() {
  background(0);
  translate(200,200)
  rotate(-90)
  
   hr = hour();
   mn = minute();
   sc = second();

   strokeWeight(7);
   noFill();
   stroke(255,100,150);
   secondAngle = map(sc,0,60, 0,360);
   arc(0,0,300,300,0,secondAngle);

 
  stroke(150,100,255);
   minuteAngle = map(mn,0,60, 0,360);
   arc(0,0,280,280,0,minuteAngle);

  stroke(150,250,100);
   hourAngle = map(hr % 12,0,12,0,360);
   arc(0,0,260,260,0, hourAngle);

   push();
   rotate(secondAngle);
    stroke(2255,100,150);
    line(0,0,100,0);
    pop(); 

    push();
   rotate(minuteAngle);
    stroke(150,100,255);
    line(0,0,75,0);
    pop(); 

    push();
   rotate(hourAngle);
    stroke(150,250,100);
    line(0,0,50,0);
    pop(); 
    
  
  

  // fill(255);
   //noStroke();
 // text(hr + ':' + mn + ':' + sc,10,200);

  drawSprites();
}