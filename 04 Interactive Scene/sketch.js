// Interactive Scene
// Ethan Spearey
// 2024-09-16
//
// An interactive picture made using Java Script

function setup()
{
  createCanvas(windowWidth, windowHeight);
}

function draw()
{
  //Background
  background(10, 10, 10); //Background Colour

  fill(255, 255, 0);
  circle(mouseX, windowHeight*4.75/10, 200); //Sun
  
  //Foreground
  fill(200, 200, 200);
  noStroke();
  circle(windowWidth/2, windowHeight, 700); //Main Moon Shape

  fill(227, 227, 227);
  rect(windowWidth/2+40, windowHeight*0.62, 5, 80); //Flag Pole

  strokeWeight(5);
  stroke(10, 10, 10);
  line(windowWidth/2+42, windowHeight*0.62+80, windowWidth-(mouseX-84), windowHeight*0.62+150); //Flag Pole Shadow
  noStroke();

  fill(255, 226, 36);
  rect(windowWidth/2+45, windowHeight*6.2/10, 50, 15); //Flag Colour One
  fill(78, 173, 19);
  rect(windowWidth/2+45, windowHeight*6.35/10, 50, 15); //Flag Colour Two
}