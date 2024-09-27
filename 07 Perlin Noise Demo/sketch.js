// Perlin Noise Demo
// Ethan Spearey
// 2024-09-27

// noise() vs random()

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

}

function randomCircle()
{
  // Draw a circle on the screen, using random values for the diameter (Later, Color)
  let cSize = random (40, 200);
  circle(width*0.25, height/2, cSize);
  textAlign(CENTER, CENTER);
  textSize(30)
  text(round(cSize), width*0.25, height/2);
}