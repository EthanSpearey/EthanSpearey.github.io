// Object Demo 2
// Ethan Spearey
// 2024-10-16

let points = [];

function setup()
{
  createCanvas(windowWidth, windowHeight);
}

function draw()
{
  background(255);
  for(let i = 0; i < points.length; i++)
  {
    points[i].move();
    points[i].connectPoints(points);
    points[i].display();
  }
}

function mouseClicked()
{
  points.push(new MiniPoint(mouseX, mouseY));
}

class MiniPoint
{
  constructor(x, y)
  {
    this.x = x;
    this.y = y;
    this.c = color(random(255), random(255), random(255));
    this.s = 20;
    this.noiseX = random(10);
    this.noiseY = random(10);
    this.offset = 0.01;
    this.MAX_SPEED = 5;
  }
  display()
  {
    fill(this.c);
    noStroke();
    ellipse(this.x, this.y, this.s, this.s);
  }

  connectPoints(pointArray)
  {
    stroke(this.c);
    for (let i = 0; i < pointArray.length; i++)
    {
      if(this !== pointArray[i])
      {
        if (dist(this.x, this.y, pointArray[i].getX(), pointArray[i].getY()) <100)
        {
          line(this.x, this.y, pointArray[i].getX(), pointArray[i].getY());
        }
      }
    }
  }

  getX()
  {
    return this.x;
  }

  getY()
  {
    return this.y;
  }

  move()
  {
    let xSpeed = map(noise(this.noiseX), 0, 1, -this.MAX_SPEED, this.MAX_SPEED);
    let ySpeed = map(noise(this.noiseY), 0, 1, -this.MAX_SPEED, this.MAX_SPEED);
    this.x += xSpeed;
    this.y += ySpeed;
    this.noiseX += this.offset;
    this.noiseY += this.offset;

    if(this.x < 0) this.x += width;
    if(this.x > width) this.x -= width;
    if(this.y < 0) this.y += height;
    if(this.y > height) this.y -= height;
  }
}