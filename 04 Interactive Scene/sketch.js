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
  circle(mouseX, windowHeight/2, 200); //Sun
  
  //Foreground
  fill(200, 200, 200);
  noStroke();
  circle(windowWidth/2, windowHeight, 700); //Main Moon Shape

  fill(227, 227, 227);
  rect(windowWidth/2+40, windowHeight*6.2/10, 5, 80); //Flag Pole

  fill(255, 226, 36);
  rect(windowWidth/2+45, windowHeight*6.2/10, 50, 15); //Flag Colour One
  fill(78, 173, 19);
  rect(windowWidth/2+45, windowHeight*6.35/10, 50, 15); //Flag Colour Two
}