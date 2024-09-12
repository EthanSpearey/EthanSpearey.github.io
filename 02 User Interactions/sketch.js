// User Events
// Ethan Spearey
// 2024-09-12

let tSize = 40;

function setup()
{
  createCanvas(windowWidth, windowHeight);
  textSize(tSize);
}

function draw()
{
  background(220);
  print(mouseX, mouseY);
  textSize(tSize);
  text((mouseX + ", " + mouseY), mouseX, mouseY);
  fill(255, 0, 0);
  circle(width*0.5, height*0.5, 100);
  let x = 0;
  fill(0, 255, 0);
  x = x + 10;
  rect(x, height/2, 60);
}

function mousePressed()
{
  tSize = random(20, 80);
}