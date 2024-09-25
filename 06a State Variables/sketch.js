// State Variables
// Ethan Spearey
// 2024-09-25

// Global Variables
let currentColor = 0; // 0, 1, 2
let myColor;
let circleSize = 50;
let growing = false; // 2-State variable

function setup()
{
  createCanvas(windowWidth, windowHeight);
  myColor = color(200, 120, 210);
}

function draw()
{
  background(myColor);
  //Circle code - fill color
  switch(currentColor)
  {
    case 0:
      fill(255, 0, 0);    break;
    case 1:
      fill(myColor);    break;
    case 2:
      fill(0, 50, 210);   break;
  }
  // Circle code - drawing the circle
  circle(width/2, height/2, circleSize);

  if(frameCount % 10 === 0) //True once every 10 frames
  {
    // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    currentColor += 1;
    if(currentColor > 2) currentColor = 0;
  }

  // Circle code - modify circle size
  if(growing) circleSize += 2;
  else circleSize -= 2;

  // Circle code - drawing the circle
  circle(width/2, height/2, circleSize);
}

function keyPressed()
{
  // Gets call automatically, ONCE per keypress
  if(key === "a")
  {
    growing = !growing; // Set to not grow
  }
}