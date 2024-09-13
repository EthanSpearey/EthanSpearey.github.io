// Drawing Challenge
// Ethan Spearey
// 2024-09-13

let rX = 50;
let rY = 50;

function setup()
{
  createCanvas(windowWidth, windowHeight);
}

function draw()
{
  background(220);

  //moving rectangle
  if(keyIsPressed)
  {
    if(key === "a")
    {
      rY += 10; //rY = rY + 10;
      if(rY > height) rY = 0;
    }
  }

  //Alien
  fill(50, 150, 255);
  noStroke();
  rect(rX, rY, 70, 70, 40, 40, 0, 0);
  rect(rX, 120, 15, 20, 0, 0, 0, 10);
  rect(105, 120, 15, 20, 0, 0, 10, 0);

  fill(0, 0, 0);
  noStroke();
  circle(75, 80, 10);
  circle(95, 80, 10);
  rect(70, 95, 30, 5, 40, 40, 40, 40);
}

function keyPressed()
{
  //Do NOT call this function! (It is automatic)
  if(keyCode===40) //Down Arrow
  {
    rY += 100;
    if(rY > height) rY = 0;
  }
}