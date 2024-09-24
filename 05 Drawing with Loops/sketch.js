// Drawing with Loops
// Ethan Spearey
// 2024-09-18
//
// More functions to create a fun interactive screen using Java Script

function setup()
{
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
}

function draw()
{
  myBackground();
  myForeground();
  //This is where the screen draws the frame
}

function myBackground() //Use some loops to create gradient background
{
  let rectHeight = 1
  for(let y = height; y >= 0; y -= rectHeight )
  {
    let value = map(y, 0, height, 0, 255);
    noStroke();
    fill(value, 255-value, 255-value);
    rect(0, y, width, rectHeight);
  }
}

function myForeground() //Draw some shapes using FOR / WHILE loops
{
    //var.     //cond.  //modification of var.
  for(let x = 0; x < mouseX; x += 50)
  {
    fill(0);
    circle(x, height/2, 40);
    fill(255);
    text(x, x, height/2);
  }

  //Create stars x100
  let starCount = 0;
  randomSeed(4);
  while(starCount < 100)
  {
    fill(255, 0, 0);
    let x = random(0, width);
    let y = random(0, height);
    circle(x, y, 10); 
    starCount++;
  }
}