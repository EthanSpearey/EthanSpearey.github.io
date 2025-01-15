// Final Coding Project
// Ethan Spearey
// 2025-01-15

let gorillaIdle = [];
let gorillaSwipe = [];
let gorillaState = 0; //0 === Idle | 1 === Swipe
let idleIndex = 0; let swipeIndex = 0;
let spirals = []; //For objects later on...
let spiralObjects = [];

function preload()
{
  //Gorilla Images
  for(let i = 1; i <= 6; i++)
  {
    gorillaIdle.push(loadImage("assets/Gorilla/idle" + i + ".png"));
    gorillaSwipe.push(loadImage("assets/Gorilla/swipe" + i + ".png"));
  }
  
  //Spiral Images
  for(let i = 0; i <= 15; i++)
  {
    if(i < 10)
    {
      spirals.push(loadImage("assets/Circle/Circle Animation0" + i +".png"));
    }
    else
    {
      spirals.push(loadImage("assets/Circle/Circle Animation" + i +".png"));
    }
  }
}

function setup()
{
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function keyPressed()
{
  if(gorillaState === 0)
 {
    gorillaState = 1;
  }
  else 
  {
    gorillaState = 0;
  }
}

function mousePressed()
{
  spiralObjects.push(new Spiral(mouseX, mouseY));
}

function draw()
{
  background(220);
  //Spiral Code
  for(let i = 0; i < spiralObjects.length; i++)
  {
    let s = spiralObjects[i];
    s.display();
    if (s.active === false)
    {
      spiralObjects.splice(i, 1);
      i--; //Save us from skipping one object one time
    }
  }

  //Gorilla Code
  if(gorillaState === 0) //Idle
  {
    image(gorillaIdle[idleIndex], width/2, height/2);
    if(frameCount % 10 === 0)
    {
      idleIndex++;
      if(idleIndex > 5)
      {
        idleIndex = 0;
      }
    }
  }
  else if(gorillaState === 1) //Swipe
  {
    image(gorillaSwipe[swipeIndex], width/2, height/2);
    if(frameCount % 10 === 0)
    {
      swipeIndex++;
      if(swipeIndex > 5)
      {
        swipeIndex = 0;
      }
    }
  }
}

class Spiral //Frames 0-15 (Length 16)
{
  constructor(x, y) //Happens one time for each object created
  {
    this.x = x;
    this.y = y;
    this.currentFrame = 0;
    this.active = true;
  }
  //Class methods
  display()
  {
    if(this.currentFrame > 15)
    {
      this.active = false;
    }
    else
    {
      image(spirals[this.currentFrame], this.x, this.y);
      if(frameCount % 3 === 0)
      {
        this.currentFrame++;
      }
    }
  }
}