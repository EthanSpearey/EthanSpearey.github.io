// Basics of Drawing
// Ethan Spearey
// 2024-09-11
//
// 2D primitives, colour, animation, mouse/keyboard events


function setup()
{
  createCanvas(500, 400);
}

function draw()
{
  background(220);
  drawCircles();
}

function drawCircles()
{
  fill(101, 0, 255);
  circle(0, 0, 50);
  circle(width/2, height/2, 50);
  circle(width, 0, 50);
  circle(width, height, 50);
  circle(0, height, 50);
  circle(width*(2/3), height/2, 50)
}