// Perlin Noise Demo
// Ethan Spearey
// 2024-09-27

// noise() vs random()

let circleTime = 5;
let circleInterval = 0.01; // Amount to push clock forward

function setup()
{
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
}

function draw()
{
  background(220);
  line(width/2, 0, width/2, height);

  //random()
  randomCircle();

  //noise()
  noiseCircle();
  staircase();
}

function staircase()
{
  // Use a for loop to draww a series of rectangles for use as terrain
  let rectWidth = 20;
  for(let x= 0; x <= width; x += rectWidth)
  {
    noFill();
    let rectHeight = random(50, 500)
    rect(x, height, rectHeight, -rectHeight);
  }
}

function noiseCircle()
{
  // Draw a circle on the screen using noise() for rando, values (Diameter, then Color)
  let cSize = noise(circleTime); //0-1
  cSize = map(cSize, 0, 1, 10, 255);
  fill (cSize, cSize/2, 255-cSize);
  circle(width*0.75, height/2, cSize);
  text(round(cSize), width*0.75, height/2);
  circleTime += circleInterval;
}

function randomCircle()
{
  // Draw a circle on the screen, using random values for the diameter (Later, Color)
  let cSize = random (10, 255);
  fill (cSize, cSize/2, 255-cSize);
  circle(width*0.25, height/2, cSize);
  textAlign(CENTER, CENTER);
  textSize(30)
  text(round(cSize), width*0.25, height/2);
}