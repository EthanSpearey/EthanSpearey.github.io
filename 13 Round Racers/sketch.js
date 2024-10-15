// Round Racers
// Ethan Spearey
// 2024-10-15

let racer1;
let racer2;
let racer3;

function setup()
{
  createCanvas(windowWidth, windowHeight);
  racer1 = new roundRacer(height/4, 0);
  racer2 = new roundRacer(height/4, 0);
  racer3 = new roundRacer(height/4, 0);
}

function draw()
{
  background(220);
  racer1.display();
  racer2.display();
  racer3.display();
  racer1.move();
  racer2.move();
  racer3.move();
}

class roundRacer
{
  constructor(yPos, color)
  {
    this.xPosition = 0;
    this.yPosition = yPos;
    this.xSpeed = random(3, 15);
    this.c = color;
  }
}