// CARS! CARS! CARS!
// Ethan Spearey
// 2024-10-18

let eastbound = [];

let xSpeed = 5;

function setup()
{
  createCanvas(windowWidth, windowHeight);
}

function draw()
{
  background(220);

  drawRoad();

  for(let i = 0; i<eastbound.length; i++)
  {
    eastbound[i].action();
  }
}

function mouseClicked()
{
  eastbound.push(new Vehicle(mouseX, mouseY, 1));
}

function drawRoad()
{
  fill(20);
  rect(0, windowHeight/4, windowWidth, windowHeight/2);
  stroke(255);
  line(0, windowHeight/2, windowWidth, windowHeight/2);
}

class Vehicle
{
  constructor(x, y, direction)
  {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.c = color(random(255), random(255), random(255));
    this.type = int(random(2));
  }

  action()
  {
    this.display();
  }
  
  display()
  {
    if(this.type === 0)
    {
      this.drawCar();
    }
    else if(this.type === 1)
    {
      this.drawTruck();
    }
  }
  
  drawCar()
  {
    fill(this.c);
    rect(this.x, this.y, 100, 40);
  }
  
  drawTruck()
  {
    fill(this.c);
    ellipse(this.x, this.y, 100, 40);
  }

  move()
  {
    x = x + xSpeed;
  }

}